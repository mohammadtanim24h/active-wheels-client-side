import React from "react";
import Swal from "sweetalert2";

const OrderRow = ({ order, index, refetch }) => {
    const { _id, partName, price, quantity, address } = order;
    const cancelOrder = (id) => {
        Swal.fire({
            title: "Are you sure you want to cancel the order?",
            text: "You won't be able to revert this!",
            icon: "warning",
            iconColor: "#FFC107",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3DBE29",
            confirmButtonText: "Yes, cancel it!",
            cancelButtonText: "Back Off",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/order/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount === 1) {
                            Swal.fire(
                                "Canceled!",
                                "Your order has been canceled.",
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
            <td>{partName}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{address}</td>
            <td>
                <button
                    onClick={() => cancelOrder(_id)}
                    className="btn btn-xs btn-error text-white"
                >
                    Cancel
                </button>
            </td>
        </tr>
    );
};

export default OrderRow;
