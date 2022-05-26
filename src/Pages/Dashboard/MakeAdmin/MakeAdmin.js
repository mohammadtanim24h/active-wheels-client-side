import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";

const MakeAdmin = () => {
    const {
        data: users,
        isLoading,
        refetch,
    } = useQuery("users", () =>
        fetch("http://localhost:5000/users", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }
    
    return (
        <div>
            <h2 className="text-2xl md:text-3xl text-slate-600 text-center md:text-left mt-2 ml-1">
                Make a user Admin
            </h2>
        </div>
    );
};

export default MakeAdmin;
