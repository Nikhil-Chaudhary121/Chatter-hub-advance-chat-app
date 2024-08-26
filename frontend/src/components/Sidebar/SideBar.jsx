import Conversations from "./Conversations";
import SearchBox from "./SearchBox";
import { MdOutlineLogout } from "react-icons/md";

const SideBar = () => {
  return (
    <div className=" flex flex-col  px-6 py-6 gap-4 bg-[#FCFCFC]">
      <div className=" flex flex-col gap-2">
        <h1 className=" z-10 text-xl font-bold font-gilroy text-center ">
          Messages
        </h1>
        <SearchBox />
        <div className=" px-4 bg-blue-400 w-fit rounded-full text-sm font-[Poppins] font-semibold text-white py-[6px]">
          All Chats
        </div>
      </div>
      <Conversations />
      <div className=" flex items-center gap-4 w-full border-t-[1.5px] py-2 justify-center">
        <span className=" font-[Poppins] font-medium ">Logout</span>
        <MdOutlineLogout />
      </div>
    </div>
  );
};

export default SideBar;
