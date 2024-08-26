import MessageContainer from "../../components/Message/MessageContainer";
import Nav from "../../components/Nav";
import SideBar from "../../components/Sidebar/SideBar";

const Home = () => {
  return (
    <div className=" w-full flex flex-col h-full">
      <Nav />

      <div className=" flex flex-1 ">
        <SideBar />
        <div className="flex-1 p-6 overflow-hidden">
          <MessageContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
