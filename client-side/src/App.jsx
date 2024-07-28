import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Outlet from 'react-router-dom'

function App() {
  function routes(){

  }
  return (
    <>
     <main>
      <Outlet/>
     </main>
    </>
  )
}

export default App
