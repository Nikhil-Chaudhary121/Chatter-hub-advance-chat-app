import useGetConversation from "../../hooks/useGetConversation";
import Conversation from "./Conversation";
import LoadingBtn from "./LoadingBtn";

const Conversations = () => {
  const { loading, conversations } = useGetConversation();
  console.log(conversations);

  return (
    <div className="  w-full  top-0 absolute flex-1 flex flex-col gap-[6px]">
      {conversations.map((c) => (
        <Conversation key={c._id} conversations={c} />
      ))}
      {loading ? <LoadingBtn /> : null}
    </div>
  );
};

export default Conversations;
