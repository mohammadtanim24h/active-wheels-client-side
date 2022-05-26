import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../Firebase/firebase.init";
import Loading from "../../Shared/Loading";
import OrderRow from "./OrderRow/OrderRow";

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const {
        data: orders,
        isLoading,
        refetch,
    } = useQuery("orders", () =>
        fetch(`http://localhost:5000/order/${email}`).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <h2 className="text-2xl md:text-3xl text-slate-600 text-center md:text-left mt-2">
                My Orders
            </h2>
            <div className="mt-4">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Part Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Address</th>
                                <th>Manage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row --> */}
                            {orders.map((order, index) => (
                                <OrderRow
                                    index={index}
                                    key={order._id}
                                    order={order}
                                    refetch={refetch}
                                ></OrderRow>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
