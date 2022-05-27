import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loading from "./Loading";

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if (loading || adminLoading) {
        return <Loading></Loading>;
    }

    if (!user || !admin) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        toast.error("Forbidden Access");
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAdmin;
