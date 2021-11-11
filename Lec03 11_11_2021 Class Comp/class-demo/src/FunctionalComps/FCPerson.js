
export default function FCPerson(props) {

  let num = 17;
  num++;
  console.log(num);
  num += props.id;
  //props.id=88; //ERROR READ ONLY!

  if (props.id !== 7) {
    return <div>im 8!!!</div>
  }

  function btnAddOne() {
    num++;
    console.log(num);
  }

  function chgTxt(e) {
    console.log(e.target.value);
  }

  return (
    <div style={{
      border: 'solid green 2px',
      margin: 15,
      padding: 10,
      borderRadius: 10,
      fontSize: 30
    }}>
      FCPerson
      <div>id={props.id}</div>
      <div>name={props.name}</div>
      <div>num={num}</div>
      <button onClick={btnAddOne} >Add One</button> <br />
      <input type="text" onChange={chgTxt} />
    </div>
  );
}