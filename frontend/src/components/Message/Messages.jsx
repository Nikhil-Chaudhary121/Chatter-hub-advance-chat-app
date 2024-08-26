import MessageOther from "./MessageOther";
import MessageOwn from "./MessageOwn";

const Messages = () => {
  return (
    <div className=" absolute w-full  px-4 py-2 min-h-full flex flex-col ">
      {/* <div className="  "> */}
      <MessageOther />
      <MessageOwn />
      <MessageOther />
      <MessageOther />
      <MessageOwn />
      <MessageOwn />
      <MessageOwn />
      <MessageOther />
      <MessageOwn />
      <MessageOther />
      <MessageOther />
      <MessageOwn />
      <MessageOwn />
      <MessageOwn />
      {/*        <MessageOther />
        <MessageOther />
        <MessageOther /> */}
      {/* </div> */}
    </div>
  );
};

export default Messages;
