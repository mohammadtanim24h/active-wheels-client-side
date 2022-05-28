import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const OrderRow = ({ order, index, refetch }) => {
    const { _id, partName, price, quantity, address, paid } = order;
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
                fetch(
                    `https://pacific-headland-20365.herokuapp.com/order/${id}`,
                    {
                        method: "DELETE",
                    }
                )
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
                {!paid && (
                    <Link to={`/dashboard/payment/${_id}`}>
                        <button className="btn btn-xs bg-green-500 hover:bg-green-600 text-white outline-0 border-0 px-3">
                            Pay
                        </button>
                    </Link>
                )}
                {
                    paid && <p className="text-green-500">Paid</p>
                }
            </td>
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
