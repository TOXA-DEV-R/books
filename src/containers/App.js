import React from "react";
import Home from "./home/Home";
import "../styles/icons.scss";
import "../styles/grid.scss";
import "../styles/includes/typography.scss";
import AddBooks from "./add_Books/AddBooks";
import { Switch, Route } from "react-router-dom";
import "../styles/code.scss";
const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/1" exact component={Home} />
        <Route path="/2" exact component={AddBooks} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
