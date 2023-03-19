import { useEffect, useRef, useState } from "react";

function Countdown({ seconds }) {
    const [Countdown, setCountDown] = useState(seconds);
    const timerId = useRef();
    useEffect(() => {
        timerId.current = setInterval(() => {
            setCountDown(prev => prev - 1)
        }, 500)
        return () => clearInterval(timerId.current)
    }, []);

    useEffect(() => {
        if (Countdown <= 0) {
            clearInterval(timerId.current);
            return;
        }
    }, [Countdown]);

    if (Countdown <= 0) {
        return <h1 className="text-blue-600">Resend Code</h1>
    }
    return (
        <h1 className="text-gray-300">Resend: {Countdown}</h1>
    )
}
export default Countdown;
