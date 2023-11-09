import ButtonLink from "../../ui/ButtonLink";
import SearchResultItem from "./SearchResultItem";

function SearchResults({ searchTerm }) {
  // fetch results using searchTerm

  return (
    <div className="results-wrapper absolute right-0 top-[135%] flex w-96 gap-5 bg-white px-8 py-5 shadow-xl">
      <div className="products h-full">
        <h3 className="mb-5">Products</h3>
        <div className="mb-7 flex flex-col gap-5">
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
        </div>

        <ButtonLink to="/products">
          <span className="uppercase">{`see all '${searchTerm}'`}</span>
        </ButtonLink>
      </div>
    </div>
  );
}

export default SearchResults;
