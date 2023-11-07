import { useEffect, useState } from "react";
import { LuSettings2 } from "react-icons/lu";
function HeaderProducts({
  title,
  resultCount,
  showFilterBar,
  setShowFilterBar,
}) {
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
        {title} ({resultCount})
      </h2>
      <div className="flex items-center gap-4">
        <div
          className="flex cursor-pointer items-center gap-2"
          onClick={() => setShowFilterBar((c) => !c)}
        >
          <p className="font-medium">
            {showFilterBar ? "Hide" : "Show"} Filters
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
  );
}

export default HeaderProducts;
