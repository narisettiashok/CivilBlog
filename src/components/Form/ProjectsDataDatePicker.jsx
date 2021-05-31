import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function ProjectsDataDatePicker(props) {
    const { label, name, ...rest } = props;

    return (
        <div className="form-group-project">
            <label className="form-label-project" htmlFor={name}>{label}</label>
            <div className="form-control-project">
                <Field name={name}>
                    {
                        ({ form, field }) => {
                            const { setFieldValue } = form
                            const { value } = field
                            return (
                                <DatePicker
                                    className="focus:outline-none"
                                    id={name} {...field} {...rest}
                                    selected={(value && new Date(value)) || null}
                                    onChange={val => setFieldValue(name, val)}
                                    isClearable
                                    placeholderText={"Enter " + label}
                                />
                            )
                        }
                    }
                </Field>
            </div>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
};

export default ProjectsDataDatePicker;
