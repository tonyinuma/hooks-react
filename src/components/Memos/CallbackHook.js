import React, { useState } from "react";
import "../Form/effects.css";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    const increment = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr />
        </div>
    );
};
