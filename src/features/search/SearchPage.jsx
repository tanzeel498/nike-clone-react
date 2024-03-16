import { IoChevronBack } from "react-icons/io5";
import HeaderIcon from "../../ui/HeaderIcon";
import SearchInput from "./SearchInput";
import { useState } from "react";
import SearchResults from "./SearchResults";

function SearchPage({ showSearchPage, hideSearchPage }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleHideSearchPage() {
    hideSearchPage();
    setSearchTerm("");
  }

  return (
    <div
      className={`fixed bottom-0 top-0 z-[500] flex h-screen w-screen flex-col items-center overflow-hidden bg-white py-5 duration-200 ${
        showSearchPage ? "left-0" : "left-full"
      }`}
    >
      <span className="absolute left-3 top-5 mobile:left-6">
        <HeaderIcon onClick={handleHideSearchPage}>
          <IoChevronBack className="text-2xl" />
        </HeaderIcon>
      </span>
      <div className="w-3/4 mobile:w-4/5">
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      {searchTerm.length > 2 && (
        <SearchResults
          searchTerm={searchTerm}
          onItemClick={handleHideSearchPage}
        />
      )}
    </div>
  );
}

export default SearchPage;
