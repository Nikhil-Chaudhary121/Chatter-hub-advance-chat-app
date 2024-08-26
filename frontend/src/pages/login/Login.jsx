const Login = () => {
  return (
    <div className=" p-8  bg-white rounded-lg flex flex-col gap-2 items-center ">
      <h1 className=" font-bold px-8 text-xl ">
        Login <span className="text-[#227fa7]">ChatterHub</span>
      </h1>
      <p className=" md:text-lg text-md leading-5 text-center">
        Hey,Enter your details to get login <br /> to your account
      </p>
      <div className=" py-4 flex flex-col gap-2">
        <div>
          <label
            htmlFor="username"
            className="flex flex-col text-sm font-medium"
          >
            <span className="px-1 text-[#3d3c3c]">Username</span>
            <input
              type="text"
              name=""
              id=""
              placeholder="Ex - vishal0121"
              className="pl-5 pr-16 py-2 rounded-md bg-[#ededed] placeholder:text-[#787878] border-2 border-zinc-400 focus:border-black"
            />
          </label>
        </div>
        <div>
          <label
            htmlFor="username"
            className="flex flex-col text-sm font-medium"
          >
            <span className="px-1 text-[#3d3c3c]">Password</span>
            <input
              type="text"
              name=""
              id=""
              placeholder="*********"
              className="px-6 py-2 rounded-md bg-[#ededed] placeholder:text-[#787878] border-2 border-zinc-400 focus:border-black"
            />
          </label>
        </div>

        <p className=" text-start text-[13px] font-bold px-1 -mt-2 ">
          Having trouble in login?{" "}
        </p>
      </div>
      <div className=" flex flex-col w-full items-center gap-2">
        <button className=" w-[96%] py-3 px-6 rounded-lg text-white font-medium bg-[#35c0ef]">
          Login
        </button>
        <p className="text-start text-sm ">
          Don't have an account?
          <span className="font-bold">
            <a href="/user/register">Register Now</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
