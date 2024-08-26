import { IoSend } from "react-icons/io5";
import { IoMdAttach } from "react-icons/io";
const MessageInput = () => {
  return (
    <div className=" absolute bottom-0  gap-4 w-full px-6 py-3  flex items-center z-20 bg-[#fdfdfd] border-t">
      <IoMdAttach className=" text-2xl" />
      <div className="flex-1">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your message"
          className="pl-5 pr-16 py-2 rounded-md w-full bg-[#ededed] placeholder:text-[#787878] border-2 border-zinc-400 focus:border-black"
        />
      </div>
      <button className="ml-2 bg-[#60A5FA] flex items-center gap-2  text-gray-700 hover:bg-gray-400 py-2 px-4 rounded-md">
        <span className="font-medium font-[Poppins] text-white text-xl">
          Send
        </span>{" "}
        <IoSend className="text-white text-lg" />
      </button>
    </div>
  );
};

export default MessageInput;
