// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { firebaseActions } from "../firebase/firebase-actions/functions";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthState = async () => {
      try {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser) {
          // Możesz dodać dodatkową weryfikację tokena tutaj
          setUser(savedUser);
          console.log("User logged in", savedUser);
        }
      } catch (error) {
        console.error("Error checking auth state:", error);
        logout();
      } finally {
        setLoading(false);
      }
    };

    checkAuthState();
  }, []);

  const login = async (cardId, password) => {
    setLoading(true);
    try {
      const userData = await firebaseActions.loginUser(cardId, password);
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return true;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, loading, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth musi być użyte wewnątrz AuthProvider");
  }
  return context;
};
