import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import Loading from "../Shared/Loading";

const Purchase = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const { data: part, isLoading } = useQuery(["part", id], () =>
        fetch(`http://localhost:5000/part/${id}`).then((res) => res.json())
    );
    const [quantity, setQuantity] = useState(part?.minOrderQuantity);
    if (isLoading) {
        return <Loading></Loading>;
    }

    const quantityChange = (e) => {
        setQuantity(e.target.value);
    };
    return (
        <div className="flex flex-col md:flex-row justify-around mt-8">
            <div className="card w-80 md:w-1/3 h-max bg-base-100 shadow-xl mx-auto md:mx-0">
                <img src={part.img} alt="" />
                <div className="card-body">
                    <h2 className="card-title">{part.name}</h2>
                    <p>Price: ${part.price}</p>
                    <p>{part.description}</p>
                    <p>Minimum Quantity: {part.minOrderQuantity}</p>
                    <p>Available Quantity: {part.availableQuantity}</p>
                </div>
            </div>
            <div className="card w-80 md:w-1/3 bg-base-100 shadow-xl mx-auto md:mx-0">
                <div className="card-body">
                    <h2 className="text-2xl text-center text-slate-600 mb-2">
                        Order Information
                    </h2>
                    <form>
                        <div className="form-control w-full max-w-lg mb-1">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                value={user.displayName}
                                disabled
                                className="input input-bordered w-full max-w-lg mb-1"
                            />
                        </div>
                        <div className="form-control w-full max-w-lg mb-1">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                value={user.email}
                                disabled
                                className="input input-bordered w-full max-w-lg mb-1"
                            />
                        </div>
                        <div className="form-control w-full max-w-lg mb-1">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Address"
                                className="input input-bordered w-full max-w-lg mb-1"
                            />
                        </div>
                        <div className="form-control w-full max-w-lg mb-1">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Phone"
                                className="input input-bordered w-full max-w-lg mb-1"
                            />
                        </div>
                        <div className="form-control w-full max-w-lg mb-1">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Quantity"
                                defaultValue={part.minOrderQuantity}
                                onChange={quantityChange}
                                className="input input-bordered w-full max-w-lg mb-1"
                            />
                        </div>
                        {quantity < part.minOrderQuantity && (
                            <p className="text-red-500 text-center mt-2">
                                You cannot order less than minimum quantity
                            </p>
                        )}
                        {quantity > part.availableQuantity && (
                            <p className="text-red-500 text-center mt-2">
                                You cannot order more than available quantity
                            </p>
                        )}
                        <button
                            disabled={
                                quantity < part.minOrderQuantity ||
                                quantity > part.availableQuantity
                            }
                            className="btn btn-primary text-white w-full mt-6"
                        >
                            Purchase
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
