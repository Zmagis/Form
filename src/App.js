import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Form from "./components/Form";
import Questions from "./components/Questions";
import Nav from "./components/Nav";

const App = props => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  const handleClickLink = () => {
    setShow(false);
  };
  return (
    <div className="App">
      <Nav show={show} click={handleClick} clickLink={handleClickLink} />
      <Switch>
        <Route path="/questions" component={Questions} />
        <Route path="/fill-form" component={Form} />
        <Route path="/form" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
