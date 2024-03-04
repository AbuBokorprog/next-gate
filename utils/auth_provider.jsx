"use client";
import React, { createContext, useState, useEffect } from "react";
export const authContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    async function currentUser() {
      try {
        fetch("/api/currentUser")
          .then((res) => {
            return res?.json();
          })
          .then((data) => {
            setUser(data);
          });
      } catch (error) {
        console.log(error.message);
      }
    }
    currentUser();
  }, []);

  const value = { user };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthProvider;
