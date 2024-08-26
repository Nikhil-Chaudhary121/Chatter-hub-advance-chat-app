const SignUp = () => {
  return (
    <div className=" p-8  bg-white rounded-lg flex flex-col gap-2 items-center ">
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
            type="text"
            name=""
            id=""
            placeholder="Ex - Vishal Chaudhary"
            className="pl-4 pr-16 py-[6px] rounded-md bg-[#ededed] placeholder:text-[#787878] border-2 border-zinc-400 focus:border-black"
          />
        </label>
        <label htmlFor="username" className="flex flex-col text-sm font-medium">
          <span className="px-1 text-[#3d3c3c]">Username</span>
          <input
            type="text"
            name=""
            id=""
            placeholder="Ex - vishal0121"
            className="pl-4 pr-16 py-[6px]  rounded-md bg-[#ededed] placeholder:text-[#787878] border-2 border-zinc-400 focus:border-black"
          />
        </label>

        <label htmlFor="username" className="flex flex-col text-sm font-medium">
          <span className="px-1 text-[#3d3c3c]">Password</span>
          <input
            type="text"
            name=""
            id=""
            placeholder="*********"
            className="pl-4 pr-16 py-[6px]  rounded-md bg-[#ededed] placeholder:text-[#787878] border-2 border-zinc-400 focus:border-black"
          />
        </label>
        <label htmlFor="username" className="flex flex-col text-sm font-medium">
          <span className="px-1 text-[#3d3c3c]">Confirm Password</span>
          <input
            type="text"
            name=""
            id=""
            placeholder="*********"
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
                type="radio"
                name="gender"
                value="male"
                className="text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <span className="text-gray-700 text-sm">Male</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
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
        <button className=" w-[96%] py-3 px-6 rounded-lg text-white font-medium bg-[#35c0ef]">
          Sign Up
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

export default SignUp;
