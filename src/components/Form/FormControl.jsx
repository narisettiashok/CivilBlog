import React from "react";
import Checkbox from "./Checkbox";
import Input from "./Input";
import DatePicker from "./DatePicker";

function FormControl(props) {
    const { control, ...rest } = props
    switch(control) {
        case "input":
            return <Input {...rest} />;
        case "checkbox":
            return <Checkbox {...rest} />;
        case "date":
            return <DatePicker {...rest} />;
        default:
            return null;
    }
}

export default FormControl;
