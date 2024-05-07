const useAuth = () => {
  let isLoggedIn;

  const authToken = localStorage.getItem("authToken");

  if (authToken) {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
  }

  return isLoggedIn;
};

export default useAuth;
