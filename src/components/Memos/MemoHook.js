import React, { useMemo, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import "../Form/effects.css";
import { LargeProcess } from "../helpers/LargeProcess";

export const MemoHook = () => {
    const { state, increment } = useCounter(1000);
    const [show, setShow] = useState(true);

    const memoLargeProcess = useMemo(() => LargeProcess(state), [state]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>
                Counter: <small>{state}</small>
            </h3>
            <hr />
            <p>{memoLargeProcess}</p>

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
