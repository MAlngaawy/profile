import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useLocation,
  useRouteMatch
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashAlt, faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import data from '../api.json';
import { Alert } from 'reactstrap';


// ToDo Component
function ToDo() {
  let notes = data;
  const [myData, setData] = useState(notes);
  const [newNote, setNewNote] = useState({
    id: "",
    username: "",
    note: "",
    done: false,
    delete: false,
  });
  const [hide, setHide] = useState('d-none');

  const handleChange = (event) => {
    const val = event.target.value;
    setNewNote({
      ...newNote,
      id: myData.length + 1,
      [event.target.name]: val, // create a dynamic key name in the object
    })
  }

  const  addNote = (e) => {
    e.preventDefault();
    if(newNote.username !== '' && newNote.note !== '') {
      setData([...myData, newNote])
      setNewNote({ ...newNote, username:'', note: ''})
    } else {
      setTimeout(() => {
        setHide('');
      }, 100)
      setTimeout(() => {
        setHide('d-none');
      }, 2000)
    }
  }

  const deleteNote = (note) => {
    setData([...myData, myData[note.id - 1].delete = true])
  }

  const doneNote = (note) => {
    setData([...myData, myData[note.id - 1].done = !myData[note.id - 1].done])
  }

  return (
    <div className='todo-com'>
      <div className='out-side'>
        <Alert color="danger" className={hide}>
          You Can't add an empty note, Bitch!!!
        </Alert>
        <form>
          <input
            className='name-field'
            type='text'
            value={newNote.username}
            name='username'
            placeholder='Write Your Name'
            onChange={handleChange}  
          />
          <input
            className='note-field'
            type='text'
            value={newNote.note}
            name='note'
            placeholder='The Note...'
            onChange={handleChange}
          />
          <label htmlFor='submit' className='add-note' > <FontAwesomeIcon icon={faPlus} /> </label>
          <input type="submit" id='submit' value='' className='add-note-btn' onClick={addNote} />
        </form>
      </div>
      <div className='in-side'>

      {/* For Not Done Notes */}
      {myData.filter((note) => note.delete === false && note.done == false ).map((note) => 
        <div className='single-note' key={note.id}>
          <div className='user-image'>Ma</div>
          <div className='note-content'>
            <h4 className='username'>{note.username}</h4>
            <p className='the-note'>{note.note}</p>
          </div>
          <div className='command'>
            <div className='done'>
              <FontAwesomeIcon className='icon' icon={faCircle} onClick={() => doneNote(note)} />
            </div>
            <div className='delete'>
              <FontAwesomeIcon className='icon' icon={faTrashAlt} onClick={() => deleteNote(note)} />
            </div>
          </div>
        </div>
      )}

      {/* For Done Notes */}
      {myData.filter((note) => note.done == true && note.delete == false).map((note) => 
        <div className='single-note done' key={note.id}>
          <div className='user-image'>Ma</div>
          <div className='note-content'>
            <h4 className='username'>{note.username}</h4>
            <p className='the-note'>{note.note}</p>
          </div>
          <div className='command'>
            <div className='done'>
               <FontAwesomeIcon className='icon' icon={faCheckCircle}onClick={() => doneNote(note)} />
            </div>
            <div className='delete'>
              <FontAwesomeIcon className='icon' icon={faTrashAlt} onClick={() => deleteNote(note)} />
            </div>
          </div>
        </div>
      )}


      </div>
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
  let { pathname } = useLocation();

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
        <Route path={`${match.path}`}> <h1>Please Add Any App</h1> </Route>
      </Switch>
    </div>
  )
}