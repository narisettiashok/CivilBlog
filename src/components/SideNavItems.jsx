import { DocumentReportIcon, FolderIcon, HomeIcon, UsersIcon } from "@heroicons/react/outline";

import SideNavItem from "./SideNavItem";

function SideNavItems() {
    return (
        <>
            <ul className="lg:w-full">
                <SideNavItem Icon={HomeIcon} title={'Dashboard'} to='/app/dashboard' />
                <SideNavItem Icon={FolderIcon} title={'Projects'} to='/app/projects' />
                <SideNavItem Icon={DocumentReportIcon} title={'Reports'} to='/app/reports' />
                <SideNavItem Icon={UsersIcon} title={'Team'} to='/app/team' />
            </ul>
        </>
    );
}

export default SideNavItems;
