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

  function handleToggleSearchPage() {
    setShowSearchPage((s) => !s);
  }

  return (
    <div className="tablet:hidden">
      <HeaderIcon onClick={handleToggleSearchPage}>
        <IoSearch className="text-2xl" />
      </HeaderIcon>
      {createPortal(
        <SearchPage
          showSearchPage={showSearchPage}
          handleToggleSearchPage={handleToggleSearchPage}
        />,
        document.body,
      )}
    </div>
  );
}

export default SearchIcon;
