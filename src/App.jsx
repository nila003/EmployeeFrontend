import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import EmployeeForm from './components/EmployeeForm'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/nav' element={<Navbar/>}></Route>
      <Route path='/dash' element={<Main child={<Dashboard/>}/>}></Route>
      <Route path='/list' element={<Main child={<EmployeeForm/>}/>}></Route>
     </Routes>
    </>
  )
}

export default App
