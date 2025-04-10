# 🏥 AI-Powered Health Assistant

An intelligent healthcare management system that helps users track their health, manage medications, and get AI-powered symptom analysis.

## 🌟 Features

- 👤 User Authentication & Role-Based Access
- 🤖 AI-Powered Symptom Analysis
- 💊 Medication & Appointment Reminders
- 📋 Health History Tracking
- 👨‍⚕️ Doctor Dashboard
- 📱 Responsive Web Interface

## 🛠️ Tech Stack

### Frontend
- React.js with TypeScript
- Shadcn/UI + Tailwind CSS
- Vite

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication

### AI Service
- Python + FastAPI
- OpenAI Integration

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- Python (v3.8+)
- MongoDB

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd health-assistant
```

2. Install dependencies
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

# Install AI service dependencies
cd ../ai-service
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
pip install -r requirements.txt
```

3. Environment Setup
```bash
# Server (.env)
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

# AI Service (.env)
OPENAI_API_KEY=your_openai_api_key
```

4. Start the services
```bash
# Start server
cd server
npm run dev

# Start client
cd client
npm run dev

# Start AI service
cd ai-service
uvicorn app:app --reload
```

## 📁 Project Structure
```
project-root/
├── client/                  # React frontend
├── server/                  # Node.js backend
└── ai-service/             # Python AI service
```

## 🔒 API Endpoints

### Authentication
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/me

### User Profile
- GET /api/profile
- PUT /api/profile

### Reminders
- GET /api/reminders
- POST /api/reminders
- PUT /api/reminders/:id
- DELETE /api/reminders/:id

### AI Symptom Check
- POST /api/symptom-check

## 👥 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details. 