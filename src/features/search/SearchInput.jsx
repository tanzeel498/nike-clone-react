import { IoClose, IoSearch } from "react-icons/io5";
import HeaderIcon from "../../ui/HeaderIcon";
import { useEffect, useRef } from "react";

function SearchInput({ searchTerm, setSearchTerm }) {
  const inputRef = useRef();

  // for escape press
  useEffect(
    function () {
      function handleCloseSearch(e) {
        if (e.keyCode === 27) {
          inputRef.current.blur();
          setSearchTerm("");
        }
      }
      window.addEventListener("keydown", handleCloseSearch);

      return () => window.removeEventListener("keydown", handleCloseSearch);
    },
    [setSearchTerm],
  );

  return (
    <div className="group relative flex items-center">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-full bg-stone-100 py-2 pl-4 pr-10 outline-none ring-1 ring-stone-300 duration-100 focus:ring-stone-900"
      />

      <span className="absolute right-0.5 z-10 h-9">
        <HeaderIcon>
          {searchTerm ? (
            <IoClose className="text-xl" onClick={() => setSearchTerm("")} />
          ) : (
            <IoSearch className="text-xl" />
          )}
        </HeaderIcon>
      </span>
    </div>
  );
}

export default SearchInput;
