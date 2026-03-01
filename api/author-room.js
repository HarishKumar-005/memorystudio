export default async function handler(req, res) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let prompt = 'Create a warm family memory room.';

  if (req.method === 'POST') {
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
      if (typeof body.prompt === 'string' && body.prompt.trim()) {
        prompt = body.prompt.trim();
      }
    } catch (error) {
      console.warn('Invalid JSON body for /api/author-room:', error);
      return res.status(400).json({ error: 'Invalid JSON body' });
    }
  }

  const normalized = prompt.toLowerCase();

  const roomSpec = {
    roomName: 'MemoryRoom Demo',
    style: normalized.includes('cozy') ? 'cozy-evening' : 'warm-family',
    narration:
      'Auto-authored demo room loaded. This is a deterministic local stub response with no external model calls.',
    panorama: 'assets/panorama.jpg',
    hotspots: [
      {
        id: 'cake',
        title: 'Birthday Cake',
        image: 'assets/photo1.jpg',
        caption: 'A celebration centerpiece lit with candles and shared joy.',
        position: '1.25 1.46 -3.35'
      },
      {
        id: 'letter',
        title: 'Handwritten Note',
        image: 'assets/photo3.jpg',
        caption: 'A heartfelt note that preserves personal memory in words.',
        position: '1.95 1.18 -3.05'
      }
    ],
    meta: {
      deterministic: true,
      source: 'api/author-room.js',
      requestedPrompt: prompt,
      timestamp: new Date().toISOString()
    }
  };

  return res.status(200).json(roomSpec);
}
