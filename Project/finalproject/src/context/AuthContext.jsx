import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const logUserActivity = async (userId, email, name, status) => {
    try {
      const timestamp = new Date().toISOString();
      await axios.post("http://localhost:3001/userLogs", {
        userId,
        email,
        name,
        timestamp,
        status,
        id: Date.now().toString(),
      });
    } catch (error) {
      console.error("Error logging user activity:", error);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/users?email=${email}`
      );
      const userData = response.data[0];

      if (!userData) {
        throw new Error("User not found");
      }

      if (userData.password !== password) {
        throw new Error("Invalid password");
      }

      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));

      // Log login activity
      await logUserActivity(
        userData.id,
        userData.email,
        userData.name,
        "Active"
      );

      return userData;
    } catch (error) {
      throw error;
    }
  };

  const signup = async (name, email, password) => {
    try {
      // Check if user already exists
      const checkUser = await axios.get(
        `http://localhost:3001/users?email=${email}`
      );
      if (checkUser.data.length > 0) {
        throw new Error("User already exists");
      }

      // Create new user
      const response = await axios.post("http://localhost:3001/users", {
        name,
        email,
        password,
        role: "user",
      });

      const userData = response.data;
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));

      // Log login activity for new user
      await logUserActivity(
        userData.id,
        userData.email,
        userData.name,
        "Active"
      );

      return userData;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    if (user) {
      // Log logout activity
      await logUserActivity(user.id, user.email, user.name, "Logged Out");
    }

    setUser(null);
    localStorage.removeItem("user");
  };

  const isAdmin = () => {
    return user && user.role === "admin";
  };

  const value = {
    user,
    login,
    signup,
    logout,
    isAdmin,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
