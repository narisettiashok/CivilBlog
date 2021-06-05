import { Switch, Route, Redirect } from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";
import MainNavbar from "../components/Navbars/MainNavbar";
import SideNavbar from "../components/Navbars/SideNavbar";
import ProjectsPage from "../pages/Projects/ProjectsPage";
import AddProjectPage from "../pages/Projects/AddProjectPage";

function MainLayout() {
    return (
        <>
            <main>
                <section className="absolute w-full h-full">
                    <div className="absolute top-0 w-full h-full">
                        <MainNavbar />
                        <SideNavbar />
                        <div className="relative h-full sm:w-11/12 lg:w-5/6 ml-auto p-4">
                            <Switch>
                                <Route path="/app/dashboard" exact={true} component={DashboardPage} />
                                <Route path="/app/projects" exact={true} component={ProjectsPage} />
                                <Route path="/app/projects/addProject" exact={true} component={AddProjectPage} />
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
