import React from "react";

const AddReview = () => {
    return (
        <div>
            <h2 className="text-2xl md:text-3xl text-slate-600 text-center">
                Add a review
            </h2>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;
