import React from "react";
import Swal from "sweetalert2";

const ManageRow = ({ index, order, refetch }) => {
    const { _id, partName, price, quantity, paid } = order;

    // Cancel order
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
                                "The order has been successfully canceled.",
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
            <td>
                {paid ? (
                    <span className="text-green-500 font-bold">Paid</span>
                ) : (
                    <span className="text-red-500 font-bold">Unpaid</span>
                )}
            </td>
            <td>
                {paid ? (
                    <div>
                        <p>Pending</p>
                        <button className="btn btn-sm mt-1 bg-blue-500 hover:bg-blue-600 text-white outline-0 border-0 px-3">
                            Ship
                        </button>
                    </div>
                ) : (
                    <p>Yet to pay</p>
                )}
            </td>
            <td>
                <button
                    onClick={() => cancelOrder(_id)}
                    className="btn btn-xs btn-error text-white"
                    disabled={paid === true}
                >
                    Cancel
                </button>
            </td>
        </tr>
    );
};

export default ManageRow;
