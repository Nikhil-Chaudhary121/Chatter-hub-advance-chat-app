import { MdOutlineLogout } from "react-icons/md";
import useLogout from "../../hooks/useLogout";
import LoadingBtn from "./LoadingBtn";

const LogoutBtn = () => {
  const { loading, logout } = useLogout();

  return loading ? (
    <button className="flex cursor-progress bg-[#60A5FA] rounded-lg items-center gap-4 w-full  py-2 justify-center">
      <LoadingBtn />
    </button>
  ) : (
    <button
      onClick={logout}
      className="flex bg-[#60A5FA] rounded-lg items-center gap-4 w-full  py-2 justify-center"
    >
      <span className=" font-[Poppins] text-white font-medium ">Logout</span>
      <MdOutlineLogout className=" text-white" />
    </button>
  );
};

export default LogoutBtn;
