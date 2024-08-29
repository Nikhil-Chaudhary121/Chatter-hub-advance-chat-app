import ChatToMember from "./ChatToMember";
import Conversations from "./Conversations";
import LogoutBtn from "./LogoutBtn";

import SearchBox from "./SearchBox";
import { MdOutlineLogout } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="  flex flex-col  px-6 py-6 h-full gap-4 bg-[#FCFCFC]">
      <div className=" flex flex-col gap-2">
        <h1 className=" z-10 md:text-xl text-lg font-bold font-gilroy text-center ">
          Messages
        </h1>
        <SearchBox />
        <div className=" flex w-full px-2 pt-1 items-center justify-between">
          <div className=" px-4 bg-[#b5c99a] w-fit rounded-full text-sm font-[Poppins] font-semibold text-white py-[6px]">
            <span>All Chats</span>
          </div>
          {/* <ChatToMember /> */}
        </div>
      </div>
      <div className=" relative overflow-y-auto hide-scrollbar overflow-hidden flex-1 pb-10">
        <Conversations />
      </div>
      <div className="hidden md:flex pt-2 justify-self-end w-full  z-20">
        <LogoutBtn />
      </div>
    </div>
  );
};

export default SideBar;
