import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import "../Form/effects.css";
import { Small } from "./Small";

export const Memorize = () => {
    const { state, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>
                Counter: <Small value={state}></Small>
            </h1>
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
