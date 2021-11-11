import logo from './logo.svg';
import './App.css';
import FCPerson from './FunctionalComps/FCPerson';
import CCStudent from './ClassComps/CCStudent';
import CCCalc from './ClassComps/CCCalc';


function App() {
  return (
    <div className="App" style={{backgroundColor:'yellow'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CCCalc/>
        <CCStudent grade={99}/>
        <CCStudent grade={100}/>
        <FCPerson id={7} name={"avi"}/>
        <FCPerson id={8} name={"benny"}/>
      </header>
    </div>
  );
}

export default App;
