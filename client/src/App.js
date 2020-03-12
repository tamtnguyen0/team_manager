import React from 'react';
import './App.css';
import {Link, Router} from '@reach/router'
import ShowPlayers from "./views/ShowPlayers";
import AddPlayer from "./views/AddPlayer";
import PlayerStatus from "./views/PlayerStatus";

function App() {
  return (
    <div className="App container mt-2">
      <div>
        <Link to='/players/list' className='h3'>Manage Players</Link> <span className='h3'> | </span>
        <Link to='/status/game/1' className='h3'>Manage Player Status</Link>
      </div>

      <Router>
        <ShowPlayers path='/players/list' />
        <AddPlayer path='/players/add' />
        <PlayerStatus path='/status/game/:id' />
      </Router>
    </div>
  );
}

export default App;
