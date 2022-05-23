import React from "react";
import auth from "../../Firebase/firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] =
        useSignInWithGoogle(auth);
    if (googleUser) {
        console.log(googleUser);
    }
    return (
        <div>
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-primary px-8 text-white"
            >
                Sign in with google
            </button>
        </div>
    );
};

export default Login;
