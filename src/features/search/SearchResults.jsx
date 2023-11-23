import { Link } from "react-router-dom";
import SearchResultItem from "./SearchResultItem";

function SearchResults({ searchTerm, onItemClick }) {
  // fetch results using searchTerm

  return (
    <div className="results-wrapper right-0 top-[135%] flex gap-5 px-16 py-5 tablet:absolute tablet:w-96 tablet:bg-white tablet:px-8 tablet:shadow-xl">
      <div className="products h-full">
        <h3 className="mb-5">Products</h3>
        <div className="mb-7 flex flex-wrap justify-between gap-5 tablet:flex-col">
          <SearchResultItem onItemClick={onItemClick} />
          <SearchResultItem onItemClick={onItemClick} />
          <SearchResultItem onItemClick={onItemClick} />
          <SearchResultItem onItemClick={onItemClick} />
        </div>

        <Link to="/products" onClick={onItemClick}>
          <span className="font-semibold uppercase underline">{`see all '${searchTerm}'`}</span>
        </Link>
      </div>
    </div>
  );
}

export default SearchResults;
