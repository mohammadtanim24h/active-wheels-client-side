import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
    "pk_test_51L1AmbEFg4BVPfTT55g3N3L048Xzi8XVPjRqXaIFZwGgNVGQGoHtNc7vpvZ7Jt48oD5WCP312wpPA0iXpijEasX800gG3Zccgc"
);

const Payment = () => {
    const { id } = useParams();

    const { data: order, isLoading } = useQuery(["order", id], () =>
        fetch(`http://localhost:5000/get-order/${id}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className="flex justify-around flex-col lg:flex-row-reverse gap-5 mt-12">
            <div className="card w-full md:w-2/5 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className="font-semibold text-blue-500">
                        Hello {order?.clientName}
                    </p>
                    <h2 className="card-title">
                        Please Pay for {order?.partName}
                    </h2>
                    <h2>Quantity: {order?.quantity}</h2>
                    <h2>
                        Pay: $
                        {parseInt(order?.quantity) * parseInt(order?.price)}
                    </h2>
                </div>
            </div>
            <div className="card w-full md:w-2/5 bg-base-100 shadow-xl">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
