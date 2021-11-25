import logo from './logo.svg';
import './App.css';
import CCForms from './ClassComps/CCForms';
import CCPerson from './ClassComps/CCPerson';
import CCRefs from './ClassComps/CCRefs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CCRefs />
        <CCPerson id={7} name={"8"} />
        <CCForms />
      </header>
    </div>
  );
}

export default App;
