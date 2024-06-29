import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Error from './components/Error.jsx'
import CountryDetail from './components/CountryDetail.jsx'
import Home from './components/Home'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/contact',
        element:<div>Contact</div>
      },
      {
        path:"/:country",
        element:<CountryDetail/>
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
