import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useLocation } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
    const [user] = useAuthState(auth);
    const { pathname } = useLocation();
    const menuItems = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/services">Services</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            {user && (
                <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
            )}
            <li>
                {user ? (
                    <button
                        onClick={() => {
                            signOut(auth);
                            localStorage.removeItem("accessToken");
                        }}
                        className="btn btn-primary btn-outline"
                    >
                        Logout
                    </button>
                ) : (
                    <NavLink to="/login">Login</NavLink>
                )}
            </li>
        </>
    );
    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100 shadow mb-2 rounded-b-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-2"
                        >
                            {menuItems}
                            {user && <p className="text-base p-3 bg-slate-600 text-white rounded-lg">{user.displayName}</p>}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        ACTIVE WHEELS
                    </a>
                    {user && <p className="text-base ml-2 hidden md:block">{user.displayName}</p>}
                    {pathname.includes("dashboard") && (
                        <label
                            htmlFor="dashboard-sidebar"
                            className="btn btn-ghost drawer-button lg:hidden"
                        >
                            More
                            <svg
                                className="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                            </svg>
                        </label>
                    )}
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 gap-2">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
