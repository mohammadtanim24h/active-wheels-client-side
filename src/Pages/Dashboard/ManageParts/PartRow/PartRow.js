import React from "react";
import Swal from "sweetalert2";

const PartRow = ({ part, index, refetch }) => {
    const { _id, name, price, minOrderQuantity, availableQuantity } = part;
    const deletePart = () => {
        Swal.fire({
            title: "Are you sure you want to delete?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3DBE29",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/part/${_id}`, {
                    method: "DELETE",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount === 1) {
                            Swal.fire(
                                "Deleted!",
                                "Part has been deleted.",
                                "success"
                            );
                            refetch();
                        }
                    });
            }
        });
    };

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>${price}/p</td>
            <td>{minOrderQuantity}</td>
            <td>{availableQuantity}</td>
            <td>
                <button onClick={deletePart} className="btn btn-sm btn-error">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default PartRow;
