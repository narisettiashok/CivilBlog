import { Link } from 'react-router-dom';

function AuthNavbar() {
    return (
        <>
            <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 border-b-2">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link className="text-blue-900 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                            to="/">
                            Field Construct
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default AuthNavbar;