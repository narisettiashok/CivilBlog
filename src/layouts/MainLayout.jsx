import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Header from '../components/Header';

function MainLayout() {
    return (
        <>
            <div className="container max-w-screen-xl mx-auto">
                <Header />
                <div className="text-center">
                    <h4 className="text-xl">This is the layout for the pages after the user logs in</h4>
                    <p>The Header and footer have to be added</p>
                    <p>The main content will be pages after the user logs in</p>
                </div>
                <Switch>
                    <Route path='/home' component={HomePage} exact={true} />
                </Switch>
            </div>
        </>
    );
}


export default MainLayout;