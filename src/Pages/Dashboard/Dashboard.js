import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import ProductInfo from "./ProductInfo";

const Dashboard = () => {
    const { pathname } = useLocation();
    return (
        <div className="drawer drawer-mobile">
            <input
                id="dashboard-sidebar"
                type="checkbox"
                className="drawer-toggle"
            />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                {pathname === "/dashboard" && (
                    <div>
                        <h2 className="text-2xl border-b-2 border-blue-500 inline-block">
                            Dashboard
                        </h2>
                        <ProductInfo></ProductInfo>
                        <ul className="mt-5">
                            <li>
                                <MdOutlineTipsAndUpdates className="inline-block mb-1"></MdOutlineTipsAndUpdates>{" "}
                                Go to My Orders page to view and manage your
                                orders
                            </li>
                            <li>
                                <MdOutlineTipsAndUpdates className="inline-block mb-1"></MdOutlineTipsAndUpdates>{" "}
                                Go to Add Review page and please post your
                                feedback about us
                            </li>
                            <li>
                                <MdOutlineTipsAndUpdates className="inline-block mb-1"></MdOutlineTipsAndUpdates>{" "}
                                Go to My Profile page to update your profile
                            </li>
                        </ul>
                    </div>
                )}
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="dashboard-sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content gap-y-2">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <Link to="my-orders">My Orders</Link>
                    </li>
                    <li>
                        <Link to="add-review">Add Review</Link>
                    </li>
                    <li>
                        <Link to="my-profile">My Profile</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
