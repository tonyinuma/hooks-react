import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../Form/effects.css";

export const MultipleCustomHooks = () => {
    const { state, increment } = useCounter(1);
    const { loading, data } = useFetch(
        `https://www.breakingbadapi.com/api/quotes/${state}`
    );
    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>Breaking Bad</h1>
            <hr />
            {loading ? (
                <div className="alert alert-info text-center">Loading...</div>
            ) : (
                <blockquote className="blockquote text-end">
                    <p>{quote}</p>
                    <footer className="blockquote-footer">{author}</footer>
                </blockquote>
            )}
            <button className="btn btn-primary" onClick={increment}>
                Siguiente Frase
            </button>
        </div>
    );
};
