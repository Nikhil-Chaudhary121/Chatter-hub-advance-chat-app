import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sounds/notification.mp3";
import toast from "react-hot-toast";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      const isSelected =
        newMessage?.senderId.toString() === selectedConversation._id.toString();

      const sidebar = document.querySelector(".sidebar");
      const isSidebarActive = sidebar.classList.contains("translate-x-[-100%]");

      if (isSelected) {
        newMessage.shouldShake = true;
        const sound = new Audio(notificationSound);
        sound.play();
        setMessages([...messages, newMessage]);

        if (!isSidebarActive) {
          toast.success(`${newMessage?.users.sender} send you a message `);
        }
      } else {
        // console.log(newMessage);
        toast.success(`${newMessage?.users.sender} send you a message `);
      }
    });
    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
