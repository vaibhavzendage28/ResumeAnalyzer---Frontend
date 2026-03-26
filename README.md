# Resume Analyzer - Frontend

> Modern, responsive React frontend for AI-powered interview preparation

## 🎯 Overview

Resume Analyzer Frontend is a sleek, user-friendly React application that enables job seekers to upload resumes, analyze them against job descriptions, and receive AI-generated interview insights. Built with React 19, Vite, and Tailwind CSS, it delivers a fast, intuitive user experience.

## ✨ Key Features

- **Drag-and-Drop Resume Upload** - Intuitive PDF upload interface
- **Real-Time Analysis** - Instant AI-powered interview report generation
- **Interactive Dashboard** - View and manage interview reports
- **Dynamic Theming** - Color-coded match scores (Green/Yellow/Red)
- **Responsive Design** - Seamless experience across all devices
- **JWT Authentication** - Secure user authentication and session management
- **Report History** - Quick access to previous analysis reports
- **Modern UI** - Dark theme with smooth animations and transitions

## 🛠️ Tech Stack

- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.3.1
- **Routing**: React Router DOM 7.13.1
- **Styling**: Tailwind CSS 4.2.1
- **HTTP Client**: Axios 1.13.6
- **Package Manager**: npm

## 📋 Project Structure

```
Frontend/
├── src/
│   ├── features/
│   │   ├── auth/                          # Authentication feature
│   │   │   ├── components/
│   │   │   │   └── Loading.jsx            # Loading spinner component
│   │   │   ├── context/
│   │   │   │   └── AuthContext.jsx        # Auth state management
│   │   │   ├── hooks/
│   │   │   │   └── useAuth.js             # Auth custom hook
│   │   │   ├── pages/
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Register.jsx
│   │   │   └── services/
│   │   │       └── api.js                 # Auth API calls
│   │   │
│   │   └── interview/                      # Interview feature
│   │       ├── context/
│   │       │   └── InterviewContext.jsx   # Interview state management
│   │       ├── hooks/
│   │       │   └── useInterview.js        # Interview custom hook
│   │       ├── pages/
│   │       │   ├── Home.jsx               # Resume upload & dashboard
│   │       │   └── Interview.jsx          # Report display page
│   │       └── services/
│   │           └── api.js                 # Interview API calls
│   │
│   ├── App.jsx                            # Main app component with routing
│   ├── main.jsx                           # React entry point
│   └── index.css                          # Global styles
│
├── index.html                             # HTML template
├── vite.config.js                         # Vite configuration
├── tailwind.config.js                     # Tailwind CSS config
├── eslint.config.js                       # ESLint rules
└── package.json

```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Backend API running on `http://localhost:3000`

### Installation

1. **Clone & Navigate**

   ```bash
   cd Frontend
   npm install
   ```

2. **Start Development Server**

   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:5173`

3. **Build for Production**

   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📁 Feature Modules

### Authentication Module (`features/auth`)

Handles user registration, login, and session management.

**Components:**

- `Login.jsx` - User login form with validation
- `Register.jsx` - Account creation form
- `Loading.jsx` - Reusable loading spinner

**Key Files:**

- `AuthContext.jsx` - Global auth state (user, token, loading)
- `useAuth()` - Custom hook for auth operations
- `api.js` - API calls for register/login/logout

### Interview Module (`features/interview`)

Core feature for resume analysis and report generation.

**Pages:**

- `Home.jsx` - Resume upload, job description input, report dashboard
- `Interview.jsx` - Detailed interview report with questions and feedback

**Key Files:**

- `InterviewContext.jsx` - Global state for reports and analysis
- `useInterview()` - Custom hook for interview operations
- `api.js` - API calls for report generation and retrieval

## 🎨 UI/UX Design

### Color Scheme

The application uses a professional dark theme:

- **Background**: Slate-950 to Slate-900 (dark gradient)
- **Primary Accent**: Red (#DC2626) - Call-to-action, primary buttons
- **Success**: Green (#22C55E) - Excellent match scores (80%+)
- **Warning**: Yellow (#EAB308) - Good match scores (60-79%)
- **Alert**: Red (#EF4444) - Needs improvement (<60%)

### Key UI Features

- **Side-by-Side Layout**: Form (2/3 width) and Reports (1/3 width)
- **Dynamic Report Cards**: Background and border colors change based on match score
- **Progress Bars**: Visual representation of match percentage
- **Hover Effects**: Smooth animations and scale transitions
- **Responsive Grid**: Adapts from mobile to desktop layouts

## 🔄 State Management

### Authentication Context

```javascript
{
  user: { id, name, email },
  token: 'jwt_token',
  loading: boolean,
  isAuthenticated: boolean
}
```

### Interview Context

```javascript
{
  reports: [],
  currentReport: {},
  loading: boolean
}
```

## 🔌 API Integration

**Base URL**: `http://localhost:3000/api`

### Auth Endpoints

- `POST /auth/register` - Create account
- `POST /auth/login` - Login user
- `POST /auth/logout` - Logout user

### Interview Endpoints

- `POST /interview/generate` - Generate report (requires: resume file, jobDescription, selfDescription)
- `GET /interview/reports` - Get all reports
- `GET /interview/reports/:id` - Get specific report

## 🎯 How It Works

1. **User Registration/Login**
   - Register new account or login with existing credentials
   - JWT token stored in localStorage

2. **Resume Upload**
   - Drag-and-drop PDF resume
   - Enter job description and skills summary
   - Click "Analyze Resume"

3. **AI Analysis**
   - Backend extracts resume text from PDF
   - Google GenAI analyzes against job description
   - Generates match score and interview questions

4. **View Reports**
   - Reports appear on dashboard with color-coded match scores
   - Click report to view detailed interview questions
   - Questions include: intent, sample answers, behavioral guidance

## 🧩 Component Composition

### Home.jsx Structure

```
Home
├── Loading (conditional)
├── Main Container
│   ├── Background Elements (animated)
│   ├── Left Section (2/3)
│   │   └── Resume Form
│   │       ├── Header
│   │       ├── File Upload
│   │       ├── Job Description Input
│   │       ├── Self Description Input
│   │       └── Submit Button
│   └── Right Section (1/3)
│       └── Reports List
│           └── Report Cards (dynamic theming)
```

### Interview.jsx Structure

```
Interview
├── Loading (conditional)
├── Header Section
├── Match Score Display
├── Tab Navigation
│   ├── Technical Questions
│   ├── Behavioral Questions
│   ├── Skill Gaps
│   └── Preparation Plan
└── Question Cards (expandable)
```

## 🎯 Custom Hooks

### useAuth()

```javascript
const { user, token, login, register, logout } = useAuth();
```

### useInterview()

```javascript
const { reports, currentReport, generateReport, loading } = useInterview();
```

## 🔒 Security

- **JWT Token Storage**: Secure session management
- **Protected Routes**: Only authenticated users access interview features
- **Environment Variables**: Sensitive data in `.env` file
- **HTTPS Ready**: Production-ready security headers

## 🧪 Code Quality

- **ESLint**: Configured for code linting
- **React Hooks**: Modern functional components
- **Custom Hooks**: Reusable logic abstraction
- **Modular Structure**: Feature-based organization

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (2 column with adjustments)
- **Desktop**: > 1024px (full 2/3 - 1/3 layout)

## 🚀 Performance Optimizations

- **Vite**: Lightning-fast build tool with HMR
- **Code Splitting**: Route-based lazy loading
- **Tailwind CSS**: Optimized utility-first CSS
- **React 19**: Latest performance improvements
- **Efficient Re-renders**: Hooks and context optimization

## 📦 Environment Setup

Create `.env` file (if needed for API configuration):

```env
VITE_API_URL=http://localhost:3000/api
```

## 🔄 Development Workflow

1. **Start Dev Server**

   ```bash
   npm run dev
   ```

2. **Make Changes** - Hot Module Replacement updates changes instantly

3. **Lint Code**

   ```bash
   npm run lint
   ```

4. **Build & Preview**
   ```bash
   npm run build
   npm run preview
   ```

## 🌐 Deployment

### Vercel (Recommended for React/Vite)

```bash
npm install -g vercel
vercel
```

### GitHub Pages

```bash
npm run build
# Push dist/ folder to gh-pages branch
```

### Traditional Hosting

1. Build: `npm run build`
2. Upload `dist/` folder to your server
3. Configure server for SPA routing (redirect 404s to index.html)

## 📚 Available Scripts

| Command           | Description                   |
| ----------------- | ----------------------------- |
| `npm run dev`     | Start development server      |
| `npm run build`   | Create production build       |
| `npm run preview` | Preview production build      |
| `npm run lint`    | Run ESLint code quality check |

## 🤝 Contributing

When contributing to the frontend:

1. Follow React best practices
2. Use functional components with hooks
3. Maintain feature-based folder structure
4. Keep components modular and reusable
5. Write meaningful commit messages

## 🐛 Common Issues

**Issue**: CORS errors when connecting to backend

- **Solution**: Ensure backend is running on port 3000 and CORS is configured correctly

**Issue**: Reports not loading

- **Solution**: Check JWT token validity, clear localStorage and re-login

**Issue**: PDF upload fails

- **Solution**: Ensure file is valid PDF and under size limit

## 📄 License

This project is licensed under the ISC License.

## 💡 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Export reports as PDF
- [ ] Interview video simulation
- [ ] Real-time collaboration features
- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] Multi-language support

---

**Empowering careers through AI-driven interview preparation** 🚀
