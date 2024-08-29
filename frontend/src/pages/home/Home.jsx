import MessageContainer from "../../components/Message/MessageContainer";
import Nav from "../../components/Nav";
import SideBar from "../../components/Sidebar/SideBar";
import { HiOutlineUsers } from "react-icons/hi2";
import { PiChatText } from "react-icons/pi";

const Home = () => {
  return (
    <div className=" relative w-full flex flex-col h-full">
      <Nav />
      <div className="flex relative flex-1 ">
        <div className=" md:inline hidden absolute md:relative h-full duration-700 md:h-auto z-40 w-full md:w-auto   md:flex-none flex-1">
          <SideBar />
        </div>
        <div className=" sidebar inline md:hidden absolute md:relative h-full duration-700 md:h-auto z-40 w-full md:w-auto   md:flex-none flex-1">
          <SideBar />
        </div>
        <div className="flex-1 bg-[#EAEBED] md:p-6 p-2 overflow-hidden">
          <MessageContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
