import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversations: c }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(c._id);

  const handleSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    const usersBtn = document.querySelector(".icon1");
    const chatBtn = document.querySelector(".icon2");
    sidebar.classList.toggle("translate-x-[-100%]");
    usersBtn.classList.toggle("hidden");
    chatBtn.classList.toggle("hidden");
  };

  const pcHandleClick = () => {
    setSelectedConversation(c);
    // handleSidebar();
  };
  const MoHandleClick = () => {
    setSelectedConversation(c);
    handleSidebar();
  };
  const isActive = selectedConversation?._id === c._id;
  return (
    <div className="  w-full">
      <div
        onClick={pcHandleClick}
        className={`${
          isActive ? "  bg-[#E9EAEF] " : "hover:bg-[#f1f1f1c5]"
        } px-4 w-full py-3 font-[Poppins] border rounded-xl  hidden md:flex border-[#e8e8e8] duration-300 justify-between items-center`}
      >
        <div className=" relative flex items-center gap-4">
          <img src={c.profilePic} className="w-10 h-10" alt="" />
          {isOnline && (
            <div className="w-2 h-2 rounded-full top-0 bg-green-400 absolute"></div>
          )}
          <h1 className=" text-sm font-semibold"> {c.fullName} </h1>
        </div>
        {/* <div className="  bg-[#2BA286] rounded-full w-4 h-4 flex text-[10px] text-white items-center justify-center ">
        <span>2</span>
      </div> */}
      </div>
      <div
        onClick={MoHandleClick}
        className={`${
          isActive ? "  bg-[#E9EAEF] " : "hover:bg-[#f1f1f1c5]"
        } px-4 w-full py-3 font-[Poppins] border rounded-xl flex md:hidden border-[#e8e8e8] duration-300 justify-between items-center`}
      >
        <div className=" relative flex items-center gap-4">
          <img src={c.profilePic} className="w-10 h-10" alt="" />
          {isOnline && (
            <div className="w-2 h-2 rounded-full top-0 bg-green-400 absolute"></div>
          )}
          <h1 className=" text-sm font-semibold"> {c.fullName} </h1>
        </div>
        {/* <div className="  bg-[#2BA286] rounded-full w-4 h-4 flex text-[10px] text-white items-center justify-center ">
        <span>2</span>
      </div> */}
      </div>
    </div>
  );
};

export default Conversation;
