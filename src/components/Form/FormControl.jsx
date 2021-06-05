import React from "react";
import Checkbox from "./Checkbox";
import Input from "./Input";
import DatePicker from "./DatePicker";
import ProjectsDataInput from "./ProjectsDataInput";

function FormControl(props) {
    const { control, ...rest } = props
    switch(control) {
        case "input":
            return <Input {...rest} />;
        case "dataInput":
            return <ProjectsDataInput {...rest} />;
        case "checkbox":
            return <Checkbox {...rest} />;
        case "date":
            return <DatePicker {...rest} />;
        default:
            return null;
    }
}

export default FormControl;
