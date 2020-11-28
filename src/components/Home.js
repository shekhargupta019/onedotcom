import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

const Home = (props) => {
  const [reviews, setReviews] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [subString, setSubString] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/reviews")
      .then((res) => res.json())
      .then((res) => {
        setReviews(res);
      });
  }, []);

  const getLikes = (review) => {
    if (review.like > 0) return `Like (${review.like})`;
    return "Like";
  };

  const getDisLikes = (review) => {
    if (review.dislike > 0) return `DisLike (${review.dislike})`;
    return "DisLike";
  };

  const handleReviewClick = (reviewId) => () => {
    const url = `/review/${reviewId}`;
    props.history.push(url);
  };

  const displayText = (review) => {
    let subString = "";
    let btnText = "...Show More";
    subString = isOpen
      ? setSubString(review.reviewer.text.substring(0, 100))
      : review.reviewer.text;
    btnText = isOpen ? "...Show Less" : "...Show More";
    return (
      <>
        <p>{subString}</p>
        <button>{btnText}</button>
        {review.comments.length > 0 ? <p style={{color:'#DC143C'}}>{`See All Comments (${review.comments.length})`}</p> : null}
      </>
    );
  };

  return (
    <div className="Home">
      <div>
        {reviews.map((review) => (
          <div
            key={review.id}
            className="review"
            onClick={handleReviewClick(review.id)}
          >
            <div className="imgCol"  style={{marginTop: 30 }}>
              <div className="image">
                <img
                  src={review.book.image}
                  style={{ width: 175, height: 250 }}
                />
              </div>
              <div className="imageText"  style={{marginTop: 30 }}>
                <h2>{review.book.title}</h2>
                <p>{review.book.author}</p>
              </div>
            </div>
            <div className="commentCol"  style={{marginTop: 30 }}>
              <h2>{review.reviewer.name}</h2>
              {displayText(review)}
            </div>
            <div className="buttonCol">
              <button
                className="textBtn"
                disabled={true}
                style={{ marginTop: 100 }}
              >
                {getLikes(review)}
              </button>
              <br></br>
              <button
                className="textBtn"
                style={{ marginTop: 10 }}
                disabled={true}
              >
                {getDisLikes(review)}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withRouter(Home);
