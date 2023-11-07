import StarRating from "./StarRating";
import ButtonLink from "../../ui/ButtonLink";
import Review from "./Review";
import Collapsible from "../../ui/Collapsible";

const data = {
  total: 645,
  rating: 4.8,
  reviews: [
    {
      id: 1078972,
      rating: 4,
      title: "Review",
      reviewText: "Nice shoes color good quality good size perfect",
      userNickname: "Hiop969136362",
      createdAt: "2023-10-26T06:39:02-04:00",
      updatedAt: "2023-10-26T21:14:28-04:00",
      incentivized: false,
    },
    {
      id: 1078960,
      rating: 4,
      title: "Perfect atmosphere...",
      reviewText:
        "I love the neutral colors that surround the grey leading on the toebox and capping the heel... the soft supple leather gives it an elevated appearance.",
      userNickname: "Richmack71",
      createdAt: "2023-10-26T01:20:37-04:00",
      updatedAt: "2023-10-26T01:53:38-04:00",
      incentivized: false,
    },
    {
      id: 1078781,
      rating: 5,
      title: "Jordan 1 lows So Freah & So Clean",
      reviewText:
        "I got those for my Daughter… she’s loves them.. So Fresh & So Clean…",
      userNickname: "jorges374428963",
      createdAt: "2023-10-25T09:16:15-04:00",
      updatedAt: "2023-10-25T23:44:29-04:00",
      incentivized: false,
    },
  ],
};

function ProductReviews() {
  return (
    <div className="my-12 border-y-[1px] border-stone-300 py-7">
      <Collapsible initialExpand={false}>
        <Collapsible.Trigger>
          <h3>Reviews ({data.total})</h3>
          <StarRating maxRating={5} color="#000" defaultRating={data.rating} />
        </Collapsible.Trigger>
        <Collapsible.Group>
          <div>
            <div className="mb-4 mt-10 flex items-center gap-6">
              <StarRating
                maxRating={5}
                color="black"
                defaultRating={data.rating}
                size="16px"
              />
              <span>{data.rating} Stars</span>
            </div>
            <ButtonLink>Write a Review</ButtonLink>
            {data.reviews.map((review) => (
              <Review key={review.id} review={review} />
            ))}
          </div>
        </Collapsible.Group>
      </Collapsible>
    </div>
  );
}

export default ProductReviews;
