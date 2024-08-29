import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RiUserSearchLine } from "react-icons/ri";
import useGetConversation from "../../hooks/useGetConversation";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      toast.error("Search term must be at least 3 characters long.");
      return;
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No such user found with that name.");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="relative flex items-center  ">
        <IoIosSearch className=" text-md absolute top-1/2 -translate-y-1/2 left-[14px]" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name=""
          id=""
          placeholder="Search"
          className=" px-8 w-full border-2 border-r-0 rounded-l-xl md:py-[9px] py-[7px]"
        />
        <button
          type="submit"
          className=" rounded-r-xl md:p-3 p-[10px] bg-[#E9EAEF] border border-l-0 font-medium text-gray-700 hover:text-gray-900"
        >
          <RiUserSearchLine className="text-xl" />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
