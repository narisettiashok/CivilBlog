function FormGroupContainer({title, children}) {
    return (
        <div className="w-full py-4 px-8 rounded-lg bg-gray-200">
            <h4 className="text-sm font-semibold mb-4 uppercase">{title}</h4>
            {children}
        </div>
    );
}

export default FormGroupContainer;
