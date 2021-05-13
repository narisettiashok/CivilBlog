function AuthContainer(props) {
    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-between h-full w-11/12 mx-auto">
                    {props.children}
                </div>
            </div>
        </>
    );
}

export default AuthContainer;