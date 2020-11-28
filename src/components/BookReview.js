import React, { useEffect, useState } from "react";

const BookReview = (props) => {
  const {
    match: {
      params: { reviewId },
    },
  } = props;
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/reviews")
      .then((res) => res.json())
      .then((allReviews) => {
        const filteredReview = allReviews.filter(
          (newReview) => newReview.id === parseInt(reviewId)
        );
        setReview(filteredReview);
      });
  }, [props, reviewId]);

  const getLikes = (review) => {
    if (review.like > 0) return `Like (${review.like})`;
    return "Like";
  };

  const getDisLikes = (review) => {
    if (review.dislike > 0) return `DisLike (${review.dislike})`;
    return "DisLike";
  };

  const displayAdditionalComments = (review) => {
    const comments = review.comments;
    if (comments.length > 0) {
      return comments.map((comment) => {
        return (
          <>
            <h4>{comment.name}</h4>
            <div style={{ color: "#A9A9A9" }}>{comment.published}</div>
            <p>{comment.text}</p>
          </>
        );
      });
    }
    return null;
  };

  return (
    <div className="Home">
      {review.map((review) => {
        return <div className="row">
          <div>
            <div className="reviewImg">
              <img
                src={review.book.image}
                style={{ width: 175, height: 250, margin: 150 }}
              />
            </div>
            <div className="imageText" style={{ marginTop: 30 }}>
              <h2>{review.book.title}</h2>
              <p>{review.book.author}</p>
              <p>{review.book.category}</p>
              <button
                className="textBtn"
                style={{ marginTop: 10 }}
                disabled={true}
              >
                {getLikes(review)}
              </button>
              <button
                className="textBtn"
                style={{ marginLeft: 15 }}
                disabled={true}
              >
                {getDisLikes(review)}
              </button>
              <div style={{ marginTop: 10 }}>
                <div>{review.reviewer.name}</div>
                <div style={{ color: "#A9A9A9" }}>
                  {review.reviewer.published}
                </div>
              </div>
              <div className="comment">{review.reviewer.text}</div>
              {displayAdditionalComments(review)}
            </div>
          </div>
        </div>;
      })}
    </div>
  );
};

export default BookReview;
