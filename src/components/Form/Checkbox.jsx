import { useField } from "formik";

function Checkbox({ children, ...props }) {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <>
            <label className="inline-flex items-center cursor-pointer mb-3">
                <input className="form-checkbox border-0 rounded ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="text-red-500 text-sm pt-1">{meta.error}</div>
            ) : null}
        </>
    );
}

export default Checkbox;
