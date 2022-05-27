import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Loading from "../../Shared/Loading";

const AddReview = () => {
    const imageStorageKey = "430227413d25713dc9257dcf7feacc7e";
    const { register, handleSubmit, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const onSubmit = (data) => {
        setLoading(true);
        const image = data.img[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    const imageURL = result.data.url;
                    const review = {
                        name: data.name,
                        rating: data.rating,
                        reviewText: data.reviewText,
                        img: imageURL,
                    };
                    fetch(
                        "https://pacific-headland-20365.herokuapp.com/review",
                        {
                            method: "POST",
                            headers: {
                                "content-type": "application/json",
                            },
                            body: JSON.stringify(review),
                        }
                    )
                        .then((res) => res.json())
                        .then((inserted) => {
                            if (inserted.insertedId) {
                                Swal.fire(
                                    "Review added!",
                                    "Your review is added successfully!",
                                    "success"
                                );
                                setLoading(false);
                                reset();
                            } else {
                                setLoading(false);
                                Swal.fire({
                                    icon: "error",
                                    title: "Couldn't add your review",
                                    text: "Something went wrong!",
                                });
                            }
                        });
                }
            });
    };

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <h2 className="text-2xl md:text-3xl text-slate-600 text-center">
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
                            required
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
