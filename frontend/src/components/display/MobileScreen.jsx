import React, { useState } from "react";
import SideBar from "../Sidebar/SideBar";
import MessageContainer from "../Message/MessageContainer";
import useConversation from "../../zustand/useConversation";
import { now } from "mongoose";

const MobileScreen = () => {
  const { selectedConversation } = useConversation();
  const isSelected = selectedConversation ? true : false;
  console.log(isSelected);

  return isSelected ? (
    <div className=" md:hidden flex-1 ">
      <div className="h-full w-full">
        <SideBar />
      </div>
      <div className="flex-1 p-6 overflow-hidden">
        <MessageContainer />
      </div>
    </div>
  ) : (
    <div className=" md:hidden flex-1 ">
      <div className="flex-1 p-6 overflow-hidden">
        <MessageContainer />
      </div>
      <div className="h-full w-full">
        <SideBar />
      </div>
    </div>
  );
};

export default MobileScreen;
