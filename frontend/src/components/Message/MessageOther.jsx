const MessageOther = () => {
  return (
    <div className=" flex items-start p-2 gap-4">
      <img
        src="https://avatar.iran.liara.run/public/boy"
        className="w-10 h-10"
        alt=""
      />
      <div className=" text-md bg-white border shadow-sm px-4 py-2 rounded-xl">
        {" "}
        <p className=" font-[Poppins] text-xs">
          Hello bhai kaise ho Mera name Pavan h and <br /> m na frontend
          Developer hu kya aapko pta h <br /> mujhe internships kidar se mil{" "}
          sakti h
        </p>
        <span className="text-gray-400 text-xs">10:30 AM</span>
      </div>
    </div>
  );
};

export default MessageOther;
