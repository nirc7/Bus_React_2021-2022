import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // const btn7 = () => {
  //   setCount(7);
  // }

  useEffect(() => {
    console.log(count);
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        count={count}
        <button onClick={() => setCount(7)}>7:)</button>
      </header>
    </div>
  );
}

export default App;
