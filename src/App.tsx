<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { WellbeingProvider } from './contexts/WellbeingContext';
import LandingPage from './pages/LandingPage';
import StudentAuth from './pages/StudentAuth';
import CounsellorAuth from './pages/CounsellorAuth';
import StudentDashboard from './pages/StudentDashboard';
import CounsellorDashboard from './pages/CounsellorDashboard';
import BooksHub from './pages/BooksHub';
import VideosHub from './pages/VideosHub';
import BroadcastHub from './pages/BroadcastHub';
import CounsellorBooking from './pages/CounsellorBooking';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Help from './pages/Help';
import About from './pages/About';
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { WellbeingProvider } from "./contexts/WellbeingContext";
import LandingPage from "./pages/LandingPage";
import StudentAuth from "./pages/StudentAuth";
import CounsellorAuth from "./pages/CounsellorAuth";
import StudentDashboard from "./pages/StudentDashboard";
import CounsellorDashboard from "./pages/CounsellorDashboard";
import BooksHub from "./pages/BooksHub";
import VideosHub from "./pages/VideosHub";
import BroadcastHub from "./pages/BroadcastHub";
import CounsellorBooking from "./pages/CounsellorBooking";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Help from "./pages/Help";
import About from "./pages/About";
import ChatbotAssistant from "./components/ChatbotAssistant"; // ✅ Added
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5

function App() {
  return (
    <AuthProvider>
      <WellbeingProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/student-auth" element={<StudentAuth />} />
              <Route path="/counsellor-auth" element={<CounsellorAuth />} />
              <Route path="/student-dashboard" element={<StudentDashboard />} />
<<<<<<< HEAD
              <Route path="/counsellor-dashboard" element={<CounsellorDashboard />} />
=======
              <Route
                path="/counsellor-dashboard"
                element={<CounsellorDashboard />}
              />
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
              <Route path="/books" element={<BooksHub />} />
              <Route path="/videos" element={<VideosHub />} />
              <Route path="/broadcasts" element={<BroadcastHub />} />
              <Route path="/book-counsellor" element={<CounsellorBooking />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/help" element={<Help />} />
              <Route path="/about" element={<About />} />
<<<<<<< HEAD
=======

              {/* ✅ New route for direct chatbot access */}
              <Route path="/chatbot" element={<ChatbotAssistant />} />
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
            </Routes>
          </div>
        </Router>
      </WellbeingProvider>
    </AuthProvider>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
