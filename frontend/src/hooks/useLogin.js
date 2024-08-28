import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState();
  const { setAuthUser } = useAuthContext();
  const login = async (username, password) => {
    const success = handleInputError(username, password);
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chatter-hub-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };
  return { loading, login };
};

export default useLogin;

function handleInputError(username, password) {
  if (!username || !password) {
    toast.error("Please enter both username and password");
    return false;
  }
  return true;
}
