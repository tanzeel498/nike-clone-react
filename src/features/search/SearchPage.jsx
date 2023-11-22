import { IoChevronBack } from "react-icons/io5";
import HeaderIcon from "../../ui/HeaderIcon";
import SearchBar from "./SearchBar";

function SearchPage({ showSearchPage, handleToggleSearchPage }) {
  return (
    <div
      className={`fixed bottom-0 top-0 z-[500] flex h-screen w-screen flex-col items-center overflow-hidden bg-white py-5 duration-200 ${
        showSearchPage ? "left-0" : "left-full"
      }`}
    >
      <span className="absolute left-6 top-5">
        <HeaderIcon onClick={handleToggleSearchPage}>
          <IoChevronBack className="text-2xl" />
        </HeaderIcon>
      </span>
      <div className="w-4/5">
        <SearchBar />
      </div>
    </div>
  );
}

export default SearchPage;
