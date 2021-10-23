import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import "../Form/effects.css";

export const MemoHook = () => {
    const { state, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>
                Counter: <small>{state}</small>
            </h3>
            <hr />

            <button className="btn btn-primary" onClick={increment}>
                Increment
            </button>
            <button
                className="btn btn-success ml-2"
                onClick={() => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    );
};
