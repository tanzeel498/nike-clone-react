import ButtonLink from "./ButtonLink";

function SearchResults() {
  return (
    <div>
      <div
        className={`absolute left-0 right-0 top-[96px] z-10 w-full bg-red-200 delay-200 duration-300 ${
          expandSearch ? "" : "-translate-y-full"
        }`}
      >
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

export default SearchResults;
