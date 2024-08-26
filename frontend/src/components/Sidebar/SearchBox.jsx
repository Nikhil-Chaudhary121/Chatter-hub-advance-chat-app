import { IoIosSearch } from "react-icons/io";
const SearchBox = () => {
  return (
    <div>
      <div className="relative hidden md:inline-block ">
        <IoIosSearch className=" text-md absolute top-1/2 -translate-y-1/2 left-[14px]" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className=" px-8  border-2 rounded-lg py-1"
        />
      </div>
    </div>
  );
};

export default SearchBox;
