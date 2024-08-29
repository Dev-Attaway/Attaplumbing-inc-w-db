import Rating from "./Rating";

const ReviewList = ({ reviews, title }) => {
  if (!reviews.length) {
    return <h3>No reviews Yet</h3>;
  }

  return (
    <div className="review-list row">
      <div className="col">
        <h3 className="d-flex justify-content-center text-nowrap">{title}</h3>
        {reviews &&
          reviews.map((review) => (
            <div key={review.id}>
              <div className="card p-2 m-2">
                <div className="card-body">
                  <h4 className="card-title">{review.name}</h4>
                  <p className="card-text">"{review.reviewContent}"</p>
                  <p className="card-text fst-italic">-{review.location}</p>
                  <Rating rating={review.reviewRating} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReviewList;
