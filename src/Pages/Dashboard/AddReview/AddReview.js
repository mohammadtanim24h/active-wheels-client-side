import React from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div>
            <h2 className="text-2xl md:text-3xl text-slate-600 text-center  ml-1">
                Add a review
            </h2>
            <div className="card w-80 md:w-96 bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs mb-2"
                            {...register("name")}
                            required
                        />
                        <input
                            type="number"
                            min="1"
                            max="5"
                            placeholder="Rating"
                            className="input input-bordered w-full max-w-xs mb-2"
                            {...register("rating")}
                            required
                        />
                        <textarea
                            placeholder="Your Review"
                            className="w-full max-w-xs textarea textarea-bordered"
                            rows="3"
                            {...register("reviewText")}
                        ></textarea>
                        <p className="text-base ml-1 text-slate-600 mb-1">
                            Your Image
                        </p>
                        <input
                            className="w-full max-w-xs textarea textarea-bordered mb-4"
                            type="file"
                            {...register("img")}
                            required
                        />
                        <input
                            type="submit"
                            value="Add Review"
                            className="w-full btn btn-primary"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;
