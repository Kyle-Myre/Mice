import reviews from "../constants/reviews.json";
import Review  from "./Review";

export default function Reviews(): JSX.Element {
  return (
    <section className="py-28 lg:px-16 px-2 flex flex-col gap-6">
      <h1 className="text-6xl text-center font-sour-gummy">Reviews</h1>
      <section className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        {reviews.map((review, index) => {
          return (
            <Review
              name={review.name}
              rating={review.rating}
              review={review.review}
              key={index}
            />
          );
        })}
      </section>
    </section>
  );
}
