import logo from './logo.svg';
import './App.css';

const apiUrl = 'http://localhost:57733/api/students/';

function App() {

  const btnGetALL = () => {

    console.clear();

    fetch(apiUrl, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          result.map(st => console.log(st.Name));
          console.log('result[0].Name=', result[0].Name);
        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('END');
  }

  const btnPost = () => {
    console.clear();

    const s = { //pay attention case sensitive!!!! should be exactly as the prop in C#!
      Id: 88,
      Name: 'nir',
      Grade: 77
    };

    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(s),
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          console.log('result.Name=', result.Name);
        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('END');
  }

  const btnPut = () => {
    console.clear();

    const s = { //pay attention case sensitive!!!! should be exactly as the prop in C#!
      Id: 88,
      Name: 'nir',
      Grade: 77
    };

    fetch(apiUrl + "2", {
      method: 'PUT',
      body: JSON.stringify(s),
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          console.log('result.Name=', result.Name);
        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('END');
  }

  const btnGetId = () => {

    console.clear();

    fetch(apiUrl + "2", {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          console.log('result.Name=', result.Name);
        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('END');
  }

  const btnDelete = () => {

    console.clear();

    fetch(apiUrl + "2", {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
      },
        (error) => {
          console.log("err post=", error);
        });

    console.log('END');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={btnGetALL} >Get ALL Users</button>
        <button onClick={btnGetId} >Get Id User</button>
        <button onClick={btnPost} >Post User</button>
        <button onClick={btnPut} >Put User</button>
        <button onClick={btnDelete} >Delete User</button>
      </header>
    </div>
  );
}

export default App;
