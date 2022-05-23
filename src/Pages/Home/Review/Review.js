import React from "react";

const Review = ({ review }) => {
    const { name, img, reviewText } = review;
    return (
        <div className="flex justify-center">
            <h2>Review</h2>
        </div>
    );
};

export default Review;
