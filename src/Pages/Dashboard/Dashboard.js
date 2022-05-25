import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <h2>Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
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
