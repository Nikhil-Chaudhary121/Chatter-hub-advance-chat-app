import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import LoadingBtn from "../../components/Sidebar/LoadingBtn";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { signup, loading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);

    await signup(inputs);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" p-8  bg-white rounded-lg flex flex-col gap-2 items-center "
    >
      <h1 className=" font-bold px-8 text-xl ">
        Sign Up <span className="text-[#227fa7]">ChatterHub</span>
      </h1>
      <p className=" md:text-lg text-md md:leading-[18px] leading-5 text-center">
        Hey,Enter your details to create <br />a new account
      </p>
      <div className=" py-2 flex flex-col gap-1">
        <label htmlFor="username" className="flex flex-col text-sm font-medium">
          <span className="px-1 text-[#3d3c3c]">Full Name</span>
          <input
            value={inputs.fullName}
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            type="text"
            name=""
            id=""
            placeholder="Enter Full Name"
            className="pl-4 pr-16 py-[6px] rounded-md bg-[#ededed] placeholder:text-[#787878] border-2 border-zinc-400 focus:border-black"
          />
        </label>
        <label htmlFor="username" className="flex flex-col text-sm font-medium">
          <span className="px-1 text-[#3d3c3c]">Username</span>
          <input
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            type="text"
            name=""
            id=""
            placeholder="Enter Username"
            className="pl-4 pr-16 py-[6px]  rounded-md bg-[#ededed] placeholder:text-[#787878] border-2 border-zinc-400 focus:border-black"
          />
        </label>

        <label htmlFor="username" className="flex flex-col text-sm font-medium">
          <span className="px-1 text-[#3d3c3c]">Password</span>
          <input
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            type="password"
            name=""
            id=""
            placeholder="Create Password"
            className="pl-4 pr-16 py-[6px]  rounded-md bg-[#ededed] placeholder:text-[#787878] border-2 border-zinc-400 focus:border-black"
          />
        </label>
        <label htmlFor="username" className="flex flex-col text-sm font-medium">
          <span className="px-1 text-[#3d3c3c]">Confirm Password</span>
          <input
            value={inputs.confirmPassword}
            onChange={(e) =>
              setInputs({ ...inputs, confirmPassword: e.target.value })
            }
            type="password"
            name=""
            id=""
            placeholder="Confirm Password"
            className="pl-4 pr-16 py-[6px] rounded-md bg-[#ededed] placeholder:text-[#787878] border-2 border-zinc-400 focus:border-black"
          />
        </label>
        <div className=" px-2">
          <label className="block text-sm font-medium text-[#3d3c3c]">
            Gender
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                checked={inputs.gender === "male"}
                onClick={() => {
                  setInputs({ ...inputs, gender: "male" });
                }}
                type="radio"
                name="gender"
                value="male"
                className="text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <span className="text-gray-700 text-sm">Male</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                checked={inputs.gender === "female"}
                onClick={() => {
                  setInputs({ ...inputs, gender: "female" });
                }}
                type="radio"
                name="gender"
                value="female"
                className="text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <span className="text-gray-700 text-sm ">Female</span>
            </label>
          </div>
        </div>

        {/* <p className=" text-start text-[11px] font-bold px-1 -mt-2 ">
          Having trouble while creating account?{" "}
        </p> */}
      </div>
      <div className=" flex flex-col w-full items-center gap-2">
        <button
          disabled={loading}
          type="submit"
          className=" w-[96%] py-2 px-6 rounded-lg text-white font-[Poppins] font-medium bg-[#35c0ef]"
        >
          {loading ? <LoadingBtn /> : "Sign Up"}
        </button>
        <p className="text-start text-sm ">
          Don't have an account?
          <span className="font-bold">
            <Link to="/login">Login Now</Link>
          </span>
        </p>
      </div>
    </form>
  );
};

export default SignUp;
