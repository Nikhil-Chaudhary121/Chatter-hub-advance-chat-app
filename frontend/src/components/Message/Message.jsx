import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const formattedTime = extractTime(message.createdAt);

  const shakeClass = message.shouldShake ? "shake" : "";

  const isOwn = message.senderId === authUser._id;
  return isOwn ? (
    <div className=" w-full flex justify-end px-4 py-2">
      <div className=" text-md bg-[#87986a] lg:max-w-[60%] max-w-[80%]  text-white border shadow-sm px-4 py-2 rounded-xl">
        <p className=" font-[Poppins] text-xs whitespace-break-spaces">
          {message.message}
        </p>
        <span className="text-gray-300 md:text-xs text-[10px]">
          {formattedTime}
        </span>
      </div>
    </div>
  ) : (
    <div className=" flex items-start p-2 gap-4">
      <img src={selectedConversation.profilePic} className="w-10 h-10" alt="" />
      <div
        className={` ${shakeClass} lg:max-w-[60%] max-w-[80%]  text-md bg-white border shadow-sm px-4 py-2 rounded-xl`}
      >
        <p className=" font-[Poppins] text-xs">{message.message}</p>
        <span className="text-gray-400 md:text-xs text-[10px]">
          {formattedTime}
        </span>
      </div>
    </div>
  );
};

export default Message;
