import React from "react";
import plane from "../../../assets/images/plane.webp";
import quality from "../../../assets/images/quality.webp";
import online from "../../../assets/images/online.webp";

const Specialty = () => {
    return (
        <div>
            <h2 className="text-center text-3xl text-slate-500 font-bold">
                Our Specialties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-10 md:max-w-5xl mx-auto md:mt-6 md:mb-16 p-8 md:p-0">
                <div className="flex justify-around items-center">
                    <img src={plane} alt="" />
                    <div className="ml-5">
                        <h3 className="text-xl font-bold text-slate-500">
                            Free Delivery
                        </h3>
                        <p>
                            We provide free delivery for all products over $100
                        </p>
                    </div>
                </div>
                <div className="flex justify-around items-center">
                    <img src={quality} alt="" />
                    <div className="ml-5">
                        <h3 className="text-xl font-bold text-slate-500">
                            Quality Products
                        </h3>
                        <p>
                            We ensure our customers get the best products
                            available
                        </p>
                    </div>
                </div>
                <div className="flex justify-around items-center">
                    <img src={online} alt="" />
                    <div className="ml-5">
                        <h3 className="text-xl font-bold text-slate-500">
                            Online Support
                        </h3>
                        <p>
                            To satisfy our customers we give 24/7 online support
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specialty;
