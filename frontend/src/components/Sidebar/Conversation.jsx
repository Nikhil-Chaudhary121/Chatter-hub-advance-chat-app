const Conversation = () => {
  return (
    <div className=" px-4 py-3 font-[Poppins] border rounded-xl border-[#e8e8e8] flex justify-between items-center">
      <div className=" relative flex items-center gap-4">
        <img
          src="https://avatar.iran.liara.run/public/boy"
          className="w-10 h-10"
          alt=""
        />
        <div className="w-2 h-2 rounded-full top-0 bg-green-400 absolute"></div>
        <h1 className=" text-sm font-semibold"> Test User 1</h1>
      </div>
      <div className="  bg-[#2BA286] rounded-full w-4 h-4 flex text-[10px] text-white items-center justify-center ">
        <span>2</span>
      </div>
    </div>
  );
};

export default Conversation;
