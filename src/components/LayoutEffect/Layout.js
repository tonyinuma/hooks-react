import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../Form/effects.css";

export const Layout = () => {
    const { state, increment } = useCounter(1);
    const { data } = useFetch(
        `https://www.breakingbadapi.com/api/quotes/${state}`
    );
    const { quote } = !!data && data[0];

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />
            <blockquote className="blockquote text-end">
                <p>{quote}</p>
            </blockquote>
            <button className="btn btn-primary" onClick={increment}>
                Siguiente Frase
            </button>
        </div>
    );
};
