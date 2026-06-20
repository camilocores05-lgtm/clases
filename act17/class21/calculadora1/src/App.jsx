import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { mathOperations } from "./utils/mathOperations";
import { input } from "./components/input";


function App() {
  // Estados
  const[num1, setNum1] = useState(0);
  const[num2, setNum2] = useState(0);
  const[resultado, setResultado] = useState(0);

  const limpiarCampos = () => {
    setNum1(0)
    setNum2(0)
  }

  const handleOperation = (operation) => {

    if(operation === "dividir"){
      if(num1 < num2){
        console.log("No se puede dividir por un numero mayor");
      
      }
    }
    switch (operation) {
      case "suma":
        setResultado(mathOperations.suma(num1, num2));
      break;  

      case "resta":
        setResultado(mathOperations.resta(num1, num2))
      break;  

      case "multiplicacion":
        setResultado(mathOperations.multiplicacion(num1 , num2))
      break;  

      case "dividir":
        setResultado(mathOperations.division(num1 , num2)); 
      break;  

      default:
      setResultado(0);
      console.log("No existe dicha operacion");
      break;
    }
    limpiarCampos()
  };

  return (
    <>
      <div >
        {/* //Si el valor del input cambia, se escribe algo nuevo, se borra, etc... se dispara el evento onChange
        // Cuando vos queres capturar el valor del cambio de un input usas evento y luego evento.target.value
        // handlers
         */}
        <label htmlFor='number1'>Numero 1</label>
        <input label="Numero 1" 
        labelId="number1" 
        onChange={(evento) => setNum1(Number(evento.target.value))} type="number" 
        value={num1} />
<br />
<br />
        <label htmlFor="number2">Numero 2</label>
        <input 
        type="number" 
        id='number2' 
        value={num2}
        onChange={(evento) => setNum2(Number(evento.target.value))} />
<br />
<br />
        <input label="Numero 2"
        labelId="number2"
        onChange={(evento) => setNum2(Number(evento.target.value))}
        type='date'
        value={num2}/>

      <br />
        <br />
        <button onClick={() => handleOperation("suma")}>suma</button>
        <br />
        <button onClick={() => handleOperation("resta")}>resta</button>
        <br />
        <button onClick={() => handleOperation("multiplicacion")}>multiplicacion</button>
        <br />
        <button onClick={() => handleOperation("dividir")}>division</button>
        
      </div>

      <div>
        <h2>Resultado</h2>
        <br />
        <h3>{resultado}</h3>
      </div>
      
    </>
  );
}

export default App;
