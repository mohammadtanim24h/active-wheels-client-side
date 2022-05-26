import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import OrderRow from "./OrderRow/OrderRow";

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const email = user?.email;
    useEffect(() => {
        fetch(`http://localhost:5000/order/${email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [email]);
    return (
        <div>
            <h2 className="text-2xl md:text-3xl text-slate-600 text-center md:text-left">
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
