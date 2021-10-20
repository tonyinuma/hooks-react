import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import "./effects.css";

export const FormWithCustomHook = () => {
    const [formValues, hanleInputChange] = useForm({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log("Cambió el email");
    }, [email]);

    const hanleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    };

    return (
        <form onSubmit={hanleSubmit}>
            <h1>Form With Custom Hook</h1>
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

            <div className="form-group mt-2">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*****"
                    value={password}
                    onChange={hanleInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Guardar
            </button>
        </form>
    );
};
