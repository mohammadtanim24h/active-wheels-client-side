import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import auth from "../../../../Firebase/firebase.init";
import Loading from "../../../Shared/Loading";

const UpdateAdditionalInfo = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [dataLoading, setDataLoading] = useState(false);
    const updateAdditionalInfo = (e) => {
        setDataLoading(true);
        e.preventDefault();
        const additionalInfo = {
            education: e.target.education.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
            linkedin: e.target.linkedin.value,
        };
        fetch(`https://pacific-headland-20365.herokuapp.com/update-user-info/${user?.email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(additionalInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount === 1) {
                    setDataLoading(false);
                    toast.success("Additional Info updated successfully");
                    navigate("/dashboard/my-profile");
                }
            });
    };

    if (dataLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className="mt-6 mb-10 rounded-lg border border-slate-200 w-full lg:w-3/5 p-4 mx-0 md:mx-auto">
            <h3 className="text-center font-semibold text-xl text-slate-500 mb-3">
                Update info
            </h3>
            <form onSubmit={updateAdditionalInfo}>
                <input
                    name="education"
                    type="text"
                    placeholder="Your education"
                    className="input input-bordered w-full mb-2"
                    required
                />
                <input
                    name="address"
                    type="text"
                    placeholder="Your address"
                    className="input input-bordered w-full mb-2"
                    required
                />
                <input
                    name="phone"
                    type="number"
                    placeholder="Your phone number"
                    className="input input-bordered w-full mb-2"
                    required
                />
                <input
                    name="linkedin"
                    type="text"
                    placeholder="Your linkedin profile link"
                    className="input input-bordered w-full mb-2"
                    required
                />
                <input
                    type="submit"
                    value="Update"
                    className="btn btn-primary w-1/4 text-white"
                />
            </form>
        </div>
    );
};

export default UpdateAdditionalInfo;
