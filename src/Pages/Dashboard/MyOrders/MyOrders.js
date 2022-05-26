import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import Loading from "../../Shared/Loading";
import OrderRow from "./OrderRow/OrderRow";

const MyOrders = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const email = user?.email;
    const {
        data: orders,
        isLoading,
        refetch,
    } = useQuery("orders", () =>
        fetch(`http://localhost:5000/order/${email}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => {
            if (res.status === 401 || res.status === 403) {
                toast.error("Forbidden access, please login again!");
                signOut(auth);
                localStorage.removeItem("accessToken");
                navigate("/");
            }
            return res.json();
        })
    );

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <h2 className="text-2xl md:text-3xl text-slate-600 text-center md:text-left mt-2 ml-1">
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
                            {Array.isArray(orders) &&
                                orders.map((order, index) => (
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
