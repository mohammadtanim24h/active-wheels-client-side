import React from "react";
import "./MyPortfolio.css";

const MyPortfolio = () => {
    return (
        <div className="my-3">
            <h2 className="text-center text-blue-500 font-semibold text-3xl">
                My Portfolio
            </h2>
            <div className="w-full md:w-3/4 mx-auto mt-5 shadow-lg rounded p-8 leading-6 my-info md:text-slate-100">
                <h3>
                    <span className="font-semibold">Name:</span> Mohammad Tanim
                </h3>
                <h3>
                    <span className="font-semibold">Email:</span>{" "}
                    mohammad.tanim24h@gmail.com
                </h3>
                <h3>
                    <span className="font-semibold">Education:</span> Passed HSC
                    (Business Studies). Now admission candidate.
                </h3>
                <h3>
                    <span className="font-semibold">Skills:</span>
                </h3>
                <h4>
                    <span className="font-semibold">Expertise:</span> HTML, CSS,
                    JavaScript, React, Bootstrap5, TailwindCSS.
                </h4>
                <h4>
                    <span className="font-semibold">Comfortable:</span> Node,
                    MongoDB, ExpressJS.
                </h4>
                <h4>
                    <span className="font-semibold">Tools:</span> Git, Github,
                    Firebase, Netlify, Heroku, Codepen, Npm
                </h4>

                <div className="mt-6">
                    <h3 className="font-semibold">Three of my Projects: </h3>
                    <h4>
                        Perfumania:{" "}
                        <a
                            href="https://perfumania-4c8ba.web.app/"
                            rel="noreferrer"
                            target="_blank"
                            className="md:text-emerald-200 font-semibold"
                        >
                            Live site
                        </a>
                    </h4>
                    <h4>
                        Gym Freak:{" "}
                        <a
                            href="https://gym-freak-a8e55.web.app/"
                            rel="noreferrer"
                            target="_blank"
                            className="md:text-emerald-200 font-semibold"
                        >
                            Live site
                        </a>
                    </h4>
                    <h4>
                        Snap Away:{" "}
                        <a
                            href="https://snap-away-862c61.netlify.app/"
                            rel="noreferrer"
                            target="_blank"
                            className="md:text-emerald-200 font-semibold"
                        >
                            Live site
                        </a>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;
