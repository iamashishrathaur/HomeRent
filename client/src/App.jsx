import { useState } from 'react'
import './App.css'
import ClientHome from './client/Home'
import AdminHome from './admin/Home'
import LoginForm from './LoginForm'
 import { RouterProvider ,createBrowserRouter }  from 'react-router-dom'
import AddCustomer from './admin/AddCustomer'
import CustomerDetails from './admin/CustomerDetails'

function App() {

  const routes = createBrowserRouter([{
    element:<LoginForm/>,
    path:'/login'
  },
  {
    element:<ClientHome/>,
    path:'/'
  },
  {
    element:<AdminHome/>,
    path:'/admin'
  },
  {
    element:<AddCustomer/>,
    path:'/add'
  },
  {
    element:<CustomerDetails/>,
    path:'/details'
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
