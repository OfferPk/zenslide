/**
 * ZenSlide - Core Game Engine & BFS Solver
 * Pure logic for 6x6 Sliding Block (Unblock) Puzzle.
 * Zero DOM dependencies for 100% automated testability.
 */

const GRID_SIZE = 6;
const EXIT_ROW = 2;

class ZenSlideGame {
  constructor(levelData) {
    if (!levelData || !levelData.blocks) {
      throw new Error('Invalid level data passed to ZenSlideGame');
    }

    this.levelId = levelData.id || 'level-1';
    this.packId = levelData.packId || 'starter';
    this.name = levelData.name || 'Level 1';
    this.minMoves = levelData.minMoves || 10;
    this.size = GRID_SIZE;

    // Deep clone blocks
    this.blocks = levelData.blocks.map((b) => ({
      id: String(b.id),
      r: Number(b.r),
      c: Number(b.c),
      len: Number(b.len),
      dir: b.dir.toUpperCase(), // 'H' or 'V'
      isKey: Boolean(b.isKey),
      color: b.color || (b.isKey ? '#FF3B30' : '#00C7BE')
    }));

    this.initialBlocks = JSON.parse(JSON.stringify(this.blocks));
    this.moves = 0;
    this.undoStack = [];
    this.maxUndo = 60;
  }

  /**
   * Return 6x6 grid matrix of block IDs (or null for empty cells)
   */
  getGrid() {
    const grid = Array(GRID_SIZE)
      .fill(null)
      .map(() => Array(GRID_SIZE).fill(null));

    for (const b of this.blocks) {
      for (let i = 0; i < b.len; i++) {
        const r = b.dir === 'V' ? b.r + i : b.r;
        const c = b.dir === 'H' ? b.c + i : b.c;
        if (r >= 0 && r < GRID_SIZE && c >= 0 && c < GRID_SIZE) {
          grid[r][c] = b.id;
        }
      }
    }
    return grid;
  }

  /**
   * Find block by ID
   */
  getBlock(blockId) {
    return this.blocks.find((b) => b.id === String(blockId)) || null;
  }

  /**
   * Get the primary key block
   */
  getKeyBlock() {
    return this.blocks.find((b) => b.isKey) || null;
  }

  /**
   * Check if level is solved (key block reached exit at row 2, col 4 for len 2)
   */
  isSolved() {
    const key = this.getKeyBlock();
    if (!key) return false;
    return key.r === EXIT_ROW && key.c === GRID_SIZE - key.len;
  }

  /**
   * Get maximum allowed slide range [minDelta, maxDelta] for a block
   */
  getMoveRange(blockId) {
    const b = this.getBlock(blockId);
    if (!b) return [0, 0];

    const grid = this.getGrid();
    let minDelta = 0;
    let maxDelta = 0;

    if (b.dir === 'H') {
      // Check left movement
      for (let dc = -1; b.c + dc >= 0; dc--) {
        if (grid[b.r][b.c + dc] === null) {
          minDelta = dc;
        } else {
          break;
        }
      }
      // Check right movement
      for (let dc = 1; b.c + b.len - 1 + dc < GRID_SIZE; dc++) {
        if (grid[b.r][b.c + b.len - 1 + dc] === null) {
          maxDelta = dc;
        } else {
          break;
        }
      }
    } else {
      // Check up movement
      for (let dr = -1; b.r + dr >= 0; dr--) {
        if (grid[b.r + dr][b.c] === null) {
          minDelta = dr;
        } else {
          break;
        }
      }
      // Check down movement
      for (let dr = 1; b.r + b.len - 1 + dr < GRID_SIZE; dr++) {
        if (grid[b.r + b.len - 1 + dr][b.c] === null) {
          maxDelta = dr;
        } else {
          break;
        }
      }
    }

    return [minDelta, maxDelta];
  }

  /**
   * Check if moving block by delta is valid
   */
  canMove(blockId, delta) {
    if (delta === 0) return false;
    const [minDelta, maxDelta] = this.getMoveRange(blockId);
    return delta >= minDelta && delta <= maxDelta;
  }

  /**
   * Execute slide move for a block
   */
  moveBlock(blockId, delta) {
    if (!this.canMove(blockId, delta)) return false;

    const b = this.getBlock(blockId);
    if (!b) return false;

    // Snapshot for undo
    this.undoStack.push({
      blockId: b.id,
      prevR: b.r,
      prevC: b.c,
      delta: delta,
      moves: this.moves
    });
    if (this.undoStack.length > this.maxUndo) {
      this.undoStack.shift();
    }

    if (b.dir === 'H') {
      b.c += delta;
    } else {
      b.r += delta;
    }

    this.moves++;
    return true;
  }

  /**
   * Undo last move
   */
  undo() {
    if (this.undoStack.length === 0) return false;
    const last = this.undoStack.pop();
    const b = this.getBlock(last.blockId);
    if (b) {
      b.r = last.prevR;
      b.c = last.prevC;
    }
    this.moves = last.moves;
    return true;
  }

  /**
   * Reset puzzle to initial state
   */
  reset() {
    this.blocks = JSON.parse(JSON.stringify(this.initialBlocks));
    this.moves = 0;
    this.undoStack = [];
  }

  /**
   * Calculate stars (1, 2, or 3)
   */
  getStars() {
    if (!this.isSolved()) return 0;
    if (this.moves <= this.minMoves) return 3;
    if (this.moves <= Math.ceil(this.minMoves * 1.5)) return 2;
    return 1;
  }

  /**
   * Serialize board state into compact canonical key for graph search
   */
  static serializeState(blocks) {
    // Sort by id for canonical string
    return blocks
      .map((b) => `${b.id}:${b.r},${b.c}`)
      .sort()
      .join('|');
  }

  /**
   * BFS Solver to find optimal shortest path of moves to solve the board
   */
  solveBFS(maxStates = 60000) {
    const startBlocks = JSON.parse(JSON.stringify(this.blocks));
    const startKey = ZenSlideGame.serializeState(startBlocks);

    // Queue of { blocks, path }
    // path is array of { blockId, delta }
    const queue = [{ blocks: startBlocks, path: [] }];
    const visited = new Set([startKey]);

    while (queue.length > 0) {
      if (visited.size > maxStates) return null; // Search limit safety

      const current = queue.shift();
      const currentBlocks = current.blocks;
      const currentPath = current.path;

      // Check if solved in this state
      const keyBlock = currentBlocks.find((b) => b.isKey);
      if (keyBlock && keyBlock.r === EXIT_ROW && keyBlock.c === GRID_SIZE - keyBlock.len) {
        return currentPath;
      }

      // Build grid for current state
      const grid = Array(GRID_SIZE)
        .fill(null)
        .map(() => Array(GRID_SIZE).fill(null));

      for (const b of currentBlocks) {
        for (let i = 0; i < b.len; i++) {
          const r = b.dir === 'V' ? b.r + i : b.r;
          const c = b.dir === 'H' ? b.c + i : b.c;
          grid[r][c] = b.id;
        }
      }

      // Explore all valid moves for each block
      for (const b of currentBlocks) {
        const moves = [];

        if (b.dir === 'H') {
          // Left moves
          for (let dc = -1; b.c + dc >= 0; dc--) {
            if (grid[b.r][b.c + dc] === null) moves.push(dc);
            else break;
          }
          // Right moves
          for (let dc = 1; b.c + b.len - 1 + dc < GRID_SIZE; dc++) {
            if (grid[b.r][b.c + b.len - 1 + dc] === null) moves.push(dc);
            else break;
          }
        } else {
          // Up moves
          for (let dr = -1; b.r + dr >= 0; dr--) {
            if (grid[b.r + dr][b.c] === null) moves.push(dr);
            else break;
          }
          // Down moves
          for (let dr = 1; b.r + b.len - 1 + dr < GRID_SIZE; dr++) {
            if (grid[b.r + b.len - 1 + dr][b.c] === null) moves.push(dr);
            else break;
          }
        }

        for (const delta of moves) {
          // Create next state
          const nextBlocks = currentBlocks.map((blk) => {
            if (blk.id === b.id) {
              return {
                ...blk,
                r: blk.dir === 'V' ? blk.r + delta : blk.r,
                c: blk.dir === 'H' ? blk.c + delta : blk.c
              };
            }
            return { ...blk };
          });

          const stateKey = ZenSlideGame.serializeState(nextBlocks);
          if (!visited.has(stateKey)) {
            visited.add(stateKey);
            queue.push({
              blocks: nextBlocks,
              path: [...currentPath, { blockId: b.id, delta }]
            });
          }
        }
      }
    }

    return null; // No solution found
  }

  /**
   * Hint Assistant: returns the next optimal move from current position
   */
  getHint() {
    const solution = this.solveBFS(15000);
    if (!solution || solution.length === 0) return null;
    return solution[0]; // Next best move { blockId, delta }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    GRID_SIZE,
    EXIT_ROW,
    ZenSlideGame
  };
}
if (typeof window !== 'undefined') {
  window.ZenSlide = {
    GRID_SIZE,
    EXIT_ROW,
    ZenSlideGame
  };
}
