import { useEffect, useState } from "react";
import { LuSettings2 } from "react-icons/lu";
import Button from "../../ui/Button";
function HeaderProducts({ title, resultCount, showFilters, setShowFilters }) {
  const [sortBy, setSortBy] = useState("");
  const [reduceHeader, setReduceHeader] = useState(false);

  useEffect(function () {
    function handleScroll() {
      if (window.scrollY > 40) setReduceHeader(true);
      else setReduceHeader(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="sticky top-16 z-[1] flex items-center justify-between bg-white px-6 duration-200 tablet:px-14"
        style={
          reduceHeader
            ? { paddingTop: "12px", paddingBottom: "12px" }
            : { paddingTop: 24 + "px", paddingBottom: 24 + "px" }
        }
      >
        <h2
          style={reduceHeader ? { fontSize: "1.2rem" } : {}}
          className="duration-200"
        >
          {title}{" "}
          <span className="hidden tablet:inline-block">({resultCount})</span>
        </h2>

        <div className="hidden items-center gap-4 tablet:flex">
          <div
            className="flex cursor-pointer items-center gap-2"
            onClick={() => setShowFilters((c) => !c)}
          >
            <p className="font-medium">
              {showFilters ? "Hide" : "Show"} Filters
            </p>
            <span className="text-lg">
              <LuSettings2 />
            </span>
          </div>
          <div className="flex cursor-pointer items-center">
            <label htmlFor="sort" className="font-medium">
              Sort By:{" "}
            </label>

            <select
              className="text-stone-600 outline-none"
              value={sortBy}
              id="sort"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-desc">Price: High-Low</option>
              <option value="price-asc">Price: Low-High</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t-[1px] px-6 py-4 tablet:hidden">
        <h4 className="text-stone-600">{resultCount} Results</h4>
        <Button
          type="secondary"
          size="small"
          onClick={() => setShowFilters((c) => !c)}
        >
          <span className="flex items-center gap-1">
            <p className="font-medium">Filter</p>
            <span className="text-lg">
              <LuSettings2 />
            </span>
          </span>
        </Button>
      </div>
    </>
  );
}

export default HeaderProducts;
