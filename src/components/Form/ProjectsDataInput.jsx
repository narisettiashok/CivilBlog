import React from "react";
import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";

function Input(props) {
    const { label, id, name, ...rest } = props
    return (
        <div className="form-group-project">
            <label className="form-label-project" htmlFor={name}>{label}</label>
            <Field className="form-control-project" id={id} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}
export default Input;