<<<<<<< HEAD
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  role: 'student' | 'counsellor';
  email?: string;
  name?: string;
  anonymousId?: string;
=======
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface User {
  id: string;
  role: "student" | "counsellor";
  email?: string;
  name?: string;
  anonymousId?: string;
  [key: string]: any;
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
}

interface AuthContextType {
  user: User | null;
<<<<<<< HEAD
  login: (email: string, password: string, role: 'student' | 'counsellor') => Promise<void>;
  register: (email: string, password: string, name: string, role: 'student' | 'counsellor') => Promise<void>;
=======
  login: (
    email: string,
    password: string,
    role: "student" | "counsellor"
  ) => Promise<void>;
  register: (
    email: string,
    password: string,
    name: string,
    role: "student" | "counsellor",
    extraData?: Record<string, any>
  ) => Promise<void>;
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
<<<<<<< HEAD
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const generateAnonymousId = () => {
    return `anonymous_${Math.random().toString(36).substr(2, 9)}`;
  };

  const login = async (email: string, password: string, role: 'student' | 'counsellor') => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
=======
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const generateAnonymousId = () =>
    `anonymous_${Math.random().toString(36).substr(2, 9)}`;

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.endsWith(".com");
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password);
  };

  const login = async (
    email: string,
    password: string,
    role: "student" | "counsellor"
  ) => {
    if (!validateEmail(email))
      throw new Error("Invalid email (must end with .com)");
    if (!validatePassword(password))
      throw new Error(
        "Password must be at least 8 characters with uppercase, lowercase, digit, and special character"
      );

    await new Promise((resolve) => setTimeout(resolve, 500));
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
    const userData: User = {
      id: Math.random().toString(36).substr(2, 9),
      role,
      email,
<<<<<<< HEAD
      name: email.split('@')[0],
      ...(role === 'student' && { anonymousId: generateAnonymousId() })
    };
    
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const register = async (email: string, password: string, name: string, role: 'student' | 'counsellor') => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
=======
      name: email.split("@")[0],
      ...(role === "student" && { anonymousId: generateAnonymousId() }),
    };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const register = async (
    email: string,
    password: string,
    name: string,
    role: "student" | "counsellor",
    extraData?: Record<string, any>
  ) => {
    if (!validateEmail(email))
      throw new Error("Invalid email (must end with .com)");
    if (!validatePassword(password))
      throw new Error(
        "Password must be at least 8 characters with uppercase, lowercase, digit, and special character"
      );

    await new Promise((resolve) => setTimeout(resolve, 500));
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
    const userData: User = {
      id: Math.random().toString(36).substr(2, 9),
      role,
      email,
      name,
<<<<<<< HEAD
      ...(role === 'student' && { anonymousId: generateAnonymousId() })
    };
    
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
=======
      ...(role === "student" && { anonymousId: generateAnonymousId() }),
      ...extraData,
    };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
  };

  const logout = () => {
    setUser(null);
<<<<<<< HEAD
    localStorage.removeItem('user');
  };

  React.useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const value = {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
=======
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
