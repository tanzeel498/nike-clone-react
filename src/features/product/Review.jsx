import { format } from "date-fns";
import StarRating from "./StarRating";

function Review({ review }) {
  const { rating, title, reviewText, userNickname, updatedAt } = review;
  return (
    <div className="my-12">
      <h4>{title}</h4>
      <div className="flex items-center justify-start gap-5 py-1">
        <StarRating
          defaultRating={rating}
          maxRating={5}
          size="13px"
          color="black"
        />

        <p className="text-stone-600">
          <span>{userNickname}</span> -{" "}
          <span>{format(new Date(updatedAt), "PPP")}</span>
        </p>
      </div>
      <p className="py-2">{reviewText}</p>
    </div>
  );
}

export default Review;
