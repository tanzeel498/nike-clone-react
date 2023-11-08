import { useEffect, useRef, useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import ButtonLink from "./ButtonLink";
import HeaderIcon from "./HeaderIcon";
import useOutsideClick from "../hooks/useOutsideClick";

function SearchBar({ expandSearch, setExpandSearch }) {
  const [text, setText] = useState("");
  const inputRef = useRef();
  const searchBlockRef = useOutsideClick(() => setExpandSearch(false));

  // handle true and false state for expandSearch
  useEffect(
    function () {
      if (expandSearch) {
        inputRef.current.focus();
      } else setText("");
    },
    [expandSearch],
  );
  // to handle expandSearch when any key is pressed
  useEffect(
    function () {
      if (text) setExpandSearch(true);
    },
    [text, setExpandSearch],
  );
  // for escape press
  useEffect(function () {
    function handleCloseSearch(e) {
      if (expandSearch && e.keyCode === 27) {
        setExpandSearch(false);
        inputRef.current.blur();
      }
    }
    window.addEventListener("keydown", handleCloseSearch);

    return () => window.removeEventListener("keydown", handleCloseSearch);
  }, []);

  const toggleSearch = () => setExpandSearch((s) => !s);
  function handleSearchClear() {
    setText("");
    inputRef.current.focus();
  }

  return (
    <div
      className={`absolute duration-200 ${
        expandSearch ? "right-1/2 w-2/5 translate-x-1/2" : "right-4 w-48"
      }`}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full rounded-full bg-stone-100 px-12 py-2 outline-none placeholder:font-semibold hover:bg-slate-200"
      />
      <div className="absolute left-0.5 top-0.5 h-9">
        <HeaderIcon onClick={toggleSearch}>
          <IoSearch className="text-xl" />
        </HeaderIcon>
      </div>

      {expandSearch && text && (
        <span className="absolute right-0.5 top-0.5 h-9">
          <HeaderIcon onClick={handleSearchClear}>
            <IoClose className="text-xl" />
          </HeaderIcon>
        </span>
      )}
    </div>
  );
}

export default SearchBar;
