import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* add routes with layouts */}
        <Route path="/auth" component={AuthLayout} />
        <Route path="/app" component={MainLayout} />
        {/* add redirect for first page */}
        <Redirect from="*" to="/auth" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
