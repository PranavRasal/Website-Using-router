import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './assets/componets/header/header'
import Footer from './assets/componets/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
