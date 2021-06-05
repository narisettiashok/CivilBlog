import React from "react";

function TextError(props) {
    return (
        <div className="text-red-500 text-sm pt-1">
            {props.children}
        </div>
    )
};

export default TextError;
