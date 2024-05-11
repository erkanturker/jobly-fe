/**
 * Module: App
 * This module defines the main component of the Jobly application. It handles authentication,
 * user data management, and rendering of navigation and child components.
 */

import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import useLocalStorage from "./Hooks/useLocalStorage";
import JoblyApi from "./api";
import NavigationBar from "./components/NavigationBar";

// Storage key for authentication token
export const TOKEN_STORAGE_ID = "authToken";

/**
 * Main component of the Jobly application, responsible for managing authentication,
 * user data, and rendering navigation and child components.
 * @returns {ReactElement} - React element representing the main App component.
 */
function App() {
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [currentUser, setCurrentUser] = useState(null);

  // Effect hook to load user information when the component mounts or token changes
  useEffect(() => {
    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getCurrentUser() {
      if (token) {
        try {
          // Decode the JWT token to get the username
          let { username } = jwtDecode(token);
          // Set the token in JoblyApi for authenticated requests
          JoblyApi.token = token;

          // Fetch current user data using the username
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          console.log(currentUser);
        } catch (error) {
          console.error("App loadUserInfo: problem loading", error);
        }
      }
    }
    getCurrentUser();
  }, [token]);

  // Function to handle user login
  const login = async (loginData) => {
    try {
      // Authenticate user and get JWT token
      const token = await JoblyApi.authToken(loginData);
      setToken(token);
      return { success: true };
    } catch (error) {
      console.error("login failed", error);
      return { success: false, error };
    }
  };

  // Function to handle user signup
  const signup = async (signupData) => {
    try {
      // Create user and get JWT token
      const token = await JoblyApi.createUser(signupData);
      // Set the token in local storage
      setToken(token);
      return { success: true };
    } catch (error) {
      console.error("signup error:" + error);
      return { success: false, error };
    }
  };

  // Function to update user profile
  const updateUser = async (username, updateData) => {
    try {
      // Update user profile
      const updatedUser = await JoblyApi.updateUser(username, updateData);
      // Update current user state with updated profile data
      setCurrentUser((user) => ({
        ...user,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        email: updatedUser.email,
      }));
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error,
      };
    }
  };

  // Function to apply for a job
  const applyJob = async (username, jobId) => {
    // Apply for the job and get the applied job ID
    const appliedJobId = await JoblyApi.applyJob(username, jobId);

    // Update current user state with the applied job ID
    setCurrentUser((user) => ({
      ...user,
      applications: [...user.applications, appliedJobId],
    }));
  };

  const logout = () => {
    setCurrentUser(null);
    setToken(null);
  };

  // Render navigation bar and child components within React-dom Outlet Container
  return (
    <>
      <NavigationBar onLogout={logout} currentUser={currentUser} />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <Outlet
            context={{ login, signup, currentUser, updateUser, applyJob }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
