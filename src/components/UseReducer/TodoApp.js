import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import "./style.css";

const initialState = [
    {
        id: new Date().getTime(),
        desc: "Aprender React",
        done: false,
    },
];

export const TodoApp = () => {
    const [todos] = useReducer(todoReducer, initialState);
    console.log(todos);
    return (
        <>
            <h1>Todo App</h1>
            <hr />

            <ul>
                <li>Hi</li>
                <li>Dark</li>
                <li>World!</li>
            </ul>
        </>
    );
};
