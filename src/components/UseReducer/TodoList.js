import React from "react";

export const TodoList = ({ todos, handleToggle, handleDelete }) => {
    return (
        <>
            <ul className="list-group list-group-flush">
                {todos.map((todo, index) => (
                    <li key={todo.id} className="list-group-item">
                        <p
                            className={todo.done && `completed`}
                            onClick={() => handleToggle(todo.id)}
                        >
                            {index + 1}. {todo.desc}
                        </p>
                        <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(todo.id)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};
