import { useState } from 'react'
import './App.css'
import Home from './client/Home'
import LoginForm from './LoginForm'

function App() {

  return (
    <div className='w-full bg-slate-50'>
       {/* <Home/> */}
       <LoginForm/>
    </div>
  )
}

export default App
