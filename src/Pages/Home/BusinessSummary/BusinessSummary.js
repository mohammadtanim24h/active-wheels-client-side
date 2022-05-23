import React from "react";
import { BsFlagFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import './BusinessSummary.css';


const BusinessSummary = () => {
    return (
        <div className="text-center my-20">
            <h2 className="text-4xl mt-12 mb-3 text-slate-600 font-medium">
                Business Summary
            </h2>
            <h3 className="text-3xl text-blue-500 font-bold mb-3">
                Trusted By Millions of People
            </h3>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-figure text-blue-500">
                        <BsFlagFill className="text-3xl"></BsFlagFill>
                    </div>
                    <div className="stat-title text-base mb-1">Countries</div>
                    <div className="stat-value mb-1">31</div>
                    <div className="stat-desc text-base mb-1">1969 - Present</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-blue-500">
                        <BsPeopleFill className="text-3xl"></BsPeopleFill>
                    </div>
                    <div className="stat-title text-base mb-1">New Customers</div>
                    <div className="stat-value mb-1">463</div>
                    <div className="stat-desc text-base mb-1">↗︎ 380 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-blue-500">
                        <BsFillEmojiSmileFill className="text-3xl"></BsFillEmojiSmileFill>
                    </div>
                    <div className="stat-title text-base mb-1">Satisfied Clients</div>
                    <div className="stat-value mb-1">379+</div>
                    <div className="stat-desc text-base mb-1">↗︎ 356 (14%)</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-blue-500">
                        <BsCurrencyDollar className="text-3xl"></BsCurrencyDollar>
                    </div>
                    <div className="stat-title text-base mb-1">Annual Revenue</div>
                    <div className="stat-value mb-1">134M+</div>
                    <div className="stat-desc text-base mb-1">↗︎ 122M (10%)</div>
                </div>
            </div>
            <div className="w-3/4 mx-auto mt-8 p-8 rounded-lg flex justify-between question-div">
                <div className="text-left ">
                    <h2 className="text-xl font-bold">Any questions about us or have any doubts?</h2>
                    <p className="text-base mt-1 font-medium">Let us hear your thoughts.</p>
                </div>
                <div>
                    <button className="btn btn-primary mx-1 text-white">Contact Us</button>
                    <button className="btn btn-neutral mx-1 text-white">Our Policies</button>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;
