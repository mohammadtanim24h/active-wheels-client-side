import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading";

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
    console.log(order);

    return (
        <div>
            <h2 className="text-3xl text-center">Pay please us!</h2>
        </div>
    );
};

export default Payment;
