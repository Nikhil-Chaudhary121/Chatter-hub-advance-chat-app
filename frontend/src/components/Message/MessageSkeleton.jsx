import React from "react";

const MessageSkeleton = ({ isOwn }) => {
  return (
    <div
      className={`flex p-2 gap-4 animate-pulse ${
        isOwn ? "justify-end" : "items-start"
      }`}
    >
      {/* Conditional Avatar Placeholder */}
      {!isOwn && <div className="w-10 h-10 bg-gray-300 rounded-full"></div>}

      {/* Message Bubble Placeholder */}
      <div
        className={`bg-gray-200 border border-gray-200 shadow-sm px-4 py-2 rounded-xl ${
          isOwn ? "rounded-br-none" : "rounded-bl-none"
        } max-w-xs w-full`}
      >
        {/* Placeholder lines for message text */}
        <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        {/* <div className="h-4 bg-gray-300 rounded w-1/2"></div> */}
        {/* Placeholder for timestamp */}
        <div className="h-3 bg-gray-300 rounded mt-2 w-24"></div>
      </div>
    </div>
  );
};

export default MessageSkeleton;
