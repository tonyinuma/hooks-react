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
            <h1>Todo App ({todos.length})</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {todos.map((todo, index) => (
                            <li key={todo.id} className="list-group-item">
                                <p className="text-center">
                                    {index + 1}. {todo.desc}
                                </p>
                                <button className="btn btn-danger">
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    <form>
                        <input
                            type="text"
                            name="description"
                            placeholder="write todo .."
                            autoComplete="off"
                            className="form-control"
                        />
                        <button type="button" className="btn btn-dark mt-2 w-100">Add</button>
                    </form>
                </div>
            </div>
        </>
    );
};
