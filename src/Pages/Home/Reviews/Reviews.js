import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <div className="my-16">
            <h2 className="text-slate-500 text-3xl text-center font-bold">
                Customer Reviews
            </h2>
            <h3 className="text-slate-500 text-xl text-center">
                4.5 out of 87 reviews
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;
