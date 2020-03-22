import React from "react";
import detectBrowserLanguage from "detect-browser-language";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Button } from "antd";
import Listing from "./components/Listing";
import Fundamental from "./components/Fundamental";
import Frontend from "./components/Frontend";
import JsMastermind from './jsmastermind/index';
import { changeLanguage } from "./data/langaugeUtil";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    if (
      !localStorage.getItem("language") ||
      localStorage.getItem("language") === "null"
    ) {
      localStorage.setItem("language", detectBrowserLanguage());
    }
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Listing} />
            <Route exact path="/frontend" component={Frontend} />
            <Route exact path="/fundamental" component={Fundamental} />
            <Route exact path="/javascript" component={JsMastermind} />
            <Route render={() => <div>No Match</div>} />
          </Switch>
        </BrowserRouter>
        <Button
          type="default"
          shape="circle"
          size="large"
          className="lang-button"
          onClick={changeLanguage}
        >
          {localStorage.getItem("language") === "zh-CN" ? "EN" : "中"}
        </Button>
      </div>
    );
  }
}

export default App;
