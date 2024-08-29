import { IoChatbubblesOutline } from "react-icons/io5";
import { useAuthContext } from "../context/AuthContext";
import { MdOutlineLogout } from "react-icons/md";
import useLogout from "../hooks/useLogout";
import LoadingBtn from "./Sidebar/LoadingBtn";
import ChatToMember from "./Sidebar/ChatToMember";
const Nav = () => {
  const { authUser } = useAuthContext();
  const { loading, logout } = useLogout();
  console.log("user data ", authUser);

  return (
    <>
      <div className="z-10 bg-[#F7F8FA] shadow w-full flex justify-between  md:px-12 px-6 py-3">
        <div className=" flex items-center gap-2 ">
          <IoChatbubblesOutline className="text-[#718355] md:text-4xl text-3xl" />
          <h1 className="md:text-xl text-lg text-[#2f3435] font-bold">
            ChatterHub
          </h1>
        </div>
        <div className=" flex items-center gap-4">
          <ChatToMember />
          {loading ? (
            <button className="flex cursor-progress bg-[#b4b4b4] rounded-lg items-center gap-4 w-full  py-2 justify-center">
              <LoadingBtn />
            </button>
          ) : (
            <button
              onClick={logout}
              className="flex bg-[#b4b4b4] rounded-lg items-center gap-4 w-full  p-2 justify-center"
            >
              <MdOutlineLogout className=" text-black" />
            </button>
          )}
          <img
            src={authUser.profilePic}
            alt=""
            className="md:w-10 w-8 shadow md:h-10 h-8 rounded-full"
          />
        </div>
      </div>
      {/* <div className=" w-full h-[1.5px] bg-[#e2e2e2b8]"></div> */}
    </>
  );
};

export default Nav;
