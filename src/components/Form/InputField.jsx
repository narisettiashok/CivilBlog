import { useField } from "formik";

function InputField({ label, ...props }) {
    const [field, meta] = useField(props);
    return (
        <div className="form-group">
            <label className="form-label" htmlFor={props.id || props.name}>{label}</label>
            <input className="form-control" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="text-red-500 text-sm pt-1">{meta.error}</div>
            ) : null}
        </div>
    );
}

export default InputField;
