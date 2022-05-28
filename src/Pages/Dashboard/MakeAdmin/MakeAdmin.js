import { signOut } from "firebase/auth";
import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import Loading from "../../Shared/Loading";
import AdminRow from "./AdminRow/AdminRow";

const MakeAdmin = () => {
    const navigate = useNavigate();
    const {
        data: users,
        isLoading,
        refetch,
    } = useQuery("users", () =>
        fetch("https://pacific-headland-20365.herokuapp.com/users", {
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
                Make a user Admin
            </h2>
            <div className="mt-4">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Manage</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(users) &&
                                users.map((user, index) => (
                                    <AdminRow
                                        index={index}
                                        key={user._id}
                                        user={user}
                                        refetch={refetch}
                                    ></AdminRow>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;
