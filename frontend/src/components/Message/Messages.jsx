import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import MessageOther from "./MessageOther";
import MessageOwn from "./MessageOwn";
import MessageSkeletonGrp from "./MessageSkeletonGrp";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  const lastMessageRef = useRef();
  useListenMessages();
  // console.log("messages : ", messages);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div>
      {!loading && messages?.length > 0 && (
        <div className=" absolute w-full  px-4 py-2 pb-2 min-h-full flex flex-col ">
          {messages.map((message, index) => (
            <div ref={lastMessageRef} key={index}>
              <Message message={message} />
            </div>
          ))}
        </div>
      )}

      {loading && <MessageSkeletonGrp />}

      {!loading && messages?.length === 0 && (
        <div className="min-h-full absolute w-full flex justify-center  items-center">
          <h1 className="text-center font-semibold font-[Poppins]">
            Send a message to start a conversation 👋🏻
          </h1>
        </div>
      )}
    </div>
  );
};

export default Messages;
