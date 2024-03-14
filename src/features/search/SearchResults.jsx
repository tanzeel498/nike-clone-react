import { Link } from "react-router-dom";
import SearchResultItem from "./SearchResultItem";
import useSearchProducts from "./useSearchProducts";
import Spinner from "../../ui/Spinner";

function SearchResults({ searchTerm, onItemClick }) {
  const { isLoading, products } = useSearchProducts(searchTerm);

  return (
    <div className="results-wrapper right-0 top-[135%] flex gap-5 px-16 py-5 tablet:absolute tablet:w-96 tablet:bg-white tablet:px-8 tablet:shadow-xl">
      {isLoading ? (
        <Spinner scale={60} className="w-full" />
      ) : (
        <div className="products h-full">
          <h3 className="mb-5">Products</h3>
          <div className="mb-7 flex flex-wrap justify-between gap-5 tablet:flex-col">
            {products?.map((product) => (
              <SearchResultItem
                key={product._id}
                onItemClick={onItemClick}
                product={product}
              />
            ))}
          </div>

          <Link to={`/products?q=${searchTerm}`} onClick={onItemClick}>
            <span className="font-semibold uppercase underline">{`see all '${searchTerm}'`}</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default SearchResults;
