import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

export const Layout = () => {
    const { state, increment } = useCounter(1);
    const [boxSize, setBoxSize] = useState({})
    const { data } = useFetch(
        `https://www.breakingbadapi.com/api/quotes/${state}`
    );
    const { quote } = !!data && data[0];

    const pTag = useRef();

    const res = useLayoutEffect(() => {
        const data = pTag.current.getBoundingClientRect();
        setBoxSize(data)
    }, [quote]);

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />
            <blockquote className="blockquote text-end">
                <p ref={pTag}>{quote}</p>
            </blockquote>
            <pre>{JSON.stringify(boxSize, null, 3)}</pre>
            <button className="btn btn-primary" onClick={increment}>
                Siguiente Frase
            </button>
        </div>
    );
};
