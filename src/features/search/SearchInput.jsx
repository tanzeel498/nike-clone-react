import { IoClose, IoSearch } from "react-icons/io5";
import HeaderIcon from "../../ui/HeaderIcon";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function SearchInput({ searchTerm, setSearchTerm }) {
  const inputRef = useRef();
  const navigate = useNavigate();

  // for escape press
  useEffect(
    function () {
      function handleCloseSearch(e) {
        if (e.keyCode === 27) {
          inputRef.current.blur();
          setSearchTerm("");
        }
      }
      document.addEventListener("keydown", handleCloseSearch);

      return () => document.removeEventListener("keydown", handleCloseSearch);
    },
    [setSearchTerm],
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (searchTerm.length > 2) {
      navigate(`/products?q=${searchTerm}`);
      setSearchTerm("");
      inputRef.current.blur();
    }
  }

  return (
    <form className="group relative flex items-center" onSubmit={handleSubmit}>
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
    </form>
  );
}

export default SearchInput;
