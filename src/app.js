/**
 * ZenSlide - Main Application Controller & Canvas Renderer
 * Smooth touch/mouse sliding block interactions, audio, animations, and state persistence.
 */

(function () {
  'use strict';

  // --- DOM References ---
  const canvas = document.getElementById('slide-canvas');
  const ctx = canvas.getContext('2d');
  const boardWrapper = document.getElementById('board-wrapper');

  // HUD Elements
  const hudPackName = document.getElementById('hud-pack-name');
  const hudLevelTitle = document.getElementById('hud-level-title');
  const hudMoves = document.getElementById('hud-moves');
  const hudTarget = document.getElementById('hud-target');
  const hudStars = document.getElementById('hud-stars');
  const hudTime = document.getElementById('hud-time');

  // Header Buttons
  const btnMenu = document.getElementById('btn-menu');
  const btnPackSwitch = document.getElementById('btn-pack-switch');
  const btnSound = document.getElementById('btn-sound');
  const iconSoundOn = document.getElementById('icon-sound-on');
  const iconSoundOff = document.getElementById('icon-sound-off');
  const btnSettings = document.getElementById('btn-settings');

  // Bottom Toolbar
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnUndo = document.getElementById('btn-undo');
  const btnReset = document.getElementById('btn-reset');
  const btnHint = document.getElementById('btn-hint');

  // Modals
  const modalVictory = document.getElementById('modal-victory');
  const victoryStars = document.getElementById('victory-stars');
  const victoryHeading = document.getElementById('victory-heading');
  const victorySub = document.getElementById('victory-sub');
  const vicMoves = document.getElementById('vic-moves');
  const vicTarget = document.getElementById('vic-target');
  const vicTime = document.getElementById('vic-time');
  const btnVicReplay = document.getElementById('btn-vic-replay');
  const btnVicNext = document.getElementById('btn-vic-next');
  const confettiCanvas = document.getElementById('confetti-canvas');

  const modalLevels = document.getElementById('modal-levels');
  const btnCloseLevels = document.getElementById('btn-close-levels');
  const packTabsContainer = document.getElementById('pack-tabs-container');
  const levelsGridContainer = document.getElementById('levels-grid-container');

  const modalSettings = document.getElementById('modal-settings');
  const btnCloseSettings = document.getElementById('btn-close-settings');
  const toggleHaptics = document.getElementById('toggle-haptics');
  const btnClearData = document.getElementById('btn-clear-data');

  // Game Engine & Audio
  const audio = new window.ZenSlideAudio();
  const PACKS = window.ZenSlideLevels.ZENSLIDE_PACKS;
  const ALL_LEVELS = window.ZenSlideLevels.ZENSLIDE_LEVELS;

  let currentPackId = 'starter';
  let currentLevelIdx = 0;
  let game = null;

  // Board Sizing & Dragging State
  let cellSize = 60;
  let boardSize = 360;
  let exitRow = 2;

  let draggingBlock = null;
  let dragStartPos = { x: 0, y: 0 };
  let dragBlockInitialPos = { r: 0, c: 0 };
  let dragPixelOffset = 0; // along block axis
  let allowedDeltaRange = [0, 0];
  let isPointerDown = false;

  let hintBlockId = null;
  let hintDelta = 0;
  let hintTimer = null;

  // Timer & State
  let startTime = null;
  let timerInterval = null;
  let elapsedSeconds = 0;
  let isLevelWon = false;

  // Storage
  const STORAGE_KEY_PROGRESS = 'zenslide_progress_v1';
  const STORAGE_KEY_SETTINGS = 'zenslide_settings_v1';

  let progressData = loadProgress();
  let userSettings = loadSettings();

  function loadProgress() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_PROGRESS);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }

  function saveProgress(levelId, stars, moves, timeSec) {
    if (!progressData[levelId]) {
      progressData[levelId] = { stars: 0, bestMoves: 9999, bestTime: 9999 };
    }
    const cur = progressData[levelId];
    cur.stars = Math.max(cur.stars || 0, stars);
    cur.bestMoves = Math.min(cur.bestMoves || 9999, moves);
    cur.bestTime = Math.min(cur.bestTime || 9999, timeSec);
    try {
      localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progressData));
    } catch (e) {}
  }

  function loadSettings() {
    let s = { haptics: true };
    try {
      const d = localStorage.getItem(STORAGE_KEY_SETTINGS);
      if (d) s = { ...s, ...JSON.parse(d) };
    } catch (e) {}
    return s;
  }

  function saveSettings() {
    try {
      localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(userSettings));
    } catch (e) {}
  }

  // --- Level Management ---
  function getPackLevels(packId) {
    return ALL_LEVELS[packId] || ALL_LEVELS['starter'];
  }

  function startLevel(packId, levelIdx) {
    currentPackId = packId;
    const levels = getPackLevels(packId);
    if (levelIdx < 0) levelIdx = 0;
    if (levelIdx >= levels.length) levelIdx = levels.length - 1;
    currentLevelIdx = levelIdx;

    const levelData = levels[currentLevelIdx];
    game = new window.ZenSlide.ZenSlideGame(levelData);

    isLevelWon = false;
    hintBlockId = null;
    modalVictory.classList.add('hidden');
    modalLevels.classList.add('hidden');
    modalSettings.classList.add('hidden');

    resetTimer();
    startTimer();

    updateHUD();
    resizeCanvas();
    render();
  }

  function resetTimer() {
    clearInterval(timerInterval);
    elapsedSeconds = 0;
    hudTime.textContent = '00:00';
  }

  function startTimer() {
    clearInterval(timerInterval);
    startTime = Date.now() - elapsedSeconds * 1000;
    timerInterval = setInterval(() => {
      if (isLevelWon) return;
      elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
      const m = String(Math.floor(elapsedSeconds / 60)).padStart(2, '0');
      const s = String(elapsedSeconds % 60).padStart(2, '0');
      hudTime.textContent = `${m}:${s}`;
    }, 1000);
  }

  // --- HUD Updates ---
  function updateHUD() {
    const pack = PACKS.find((p) => p.id === currentPackId);
    hudPackName.textContent = pack ? pack.name : 'Starter';
    hudLevelTitle.textContent = `Level ${currentLevelIdx + 1}`;
    hudMoves.textContent = String(game.moves);
    hudTarget.textContent = String(game.minMoves);
    canvas.setAttribute(
      'aria-label',
      `${hudPackName.textContent} pack, level ${currentLevelIdx + 1}. ${game.moves} moves. Slide the crimson key to the exit.`
    );
    btnUndo.disabled = game.undoStack.length === 0;
    btnReset.disabled = game.moves === 0;
    btnHint.disabled = isLevelWon;

    // Dynamic expected star rating
    let starCount = 3;
    if (game.moves > Math.ceil(game.minMoves * 1.5)) starCount = 1;
    else if (game.moves > game.minMoves) starCount = 2;
    hudStars.textContent = '★'.repeat(starCount) + '☆'.repeat(3 - starCount);

    const levels = getPackLevels(currentPackId);
    btnPrev.disabled = currentLevelIdx <= 0;
    btnNext.disabled = currentLevelIdx >= levels.length - 1;
  }

  // --- Canvas Rendering ---
  function resizeCanvas() {
    const rect = boardWrapper.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    const availableW = rect.width - 24;
    const availableH = rect.height - 24;
    const rawSide = Math.min(availableW, availableH, 500);
    const side = Math.max(rawSide, 260);

    canvas.width = Math.floor(side * dpr);
    canvas.height = Math.floor(side * dpr);
    canvas.style.width = `${side}px`;
    canvas.style.height = `${side}px`;

    ctx.resetTransform?.();
    ctx.scale(dpr, dpr);

    boardSize = side;
    cellSize = side / 6;
  }

  function render() {
    if (!game) return;
    const w = parseFloat(canvas.style.width) || 300;
    const h = parseFloat(canvas.style.height) || 300;

    ctx.clearRect(0, 0, w, h);

    // Board background & slots
    drawGrid();

    // Exit Gate
    drawExitGate();

    // Blocks
    drawBlocks();
  }

  function drawGrid() {
    const pad = 3;
    ctx.save();
    ctx.fillStyle = '#0a1a23';
    ctx.strokeStyle = 'rgba(164, 218, 207, 0.12)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(0.5, 0.5, boardSize - 1, boardSize - 1, 18);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 6; c++) {
        const x = c * cellSize + pad;
        const y = r * cellSize + pad;
        const s = cellSize - pad * 2;

        const slotGradient = ctx.createLinearGradient(x, y, x + s, y + s);
        slotGradient.addColorStop(0, '#142b35');
        slotGradient.addColorStop(1, '#0e222c');
        ctx.fillStyle = slotGradient;
        ctx.beginPath();
        ctx.roundRect(x, y, s, s, 10);
        ctx.fill();

        ctx.strokeStyle = 'rgba(166, 220, 208, 0.08)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }

  function drawExitGate() {
    // Exit is on row 2, right edge (col 5)
    const y = exitRow * cellSize + 4;
    const h = cellSize - 8;
    const x = boardSize - 5;
    const w = 5;

    ctx.save();
    ctx.fillStyle = '#ff7568';
    ctx.shadowColor = '#ff7568';
    ctx.shadowBlur = 15;
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, 3);
    ctx.fill();
    ctx.restore();
  }

  function drawBlocks() {
    const pad = 4;

    for (const b of game.blocks) {
      let x = b.c * cellSize + pad;
      let y = b.r * cellSize + pad;
      let bw = b.dir === 'H' ? b.len * cellSize - pad * 2 : cellSize - pad * 2;
      let bh = b.dir === 'V' ? b.len * cellSize - pad * 2 : cellSize - pad * 2;

      // Apply drag offset if this block is currently being dragged
      if (draggingBlock && draggingBlock.id === b.id) {
        if (b.dir === 'H') x += dragPixelOffset;
        else y += dragPixelOffset;
      }

      const isKey = b.isKey;
      const isHint = hintBlockId === b.id;

      ctx.save();

      // Shadow / Glow
      if (isKey) {
        ctx.shadowColor = '#FF3B30';
        ctx.shadowBlur = 14;
      } else if (isHint) {
        ctx.shadowColor = '#FFCC00';
        ctx.shadowBlur = 18;
      } else {
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowBlur = 6;
      }

      // Block Body
      const blockGradient = ctx.createLinearGradient(x, y, x + bw, y + bh);
      blockGradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
      blockGradient.addColorStop(0.34, b.color);
      blockGradient.addColorStop(1, isKey ? '#df4b46' : b.color);
      ctx.fillStyle = blockGradient;
      ctx.beginPath();
      ctx.roundRect(x, y, bw, bh, 12);
      ctx.fill();
      ctx.restore();

      // Specular Bevel Inner Line
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(x + 2, y + 2, bw - 4, bh - 4, 10);
      ctx.stroke();

      // Grip marks or arrow on key block
      if (isKey) {
        // Directional arrow pointing right toward exit gate
        const cx = x + bw * 0.5;
        const cy = y + bh * 0.5;
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(cx - 10, cy);
        ctx.lineTo(cx + 8, cy);
        ctx.lineTo(cx + 2, cy - 6);
        ctx.moveTo(cx + 8, cy);
        ctx.lineTo(cx + 2, cy + 6);
        ctx.stroke();
      } else {
        // Grip ridges in the center
        const cx = x + bw * 0.5;
        const cy = y + bh * 0.5;
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.25)';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';

        if (b.dir === 'H') {
          [-6, 0, 6].forEach((dx) => {
            ctx.beginPath();
            ctx.moveTo(cx + dx, cy - 8);
            ctx.lineTo(cx + dx, cy + 8);
            ctx.stroke();
          });
        } else {
          [-6, 0, 6].forEach((dy) => {
            ctx.beginPath();
            ctx.moveTo(cx - 8, cy + dy);
            ctx.lineTo(cx + 8, cy + dy);
            ctx.stroke();
          });
        }
      }

      ctx.restore();
    }
  }

  // --- Interaction & Coordinates ---
  function getBlockAt(x, y) {
    const c = Math.floor(x / cellSize);
    const r = Math.floor(y / cellSize);

    for (const b of game.blocks) {
      if (b.dir === 'H') {
        if (b.r === r && c >= b.c && c < b.c + b.len) return b;
      } else {
        if (b.c === c && r >= b.r && r < b.r + b.len) return b;
      }
    }
    return null;
  }

  function handlePointerDown(evt) {
    evt.preventDefault();
    audio.init();
    if (isLevelWon) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = evt.clientX || (evt.touches && evt.touches[0] ? evt.touches[0].clientX : null);
    const clientY = evt.clientY || (evt.touches && evt.touches[0] ? evt.touches[0].clientY : null);
    if (clientX === null || clientY === null) return;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const blk = getBlockAt(x, y);
    if (!blk) return;

    isPointerDown = true;
    draggingBlock = blk;
    dragStartPos = { x, y };
    dragBlockInitialPos = { r: blk.r, c: blk.c };
    dragPixelOffset = 0;
    allowedDeltaRange = game.getMoveRange(blk.id);

    hintBlockId = null;
    render();
  }

  function handlePointerMove(evt) {
    if (!isPointerDown || !draggingBlock) return;
    evt.preventDefault();

    const rect = canvas.getBoundingClientRect();
    const clientX = evt.clientX || (evt.touches && evt.touches[0] ? evt.touches[0].clientX : null);
    const clientY = evt.clientY || (evt.touches && evt.touches[0] ? evt.touches[0].clientY : null);
    if (clientX === null || clientY === null) return;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    let deltaPixels = 0;
    if (draggingBlock.dir === 'H') {
      deltaPixels = x - dragStartPos.x;
    } else {
      deltaPixels = y - dragStartPos.y;
    }

    // Clamp within allowed delta range
    const minPx = allowedDeltaRange[0] * cellSize;
    const maxPx = allowedDeltaRange[1] * cellSize;
    dragPixelOffset = Math.max(minPx, Math.min(maxPx, deltaPixels));

    render();
  }

  function handlePointerUp(evt) {
    if (!isPointerDown || !draggingBlock) return;
    isPointerDown = false;

    // Determine discrete grid steps slid
    const steps = Math.round(dragPixelOffset / cellSize);

    if (steps !== 0 && game.canMove(draggingBlock.id, steps)) {
      game.moveBlock(draggingBlock.id, steps);
      audio.playSlide(draggingBlock.isKey);
      updateHUD();

      if (game.isSolved()) {
        triggerVictory();
      }
    }

    draggingBlock = null;
    dragPixelOffset = 0;
    render();
  }

  // --- Victory & Celebration ---
  function triggerVictory() {
    if (isLevelWon) return;
    isLevelWon = true;
    clearInterval(timerInterval);
    updateHUD();

    const stars = game.getStars();
    const isPerfect = stars === 3;

    audio.playVictory(isPerfect);
    saveProgress(game.levelId, stars, game.moves, elapsedSeconds);

    victoryHeading.textContent = isPerfect ? 'Masterful Slide!' : 'Unblocked!';
    victorySub.textContent = isPerfect
      ? `Solved in ${game.moves} moves — optimal shortest path!`
      : `Cleared in ${game.moves} moves. Target is ${game.minMoves} for 3 stars!`;

    const starSpans = victoryStars.querySelectorAll('.star');
    starSpans.forEach((s, idx) => {
      s.classList.toggle('active', idx < stars);
    });

    vicMoves.textContent = String(game.moves);
    vicTarget.textContent = String(game.minMoves);
    const m = String(Math.floor(elapsedSeconds / 60)).padStart(2, '0');
    const s = String(elapsedSeconds % 60).padStart(2, '0');
    vicTime.textContent = `${m}:${s}`;

    modalVictory.classList.remove('hidden');
    runConfetti();
  }

  function runConfetti() {
    if (!confettiCanvas) return;
    const cCtx = confettiCanvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = confettiCanvas.getBoundingClientRect();

    confettiCanvas.width = rect.width * dpr;
    confettiCanvas.height = rect.height * dpr;
    cCtx.scale(dpr, dpr);

    const particles = [];
    const colors = ['#FF3B30', '#00C7BE', '#34C759', '#FFCC00', '#AF52DE'];

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: rect.width * 0.5,
        y: rect.height * 0.4,
        vx: (Math.random() - 0.5) * 8,
        vy: (Math.random() - 1.2) * 9,
        size: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 10,
        alpha: 1
      });
    }

    let frames = 0;
    function anim() {
      if (frames > 70) {
        cCtx.clearRect(0, 0, rect.width, rect.height);
        return;
      }
      frames++;
      cCtx.clearRect(0, 0, rect.width, rect.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.28;
        p.rotation += p.vr;
        p.alpha -= 0.014;

        cCtx.save();
        cCtx.globalAlpha = Math.max(0, p.alpha);
        cCtx.translate(p.x, p.y);
        cCtx.rotate((p.rotation * Math.PI) / 180);
        cCtx.fillStyle = p.color;
        cCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        cCtx.restore();
      });

      requestAnimationFrame(anim);
    }
    anim();
  }

  // --- Level Selection Modal ---
  function openLevelSelect() {
    renderPackTabs();
    renderLevelsGrid();
    modalLevels.classList.remove('hidden');
    btnCloseLevels.focus();
  }

  function renderPackTabs() {
    packTabsContainer.innerHTML = '';
    PACKS.forEach((pack) => {
      const btn = document.createElement('button');
      btn.className = `pack-tab ${pack.id === currentPackId ? 'active' : ''}`;
      btn.textContent = pack.name;
      btn.setAttribute('aria-selected', String(pack.id === currentPackId));
      btn.setAttribute('role', 'tab');
      btn.style.setProperty('--tab-accent', pack.color);
      btn.addEventListener('click', () => {
        currentPackId = pack.id;
        renderPackTabs();
        renderLevelsGrid();
        audio.playTap();
      });
      packTabsContainer.appendChild(btn);
    });
  }

  function renderLevelsGrid() {
    levelsGridContainer.innerHTML = '';
    const levels = getPackLevels(currentPackId);

    levels.forEach((lvl, idx) => {
      const saved = progressData[lvl.id] || { stars: 0 };
      const btn = document.createElement('button');
      btn.className = `level-grid-btn ${saved.stars > 0 ? 'completed' : ''} ${
        idx === currentLevelIdx && lvl.packId === currentPackId ? 'current' : ''
      }`;

      btn.innerHTML = `
        <span class="lvl-num">${idx + 1}</span>
        <span class="lvl-stars">${'★'.repeat(saved.stars || 0)}${'☆'.repeat(3 - (saved.stars || 0))}</span>
      `;
      btn.setAttribute('aria-label', `Level ${idx + 1}, ${saved.stars || 0} of 3 stars`);
      if (idx === currentLevelIdx && lvl.packId === currentPackId) {
        btn.setAttribute('aria-current', 'page');
      }

      btn.addEventListener('click', () => {
        audio.playTap();
        startLevel(currentPackId, idx);
      });

      levelsGridContainer.appendChild(btn);
    });
  }

  // --- Sound & Settings ---
  function updateSoundUI() {
    if (audio.enabled) {
      iconSoundOn.classList.remove('hidden');
      iconSoundOff.classList.add('hidden');
    } else {
      iconSoundOn.classList.add('hidden');
      iconSoundOff.classList.remove('hidden');
    }
    btnSound.setAttribute('aria-pressed', String(audio.enabled));
  }

  function openSettings() {
    toggleHaptics.checked = userSettings.haptics;
    modalSettings.classList.remove('hidden');
    btnCloseSettings.focus();
  }

  // --- Event Listeners ---
  function registerEvents() {
    canvas.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    // Prevent scrolling during drag
    canvas.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false });
    canvas.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });

    // Header buttons
    btnSound.addEventListener('click', () => {
      audio.toggle();
      updateSoundUI();
    });

    btnMenu.addEventListener('click', () => {
      audio.playTap();
      openLevelSelect();
    });
    btnPackSwitch.addEventListener('click', () => {
      audio.playTap();
      openLevelSelect();
    });
    btnPackSwitch.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        audio.playTap();
        openLevelSelect();
      }
    });
    btnCloseLevels.addEventListener('click', () => {
      audio.playTap();
      modalLevels.classList.add('hidden');
      btnMenu.focus();
    });

    btnSettings.addEventListener('click', () => {
      audio.playTap();
      openSettings();
    });
    btnCloseSettings.addEventListener('click', () => {
      audio.playTap();
      modalSettings.classList.add('hidden');
      btnSettings.focus();
    });

    // Toolbar buttons
    btnUndo.addEventListener('click', () => {
      if (game.undo()) {
        audio.playTap();
        updateHUD();
        render();
      }
    });

    btnReset.addEventListener('click', () => {
      audio.playTap();
      game.reset();
      resetTimer();
      startTimer();
      updateHUD();
      render();
    });

    btnHint.addEventListener('click', () => {
      const hint = game.getHint();
      if (hint) {
        audio.playHint();
        hintBlockId = hint.blockId;
        hintDelta = hint.delta;
        render();

        clearTimeout(hintTimer);
        hintTimer = setTimeout(() => {
          // Auto execute the hint move smoothly
          game.moveBlock(hint.blockId, hint.delta);
          audio.playSlide(hint.blockId === 'key');
          hintBlockId = null;
          updateHUD();
          render();
          if (game.isSolved()) triggerVictory();
        }, 600);
      }
    });

    btnPrev.addEventListener('click', () => {
      audio.playTap();
      startLevel(currentPackId, currentLevelIdx - 1);
    });

    btnNext.addEventListener('click', () => {
      audio.playTap();
      startLevel(currentPackId, currentLevelIdx + 1);
    });

    // Victory modal buttons
    btnVicReplay.addEventListener('click', () => {
      audio.playTap();
      startLevel(currentPackId, currentLevelIdx);
    });

    btnVicNext.addEventListener('click', () => {
      audio.playTap();
      const levels = getPackLevels(currentPackId);
      if (currentLevelIdx < levels.length - 1) {
        startLevel(currentPackId, currentLevelIdx + 1);
      } else {
        const curIdx = PACKS.findIndex((p) => p.id === currentPackId);
        if (curIdx < PACKS.length - 1) {
          startLevel(PACKS[curIdx + 1].id, 0);
        } else {
          startLevel(PACKS[0].id, 0);
        }
      }
    });

    // Settings actions
    toggleHaptics.addEventListener('change', (e) => {
      userSettings.haptics = e.target.checked;
      saveSettings();
    });

    btnClearData.addEventListener('click', () => {
      if (confirm('Clear all sliding puzzle progress?')) {
        progressData = {};
        try {
          localStorage.removeItem(STORAGE_KEY_PROGRESS);
        } catch (e) {}
        modalSettings.classList.add('hidden');
        startLevel(currentPackId, 0);
      }
    });

    // Keyboard controls
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (!modalLevels.classList.contains('hidden')) {
          modalLevels.classList.add('hidden');
          btnMenu.focus();
        } else if (!modalSettings.classList.contains('hidden')) {
          modalSettings.classList.add('hidden');
          btnSettings.focus();
        }
        return;
      }
      if (isLevelWon || !modalLevels.classList.contains('hidden') || !modalSettings.classList.contains('hidden')) return;
      if (e.target && ['BUTTON', 'INPUT'].includes(e.target.tagName)) return;
      if (e.key === 'u' || e.key === 'z') {
        if (game.undo()) {
          audio.playTap();
          updateHUD();
          render();
        }
      } else if (e.key === 'r') {
        game.reset();
        resetTimer();
        startTimer();
        updateHUD();
        render();
      } else if (e.key === 'h') {
        btnHint.click();
      } else if (e.key === 'ArrowRight') {
        startLevel(currentPackId, currentLevelIdx + 1);
      } else if (e.key === 'ArrowLeft') {
        startLevel(currentPackId, currentLevelIdx - 1);
      }
    });

    window.addEventListener('resize', () => {
      resizeCanvas();
      render();
    });
  }

  // --- Offline Service Worker ---
  function registerServiceWorker() {
    if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(() => {});
      });
    }
  }

  function init() {
    registerEvents();
    updateSoundUI();
    registerServiceWorker();
    startLevel('starter', 0);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
