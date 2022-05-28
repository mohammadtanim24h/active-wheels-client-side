import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import { MdVerifiedUser } from "react-icons/md";
import defaultUserImg from "../../../assets/images/user.png";
import toast from "react-hot-toast";
import Loading from "../../Shared/Loading";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { MdOutlineUpdate } from "react-icons/md";

const MyProfile = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const [dataLoading, setDataLoading] = useState(false);
    const {
        data: userInfo,
        isLoading,
        refetch,
    } = useQuery("userinfo", () =>
        fetch(`https://pacific-headland-20365.herokuapp.com/user/${user?.email}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );

    // update name function
    const updateName = async (e) => {
        setDataLoading(true);
        e.preventDefault();
        const name = e.target.name.value;
        if (!name) {
            toast.error("Please enter a name");
            return;
        } else {
            fetch(`https://pacific-headland-20365.herokuapp.com/update-user-info/${user?.email}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
                body: JSON.stringify({ name }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount === 1) {
                        refetch();
                        setDataLoading(false);
                        toast.success("Name Updated Successfully");
                        e.target.reset();
                    }
                });
        }
    };

    const imageStorageKey = "430227413d25713dc9257dcf7feacc7e";
    // update image function
    const onSubmit = (data) => {
        setDataLoading(true);
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    const imageURL = result.data.url;
                    fetch(
                        `https://pacific-headland-20365.herokuapp.com/update-user-info/${user?.email}`,
                        {
                            method: "PUT",
                            headers: {
                                "content-type": "application/json",
                                authorization: `Bearer ${localStorage.getItem(
                                    "accessToken"
                                )}`,
                            },
                            body: JSON.stringify({ img: imageURL }),
                        }
                    )
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.modifiedCount === 1) {
                                refetch();
                                setDataLoading(false);
                                toast.success("Image uploaded successfully");
                            }
                        });
                }
            });
    };

    if (isLoading || dataLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <h2 className="text-2xl md:text-3xl text-slate-600 text-center mt-2">
                Update your profile
            </h2>
            <div className="mt-6 flex flex-col-reverse md:flex-row-reverse justify-around rounded-lg border border-slate-200 w-full lg:w-3/5 p-4 mx-0 md:mx-auto">
                <div>
                    <h2 className="text-base mt-3">
                        <span className="font-bold text-slate-500">
                            Username:{" "}
                        </span>
                        {userInfo?.name || user.displayName}
                    </h2>
                    <h2 className="text-base">
                        <span className="font-bold text-slate-500">Email:</span>{" "}
                        {user.email}
                    </h2>
                    <h2>
                        Email Verified{" "}
                        {user.emailVerified ? (
                            <MdVerifiedUser className="text-green-500 mb-1 inline-block"></MdVerifiedUser>
                        ) : (
                            <span className="text-red-500 font-bold">X</span>
                        )}
                    </h2>
                    <h2 className="mb-5">
                        <span className="font-bold text-slate-500">Role:</span>{" "}
                        {userInfo.role === "admin" ? "Admin" : "User"}
                    </h2>

                    <h2 className="font-bold text-slate-500 mb-2">
                        Update your name:
                    </h2>
                    <form onSubmit={updateName}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter new Name"
                            className="input input-bordered w-full max-w-xs mb-2"
                        />
                        <input
                            type="submit"
                            value="Update"
                            className="btn btn-outline btn-primary w-full mt-1"
                        />
                    </form>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="avatar flex flex-col">
                    <div className="w-32 rounded-full">
                        <img
                            src={userInfo.img ? userInfo.img : defaultUserImg}
                            alt=""
                        />
                    </div>
                    <h3 className="font-bold text-slate-500 mt-2 mb-3">
                        Upload new image
                    </h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="file"
                            {...register("image")}
                            name="image"
                            className="block"
                        />
                        <input
                            className="mt-4 btn btn-outline btn-primary block"
                            type="submit"
                            value="upload"
                        />
                    </form>
                </div>
            </div>

            {/* additional info */}
            <div className="mt-6 rounded-lg border border-slate-200 w-full lg:w-3/5 p-4 mx-0 md:mx-auto relative">
                <h3 className="text-slate-600 text-xl mb-2">
                    Additional Info:{" "}
                </h3>
                <h3>
                    <span className="font-bold text-slate-500 mt-2 mb-3">
                        Education:
                    </span>{" "}
                    {userInfo?.education
                        ? userInfo?.education
                        : "Please provide your educational info."}
                </h3>
                <h3>
                    <span className="font-bold text-slate-500 mt-2 mb-3">
                        Address:
                    </span>{" "}
                    {userInfo?.address
                        ? userInfo?.address
                        : "Please provide your address."}
                </h3>
                <h2>
                    <span className="font-bold text-slate-500">Phone:</span>{" "}
                    {userInfo?.phone
                        ? userInfo?.phone
                        : "Please Provide your phone"}
                </h2>
                <h2>
                    <span className="font-bold text-slate-500">LinkedIn: </span>{" "}
                    {userInfo?.linkedin
                        ? userInfo?.linkedin
                        : "Please Provide your linkedin account link"}
                </h2>
                <button onClick={() => navigate("/update-additional-info")} className="btn btn-primary mt-4 md:mt-0 text-white md:absolute md:top-0 md:right-0 md:rounded-none md:rounded-bl-md">
                    Update Additional Info <MdOutlineUpdate className="ml-1 text-lg"></MdOutlineUpdate>
                </button>
            </div>
        </div>
    );
};

export default MyProfile;
