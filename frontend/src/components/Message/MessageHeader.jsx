import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const MessageHeader = ({ selectedConversation: c }) => {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(c._id);

  return (
    <div className=" flex h-fit w-full font-[Poppins] bg-white rounded-t-xl items-center justify-between py-4 px-6">
      <div className=" flex items-center  gap-6">
        <div className=" relative">
          <img
            src={c.profilePic}
            className="md:w-12 w-10 md:h-12 h-10"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <h1 className=" md:text-md text-[15px] font-semibold">
            {" "}
            {c.fullName}{" "}
          </h1>
          {isOnline ? (
            <div className=" flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <p className=" text-xs ">Online</p>
            </div>
          ) : (
            <div className=" flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <p className=" text-xs">Offline</p>
            </div>
          )}
        </div>
      </div>
      <PiDotsThreeOutlineVerticalThin />
    </div>
  );
};

export default MessageHeader;
