import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import{
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
//import pages
import Error from './pages/Error.jsx'
import Landing from './pages/landing.jsx'
import Chat from './pages/Chat.jsx'
import Topics from './pages/topics.jsx'
import Timer from './pages/Timer.jsx'
//router
const Router = [{
  path: '/',
  element:<App/>,
  errorElement:<Error/>,
  children:[
    {
      index:true,
      element:<Landing/>
    },
    {
      index:true,
      element:<Timer/>
    },
    {
      index:true,
      element:<Chat/>
    },
    {
      index:true,
      element:<Topics/>
    }
  ]
}]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
