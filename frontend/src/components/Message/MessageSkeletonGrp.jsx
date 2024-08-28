import MessageSkeleton from "./MessageSkeleton";

const MessageSkeletonGrp = () => {
  return (
    <div className=" absolute w-full  px-4 py-2 pb-20 min-h-full flex flex-col ">
      <MessageSkeleton isOwn={false} />
      <MessageSkeleton isOwn={true} />
      <MessageSkeleton isOwn={false} />
      <MessageSkeleton isOwn={false} />
      <MessageSkeleton isOwn={true} />
      <MessageSkeleton isOwn={false} />
    </div>
  );
};

export default MessageSkeletonGrp;
