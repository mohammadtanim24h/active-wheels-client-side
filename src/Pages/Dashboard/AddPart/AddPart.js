import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Loading from "../../Shared/Loading";

const AddPart = () => {
    const imageStorageKey = "430227413d25713dc9257dcf7feacc7e";
    const { register, handleSubmit, reset } = useForm();
    const [dataLoading, setDataLoading] = useState(false);
    const onSubmit = (data) => {
        setDataLoading(true);
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
                    const imgURL = result.data.url;
                    const part = {
                        name: data.name,
                        price: data.price,
                        description: data.description,
                        minOrderQuantity: data.minOrderQuantity,
                        availableQuantity: data.availableQuantity,
                        img: imgURL,
                    };
                    fetch("https://pacific-headland-20365.herokuapp.com/part", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `Bearer ${localStorage.getItem(
                                "accessToken"
                            )}`,
                        },
                        body: JSON.stringify(part),
                    })
                        .then((res) => res.json())
                        .then((inserted) => {
                            if (inserted.insertedId) {
                                Swal.fire(
                                    "Part added!",
                                    "Part is added successfully!",
                                    "success"
                                );
                                setDataLoading(false);
                                reset();
                            } else {
                                setDataLoading(false);
                                Swal.fire({
                                    icon: "error",
                                    title: "Couldn't add your part",
                                    text: "Something went wrong!",
                                });
                            }
                        });
                }
            });
    };

    if (dataLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <h2 className="text-2xl md:text-3xl text-slate-600 text-center mt-2">
                Add A Part
            </h2>
            <div className="card w-80 md:w-96 bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            placeholder="Part Name"
                            className="input input-bordered w-full max-w-xs mb-2"
                            {...register("name")}
                            required
                        />
                        <input
                            type="number"
                            placeholder="Price"
                            className="input input-bordered w-full max-w-xs mb-2"
                            {...register("price")}
                            required
                        />
                        <textarea
                            placeholder="Part Description"
                            className="w-full max-w-xs textarea textarea-bordered"
                            rows="3"
                            {...register("description")}
                            required
                        ></textarea>
                        <input
                            type="number"
                            placeholder="Minimum Order Quantity"
                            className="input input-bordered w-full max-w-xs mb-2"
                            {...register("minOrderQuantity")}
                            required
                        />
                        <input
                            type="number"
                            placeholder="Available Quantity"
                            className="input input-bordered w-full max-w-xs mb-2"
                            {...register("availableQuantity")}
                            required
                        />
                        <p className="text-base ml-1 text-slate-600 mb-1">
                            Part Image
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

export default AddPart;
