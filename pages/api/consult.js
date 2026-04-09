export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { problem } = req.body

  if (!problem || problem.trim().length < 30) {
    return res.status(400).json({ error: 'Problem statement too short.' })
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY is not set. Please add it in Hostinger → Environment Variables.' })
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-opus-4-5',
        max_tokens: 1000,
        system: `You are an AI consulting strategist at ThinkMindLabs, an AI Lab that builds deployment-ready AI products for enterprises.
A potential enterprise client has submitted their business problem statement.
Respond with a concise, structured "Quick Draft Solution Overview" that:
1. Shows you understand their problem
2. Proposes a concrete AI solution approach (agents, models, integrations)
3. Outlines 3-4 key deliverables
4. Gives a rough indicative timeline
5. Ends with a clear next step to schedule a discovery call

Format your response using these exact section headers:
**Problem Understanding**
**Recommended AI Approach**
**Key Deliverables**
**Indicative Timeline**
**Our Recommendation**

Keep it sharp, expert, and specific. Max 400 words. No fluff. Write for a CTO or VP of Digital at a large enterprise.`,
        messages: [
          {
            role: 'user',
            content: `Business Problem Statement:\n\n${problem}`,
          },
        ],
      }),
    })

    if (!response.ok) {
      const err = await response.json()
      throw new Error(err?.error?.message || `Anthropic API error: ${response.status}`)
    }

    const data = await response.json()
    const text = data.content?.[0]?.text || ''

    return res.status(200).json({ result: text })

  } catch (err) {
    console.error('Consult API error:', err.message)
    return res.status(500).json({ error: err.message || 'Failed to generate response.' })
  }
}
