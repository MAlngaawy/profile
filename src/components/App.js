import React from "react";
import '../css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useLocation
} from "react-router-dom";
import About from './About'
import Connect from './Connect'
import Projects from './Projects'
import avatar from '../assets/avatar.jpg'

const SideBar = () =>{
  let { pathname } = useLocation();
  return (
    <div className="sidebar">
      <div className='avatar'>
        <img src={avatar} />
      </div>
      <ul>
        <li> <NavLink exact to="/" activeClassName='active' > About </NavLink> </li>
        <li> <NavLink to="/projects" activeClassName='active' > Projects </NavLink> </li>
        <li> <NavLink to="/connect" activeClassName='active' > connect me </NavLink> </li>
      </ul>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <div className='App'>
        <SideBar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/connect" component={Connect} />
        </Switch>
      </div>
    </Router>
  );
}