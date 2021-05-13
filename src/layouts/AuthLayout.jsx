import { Switch, Route, Redirect } from 'react-router-dom';

import LoginPage from '../pages/Auth/LoginPage';
import SignUpPage from '../pages/Auth/SignUpPage';
import AuthNavbar from '../components/Navbars/AuthNavbar';
import ForgotPasswordPage from '../pages/Auth/ForgotPasswordPage';

import './AuthLayout.css';

function AuthLayout() {
    return (
        <>
            <AuthNavbar />
            <main>
                <section className="absolute w-full h-full">
                    <div className="absolute top-0 w-full h-full auth-background">
                        <div className="container mx-auto px-4 h-full">
                            <div className="flex content-center items-center justify-between h-full w-11/12 mx-auto">
                                <Switch>
                                    <Route path='/auth/login' exact={true} component={LoginPage} />
                                    <Route path='/auth/sign-up' exact={true} component={SignUpPage} />
                                    <Route path='/auth/forgot-password' exact={true} component={ForgotPasswordPage} />
                                    <Redirect from="/auth" to="/auth/login" ></Redirect>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}


export default AuthLayout;