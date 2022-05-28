import { signOut } from "firebase/auth";
import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import Loading from "../../Shared/Loading";

const ManageOrders = () => {
    const navigate = useNavigate();
    const {
        data: orders,
        isLoading,
        refetch,
    } = useQuery("allorders", () =>
        fetch("http://localhost:5000/orders", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => {
            if (res.status === 403) {
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

    console.log(orders);

    return (
        <div>
            <h3 className="text-2xl md:text-3xl text-slate-600 text-center mt-2">
                Manage all orders
            </h3>
        </div>
    );
};

export default ManageOrders;
