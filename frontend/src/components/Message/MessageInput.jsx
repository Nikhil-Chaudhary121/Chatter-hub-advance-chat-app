import { IoSend } from "react-icons/io5";
import { IoMdAttach } from "react-icons/io";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";
import LoadingBtn from "../Sidebar/LoadingBtn";
const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="  bottom-0  gap-4 w-full px-6 py-4  flex items-center z-20 rounded-b-xl bg-[#FDFDFF] "
    >
      {/* <IoMdAttach className=" text-2xl" /> */}
      <div className="flex-1">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          name=""
          id=""
          placeholder="Write your message"
          className="pl-5 pr-16 py-3 rounded-xl w-full focus:outline-none bg-[#fff]  placeholder:text-[#787878] border shadow  border-zinc-300 focus:border-zinc-500"
        />
      </div>
      <button
        type="submit"
        className="ml-2 bg-[#60A5FA]  flex items-center gap-2 shadow-md  text-gray-700 hover:bg-blue-300 py-3 px-4 rounded-md"
      >
        {loading ? (
          <LoadingBtn />
        ) : (
          <IoSend className="text-white text-2xl py-1  " />
          // <span className="font-medium font-[Poppins] text-white text-xl">
          //   Send
          // </span>
        )}
      </button>
    </form>
  );
};

export default MessageInput;
