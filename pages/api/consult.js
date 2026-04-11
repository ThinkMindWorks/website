/**
 * AI Consulting Brief Generator API
 * Model: claude-3-5-haiku-20241022
 * Features: Rate limiting, input validation, restricted topics, sanitization
 */

import Anthropic from '@anthropic-ai/sdk'

// ============================================================================
// RESTRICTED TOPICS
// ============================================================================
const RESTRICTED_TOPICS = [
  'politics', 'political', 'election', 'government policy', 'diplomacy',
  'sex', 'sexual', 'pornography', 'dating', 'relationships', 'romance',
  'hacking', 'exploit', 'cyber attack', 'malware', 'vulnerability abuse',
  'scam', 'fraud', 'illegal', 'money laundering', 'theft',
  'weapons', 'bomb', 'gun', 'explosive', 'violence', 'terrorism',
  'celebrity gossip', 'personality', 'rumors', 'slander',
  'religion', 'caste', 'discrimination', 'hate speech',
  'astrology', 'numerology', 'paranormal', 'pseudoscience',
]

function isRestrictedTopic(text) {
  const lower = text.toLowerCase()
  return RESTRICTED_TOPICS.some(topic => lower.includes(topic))
}

// ============================================================================
// CONFIG
// ============================================================================
const CONFIG = {
  MODEL: 'claude-3-5-haiku-20241022',
  MAX_TOKENS: 1500,
  TIMEOUT_MS: 30000,
  MAX_INPUT_LENGTH: 5000,
  MIN_INPUT_LENGTH: 30,
}

// ============================================================================
// RATE LIMITING (in-memory; suitable for single-instance Node.js on Hostinger)
// ============================================================================
const rateLimitStore = new Map()

function checkRateLimit(clientId) {
  const now = Date.now()

  if (!rateLimitStore.has(clientId)) {
    rateLimitStore.set(clientId, {
      minute: { count: 0, resetAt: now + 60000 },
      hour: { count: 0, resetAt: now + 3600000 },
    })
  }

  const limit = rateLimitStore.get(clientId)

  if (now > limit.minute.resetAt) limit.minute = { count: 0, resetAt: now + 60000 }
  if (now > limit.hour.resetAt) limit.hour = { count: 0, resetAt: now + 3600000 }

  if (limit.minute.count >= 10) {
    return { allowed: false, error: 'Rate limit exceeded: 10 requests per minute', retryAfter: Math.ceil((limit.minute.resetAt - now) / 1000) }
  }
  if (limit.hour.count >= 100) {
    return { allowed: false, error: 'Rate limit exceeded: 100 requests per hour', retryAfter: Math.ceil((limit.hour.resetAt - now) / 1000) }
  }

  limit.minute.count++
  limit.hour.count++
  return { allowed: true }
}

// ============================================================================
// INPUT VALIDATION
// ============================================================================
function validateInput(problem) {
  const errors = []

  if (!problem) errors.push('Problem statement is required')
  if (problem && problem.trim().length < CONFIG.MIN_INPUT_LENGTH)
    errors.push(`Problem statement must be at least ${CONFIG.MIN_INPUT_LENGTH} characters`)
  if (problem && problem.trim().length > CONFIG.MAX_INPUT_LENGTH)
    errors.push(`Problem statement must not exceed ${CONFIG.MAX_INPUT_LENGTH} characters`)
  if (problem && isRestrictedTopic(problem))
    errors.push('This topic is outside our scope. Please share a business or technology challenge.')

  // Basic XSS / injection check
  const suspicious = [/<script/i, /javascript:/i, /on\w+\s*=/i, /base64/i, /eval\(/i]
  if (problem && suspicious.some(p => p.test(problem)))
    errors.push('Input contains potentially malicious content')

  return { isValid: errors.length === 0, errors }
}

function sanitizeInput(text) {
  return text.trim().replace(/[\x00-\x1F\x7F]/g, '').slice(0, CONFIG.MAX_INPUT_LENGTH)
}

// ============================================================================
// SYSTEM PROMPT
// ============================================================================
const SYSTEM_PROMPT = `You are an AI consulting strategist at ThinkMindLabs, an AI Lab that builds deployment-ready AI products for enterprises.

CRITICAL RESTRICTION CHECK:
If the user's problem statement involves ANY of these topics, respond with ONLY:
"I appreciate your inquiry, but I'm not equipped to provide consulting advice on this topic. ThinkMindLabs specialises in business and technology solutions. Please share a business or technology challenge, and I'd be happy to help."

RESTRICTED TOPICS: politics, relationships, hacking, scams, weapons, violence, celebrity gossip, discrimination, pseudoscience, or any sensitive social context.

ONLY if it's a legitimate BUSINESS or TECHNOLOGY problem, proceed with:

Respond with a comprehensive "Structured Consulting Brief" containing EXACTLY these 7 sections:

## Problem Understanding
Articulate the business challenge, pain points, and objectives

## Recommended AI Approach
Propose solution in simple business terms. AVOID: technical jargon, stack terminology (no microservices, APIs, databases, etc.), resource/team requirements

## ROI & Business Impact
Quantify benefits and costs entirely in INR (Indian Rupees). Use realistic figures.

## User Adoption Ease
Address implementation complexity and training needs

## Key Deliverables
List 3-5 concrete, measurable outputs

## Indicative Timeline
Realistic timeline with milestones. MAXIMUM 6 WEEKS. Be conservative.

## Our Recommendation
Clear next steps and approach

GUARDRAILS (NON-NEGOTIABLE):
1. TIMELINE: Never exceed 6 weeks. Show milestone dates.
2. CURRENCY: ALL amounts in INR only. No USD, no dollars.
3. COST: Show MINIMUM investment (₹50,000–500,000 range for MVP). Make affordable.
4. LANGUAGE: Simple business language only. No technical jargon. Common person should understand.
5. RESOURCES: NEVER mention team size, headcount, engineers, developers, or resource allocation.
6. LENGTH: Max 1000 words. Concise and actionable.

Use tables, bullet points, clear formatting. Write for CTO/VP level.`

// ============================================================================
// MAIN HANDLER
// ============================================================================
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Client-ID')

  if (req.method === 'OPTIONS') return res.status(200).end()

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed', allowedMethods: ['POST'] })
  }

  const { problem } = req.body
  const clientId = req.headers['x-client-id'] || req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'anonymous'

  // Validate input
  const validation = validateInput(problem)
  if (!validation.isValid) {
    return res.status(400).json({ error: 'Invalid input', details: validation.errors })
  }

  // Rate limit
  const rateCheck = checkRateLimit(clientId)
  if (!rateCheck.allowed) {
    return res.status(429).json({
      error: rateCheck.error,
      retryAfter: rateCheck.retryAfter,
      message: `Please try again in ${rateCheck.retryAfter} seconds`,
    })
  }

  // Check API key
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('ANTHROPIC_API_KEY not configured')
    return res.status(500).json({ error: 'Configuration error', message: 'API key not configured.' })
  }

  try {
    const sanitized = sanitizeInput(problem)
    console.log(`[${new Date().toISOString()}] Consult request from ${clientId} — ${sanitized.length} chars`)

    const client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
      timeout: CONFIG.TIMEOUT_MS,
    })

    const startTime = Date.now()

    const response = await client.messages.create({
      model: CONFIG.MODEL,
      max_tokens: CONFIG.MAX_TOKENS,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: `Business Problem Statement:\n\n${sanitized}` }],
    })

    const processingTimeMs = Date.now() - startTime

    if (!response.content?.length || !response.content[0].text?.trim()) {
      throw new Error('Empty response from Claude API')
    }

    const brief = response.content[0].text

    console.log(`[${new Date().toISOString()}] Success — ${processingTimeMs}ms — ${response.usage.output_tokens} output tokens`)

    return res.status(200).json({
      success: true,
      brief,
      metadata: {
        model: CONFIG.MODEL,
        inputTokens: response.usage.input_tokens,
        outputTokens: response.usage.output_tokens,
        processingTimeMs,
        timestamp: new Date().toISOString(),
      },
    })

  } catch (error) {
    console.error(`[${new Date().toISOString()}] Error:`, error.message)

    if (error.status === 401) return res.status(500).json({ error: 'Authentication failed', message: 'API key is invalid or expired.' })
    if (error.status === 429) return res.status(429).json({ error: 'API rate limited', message: 'Claude API is rate limited. Please try again later.' })
    if (error.status === 500) return res.status(503).json({ error: 'Service unavailable', message: 'Claude API is temporarily unavailable. Please try again.' })

    return res.status(500).json({ error: 'Failed to generate consulting brief', message: error.message })
  }
}