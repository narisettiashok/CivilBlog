import { Link } from "react-router-dom";
import logo from "../../assets/images/logo2.png";

function AuthNavbar() {
    return (
        <>
            <nav className="absolute top-0 z-50 w-full border-b-2 p-2">
                <Link className="pl-4 py-2 flex items-center space-x-3"
                    to="/">
                    <img className="h-9 w-9"
                        src={logo}
                        alt="Logo" 
                    />
                    <span className="text-sm sm:text-lg font-semibold text-blue-900">Field Construct</span>
                </Link>
            </nav>
        </>
    );
}

export default AuthNavbar;
