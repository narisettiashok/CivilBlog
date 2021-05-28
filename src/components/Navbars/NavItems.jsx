import { DocumentReportIcon, FolderIcon, HomeIcon, UsersIcon } from "@heroicons/react/outline";

import NavItem from "./NavItem";

function NavItems({ view }) {
    return (
        <>
            <ul className={`lg:w-full ${view === "popover" && "p-4"}`}>
                <NavItem Icon={HomeIcon} title={"Dashboard"} to="/app/dashboard" view={view} />
                <NavItem Icon={FolderIcon} title={"Projects"} to="/app/projects" view={view}/>
                <NavItem Icon={DocumentReportIcon} title={"Reports"} to="/app/reports" view={view}/>
                <NavItem Icon={UsersIcon} title={"Team"} to="/app/team" view={view}/>
            </ul>
        </>
    );
}

export default NavItems;
