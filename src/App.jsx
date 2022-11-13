import { useState } from 'react'
import './App.css'

import Header from './components/Header.jsx'
import Input from './components/Input.jsx'
import Boton from './components/Boton.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const titulo = "Estado de los Componentes y Eventos"
  const [nombre, setNombre] = useState("")
  const [password, setPassword] = useState("")

  return (
    <main className="App">
      <Header titulo={titulo}></Header>
      <div className='card'>
        <h2>Login</h2>

        <Input
          setNombre={setNombre}
          setPassword={setPassword}>
        </Input>

        <Boton
          nombre={nombre}
          password={password}>
        </Boton>

      </div>

      <Footer></Footer>
    </main>

  )
}

export default App
