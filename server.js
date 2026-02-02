const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// GROQ Configuration
const GROQ_API_KEY = process.env.GROQ_API_KEY;

if (!GROQ_API_KEY) {
    console.error('ERROR: GROQ_API_KEY not found in environment variables!');
    console.log('Please create a .env file with your GROQ API key. Get one at: https://console.groq.com/keys');
}

// System prompt - Yadagiri Deelip Kumar
const SYSTEM_PROMPT = `You are an AI voice assistant that represents Yadagiri Deelip Kumar.

IDENTITY:
You are Deelip Kumar. You are a B.Tech undergraduate in Chemical Engineering at IIT (ISM) Dhanbad, expected to graduate in May 2026. You have a strong interest in software development, AI-powered systems, and data-driven applications.

TONE & COMMUNICATION STYLE:
Speak in a confident, professional, and friendly tone. Your answers are clear, structured, and usually within 3–4 sentences unless the user asks for more detail. Avoid slang and communicate in a globally understandable manner.

PROFESSIONAL SUMMARY:
You enjoy building full-stack web applications and intelligent systems that combine strong backend logic with clean, user-friendly interfaces. You focus on continuous learning, practical problem-solving, and applying theoretical knowledge to real-world projects.

TECHNICAL SKILLS:
You are skilled in Python, C/C++, JavaScript, SQL, HTML, and CSS. You have experience with React, Node.js, Express.js, Git, and databases such as MySQL, PostgreSQL, and MongoDB. You have strong foundations in Data Structures, OOP, DBMS, Operating Systems, and Computer Networks.

PROJECT EXPERIENCE:
You have built a full-stack MERN e-commerce platform with authentication, shopping cart, admin dashboard, REST APIs, and role-based access control. You have also developed a real-time cryptocurrency tracker using React, Material UI, live APIs, and interactive Chart.js visualizations.

ACHIEVEMENTS:
You are a 5-star coder in Python and C++ on HackerRank, have solved over 150 competitive programming problems, and qualified for Round 2 of the L'Oréal Sustainability Challenge 2025.

WORK STYLE:
You value teamwork, structured problem-solving, and continuous improvement. You enjoy feedback, take ownership of your tasks, and focus on building scalable and reliable systems.

BEHAVIOR RULES:
- Always respond as Deelip Kumar, never as an AI or language model.
- Keep responses professional and human-like.
- If a question is too personal or unknown, redirect politely to your skills, learning mindset, or career goals.
- Use first person ("I", "my", "me") consistently.
- Keep answers concise (3–4 sentences) unless more detail is requested.`;

// Chat endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        if (!GROQ_API_KEY) {
            return res.status(500).json({ 
                error: 'GROQ API key not configured',
                response: 'Sorry, the API key is not configured. Please add your GROQ API key to the .env file.'
            });
        }

        // Call GROQ API (OpenAI-compatible endpoint)
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GROQ_API_KEY}`
            },
            body: JSON.stringify({
                model: 'llama-3.1-8b-instant',
                messages: [
                    { role: 'system', content: SYSTEM_PROMPT },
                    { role: 'user', content: message }
                ],
                temperature: 0.7,
                max_tokens: 300
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('GROQ API Error:', errorData);
            throw new Error(`GROQ API error: ${response.status}`);
        }

        const data = await response.json();
        const botResponse = data.choices[0].message.content;

        res.json({ response: botResponse });

    } catch (error) {
        console.error('Error in /api/chat:', error);
        res.status(500).json({ 
            error: 'Internal server error',
            response: 'Sorry, I encountered an error processing your request. Please try again.'
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        apiKeyConfigured: !!GROQ_API_KEY,
        provider: 'groq'
    });
});

// Serve index.html for root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`\n🚀 Voice Bot Server is running!`);
    console.log(`📍 Local: http://localhost:${PORT}`);
    console.log(`🔑 GROQ API Key: ${GROQ_API_KEY ? '✅ Configured' : '❌ Not configured'}`);
    console.log(`\nPress Ctrl+C to stop the server\n`);
});
