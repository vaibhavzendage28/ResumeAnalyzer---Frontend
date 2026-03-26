import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
} from "../services/auth.api";

export const useAuth = () => {
  const { user, setUser, loading, setLoading } = useContext(AuthContext);

  const handleLogin = async ({ email, password }) => {
    try {
      setLoading(true);
      const data = await loginUser({ email, password });
      setUser(data.user);
      return true;
    } catch (error) {
      console.error(error);
      setLoading(false);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async ({ username, email, password }) => {
    try {
      setLoading(true);
      const data = await registerUser({ username, email, password });
      setUser(data.user);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      await logoutUser();
      setUser(null);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    const fetchUser = async () => {
      try {
        setLoading(true);
        const data = await getUser();
        setUser(data.user);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return {
    user,
    loading,
    handleLogin,
    handleRegister,
    handleLogout,
  };
};
