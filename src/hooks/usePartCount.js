import { useEffect, useState } from "react";

const usePartCount = () => {
    const [partCount, setPartCount] = useState(0);
    useEffect(() => {
        fetch("https://pacific-headland-20365.herokuapp.com/parts")
            .then((res) => res.json())
            .then((data) => {
                const count = data.length;
                setPartCount(count);
            });
    }, []);

    return [partCount];
};

export default usePartCount;
