import { useState } from 'react'
import './App.css'
import Home from './client/Home'
import LoginForm from './LoginForm'
 import { RouterProvider ,createBrowserRouter }  from 'react-router-dom'

function App() {

  const routes = createBrowserRouter([{
    element:<LoginForm/>,
    path:'/login'
  },
  {
    element:<Home/>,
    path:'/'
  }
   ])

  return (
    <div className='w-full bg-slate-50'>
       {/* <Home/> */}
       {/* <LoginForm/> */}
       <RouterProvider router={routes}/>
    </div>
  )
}

export default App
