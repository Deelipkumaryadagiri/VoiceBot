# 🎤 AI Voice Bot - Interview Assistant

A modern, interactive voice bot web application that uses GROQ's API (Llama models) to answer interview questions. Built for the 100x Generative AI Developer Assessment.

## ✨ Features

- 🎙️ **Voice Input**: Speak your questions using voice recognition
- 🔊 **Voice Output**: Bot responds with text-to-speech
- 💬 **Text Chat**: Type questions if you prefer
- 🎨 **Beautiful UI**: Modern, responsive design
- 📱 **Mobile Friendly**: Works on all devices
- ⚡ **Real-time**: Instant responses powered by GROQ (Llama 3.1)

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- GROQ API key ([Get one here](https://console.groq.com/keys))

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up your GROQ API key:**
   
   Create a `.env` file in the project root:
   ```bash
   GROQ_API_KEY=your_groq_api_key_here
   PORT=3000
   ```

3. **Customize your responses:**
   
   Edit `server.js` and update the `SYSTEM_PROMPT` section with your personal information:
   - Life story
   - Superpower
   - Growth areas
   - Misconceptions
   - How you push boundaries

4. **Start the server:**
   ```bash
   npm start
   ```

5. **Open your browser:**
   
   Navigate to `http://localhost:3000`

## 🎯 Usage

### Voice Mode
1. Click the "🎤 Start Voice Chat" button
2. Allow microphone access when prompted
3. Speak your question clearly
4. The bot will respond with both text and voice

### Text Mode
1. Type your question in the text input field
2. Press Enter or click "Send"
3. The bot will respond with both text and voice

### Sample Questions
Click any of the pre-loaded sample questions to get started quickly:
- What should we know about your life story?
- What's your #1 superpower?
- What are the top 3 areas you'd like to grow in?
- What misconception do your coworkers have about you?
- How do you push your boundaries and limits?

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Add your GROQ API key in Vercel dashboard:
   - Go to your project settings
   - Navigate to Environment Variables
   - Add `GROQ_API_KEY` with your key

### Option 2: Render

1. Create account at [render.com](https://render.com)
2. Create new Web Service
3. Connect your GitHub repository
4. Add environment variable: `GROQ_API_KEY`
5. Deploy!

### Option 3: Railway

1. Create account at [railway.app](https://railway.app)
2. Create new project
3. Deploy from GitHub
4. Add environment variable: `GROQ_API_KEY`

### Option 4: Heroku

1. Install Heroku CLI
2. Login and create app:
   ```bash
   heroku login
   heroku create your-voicebot-name
   ```

3. Set environment variable:
   ```bash
   heroku config:set GROQ_API_KEY=your_key_here
   ```

4. Deploy:
   ```bash
   git push heroku main
   ```

## 📁 Project Structure

```
voicebot/
├── index.html          # Frontend UI with voice interface
├── server.js           # Backend server with GROQ integration
├── package.json        # Dependencies and scripts
├── .env.example        # Environment variables template
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## 🔧 Configuration

### Customizing Responses

Edit the `SYSTEM_PROMPT` in `server.js` to personalize the bot's responses:

```javascript
const SYSTEM_PROMPT = `You are an AI assistant representing a job candidate...
// Add your personal information here
`;
```

### Adjusting GROQ Parameters

In `server.js`, you can modify:
- `model`: Options include `llama-3.1-8b-instant` (fast), `llama-3.1-70b-versatile` (higher quality), `mixtral-8x7b-32768`
- `temperature`: 0.0-1.0 (lower = more focused, higher = more creative)
- `max_tokens`: Maximum response length

## 🌍 Browser Compatibility

- ✅ Chrome/Edge (Recommended - full voice support)
- ✅ Firefox (text-to-speech only)
- ✅ Safari (limited voice features)
- ⚠️ Voice recognition requires HTTPS in production

## 💡 Tips

1. **Voice Recognition**: Works best in Chrome/Edge browsers
2. **Clear Speech**: Speak clearly and at a moderate pace
3. **Quiet Environment**: Reduce background noise for better recognition
4. **HTTPS Required**: Voice features need HTTPS in production (automatic on most hosting platforms)

## 🐛 Troubleshooting

### Voice recognition not working?
- Ensure you're using Chrome or Edge browser
- Check microphone permissions
- Use HTTPS (required for voice in production)

### API errors?
- Verify your GROQ API key is correct
- Get a free key at [console.groq.com/keys](https://console.groq.com/keys)
- Look at server console for detailed error messages

### Server won't start?
- Make sure Node.js is installed: `node --version`
- Check if port 3000 is available
- Verify all dependencies are installed: `npm install`

## 📧 Project Submission (100x Assessment)

- **Email to:** bhumika@100x.inc  
- **Subject:** GEN AI: GEN AI ROUND 1 ASSESSMENT (IIT DNBD - YOUR NAME)  
- **Include:** Deployed app URL + Resume  

Ensure the app is deployed and accessible before submitting.

## 📝 License

MIT License - feel free to use this for your own projects!

## 🤝 Support

For issues or questions, please check:
- GROQ API documentation: https://console.groq.com/docs
- Web Speech API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API

---

Built with ❤️ for the 100x Generative AI Developer Assessment
