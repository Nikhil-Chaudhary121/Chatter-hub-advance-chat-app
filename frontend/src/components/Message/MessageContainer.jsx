import MessageHeader from "./MessageHeader";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";

const MessageContainer = () => {
  const isChatSelected = true;
  return isChatSelected ? (
    <div className=" relative w-full max-h-full min-h-full flex flex-col  bg-white rounded-t-xl">
      <div className=" z-20 shadow  w-full">
        <MessageHeader />
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
