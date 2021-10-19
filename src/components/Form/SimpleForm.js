import React, { useEffect, useState } from "react";
import "./effects.css";
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
    });

    const { name, email } = formState;

    useEffect(() => {
        console.log("Heey");
    }, []);

    useEffect(() => {
        console.log("formState");
    }, [formState]);

    useEffect(() => {
        console.log("Email Cambió");
    }, [email]);

    const hanleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value,
        });
    };

    return (
        <>
            <h1>Use Effect</h1>
            <hr />
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={hanleInputChange}
                />
            </div>

            <div className="form-group mt-2">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Tu Email"
                    autoComplete="off"
                    value={email}
                    onChange={hanleInputChange}
                />
            </div>
            {(name === '123') && <Message />}
        </>
    );
};
