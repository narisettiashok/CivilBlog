import { Switch, Route, Redirect } from 'react-router-dom';

import LoginPage from '../pages/Auth/LoginPage';
import SignUpPage from '../pages/Auth/SignUpPage';

function AuthLayout() {
    return (
        <>
            <div className="container max-w-md mx-auto">
                <h4 className="text-xl">This is the layout for Login and register pages</h4>
                <p>The Header and footer have to be added</p>
                <p>The main content will be login and register</p>
                <Switch>
                    <Route path='/auth/login' exact={true} component={LoginPage} />
                    <Route path='/auth/sign-up' exact={true} component={SignUpPage} />
                    <Redirect from="/auth" to="/auth/login" ></Redirect>
                </Switch>
            </div>
        </>
    );
}


export default AuthLayout;