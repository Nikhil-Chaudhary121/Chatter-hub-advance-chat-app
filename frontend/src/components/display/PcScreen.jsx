import React from "react";
import SideBar from "../Sidebar/SideBar";
import MessageContainer from "../Message/MessageContainer";

const PcScreen = () => {
  return (
    <div className=" md:flex hidden flex-1 ">
      <SideBar />
      <div className="flex-1 p-6 overflow-hidden">
        <MessageContainer />
      </div>
    </div>
  );
};

export default PcScreen;
