import { useState } from 'react'
import NavBar from './components/NavBar';
import StarShips from './components/StarShips';

function App() {

  // const url = "https://swapi.dev/api/starships/";
  return (
    <div className='main'>
      <NavBar/>
      <StarShips/>
    </div>
  )
}

export default App
