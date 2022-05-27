import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import PartRow from "./PartRow/PartRow";

const ManageParts = () => {
    const {
        data: parts,
        isLoading,
        refetch,
    } = useQuery("manageparts", () =>
        fetch("http://localhost:5000/parts").then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <h2 className="text-2xl md:text-3xl text-slate-600 text-center md:text-left mt-2 ml-1">
                Manage Parts
            </h2>
            <div className="overflow-x-auto mt-4">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Minimum Order</th>
                            <th>Available</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(parts) &&
                            parts.map((part, index) => (
                                <PartRow
                                    part={part}
                                    key={part._id}
                                    index={index}
                                    refetch={refetch}
                                ></PartRow>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageParts;
