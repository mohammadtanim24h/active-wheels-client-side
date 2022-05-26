import React from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import { MdVerifiedUser } from "react-icons/md";
import defaultUserImg from "../../../assets/images/user.png";
import toast from "react-hot-toast";
import Loading from "../../Shared/Loading";

const MyProfile = () => {
    const [user] = useAuthState(auth);
    // update name function
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const updateName = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        if (!name) {
            toast.error("Please enter a name");
            return;
        } else {
            await updateProfile({ displayName: name });
            toast.success("Name Updated Successfully");
            e.target.reset();
        }
    };

    const updateImage = e => {
        e.preventDefault();
    }

    if (updating) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <h2 className="text-2xl md:text-3xl text-center md:text-left">
                Update your profile
            </h2>
            <div className="mt-6 flex flex-col-reverse md:flex-row-reverse justify-around rounded-lg border border-slate-200 w-full md:w-3/5 p-4">
                <div>
                    <h2 className="font-bold text-slate-500">Username:</h2>
                    <h2 className="text-base">{user.displayName}</h2>
                    <h2 className="font-bold text-slate-500">Email:</h2>
                    <h2 className="text-base">{user.email}</h2>
                    <h2>
                        Email Verified{" "}
                        {user.emailVerified ? (
                            <MdVerifiedUser className="text-green-500 mb-1 inline-block"></MdVerifiedUser>
                        ) : (
                            <span className="text-red-500">"X"</span>
                        )}
                    </h2>
                    <h2 className="font-bold text-slate-500 mt-2 mb-3">
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
                            className="btn btn-outline btn-primary w-full"
                        />
                    </form>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="avatar flex flex-col">
                    <div className="w-32 rounded-full">
                        <img
                            src={user.photoURL ? user.photoURL : defaultUserImg}
                            alt=""
                        />
                    </div>
                    <h3 className="font-bold text-slate-500 mt-2 mb-3">
                        Upload new image
                    </h3>
                    <form>
                        <input type="file" className="block" />
                        <input
                            className="mt-4 btn btn-outline btn-primary block"
                            type="submit"
                            value="upload"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
