import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";

const Purchase = () => {
    const { id } = useParams();
    const { data: part, isLoading } = useQuery("part", () =>
        fetch(`http://localhost:5000/part/${id}`).then((res) => res.json())
    );
    if(isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-4xl">{part.name}</h2>
        </div>
    );
};

export default Purchase;
