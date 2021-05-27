import { Link } from "react-router-dom";
import SideNavItems from "../SideNavItems";
import logo from "../../assets/images/logo2.png";

function SideNavbar() {
    return (
        <>
            <div className="hidden fixed top-0 left-0 sm:w-1/12 lg:w-1/6 h-full overflow-hidden
                border-r border-gray-300 rounded-tr-md rounder-br-md lg:rounded-tr-xl lg:rounded-br-xl p-2
                sm:flex flex-col items-center lg:block xl:flex  
                bg-blue-700 text-blue-200">
                <div className="lg:w-full mb-3 lg:px-3">
                    <Link className="rounded-lg p-3 lg:py-4 flex items-center space-x-3 bg-blue-800 hover:text-white"
                        to="/app/dashboard">
                        <img className="h-5 w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8"
                            src={logo}
                            alt="Logo" />
                        <span className="hidden lg:block lg:text-sm lg:font-semibold">Field Construct</span>
                    </Link>
                </div>
                <SideNavItems />
            </div>
        </>
    );
}

export default SideNavbar;
