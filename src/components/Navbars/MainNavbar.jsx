import { Link } from "react-router-dom";
import { MenuIcon, BellIcon } from "@heroicons/react/outline";

import profilePic from "../../assets/images/profile-pic.png";
import logo from "../../assets/images/logo2.png";

function MainNavbar() {
    return (
        <nav className="px-3 sm:p-3 border-b-2 flex justify-between items-center sm:px-8 sm:justify-end">
            <Link className="sm:hidden text-blue-900 text-sm font-bold leading-relaxed mr-4 pl-3 py-2 whitespace-nowrap uppercase flex items-center space-x-3"
                to="/">
                <img className="h-9 w-9"
                    src={logo}
                    alt="Logo"
                />
                <span>Field Construct</span>
            </Link>
            <button className="p-2 border-0 rounded-md hover:bg-blue-200 sm:hidden">
                <MenuIcon className="h-5 rounded-md" />
            </button>
            <div className="hidden sm:flex items-center space-x-4 lg:space-x-6">
                <button className="h-8 w-8 rounded-md hover:bg-blue-200 hover:text-blue-800 focus:outline-none">
                    <BellIcon className="w-full h-5" />
                </button>
                <button className="h-8 w-8 rounded-md focus:outline-none">
                    <img className="h-8 w-8 rounded"
                        src={profilePic}
                        alt="Profile"
                    />
                </button>
            </div>
        </nav>
    );
}

export default MainNavbar;
