import React from "react";
import { BsFlagFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";


const BusinessSummary = () => {
    return (
        <div className="text-center my-20">
            <h2 className="text-4xl mt-12 mb-3 text-slate-600 font-medium">
                Business Summary
            </h2>
            <h3 className="text-3xl text-blue-500 font-bold mb-3">
                Trusted By Millions of People
            </h3>
            <div class="stats shadow">
                <div class="stat">
                    <div class="stat-figure text-blue-500">
                        <BsFlagFill className="text-3xl"></BsFlagFill>
                    </div>
                    <div class="stat-title text-base mb-1">Countries</div>
                    <div class="stat-value mb-1">31</div>
                    <div class="stat-desc text-base mb-1">1969 - Present</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-blue-500">
                        <BsPeopleFill className="text-3xl"></BsPeopleFill>
                    </div>
                    <div class="stat-title text-base mb-1">New Customers</div>
                    <div class="stat-value mb-1">463</div>
                    <div class="stat-desc text-base mb-1">↗︎ 380 (22%)</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-blue-500">
                        <BsFillEmojiSmileFill className="text-3xl"></BsFillEmojiSmileFill>
                    </div>
                    <div class="stat-title text-base mb-1">Satisfied Clients</div>
                    <div class="stat-value mb-1">379+</div>
                    <div class="stat-desc text-base mb-1">↗︎ 356 (14%)</div>
                </div>
                <div class="stat">
                    <div class="stat-figure text-blue-500">
                        <BsCurrencyDollar className="text-3xl"></BsCurrencyDollar>
                    </div>
                    <div class="stat-title text-base mb-1">Annual Revenue</div>
                    <div class="stat-value mb-1">185M+</div>
                    <div class="stat-desc text-base mb-1">↗︎ 172M (10%)</div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;
