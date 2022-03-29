import {useState} from 'react'
function App() {
  //let varprueba = "Titulo";
 
  //const handleChangePrueba = (Event) => {
    //varprueba = Event.target.value; 
//console.log(event.target.name, event.target.value);  
  const [tituloState, setTituloState] = useState("");
  const [fechaState, setFechaState] = useState("");
  const [notaState, setNotaState] = useState("");

  const handleChangeTitulo = (Event) => {
    setTituloState(Event.target.value);
  };

  const handleChangeFecha = (Event) => {
    setFechaState(Event.target.value);
  };

  const handleChangeNota = (Event) => {
    setNotaState(Event.target.value);
  };


  return (
    <div className="App">
  <h3>Notas</h3>    
    <br />
    <label htmlFor="titulo">Titulo</label>
    <input
    id="titulo"
    name="titulo"
    type="text"
    onChange={handleChangeTitulo}
    value ={tituloState} 
      />
      <br />
      <br />
      <label htmlFor="fecha">Fecha</label>
      <input
    id="fecha"
    name="fecha"
    type="text"
    onChange={handleChangeFecha}
    value ={fechaState} 
      />
      <br />
      <br />
      <label htmlFor="nota">Nota</label>
      <input
    id="nota"
    name="nota"
    type="text"
    onChange={handleChangeNota}
    value ={notaState} />
    <br />
    </div>
  );
}

export default App;
