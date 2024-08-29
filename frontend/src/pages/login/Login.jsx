import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import LoadingBtn from "../../components/Sidebar/LoadingBtn";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" p-8  bg-white rounded-lg flex flex-col gap-2 items-center "
    >
      <h1 className=" font-bold px-8 text-xl ">
        Login <span className="text-[#227fa7]">ChatterHub</span>
      </h1>
      <p className=" md:text-lg text-md leading-5 text-center">
        Hey,Enter your details to get login <br /> to your account
      </p>
      <div className=" py-4 flex flex-col w-full gap-2">
        <div>
          <label
            htmlFor="username"
            className="flex flex-col text-sm font-medium"
          >
            <span className="px-1 text-[#3d3c3c]">Username</span>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name=""
              id=""
              placeholder="Enter Username"
              className="px-3 py-2 rounded-md bg-[#ededed] placeholder:text-[#787878] border-2 border-zinc-400 focus:border-black"
            />
          </label>
        </div>
        <div className=" w-full">
          <label
            htmlFor="password"
            className="flex flex-col w-full text-sm font-medium"
          >
            <span className="px-1 text-[#3d3c3c]">Password</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name=""
              id=""
              placeholder="Enter Password"
              className="px-3 w-full py-2 rounded-md bg-[#ededed] placeholder:text-[#787878] border-2 border-zinc-400 focus:border-black"
            />
          </label>
        </div>

        <p className=" text-start text-[13px] font-bold px-1 -mt-2 ">
          Having trouble in login?{" "}
        </p>
      </div>
      <div className=" flex flex-col w-full items-center gap-2">
        <button
          disabled={loading}
          type="submit"
          className=" w-[96%] py-2 px-6 rounded-lg text-white font-[Poppins] font-medium bg-[#35c0ef]"
        >
          {loading ? <LoadingBtn /> : "Login"}
        </button>
        <p className="text-start text-sm ">
          Don't have an account?
          <span className="font-bold">
            <Link to="/signup">Register Now</Link>
          </span>
        </p>
      </div>
    </form>
  );
};

export default Login;
