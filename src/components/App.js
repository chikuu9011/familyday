import React from 'react'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import './css/App.css'

const App = () => {
  return (
    <div>
    <Header/>
      <Outlet/>
    </div>
  )
}

export default App
