import { IoChatbubblesOutline } from "react-icons/io5";
import { useAuthContext } from "../context/AuthContext";
const Nav = () => {
  const { authUser } = useAuthContext();
  console.log("user data ", authUser);

  return (
    <>
      <div className="z-10 bg-[#F7F8FA] shadow w-full flex justify-between  px-12 py-3">
        <div className=" flex items-center gap-2 ">
          <IoChatbubblesOutline className="text-[#256e8d] text-4xl" />
          <h1 className="text-xl text-[#2f3435] font-bold">ChatterHub</h1>
        </div>
        <img
          src={authUser.profilePic}
          alt=""
          className="w-10 shadow h-10 rounded-full"
        />
      </div>
      {/* <div className=" w-full h-[1.5px] bg-[#e2e2e2b8]"></div> */}
    </>
  );
};

export default Nav;
