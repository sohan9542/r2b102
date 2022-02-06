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
         
        </Switch>
      </Router>
    
  );
};

export default App;
