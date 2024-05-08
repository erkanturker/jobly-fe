import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import useLocalStorage from "./Hooks/useLocalStorage";
import JoblyApi from "./api";
import NavBar from "./components/NavBar";

export const TOKEN_STORAGE_ID = "authToken";

function App() {
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwtDecode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (error) {
          console.error("App loadUserInfo: problem loading", error);
        }
      }
    }
    getCurrentUser();
  }, [token]);

  const login = async (loginData) => {
    try {
      const token = await JoblyApi.authToken(loginData);
      setToken(token);
      return { success: true };
    } catch (error) {
      console.error("login failed", error);
      return { success: false, error };
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setToken(null);
  };

  return (
    <>
      <NavBar onLogout={logout} currentUser={currentUser} />
      <Outlet context={{ login, currentUser }} />
    </>
  );
}

export default App;
