import React from "react";
import auth from "../../Firebase/firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import googleLogo from "../../assets/images/icons8-google.png";
import { Link } from "react-router-dom";

const Login = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => console.log(data);
    const [signInWithGoogle, googleUser, googleLoading, googleError] =
        useSignInWithGoogle(auth);
    return (
        <div className="flex justify-center items-center h-[80vh]">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h2 className="text-slate-500 text-2xl font-bold text-center mb-4">
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
