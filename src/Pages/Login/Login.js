import React, { useEffect } from "react";
import auth from "../../Firebase/firebase.init";
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import googleLogo from "../../assets/images/icons8-google.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loading from "../Shared/Loading";
import useToken from "../../hooks/useToken";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    // hook form
    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues,
    } = useForm();

    // sign in hook
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    // sign in function
    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
    };

    // google sign in
    const [signInWithGoogle, googleUser, googleLoading, googleError] =
        useSignInWithGoogle(auth);

    // password reset hook
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const resetPassword = () => {
        const email = getValues().email;
        if (!email) {
            toast.error("Please enter your email to reset password");
        } else {
            sendPasswordResetEmail(email);
        }
    };

    const [token] = useToken(user || googleUser);

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token]);

    if (loading) {
        return <Loading></Loading>;
    }
    return (
        <div className="flex justify-center items-center h-[80vh]">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h2 className="text-slate-500 text-2xl font-bold text-center mb-2">
                        Login
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Email */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required",
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message:
                                            "Provide a valid Email Address",
                                    },
                                })}
                            />

                            <label className="label">
                                {errors.email?.type === "required" && (
                                    <span className="label-text text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                                {errors.email?.type === "pattern" && (
                                    <span className="label-text text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                            </label>
                        </div>

                        {/* Password */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is Required",
                                    },
                                    minLength: {
                                        value: 6,
                                        message:
                                            "Password must be at least 6 characters long",
                                    },
                                })}
                            />

                            <label className="label">
                                {errors.password?.type === "required" && (
                                    <span className="label-text text-red-500">
                                        {errors.password.message}
                                    </span>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <span className="label-text text-red-500">
                                        {errors.password.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        <p className="text-sm ml-1">
                            Forgot password?{" "}
                            <span
                                className="text-primary cursor-pointer"
                                onClick={resetPassword}
                            >
                                Reset
                            </span>
                        </p>
                        {error && (
                            <p className="text-red-500 text-center mt-2">
                                {error.message.slice(10)}
                            </p>
                        )}
                        <input
                            type="submit"
                            className="btn btn-primary mt-4 w-full text-white"
                            value="Login"
                        />
                    </form>
                    <p className="text-sm mt-3 text-center">
                        New to Active Wheels?{" "}
                        <Link className="text-primary" to="/signup">
                            Sign Up
                        </Link>{" "}
                        now!
                    </p>

                    <div className="divider">OR</div>

                    {googleError && (
                        <p className="text-center text-red-500 mb-3">
                            {googleError.message.slice(10)}
                        </p>
                    )}
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn bg-white px-8 hover:bg-base-200 border-0 shadow-lg text-slate-500"
                    >
                        <img
                            width={36}
                            className="mr-2"
                            src={googleLogo}
                            alt=""
                        />
                        Sign in with google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
