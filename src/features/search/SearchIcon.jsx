import { useEffect, useState } from "react";
import HeaderIcon from "../../ui/HeaderIcon";
import { IoSearch } from "react-icons/io5";
import SearchPage from "./SearchPage";
import { createPortal } from "react-dom";

function SearchIcon() {
  const [showSearchPage, setShowSearchPage] = useState(false);

  useEffect(
    function () {
      if (showSearchPage) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "auto";
    },
    [showSearchPage],
  );

  return (
    <div className="tablet:hidden">
      <HeaderIcon onClick={() => setShowSearchPage(true)}>
        <IoSearch className="text-2xl" />
      </HeaderIcon>
      {createPortal(
        <SearchPage
          showSearchPage={showSearchPage}
          hideSearchPage={() => setShowSearchPage(false)}
        />,
        document.body,
      )}
    </div>
  );
}

export default SearchIcon;
