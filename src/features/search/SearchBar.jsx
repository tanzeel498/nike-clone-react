import { useEffect, useRef, useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import HeaderIcon from "../../ui/HeaderIcon";
import SearchResults from "./SearchResults";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef();

  // for escape press
  useEffect(function () {
    function handleCloseSearch(e) {
      if (e.keyCode === 27) {
        inputRef.current.blur();
        setSearchTerm("");
      }
    }
    window.addEventListener("keydown", handleCloseSearch);

    return () => window.removeEventListener("keydown", handleCloseSearch);
  }, []);

  function handleSearchClear(e) {
    e.preventDefault();
    setSearchTerm("");
  }

  return (
    <div className="group relative flex items-center">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-full bg-stone-100 py-2 pl-4 pr-10 outline-none ring-stone-900 focus:ring-1"
      />

      <span className="absolute right-0.5 z-10 h-9">
        <HeaderIcon>
          {searchTerm ? (
            <IoClose className="text-xl" onClick={handleSearchClear} />
          ) : (
            <IoSearch className="text-xl" />
          )}
        </HeaderIcon>
      </span>

      {searchTerm.length > 0 && <SearchResults searchTerm={searchTerm} />}
    </div>
  );
}

export default SearchBar;
