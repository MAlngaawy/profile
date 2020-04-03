import React from "react";
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  useHistory,
  useParams
} from "react-router-dom";
import ToDo from "./projects/Todo-app";
import Posts from "./projects/posts";

const mainProjectsData = [
  {
    name: "SkillShare",
    url: "https://angry-lamport-b8be47.netlify.com/"
  },
  {
    name: "Top Gym",
    url: "https://quizzical-perlman-fe3bb8.netlify.com/"
  },
  {
    name: "Photo Maker",
    url: "https://elated-kalam-fa733b.netlify.com/"
  },
  {
    name: "Rock Paper Scissors Game",
    url: "https://malngaawy.github.io/simple-game/"
  }
];

function MainProjects() {
  const projects = mainProjectsData;
  return (
    <div className="main-projects">
      <h3>
        Here is the main projects i have created .. if you need more you can
        check the simple projects above
      </h3>
      <ul>
        {projects.map(project => (
          <li className="single-project" key={project.name}>
            <h3>
              <a target="_blank" rel="noopener noreferrer" href={project.url}>
                {" "}
                {project.name}{" "}
              </a>
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  let match = useRouteMatch();

  function BackButton() {
    let history = useHistory();

    function handleClick() {
      history.push("/projects");
      console.log(useParams.slug);
    }

    return <h5 onClick={handleClick}>All Projects</h5>;
  }

  return (
    <div className="projects right-side">
      <BackButton />
      <div className="projects-navbar">
        <ul>
          <li>
            <NavLink to={`${match.url}/todo-app`} activeClassName="active">
              ToDO App
            </NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/posts`} activeClassName="active">
              Posts App
            </NavLink>
          </li>
        </ul>
      </div>

      <Switch>
        <Route path={`${match.path}/:todo-app`}>
          {" "}
          <ToDo />{" "}
        </Route>
        <Route path={`${match.path}/:other`}>
          {" "}
          <Posts />{" "}
        </Route>
        <Route path={`${match.path}`}>
          {" "}
          <MainProjects />{" "}
        </Route>
      </Switch>
    </div>
  );
}
