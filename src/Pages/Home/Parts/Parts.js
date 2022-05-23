import React, { useEffect, useState } from "react";
import { FaTools } from "react-icons/fa";
import Part from "../Part/Part";

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch("parts.json")
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className="mt-10">
            <h2 className="text-center text-slate-500 text-5xl">
                <span>
                    Parts{" "}
                    <FaTools className="inline-block text-2xl mb-1"></FaTools>
                </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                {
                    parts.map(part => <Part part={part} key={part._id}></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;
