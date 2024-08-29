import { HiOutlineUsers } from "react-icons/hi2";
import { PiChatText } from "react-icons/pi";

const ChatToMember = () => {
  const handleSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    const usersBtn = document.querySelector(".icon1");
    const chatBtn = document.querySelector(".icon2");
    sidebar.classList.toggle("translate-x-[-100%]");
    usersBtn.classList.toggle("hidden");
    chatBtn.classList.toggle("hidden");
  };
  return (
    <button
      onClick={handleSidebar}
      className="  md:hidden flex justify-center items-center p-2 rounded-xl bg-[#6b9080] w-fit text-white  z-50"
    >
      <PiChatText className=" text-md icon1 " />
      <HiOutlineUsers className=" text-md icon2 hidden " />
    </button>
  );
};

export default ChatToMember;
