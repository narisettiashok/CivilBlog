import React from 'react';
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

function Input(props) {
    const { label, id, name, togglePasswordVisibility, passwordVisible, ...rest } = props
    return (
        <div className="form-group">
            <label className="form-label" htmlFor={name}>{label}</label>
            <Field className="form-control" id={id} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
            <i className="absolute right-2 top-8 cursor-pointer" onClick={togglePasswordVisibility}>{passwordVisible}</i>
        </div>
    )
}
export default Input;
