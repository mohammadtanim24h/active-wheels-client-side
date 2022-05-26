import React from "react";
import { useNavigate } from "react-router-dom";
import usePartCount from "../../hooks/usePartCount";

const ProductInfo = () => {
    const [partCount] = usePartCount();
    const navigate = useNavigate();
    return (
        <div className="mt-4">
            <div>
                <div className="stats stats-vertical lg:stats-horizontal bg-slate-500 text-primary-content">
                    <div className="stat">
                        <div className="stat-title text-white">
                            Available Parts
                        </div>
                        <div className="stat-value text-white">{partCount}</div>
                        <div className="stat-actions">
                            <button className="btn btn-sm btn-success">
                                Know more
                            </button>
                        </div>
                    </div>

                    <div className="stat">
                        <div className="stat-title text-white">Net Worth</div>
                        <div className="stat-value text-white">$396,000</div>
                        <div className="stat-actions">
                            <button className="btn btn-sm mx-2 text-white">
                                Join us
                            </button>
                            <button
                                onClick={() => navigate("/about")}
                                className="btn btn-sm mx-2 text-white"
                            >
                                About us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
