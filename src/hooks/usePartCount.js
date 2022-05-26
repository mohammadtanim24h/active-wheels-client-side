import { useEffect, useState } from "react";

const usePartCount = () => {
    const [partCount, setPartCount] = useState(0);
    useEffect(() => {
        fetch("http://localhost:5000/parts")
            .then((res) => res.json())
            .then((data) => {
                const count = data.length;
                setPartCount(count);
            });
    }, []);

    return [partCount];
};

export default usePartCount;
