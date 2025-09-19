<<<<<<< HEAD
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Users, Mail, Lock, User, ArrowLeft } from 'lucide-react';

const CounsellorAuth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (isLogin) {
        await login(email, password, 'counsellor');
      } else {
        await register(email, password, name, 'counsellor');
      }
      navigate('/counsellor-dashboard');
    } catch (error) {
      console.error('Authentication error:', error);
=======
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Users, Mail, Lock, ArrowLeft } from "lucide-react";

const CounsellorAuth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [degree, setDegree] = useState("");
  const [university, setUniversity] = useState("");
  const [experience, setExperience] = useState("");
  const [proofFile, setProofFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { login, register } = useAuth();
  const navigate = useNavigate();

  const validateEmail = (value: string) => {
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z.-]+\.[A-Za-z]{2,}$/.test(value)) {
      setEmailError("Invalid email !");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (value: string) => {
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(value)) {
      setPasswordError(
        "Invalid password !"
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (emailError || passwordError || !email || !password) return;

    setLoading(true);
    try {
      if (isLogin) {
        await login(email, password, "counsellor");
      } else {
        await register(email, password, name, "counsellor", {
          firstName,
          lastName,
          degree,
          university,
          experience,
          proofFile,
        });
      }
      navigate("/counsellor-dashboard");
    } catch {
      setError("Authentication failed.");
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
    } finally {
      setLoading(false);
    }
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-green-500 mb-8 transition-colors duration-200"
=======
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-500 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-gray-600 hover:text-green-500 mb-8"
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8">
<<<<<<< HEAD
          <div className="text-center mb-8">
            <Users className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-light text-gray-800 mb-2">
              {isLogin ? 'Counsellor Portal' : 'Join as Counsellor'}
            </h2>
            <p className="text-gray-600">
              {isLogin ? 'Help students on their wellness journey' : 'Become a wellness guide'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
=======
          <div className="text-center mb-6">
            <Users className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-light text-gray-800 mb-2">
              {isLogin ? "Counsellor Portal" : "Join as Counsellor"}
            </h2>
            {error && <p className="text-red-500">{error}</p>}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
                <input
                  type="text"
                  placeholder="Professional Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
<<<<<<< HEAD
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  required={!isLogin}
                />
              </div>
=======
                  className="w-full pl-4 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500"
                  required
                />

                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-1/2 pl-4 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-1/2 pl-4 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <input
                  type="text"
                  placeholder="Highest Degree"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  className="w-full pl-4 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500"
                  required
                />
                <input
                  type="text"
                  placeholder="University / College"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                  className="w-full pl-4 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Experience (in years)"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full pl-4 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500"
                  required
                />

                <div className="border-2 border-dashed border-green-400 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer hover:border-green-600 transition-colors">
                  <label className="flex flex-col items-center cursor-pointer w-full">
                    <span className="text-gray-500 mb-2">
                      Upload Highest Qualification / Degree Certificate
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) =>
                        setProofFile(e.target.files?.[0] || null)
                      }
                      className="hidden"
                    />
                    <span className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                      {proofFile ? proofFile.name : "Choose File"}
                    </span>
                  </label>
                </div>
              </>
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
<<<<<<< HEAD
                placeholder="Professional Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                required
              />
=======
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500"
                required
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                placeholder="Password"
                value={password}
<<<<<<< HEAD
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                required
              />
=======
                onChange={(e) => {
                  setPassword(e.target.value);
                  validatePassword(e.target.value);
                }}
                className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500"
                required
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
            </div>

            <button
              type="submit"
              disabled={loading}
<<<<<<< HEAD
              className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 disabled:transform-none shadow-lg hover:shadow-xl"
            >
              {loading ? 'Please wait...' : (isLogin ? 'Access Portal' : 'Join Platform')}
            </button>
          </form>

          <div className="text-center mt-6">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-green-500 hover:text-green-600 font-medium transition-colors duration-200"
            >
              {isLogin ? "New counsellor? Join us" : "Already registered? Sign in"}
=======
              className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white py-3 rounded-xl font-medium shadow-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none"
            >
              {loading
                ? "Please wait..."
                : isLogin
                ? "Sign In"
                : "Join Platform"}
            </button>
          </form>

          <div className="text-center mt-4">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-green-500 hover:text-green-600 font-medium"
            >
              {isLogin
                ? "New counsellor? Join us"
                : "Already registered? Sign in"}
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default CounsellorAuth;
=======
export default CounsellorAuth;
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
