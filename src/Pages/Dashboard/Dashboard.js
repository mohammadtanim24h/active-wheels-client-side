import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import ProductInfo from "./ProductInfo";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../Shared/Loading";
import "./Dashboard.css";

const Dashboard = () => {
    const { pathname } = useLocation();
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    if (adminLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className="drawer drawer-mobile">
            <input
                id="dashboard-sidebar"
                type="checkbox"
                className="drawer-toggle"
            />
            <div className="drawer-content px-4">
                {/* <!-- Page content here --> */}
                {pathname === "/dashboard" && (
                    <div>
                        <h2 className="text-3xl border-b-2 border-blue-500 inline-block">
                            Dashboard
                        </h2>
                        <ProductInfo></ProductInfo>
                        {!admin && (
                            <>
                                <ul className="mt-5">
                                    <li>
                                        <MdOutlineTipsAndUpdates className="inline-block mb-1"></MdOutlineTipsAndUpdates>{" "}
                                        Go to My Orders page to view and manage
                                        your orders
                                    </li>
                                    <li>
                                        <MdOutlineTipsAndUpdates className="inline-block mb-1"></MdOutlineTipsAndUpdates>{" "}
                                        Go to Add Review page and please post
                                        your feedback about us
                                    </li>
                                    <li>
                                        <MdOutlineTipsAndUpdates className="inline-block mb-1"></MdOutlineTipsAndUpdates>{" "}
                                        Go to My Profile page to update your
                                        profile
                                    </li>
                                </ul>
                            </>
                        )}
                    </div>
                )}
                <Outlet></Outlet>
            </div>
            <div className="drawer-side sidebar-ul">
                <label
                    htmlFor="dashboard-sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-white md:bg-none rounded-lg gap-y-2">
                    {/* <!-- Sidebar content here --> */}
                    {!admin && (
                        <>
                            <li>
                                <NavLink to="my-orders">My Orders</NavLink>
                            </li>
                            <li>
                                <NavLink to="add-review">Add Review</NavLink>
                            </li>
                        </>
                    )}
                    <li>
                        <NavLink to="my-profile">My Profile</NavLink>
                    </li>
                    {admin && (
                        <>
                            <li>
                                <NavLink to="add-part">Add Part</NavLink>
                            </li>
                            <li>
                                <NavLink to="manage-parts">
                                    Manage Parts
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="make-admin">Make Admin</NavLink>
                            </li>
                            <li>
                                <NavLink to="manage-orders">Manage All Orders</NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
