import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (
    <>
      <form >
        <label htmlFor="number1">numero 1</label>
        <input type="number" id='number1' />

        <label htmlFor="number2">numero 2</label>
        <input type="number" id='number2' />

        <button>suma</button>
        <button>resta</button>
        <button>multiplicacion</button>
        <button>division</button>
      </form>

      <div>
        <h2>RESULTADO</h2>
        <br />
        <br />
        <br />
        <Small>Aca se muestra el resultado...</Small>
      </div>
    </>
  )
}

export default App
