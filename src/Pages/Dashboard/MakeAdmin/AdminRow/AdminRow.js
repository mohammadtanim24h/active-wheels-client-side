import { signOut } from "firebase/auth";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import auth from "../../../../Firebase/firebase.init";

const AdminRow = ({ user, index, refetch }) => {
    const navigate = useNavigate();
    const makeAdmin = () => {
        fetch(`https://pacific-headland-20365.herokuapp.com/make-admin/${user.email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => {
                if (res.status === 401 || res.status === 403) {
                    toast.error("Forbidden access!");
                    signOut(auth);
                    localStorage.removeItem("accessToken");
                    navigate("/");
                }
                return res.json();
            })
            .then((data) => {
                if (data.modifiedCount === 1) {
                    refetch();
                    toast.success(`Successfully Made ${user.email} an admin`);
                }
            });
    };
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>
                <button
                    onClick={makeAdmin}
                    className="btn btn-xs btn-primary"
                    disabled={user.role === "admin"}
                >
                    Make Admin
                </button>
            </td>
            <td>{user.role ? "Admin" : "User"}</td>
        </tr>
    );
};

export default AdminRow;
