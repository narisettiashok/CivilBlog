import { Switch, Route, Redirect } from 'react-router-dom';

import DashboardPage from '../pages/DashboardPage';
import Header from '../components/Navbars/MainNavbar';
import SideNavbar from '../components/Navbars/SideNavbar';

function MainLayout() {
    return (
        <>
            <main>
                <section className="absolute w-full h-full">
                    <div className="absolute top-0 w-full h-full">
                        <Header />
                        <SideNavbar />
                        <div className="relative max-h-full sm:w-11/12 lg:w-5/6 ml-auto overflow-hidden p-4">
                            <Switch>
                                <Route path='/app/dashboard' exact={true} component={DashboardPage} />
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