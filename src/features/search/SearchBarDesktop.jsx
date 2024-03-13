import { useState } from "react";
import SearchResults from "./SearchResults";
import useOutsideClick from "../../hooks/useOutsideClick";
import SearchInput from "./SearchInput";

function SearchBarDesktop() {
  const ref = useOutsideClick(handleSearchClear);
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchClear() {
    setSearchTerm("");
  }

  return (
    <div ref={ref} className="relative">
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {searchTerm.length > 2 && (
        <SearchResults
          searchTerm={searchTerm}
          onItemClick={handleSearchClear}
        />
      )}
    </div>
  );
}

export default SearchBarDesktop;
