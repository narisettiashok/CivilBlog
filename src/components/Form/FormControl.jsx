import React from 'react';
import Checkbox from './Checkbox';
import Input from './Input';

function FormControl(props) {
    const { control, ...rest } = props   
    switch(control) {
        case 'input': return <Input {...rest}/>
        case 'checkbox': return <Checkbox {...rest} />
        default: return null
    }
}

export default FormControl
