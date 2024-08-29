import { PiChats } from "react-icons/pi";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className=" w-full max-h-full min-h-full flex justify-center items-center text-center bg-[#EAEBED] rounded-xl">
      <div className=" flex flex-col justify-center items-center">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold ">
          Welcome 👋🏻 {authUser.fullName}
        </h1>
        <p className=" md:text-2xl sm:text-xl text-lg">
          Select a chat to start messaging
        </p>
        <PiChats className="md:text-[6rem] sm:text-[5rem] text-[4rem]" />
      </div>
    </div>
  );
};

export default NoChatSelected;
