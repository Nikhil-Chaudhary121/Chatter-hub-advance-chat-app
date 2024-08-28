import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState();
  const { authUser, setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    console.log(fullName, username, password, confirmPassword);

    const success = handleInputError({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    // console.log(success);

    if (!success) return;

    try {
      setLoading(true);

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      //local Storage
      localStorage.setItem("chatter-hub-user", JSON.stringify(data));
      setAuthUser(data);

      toast.success("Signup successful!");
      console.log(data);
      //
    } catch (error) {
      toast.error("Failed to signup");
    } finally {
      setLoading(false);
    }
  };
  return { signup, loading };
};

export default useSignup;

function handleInputError({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  //   console.log("i am in handle input Error");

  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password should be at least 6 characters long");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }
  return true;
}
