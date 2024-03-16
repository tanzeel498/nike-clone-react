import { Link } from "react-router-dom";
import SearchResultItem from "./SearchResultItem";
import useSearchProducts from "./useSearchProducts";
import Spinner from "../../ui/Spinner";

function SearchResults({ searchTerm, onItemClick }) {
  const { isLoading, products } = useSearchProducts(searchTerm);

  return (
    <div className="right-0 top-[135%] flex flex-col px-12 py-5 mobile:px-20 tablet:absolute tablet:w-96 tablet:bg-white tablet:px-8 tablet:shadow-xl">
      {isLoading ? (
        <Spinner scale={60} className="w-full" />
      ) : (
        <>
          <h3 className="my-10 tablet:mb-5 tablet:mt-0">Products</h3>
          <div className="mb-10 flex flex-wrap justify-between gap-10 tablet:flex-col tablet:gap-5">
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
        </>
      )}
    </div>
  );
}

export default SearchResults;
