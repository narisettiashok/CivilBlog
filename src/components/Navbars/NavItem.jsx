import { NavLink } from "react-router-dom";

function NavItem({ Icon, title, to, view }) {
    return (
        <>
            <li className="lg:px-3">
                <NavLink className="rounded-lg p-3 flex items-center space-x-3 
                    hover:bg-blue-900 hover:text-white active:bg-blue-900 active:text-white"
                    to={to}
                    activeClassName="bg-blue-900 text-white">
                    <Icon className="h-6 w-6" />
                    <span className={view && view === "popover" ? "block" : "hidden lg:block"}>{title}</span>
                </NavLink>
            </li>
        </>
    );
}

export default NavItem;
