import { useQuery } from "@apollo/client";
import { QUERY_REVIEWS } from "../utlis/queries";
import ReviewList from "../components/ReviewList";
import FileReview from "../components/FileReview";
import "../styles/Reviews.css";

export default function ReviewPage() {
  const { loading, data } = useQuery(QUERY_REVIEWS);
  const reviews = data?.reviews || [];

  return (
    <div className="container-fluid">
      <div className="my-3">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className="d-flex reviews-container">
              <div className="p-2 file-review">
                <FileReview />
              </div>

              <div className="p-2 m-2">
                <ReviewList
                  reviews={reviews}
                  title="Here's our current reviews from our many customers"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
