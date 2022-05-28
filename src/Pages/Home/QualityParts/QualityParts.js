import React from "react";
import car from "../../../assets/images/car-active.jpg";

const QualityParts = () => {
    return (
        <div className="hero md:h-[70vh] my-12">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <img
                        src={car}
                        className="w-80 md:max-w-sm rounded-lg shadow-2xl"
                        alt=""
                    />
                </div>
                <div className="md:ml-12">
                    <h1 className="text-4xl mt-5 md:mt-0 md:text-5xl font-bold mb-3">
                        We Keep Your Car
                    </h1>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary">
                        Up And Running
                    </h1>
                    <p className="py-6 text-lg">
                        We manufacture High-Quality State of The Art parts just
                        for you. We always try to maintain our quality because
                        we care about you. Try us today!
                    </p>
                    <button className="btn btn-primary">Know More</button>
                </div>
            </div>
        </div>
    );
};

export default QualityParts;
