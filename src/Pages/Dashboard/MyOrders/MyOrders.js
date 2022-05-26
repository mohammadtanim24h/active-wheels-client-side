import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";

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
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Part Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row --> */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>Hello</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
