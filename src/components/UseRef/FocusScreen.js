import React, { useRef } from "react";
import "../Form/effects.css";

export const FocusScreen = () => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef);
    };

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input
                className="form-control"
                ref={inputRef}
                placeholder="Su nombre"
            />
            <button className="btn btn-primary mt-4" onClick={handleClick}>Focus</button>
        </div>
    );
};
