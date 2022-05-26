import React from "react";

const AdminRow = ({ user, index }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>
                <button
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
