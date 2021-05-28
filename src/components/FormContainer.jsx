function FormContainer(props) {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg  border-0">
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    {props.children}
                </div>
            </div>
        </>
    );
}

export default FormContainer;
