import React from "react";
import '../css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
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
        <li> <Link to="/" className={pathname === '/' ? 'active' : ''}> About </Link> </li>
        <li> <Link to="/projects" className={pathname === '/projects' ? 'active' : ''}> Projects </Link> </li>
        <li> <Link to="/connect" className={pathname === '/connect' ? 'active' : ''}> connect me </Link> </li>
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
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/connect">
            <Connect />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}