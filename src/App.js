import React from "react";
import Page1 from "./pages/Page1";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pirates from "./pages/Pirates";
import Inventory1 from "./pages/Inventory";
import Rum from "./pages/Rum";
import Items from "./pages/Items";
import Pouches from "./pages/Pouches";
import Store from "./pages/Store";
import Rewards from "./pages/Rewards";

const App = () => {
  return (
 
      <Router>
       
        <Switch>
          <Route path="/" exact>
          <Page1 />
          </Route>
          <Route path="/pirates">
          <Pirates />
          </Route>
          <Route path="/inventory">
          <Inventory1 />
          </Route>
          <Route path="/rum">
          <Rum />
          </Route>
          <Route path="/items">
          <Items />
          </Route>
          <Route path="/gem-pouches">
          <Pouches />
          </Route>
          <Route path="/store">
          <Store />
          </Route>
          <Route path="/rewards">
          <Rewards />
          </Route>
        </Switch>
      </Router>
    
  );
};

export default App;
