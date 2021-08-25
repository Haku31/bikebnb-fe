import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginPage from "./pages/LoginPage";

function App(){
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage}/> 
      </Switch>
    </BrowserRouter>
  )
}

export default App;
