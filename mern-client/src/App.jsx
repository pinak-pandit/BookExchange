import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import 'flowbite/dist/flowbite.css';

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
