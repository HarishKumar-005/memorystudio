(function () {
  const state = {
    context: null,
    master: null,
    oscA: null,
    oscB: null,
    lfo: null,
    lfoGain: null,
    enabled: false,
    initialized: false,
    userActivatedOnce: false
  };

  function safeAudioContext() {
    return window.AudioContext || window.webkitAudioContext;
  }

  function initGraph() {
    if (state.initialized) {
      return;
    }

    const AudioContextCtor = safeAudioContext();
    if (!AudioContextCtor) {
      return;
    }

    state.context = new AudioContextCtor();

    state.master = state.context.createGain();
    state.master.gain.value = 0.0001;

    const filter = state.context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 620;
    filter.Q.value = 0.6;

    state.oscA = state.context.createOscillator();
    state.oscA.type = 'sine';
    state.oscA.frequency.value = 174.61;

    state.oscB = state.context.createOscillator();
    state.oscB.type = 'triangle';
    state.oscB.frequency.value = 261.63;

    const gainA = state.context.createGain();
    gainA.gain.value = 0.08;

    const gainB = state.context.createGain();
    gainB.gain.value = 0.04;

    state.lfo = state.context.createOscillator();
    state.lfo.type = 'sine';
    state.lfo.frequency.value = 0.09;

    state.lfoGain = state.context.createGain();
    state.lfoGain.gain.value = 120;

    state.lfo.connect(state.lfoGain);
    state.lfoGain.connect(filter.frequency);

    state.oscA.connect(gainA);
    state.oscB.connect(gainB);
    gainA.connect(filter);
    gainB.connect(filter);
    filter.connect(state.master);
    state.master.connect(state.context.destination);

    state.oscA.start();
    state.oscB.start();
    state.lfo.start();

    state.initialized = true;
  }

  async function ensureResumed() {
    if (!state.context) {
      return false;
    }

    if (state.context.state === 'suspended') {
      try {
        await state.context.resume();
      } catch (_) {
        return false;
      }
    }

    return state.context.state === 'running';
  }

  function setEnabled(nextEnabled) {
    if (!state.initialized || !state.master || !state.context) {
      return false;
    }

    const now = state.context.currentTime;
    state.master.gain.cancelScheduledValues(now);

    if (nextEnabled) {
      state.master.gain.setValueAtTime(Math.max(0.0001, state.master.gain.value), now);
      state.master.gain.exponentialRampToValueAtTime(0.16, now + 0.6);
      state.enabled = true;
    } else {
      state.master.gain.setValueAtTime(Math.max(0.0001, state.master.gain.value), now);
      state.master.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
      state.enabled = false;
    }

    return state.enabled;
  }

  async function userActivated() {
    state.userActivatedOnce = true;
    initGraph();
    await ensureResumed();
  }

  async function toggle() {
    initGraph();

    const active = await ensureResumed();
    if (!active) {
      return false;
    }

    return setEnabled(!state.enabled);
  }

  window.MemoryAudio = {
    userActivated,
    toggle,
    isEnabled: function () {
      return state.enabled;
    }
  };
})();
