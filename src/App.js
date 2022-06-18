import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import { faHistory, faPenToSquare, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import ScoreTable from './ScoreTable';
import EditableScoreTable from './EditableScoreTable';
import { Input } from '@mui/material';
import { borderBottom } from '@mui/system';
import { useState } from 'react';
import MaterialEditableScoreTable from './MaterialEditableScoreTable';

function App() {

  return (
    <div className="App">
      <div className='navBar'>
        <h1>FLAVALI</h1>
        <div className="headerIcons">
          <FontAwesomeIcon icon={faUserGroup} />
          <FontAwesomeIcon icon={faPenToSquare} />
          <FontAwesomeIcon icon={faHistory} />
        </div>
      </div>

      <hr
        style={{
          height: 1,
          backgroundColor: '#f7f7f7',
        }}
      />

      <h2>Game Name</h2>

      <MaterialEditableScoreTable></MaterialEditableScoreTable>
      <br></br>
      {/*
      <ScoreTable></ScoreTable>
      <EditableScoreTable></EditableScoreTable>
      */}
      
    </div>
  );
}

export default App;
