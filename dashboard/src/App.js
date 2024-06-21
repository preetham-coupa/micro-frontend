import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Dashboard from "./components/Dashboard";

const generateClassName = createGenerateClassName({
  productionPrefix: "marketing-app",
});

const App = ({ history }) => {
  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </StylesProvider>
    </Router>
  );
};

export default App;
