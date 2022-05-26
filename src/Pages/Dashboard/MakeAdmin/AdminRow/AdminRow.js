import React from "react";
import toast from "react-hot-toast";

const AdminRow = ({ user, index, refetch }) => {
    const makeAdmin = () => {
        fetch(`http://localhost:5000/make-admin/${user.email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount === 1) {
                    toast.success(`Successfully Made ${user.email} an admin`);
                    refetch();
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
