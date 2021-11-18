import logo from './logo.svg';
import './App.css';
import CCParent from './ClassComps/CCParent';
import ListDemo from './ListDemo';

function Sivan() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListDemo />
        <CCParent />
      </header>
    </div>
  );
}

export default Sivan;
