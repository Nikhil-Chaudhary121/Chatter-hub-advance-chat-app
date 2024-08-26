import { PiChats } from "react-icons/pi";
const NoChatSelected = () => {
  return (
    <div className=" w-full max-h-full min-h-full flex justify-center items-center bg-white rounded-xl">
      <div className=" flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Welcome 👋🏻 Nikhil Chaudhary</h1>
        <p className=" text-2xl">Select a chat to start messaging</p>
        <PiChats className=" text-[6rem]" />
      </div>
    </div>
  );
};

export default NoChatSelected;
