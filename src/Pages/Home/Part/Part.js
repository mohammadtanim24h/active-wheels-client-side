import React from "react";

const Part = ({ part }) => {
    const {
        name,
        img,
        price,
        description,
        minOrderQuantity,
        availableQuantity,
    } = part;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    className="md:h-full md:w-[350px] object-cover"
                    src={img}
                    alt="car-part"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <p>{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                <p>Minimum Order Quantity: {minOrderQuantity}</p>
                <p>Available Quantity: {availableQuantity}</p>
                <div className="card-actions justify-end mt-1">
                    <button className="btn btn-primary text-white">Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Part;
