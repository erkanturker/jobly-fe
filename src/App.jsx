import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import useLocalStorage from "./Hooks/useLocalStorage";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import JoblyApi from "./api";
import UserContext from "./UserContext";

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
          console.log(username);
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

  return (
    <>
      <UserContext.Provider value={currentUser}>
        <NavBar />
        <Outlet />
      </UserContext.Provider>
    </>
  );
}

export default App;
