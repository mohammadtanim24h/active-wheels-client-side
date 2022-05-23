import React from "react";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="hero h-[93vh] banner-section">
            <div className="hero-content text-center text-white">
                <div className="max-w-3xl">
                    <h1 className="mb-5 text-4xl md:text-5xl font-bold">Active Wheels</h1>
                    <p className="mb-5 text-xl">
                        Internationally approved parts manufacturer. We sell
                        quality parts with the best materials available at the
                        most reasonable price. With us You'll never drive alone.
                    </p>
                    <button className="btn btn-primary">Our Services</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
