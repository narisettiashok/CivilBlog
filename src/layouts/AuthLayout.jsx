import { Switch, Route, Redirect } from 'react-router-dom';

import LoginPage from '../pages/Auth/LoginPage';
import SignUpPage from '../pages/Auth/SignUpPage';
import AuthNavbar from '../components/Navbars/AuthNavbar';
import ForgotPasswordPage from '../pages/Auth/ForgotPasswordPage';
import ResetPasswordPage from '../pages/Auth/ResetPasswordPage';
import ChangePasswordPage from '../pages/Auth/ChangePasswordPage';

function AuthLayout() {
    return (
        <>
            <AuthNavbar />
            <main>
                <section className="absolute w-full h-full">
                    <div className="absolute top-0 w-full h-full">
                        <div className="container mx-auto px-4 h-full">
                            <div className="h-full w-11/12 mx-auto flex content-center mt-44 md:mt-0 md:items-center justify-between ">
                                <Switch>
                                    <Route path='/auth/login' exact={true} component={LoginPage} />
                                    <Route path='/auth/sign-up' exact={true} component={SignUpPage} />
                                    <Route path='/auth/forgot-password' exact={true} component={ForgotPasswordPage} />
                                    <Route path='/auth/reset-password' exact={true} component={ResetPasswordPage} />
                                    <Route path='/auth/change-password' exact={true} component={ChangePasswordPage} />
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