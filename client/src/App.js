import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Listing from "./components/Listing";
import Fundamental from "./components/Fundamental";
import Frontend from "./components/Frontend";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Listing} />
          <Route exact path="/frontend" component={Frontend} />
          <Route exact path="/fundamental" component={Fundamental} />
          <Route render={() => <div>No Match</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
