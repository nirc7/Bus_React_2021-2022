import logo from './logo.svg';
import './App.css';
import EHeader from './Elements/EHeader';
import FCPerson from './FunctionalComps/FCPerson';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {EHeader}
        <FCPerson id={7} name={"avi"}/>
        <FCPerson id={8} name={"benny"}/>
        <p>
          Ruppin
        </p>
        {EHeader}
      </header>
    </div>
  );
}

export default App;
