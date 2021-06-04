import { Switch, Route, Redirect } from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";
import MainNavbar from "../components/Navbars/MainNavbar";
import SideNavbar from "../components/Navbars/SideNavbar";
import ProjectsPage from "../components/Projects/ProjectsPage";
import NewProject from "../components/Projects/NewProject";
import ExistingProject from "../components/Projects/ExistingProject";
import EPCProject from "../components/Projects/EPCProject";
import BOQProject from "../components/Projects/BOQProject";
import ExistingEPCProject from "../components/Projects/ExistingEPCProject";
import ExistingBOQProject from "../components/Projects/ExistingBOQProject";
import UserProfilePage from "../pages/UserProfilePage";
import SettingsPage from "../pages/SettingsPage";

function MainLayout() {
    return (
        <>
            <main>
                <section className="absolute w-full h-full">
                    <div className="absolute top-0 w-full h-full">
                        <MainNavbar />
                        <SideNavbar />
                        <div className="relative h-full max-h-full sm:w-11/12 lg:w-5/6 ml-auto overflow-hidden p-4">
                            <Switch>
                                <Route path="/app/dashboard" exact={true} component={DashboardPage} />
                                <Route path="/app/projects" exact={true} component={ProjectsPage} />
                                <Route path="/app/newProject" exact={true} component={NewProject} />
                                <Route path="/app/existingProject" exact={true} component={ExistingProject} />
                                <Route path="/app/epc" exact={true} component={EPCProject} />
                                <Route path="/app/boq" exact={true} component={BOQProject} />
                                <Route path="/app/existing/epc" exact={true} component={ExistingEPCProject} />
                                <Route path="/app/existing/boq" exact={true} component={ExistingBOQProject} />
                                <Route path="/app/user-profile" exact={true} component={UserProfilePage} />
                                <Route path="/app/settings" exact={true} component={SettingsPage} />
                                <Redirect from="/app" to="/app/dashboard" />
                            </Switch>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default MainLayout;
