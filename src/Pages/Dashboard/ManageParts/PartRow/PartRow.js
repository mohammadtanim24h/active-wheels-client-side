import React from "react";

const PartRow = ({part, index, refetch}) => {
    const {name, price, minOrderQuantity, availableQuantity} = part;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>${price}/p</td>
            <td>{minOrderQuantity}</td>
            <td>{availableQuantity}</td>
            <td><button className="btn btn-sm btn-error">Delete</button></td>
        </tr>
    );
};

export default PartRow;
