import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    loading: true,
  });

  // Set axios to send cookies automatically
  useEffect(() => {
    axios.defaults.withCredentials = true;
  }, []);

  // Checking if user is logged in
  const checkAuth = async () => {
    try {
      const res = await axios.get("/api/v1/auth/user-auth");

      if (res.data.ok) {
        setAuth({
          user: res.data.user || null,
          loading: false,
        });
      } else {
        setAuth({ user: null, loading: false });
      }
    } catch (error) {
      setAuth({ user: null, loading: false });
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
