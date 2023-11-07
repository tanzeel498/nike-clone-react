import { IoStar } from "react-icons/io5";

export default function StarRating({
  maxRating = 5,
  defaultRating = 0,
  color = "#fcc419",
  onRatingSet,
  size = "16px",
}) {
  const ratingPercent = Math.round((defaultRating / maxRating) * 100);

  return (
    <div className="relative">
      <div className="flex gap-1 opacity-20">
        {Array.from({ length: maxRating }, (_, i) => (
          <span style={{ fontSize: size }} key={i}>
            <IoStar />
          </span>
        ))}
      </div>
      <div
        className={`absolute left-0 top-0 flex gap-1 overflow-clip`}
        style={{ width: ratingPercent + "%" }}
      >
        {Array.from({ length: maxRating }, (_, i) => (
          <span style={{ fontSize: size }} key={i}>
            <IoStar />
          </span>
        ))}
      </div>
    </div>
  );
}
