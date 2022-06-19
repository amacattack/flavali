import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import { faHistory, faPenToSquare, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import EditableScoreTable from './EditableScoreTable';

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

      <EditableScoreTable></EditableScoreTable>
      <br></br>
      <EditableScoreTable></EditableScoreTable>
      <br></br>
      <EditableScoreTable></EditableScoreTable>
      <br></br>
      <EditableScoreTable></EditableScoreTable>
      <br></br>
      <EditableScoreTable></EditableScoreTable>
      <br></br>
      
    </div>
  );
}

export default App;
