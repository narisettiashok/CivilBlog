import { Link } from "react-router-dom";

import logo from "../../assets/images/logo2.png";
import MobileNavbar from "./MobileNavbar";
import NavProfile from "./NavProfile";
import NavNotification from "./NavNotification";

function MainNavbar() {
    return (
        <nav className="relative px-3 py-1 sm:p-3 border-b-2 flex justify-between items-center sm:px-8 sm:justify-end">
            <Link className="sm:hidden text-blue-900 text-sm font-bold leading-relaxed mr-4 pl-3 py-2 whitespace-nowrap uppercase flex items-center space-x-3"
                to="/">
                <img className="h-9 w-9"
                    src={logo}
                    alt="Logo"
                />
                <span>Field Construct</span>
            </Link>
            <MobileNavbar className="sm:hidden"/>
            <div className="hidden sm:flex items-center space-x-4 lg:space-x-6">
                <NavNotification />
                <NavProfile />
            </div>
        </nav>
    );
}

export default MainNavbar;
