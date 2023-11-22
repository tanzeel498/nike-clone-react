import ButtonLink from "../../ui/ButtonLink";
import SearchResultItem from "./SearchResultItem";

function SearchResults({ searchTerm }) {
  // fetch results using searchTerm

  return (
    <div className="results-wrapper right-0 top-[135%] flex gap-5 px-8 py-5 tablet:absolute tablet:w-96 tablet:bg-white tablet:shadow-xl">
      <div className="products h-full">
        <h3 className="mb-5">Products</h3>
        <div className="mb-7 flex flex-wrap justify-between gap-5 tablet:flex-col">
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
