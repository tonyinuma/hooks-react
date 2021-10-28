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
    const [todos, dispatch] = useReducer(todoReducer, initialState);
    console.log(todos);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: "Aprender Angular",
            done: false,
        };

        const action = {
            type: "Add",
            payload: newTodo,
        };

        dispatch(action);
    };

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
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="description"
                            placeholder="write todo .."
                            autoComplete="off"
                            className="form-control"
                        />
                        <button
                            type="submit"
                            className="btn btn-dark mt-2 w-100"
                        >
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};