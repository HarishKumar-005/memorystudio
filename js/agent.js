(function () {
  const intentRules = [
    {
      id: 'cake',
      test: /\bcake|birthday|slice\b/i,
      reply:
        'The cake marks a birthday celebration where everyone gathered, laughed, and made wishes before the first slice.'
    },
    {
      id: 'family',
      test: /\bfamily|portrait|photo\b/i,
      reply:
        'That family portrait captures a rare moment of everyone together, and it anchors the room with warmth.'
    },
    {
      id: 'letter',
      test: /\bletter|note|handwritten|message\b/i,
      reply:
        'The handwritten note carries a personal voice, reminding us that small words can hold lasting meaning.'
    },
    {
      id: 'help',
      test: /\bhelp|what can you do|commands\b/i,
      reply:
        'You can ask me about the cake, family portrait, or handwritten note. You can also tap any hotspot to hear narration.'
    }
  ];

  function normalize(text) {
    return (text || '').trim().toLowerCase();
  }

  function resolveIntentReply(input) {
    const text = normalize(input);

    if (!text) {
      return 'Ask me about one of the memories in this room.';
    }

    for (const rule of intentRules) {
      if (rule.test.test(text)) {
        return rule.reply;
      }
    }

    return 'I can help with the cake, family portrait, or handwritten note memories. Try asking about one of those.';
  }

  window.MemoryAgent = {
    reply: resolveIntentReply
  };
})();
