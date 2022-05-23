import React from "react";
import { AiFillStar } from "react-icons/ai";

const Review = ({ review }) => {
    const { name, img, reviewText, rating } = review;
    return (
        <div className="flex justify-center">
            <div className="card w-80 md:w-96 bg-base-100 shadow-xl">
                <div className="avatar flex justify-center items-center pt-8">
                    <div className="w-24 rounded-full">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>
                        Rating: {rating} <AiFillStar className="inline mb-1 text-[#FFC400]"></AiFillStar>
                        <AiFillStar className="inline mb-1 text-[#FFC400]"></AiFillStar>
                        <AiFillStar className="inline mb-1 text-[#FFC400]"></AiFillStar>
                        <AiFillStar className="inline mb-1 text-[#FFC400]"></AiFillStar>
                        <AiFillStar className="inline mb-1 text-[#FFC400]"></AiFillStar>
                    </p>
                    <p>
                        {reviewText.length > 100
                            ? reviewText.slice(0, 100) + "..."
                            : reviewText}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Review;
