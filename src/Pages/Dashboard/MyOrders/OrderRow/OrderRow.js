import React from "react";

const OrderRow = ({ order, index }) => {
    const { partName, price, quantity, address } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{partName}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{address}</td>
            <td>Delete</td>
        </tr>
    );
};

export default OrderRow;
