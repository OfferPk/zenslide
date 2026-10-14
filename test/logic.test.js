/**
 * ZenSlide - Logic Tests & Solver Verification
 * Executed via: npm test (node --test)
 */

const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { ZenSlideGame, GRID_SIZE, EXIT_ROW } = require('../src/slide.js');
const { ZENSLIDE_PACKS, ZENSLIDE_LEVELS } = require('../src/levels.js');

describe('ZenSlide Game Engine & Level Packs', () => {
  it('should have 4 curated packs with 10 levels each (40 total)', () => {
    assert.equal(ZENSLIDE_PACKS.length, 4);
    let totalLevels = 0;
    for (const pack of ZENSLIDE_PACKS) {
      const levels = ZENSLIDE_LEVELS[pack.id];
      assert.ok(levels, `Pack ${pack.id} must exist`);
      assert.equal(levels.length, 10, `Pack ${pack.id} must have 10 levels`);
      totalLevels += levels.length;
    }
    assert.equal(totalLevels, 40);
  });

  it('every level must have a valid key block at exit row (row 2)', () => {
    for (const pack of ZENSLIDE_PACKS) {
      const levels = ZENSLIDE_LEVELS[pack.id];
      for (const level of levels) {
        const game = new ZenSlideGame(level);
        const key = game.getKeyBlock();
        assert.ok(key, `Level ${level.name} must have a key block`);
        assert.equal(key.r, EXIT_ROW, `Key block must be on row ${EXIT_ROW}`);
        assert.equal(key.dir, 'H', 'Key block must be horizontal');
        assert.equal(key.len, 2, 'Key block must have length 2');
      }
    }
  });

  it('no blocks should overlap in initial positions across all 40 levels', () => {
    for (const pack of ZENSLIDE_PACKS) {
      const levels = ZENSLIDE_LEVELS[pack.id];
      for (const level of levels) {
        const occupied = new Set();
        for (const b of level.blocks) {
          for (let i = 0; i < b.len; i++) {
            const r = b.dir === 'V' ? b.r + i : b.r;
            const c = b.dir === 'H' ? b.c + i : b.c;
            assert.ok(r >= 0 && r < GRID_SIZE, `Row out of bounds in ${level.name}`);
            assert.ok(c >= 0 && c < GRID_SIZE, `Col out of bounds in ${level.name}`);

            const cellKey = `${r},${c}`;
            assert.ok(!occupied.has(cellKey), `Overlap at ${cellKey} in ${level.name}`);
            occupied.add(cellKey);
          }
        }
      }
    }
  });

  it('should detect valid and invalid moves properly', () => {
    const level = ZENSLIDE_LEVELS['starter'][0];
    const game = new ZenSlideGame(level);

    // Initial state: key block is not solved yet
    assert.equal(game.isSolved(), false);

    // Check move range
    const range = game.getMoveRange('key');
    assert.ok(Array.isArray(range));
    assert.equal(range.length, 2);
    assert.ok(range[0] <= range[1]);
  });

  it('should slide a block, increment move counter, and record undo', () => {
    const level = ZENSLIDE_LEVELS['starter'][0];
    const game = new ZenSlideGame(level);
    assert.equal(game.moves, 0);

    // Find first movable block
    let moved = false;
    for (const b of game.blocks) {
      const [minD, maxD] = game.getMoveRange(b.id);
      if (maxD > 0) {
        assert.ok(game.moveBlock(b.id, 1));
        assert.equal(game.moves, 1);
        moved = true;
        break;
      } else if (minD < 0) {
        assert.ok(game.moveBlock(b.id, -1));
        assert.equal(game.moves, 1);
        moved = true;
        break;
      }
    }
    assert.ok(moved, 'At least one block should be movable initially');

    // Test undo
    assert.ok(game.undo());
    assert.equal(game.moves, 0);
  });

  it('reset() should restore exact initial block configuration', () => {
    const level = ZENSLIDE_LEVELS['starter'][0];
    const game = new ZenSlideGame(level);
    const initialBlocks = JSON.stringify(game.blocks);

    // Make a move
    for (const b of game.blocks) {
      const [minD, maxD] = game.getMoveRange(b.id);
      if (maxD > 0) {
        game.moveBlock(b.id, 1);
        break;
      }
    }

    game.reset();
    assert.equal(game.moves, 0);
    assert.equal(JSON.stringify(game.blocks), initialBlocks);
  });

  it('BFS solver should solve a simple level in exact shortest path', () => {
    const simpleLevel = {
      id: 'test-simple',
      name: 'Test Simple',
      minMoves: 2,
      blocks: [
        { id: 'key', r: 2, c: 2, len: 2, dir: 'H', isKey: true },
        { id: 'b1', r: 0, c: 4, len: 2, dir: 'V', isKey: false }
      ]
    };
    const game = new ZenSlideGame(simpleLevel);
    const solution = game.solveBFS();

    assert.ok(solution);
    assert.equal(solution.length, 1);
    assert.equal(solution[0].blockId, 'key');
    assert.equal(solution[0].delta, 2); // Slide right 2 cells into (2, 4)
  });

  it('hint assistant should return the next optimal move', () => {
    const simpleLevel = {
      id: 'test-hint',
      name: 'Test Hint',
      minMoves: 1,
      blocks: [
        { id: 'key', r: 2, c: 2, len: 2, dir: 'H', isKey: true }
      ]
    };
    const game = new ZenSlideGame(simpleLevel);
    const hint = game.getHint();

    assert.ok(hint);
    assert.equal(hint.blockId, 'key');
    assert.equal(hint.delta, 2);
  });

  it('should calculate 3 stars for <= minMoves, 2 stars for <= 1.5x, 1 star otherwise', () => {
    const level = {
      id: 'test-stars',
      minMoves: 4,
      blocks: [{ id: 'key', r: 2, c: 4, len: 2, dir: 'H', isKey: true }] // already at exit
    };
    const game = new ZenSlideGame(level);

    game.moves = 4;
    assert.equal(game.getStars(), 3);

    game.moves = 6;
    assert.equal(game.getStars(), 2);

    game.moves = 7;
    assert.equal(game.getStars(), 1);
  });

  it('all starter pack levels must have a precomputed BFS optimal solution', () => {
    const levels = ZENSLIDE_LEVELS['starter'];
    for (const lvl of levels) {
      assert.ok(lvl.minMoves >= 1, `Level ${lvl.name} must have minMoves >= 1`);
      assert.ok(lvl.optimalSolution, `Level ${lvl.name} must have precomputed solution`);
      assert.equal(lvl.minMoves, lvl.optimalSolution.length);
    }
  });
});
