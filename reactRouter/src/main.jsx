import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import Layout from './Layout'
import About from './components/About/About'


const router = createBrowserRouter([
  {
    path: '/reactRouter/src/Layout.jsx',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      }, 
      {
        path: "",
        element: <About/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
