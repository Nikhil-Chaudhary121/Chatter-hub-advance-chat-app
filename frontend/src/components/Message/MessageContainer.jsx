import MessageHeader from "./MessageHeader";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";
import useConversation from "../../zustand/useConversation.js";
import { useEffect } from "react";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //clean up function
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return selectedConversation ? (
    <div className=" relative w-full max-h-full min-h-full flex flex-col  bg-white rounded-xl">
      <div className=" z-20 shadow  w-full">
        <MessageHeader selectedConversation={selectedConversation} />
      </div>
      <div className="flex-1 relative py-4  scroller overflow-y-auto">
        <Messages />
      </div>
      <MessageInput />
    </div>
  ) : (
    <NoChatSelected />
  );
};

export default MessageContainer;
