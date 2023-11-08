import { useEffect, useRef, useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import ButtonLink from "./ButtonLink";
import HeaderIcon from "./HeaderIcon";
import useOutsideClick from "../hooks/useOutsideClick";

function SearchBar() {
  const [text, setText] = useState("");
  const [expandSearch, setExpandSearch] = useState(false);
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
    [text],
  );
  // for escape press
  useEffect(function () {
    function handleCloseSearch(e) {
      if (e.keyCode === 27) {
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
      ref={searchBlockRef}
      className={`absolute z-10 flex origin-right overflow-hidden duration-200 ${
        expandSearch
          ? "left-1/2 top-0 h-screen w-screen -translate-x-[calc(50%+10px)] justify-center"
          : "w-full justify-end"
      }`}
    >
      <div
        className={`relative z-20 max-h-16 duration-200 ${
          expandSearch ? "mt-3 w-1/3" : "w-48"
        }`}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full rounded-full bg-stone-100 px-12 py-2 outline-none placeholder:font-semibold hover:bg-slate-200 peer-focus:block tablet:block tablet:w-full"
        />
        <div className="absolute left-0.5 top-0.5 z-50 h-9">
          <HeaderIcon onClick={toggleSearch}>
            <IoSearch className="text-xl" />
          </HeaderIcon>
        </div>

        {expandSearch && text && (
          <div className="absolute right-0.5 top-0.5 z-50 h-9">
            <HeaderIcon onClick={handleSearchClear}>
              <IoClose className="text-xl" />
            </HeaderIcon>
          </div>
        )}
      </div>

      <div
        className={`absolute z-10 origin-top px-6 pt-3 delay-200 duration-300 tablet:px-14 ${
          expandSearch
            ? "left-0 top-0 h-full w-screen bg-white"
            : "-translate-y-full"
        }`}
      >
        <div
          className={`absolute right-14 top-3 h-10 overflow-hidden delay-500 duration-200 ${
            expandSearch ? "flex scale-100 items-center" : "scale-0"
          }`}
        >
          <ButtonLink onClick={toggleSearch} border={false}>
            Cancel
          </ButtonLink>
        </div>

        {/* search results go here */}
        <div className="mx-auto mt-20 flex w-1/3 flex-col justify-center gap-1 text-xl font-semibold delay-500 duration-200">
          <h4 className="text-stone-500">Popular Search Terms</h4>
          <ButtonLink to="/products" border={false}>
            Air Force 1
          </ButtonLink>
          <ButtonLink to="/products" border={false}>
            Jordan
          </ButtonLink>
          <ButtonLink to="/products" border={false}>
            Air Max
          </ButtonLink>
          <ButtonLink to="/products" border={false}>
            Blazer
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
