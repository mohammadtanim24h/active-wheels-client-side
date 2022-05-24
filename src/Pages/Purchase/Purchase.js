import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";

const Purchase = () => {
    const { id } = useParams();
    const { data: part, isLoading } = useQuery(["part", id], () =>
        fetch(`http://localhost:5000/part/${id}`).then((res) => res.json())
    );
    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <div className="card w-80 md:w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={part.img} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{part.name}</h2>
                    <p>Price: ${part.price}</p>
                    <p>{part.description}</p>
                    <p>Minimum Quantity: ${part.minOrderQuantity}</p>
                    <p>Available Quantity: ${part.availableQuantity}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
