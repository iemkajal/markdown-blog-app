import axios from "axios";
import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
export const AuthProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [profile, setProfile] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try { 
        let token = localStorage.getItem("jwt");
        console.log(token)
        const { data } = await axios.get(
          "http://localhost:4001/api/users/my-profile",
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          },
        );
        setProfile(data);
        setIsAuthenticated(true);
      } catch (error) {
        setProfile(null);
        setIsAuthenticated(false);
        console.log(error);
      }
    };

    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4001/api/blogs/all-blogs",
          { withCredentials: true }
        );
        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
    fetchProfile();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        blogs,
        profile,
        setProfile,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
