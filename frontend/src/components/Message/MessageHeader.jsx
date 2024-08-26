import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";
const MessageHeader = () => {
  return (
    <div className=" flex h-fit w-full font-[Poppins] items-center justify-between py-4 px-6">
      <div className=" flex items-center  gap-6">
        <img
          src="https://avatar.iran.liara.run/public/boy"
          className="w-12 h-12"
          alt=""
        />
        <div className="flex flex-col">
          <h1 className=" text-md font-semibold"> Test User 1</h1>
          <p className=" text-xs">Offline</p>
        </div>
      </div>
      <PiDotsThreeOutlineVerticalThin />
    </div>
  );
};

export default MessageHeader;
