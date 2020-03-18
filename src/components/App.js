import React from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { NavItem, Nav, NavLink } from 'reactstrap';
// importing Components
import Home  from "./Home.js";
import Form  from "./Form.js";
import About  from "./About.js";

function App() {
  return (
    <Router>
      <div className="nav-div">
        <Nav>
          <NavItem>
            <Link to="/"> Home </Link>
          </NavItem>
          <NavItem>
            <Link to="/about"> About </Link>
          </NavItem>
          <NavItem>
            <Link to="/form"> Form </Link>
          </NavItem>
        </Nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/form">
                <Form />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
      </div>
    </Router>
  );
}

export default App;
