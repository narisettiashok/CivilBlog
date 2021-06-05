import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function DatePicker(props) {
    const { label, name, ...rest } = props;

    return (
        <div className="form-group">
            <label className="form-label" htmlFor={name}>{label}</label>
            <div className="form-control">
                <Field name={name}>
                    {
                        ({ form, field }) => {
                            const { setFieldValue } = form
                            const { value } = field
                            return (
                                <ReactDatePicker
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

export default DatePicker;
