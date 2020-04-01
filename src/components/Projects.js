import React from 'react';
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch
} from "react-router-dom";
import ToDo from './projects/Todo-app';


const mainProjectsData = [
  {
    name: "SkillShare",
    url: "https://angry-lamport-b8be47.netlify.com/",
  },
  {
    name: "Top Gym",
    url:"https://quizzical-perlman-fe3bb8.netlify.com/",
  },
  {
    name: "Photo Maker",
    url: "https://elated-kalam-fa733b.netlify.com/",
  },
  {
    name: "Rock Paper Scissors Game",
    url: "https://malngaawy.github.io/simple-game/",
  }
]

function MainProjects() {
  const projects = mainProjectsData;
  return (
    <div className="main-projects">
    <h3>Here is the main projects i have created .. if you need more you can check the simple projects above</h3>
      <ul>
        <li className="single-project">
        {projects.map((project) => 
          <li key={project.name}>
            <h3><a href={project.url}> {project.name} </a></h3>
          </li>
          )}
        </li>
      </ul>
    </div>
  )
}

function Other() {
  return (
    <div>
      <h1>Other App Here</h1>
    </div>
  )
}

export default function Projects() {
  let match = useRouteMatch();

  return (
    <div className='projects right-side'>
      <div className='projects-navbar'>
        <ul>
          <li>
            <NavLink to={`${match.url}/todo-app`} activeClassName='active' >ToDO App</NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/other`} activeClassName='active' >Other App</NavLink>
          </li>
        </ul>
      </div>

      <Switch>
        <Route path={`${match.path}/:todo-app`}> <ToDo /> </Route>
        <Route path={`${match.path}/:other`}> <Other /> </Route>
        <Route path={`${match.path}`}> <MainProjects /> </Route>
      </Switch>
    </div>
  )
}