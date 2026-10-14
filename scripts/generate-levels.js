/**
 * Backward Scrambler & BFS Solver for ZenSlide
 * Generates 100% guaranteed solvable levels with exact optimal move counts.
 */

const fs = require('fs');
const path = require('path');
const { ZenSlideGame, GRID_SIZE, EXIT_ROW } = require('../src/slide.js');

const COLORS = [
  '#00C7BE', // Cyan
  '#34C759', // Emerald
  '#FF9500', // Amber
  '#AF52DE', // Purple
  '#007AFF', // Blue
  '#FF2D55', // Hot Pink
  '#5856D6', // Indigo
  '#FFCC00', // Gold
  '#30B0C7', // Aqua
  '#32ADE6'  // Sky
];

// Helper to check if a block placement overlaps on the grid
function canPlace(grid, r, c, len, dir) {
  for (let i = 0; i < len; i++) {
    const cr = dir === 'V' ? r + i : r;
    const cc = dir === 'H' ? c + i : c;
    if (cr < 0 || cr >= GRID_SIZE || cc < 0 || cc >= GRID_SIZE) return false;
    if (grid[cr][cc] !== null) return false;
  }
  return true;
}

function placeOnGrid(grid, id, r, c, len, dir) {
  for (let i = 0; i < len; i++) {
    const cr = dir === 'V' ? r + i : r;
    const cc = dir === 'H' ? c + i : c;
    grid[cr][cc] = id;
  }
}

// Generate a valid random starting board with key at (2, 4)
function generateSolvedBoard(numObstacles, seed) {
  let rng = seed;
  function random() {
    rng = (rng * 9301 + 49297) % 233280;
    return rng / 233280;
  }

  const grid = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(null));
  const blocks = [];

  // Key block at exit: row 2, col 4, len 2, horizontal
  blocks.push({ id: 'key', r: EXIT_ROW, c: 4, len: 2, dir: 'H', isKey: true });
  placeOnGrid(grid, 'key', EXIT_ROW, 4, 2, 'H');

  let attempts = 0;
  let placed = 0;

  while (placed < numObstacles && attempts < 100) {
    attempts++;
    const dir = random() > 0.5 ? 'H' : 'V';
    const len = random() > 0.75 ? 3 : 2;
    const maxR = dir === 'V' ? GRID_SIZE - len : GRID_SIZE - 1;
    const maxC = dir === 'H' ? GRID_SIZE - len : GRID_SIZE - 1;
    const r = Math.floor(random() * (maxR + 1));
    const c = Math.floor(random() * (maxC + 1));

    if (canPlace(grid, r, c, len, dir)) {
      const id = `b${placed + 1}`;
      placeOnGrid(grid, id, r, c, len, dir);
      blocks.push({ id, r, c, len, dir, isKey: false });
      placed++;
    }
  }

  return blocks;
}

// Scramble board backward with N valid random moves
function scrambleBoard(initialBlocks, scrambleSteps, seed) {
  let rng = seed;
  function random() {
    rng = (rng * 9301 + 49297) % 233280;
    return rng / 233280;
  }

  const dummyLevel = { id: 'temp', blocks: initialBlocks, minMoves: 1 };
  const game = new ZenSlideGame(dummyLevel);

  let prevBlock = null;
  for (let step = 0; step < scrambleSteps; step++) {
    // Find all possible moves in current state
    const allMoves = [];
    for (const b of game.blocks) {
      const [minD, maxD] = game.getMoveRange(b.id);
      for (let d = minD; d <= maxD; d++) {
        if (d !== 0) {
          allMoves.push({ id: b.id, delta: d });
        }
      }
    }

    if (allMoves.length === 0) break;

    // Pick a move (prefer not reversing the immediate previous block)
    let candidates = allMoves.filter((m) => m.id !== prevBlock);
    if (candidates.length === 0) candidates = allMoves;

    const move = candidates[Math.floor(random() * candidates.length)];
    game.moveBlock(move.id, move.delta);
    prevBlock = move.id;
  }

  // Key block must not be already at exit
  const key = game.getKeyBlock();
  if (key.c >= 4) {
    // Slide key left if possible
    const [minD] = game.getMoveRange('key');
    if (minD < 0) {
      game.moveBlock('key', minD);
    }
  }

  return JSON.parse(JSON.stringify(game.blocks));
}

// Generate and verify a level with BFS
function createVerifiedLevel(id, packId, name, targetMinMoves, seed) {
  let bestLevel = null;
  let bestDiff = 999;

  for (let trial = 0; trial < 40; trial++) {
    const numObstacles = packId === 'starter' ? 6 : packId === 'classic' ? 8 : packId === 'challenger' ? 9 : 10;
    const startBlocks = generateSolvedBoard(numObstacles, seed + trial * 31);
    const scrambled = scrambleBoard(startBlocks, targetMinMoves * 3 + 15, seed + trial * 73);

    const testGame = new ZenSlideGame({ id, blocks: scrambled, minMoves: 1 });
    const solution = testGame.solveBFS(18000);

    if (solution && solution.length >= 4) {
      const moves = solution.length;
      const diff = Math.abs(moves - targetMinMoves);

      if (diff < bestDiff) {
        bestDiff = diff;
        bestLevel = {
          id,
          packId,
          name,
          minMoves: moves,
          blocks: scrambled,
          optimalSolution: solution
        };
        if (diff <= 2) break; // Close enough!
      }
    }
  }

  if (!bestLevel) {
    // Fallback: guaranteed solvable hand-tuned template
    bestLevel = {
      id,
      packId,
      name,
      minMoves: 6,
      blocks: [
        { id: 'key', r: 2, c: 1, len: 2, dir: 'H', isKey: true },
        { id: 'b1', r: 0, c: 3, len: 3, dir: 'V', isKey: false },
        { id: 'b2', r: 3, c: 3, len: 2, dir: 'H', isKey: false },
        { id: 'b3', r: 4, c: 1, len: 2, dir: 'V', isKey: false }
      ]
    };
    const fg = new ZenSlideGame(bestLevel);
    bestLevel.optimalSolution = fg.solveBFS();
    bestLevel.minMoves = bestLevel.optimalSolution.length;
  }

  // Assign distinct aesthetic colors to blocks
  let cIdx = 0;
  bestLevel.blocks.forEach((b) => {
    if (b.isKey) {
      b.color = '#FF3B30';
    } else {
      b.color = COLORS[cIdx % COLORS.length];
      cIdx++;
    }
  });

  return bestLevel;
}

const PACKS = [
  { id: 'starter', name: 'Starter', targetMoves: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15], color: '#34C759' },
  { id: 'classic', name: 'Classic', targetMoves: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23], color: '#007AFF' },
  { id: 'challenger', name: 'Challenger', targetMoves: [20, 21, 22, 23, 24, 25, 26, 27, 28, 30], color: '#FF9500' },
  { id: 'master', name: 'Master', targetMoves: [26, 28, 30, 32, 34, 36, 38, 40, 42, 45], color: '#AF52DE' }
];

console.log('Generating 40 verified solvable ZenSlide levels...');

const compiledPacks = [];
const compiledLevels = {};

let seedCounter = 1000;

for (const pack of PACKS) {
  compiledLevels[pack.id] = [];

  for (let idx = 0; idx < pack.targetMoves.length; idx++) {
    seedCounter += 137;
    const levelId = `${pack.id}-${idx + 1}`;
    const levelName = `${pack.name} — Level ${idx + 1}`;
    const target = pack.targetMoves[idx];

    const level = createVerifiedLevel(levelId, pack.id, levelName, target, seedCounter);
    compiledLevels[pack.id].push(level);

    console.log(`✓ ${level.name}: Solved in ${level.minMoves} moves (BFS verified)`);
  }

  compiledPacks.push({
    id: pack.id,
    name: pack.name,
    color: pack.color,
    levelCount: compiledLevels[pack.id].length
  });
}

const fileContent = `/**
 * ZenSlide Level Packs
 * Auto-generated & BFS verified for optimal shortest-path solutions.
 */

const ZENSLIDE_PACKS = ${JSON.stringify(compiledPacks, null, 2)};

const ZENSLIDE_LEVELS = ${JSON.stringify(compiledLevels, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ZENSLIDE_PACKS,
    ZENSLIDE_LEVELS
  };
}
if (typeof window !== 'undefined') {
  window.ZenSlideLevels = {
    ZENSLIDE_PACKS,
    ZENSLIDE_LEVELS
  };
}
`;

const destPath = path.join(__dirname, '..', 'src', 'levels.js');
fs.writeFileSync(destPath, fileContent, 'utf8');
console.log(`Successfully generated src/levels.js with ${compiledPacks.length} packs and 40 verified levels!`);
