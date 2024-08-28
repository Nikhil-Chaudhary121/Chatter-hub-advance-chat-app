import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversations: c }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(c._id);

  const handleClick = () => {
    setSelectedConversation(c);
  };
  const isActive = selectedConversation?._id === c._id;
  return (
    <div
      onClick={handleClick}
      className={`${
        isActive ? "  bg-[#E9EAEF] " : "hover:bg-[#f1f1f1c5]"
      } px-4 py-3 font-[Poppins] border rounded-xl  border-[#e8e8e8] duration-300  flex justify-between items-center`}
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
  );
};

export default Conversation;
