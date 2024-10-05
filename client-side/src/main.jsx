import React from 'react';
import ReactDOM from 'react-dom/client'
import{
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
//import pages
import ErrorElement from './pages/Error.jsx'
import Landing from './pages/landing.jsx'
import Chat from './pages/Chat.jsx'
import Topics from './pages/topics.jsx'
import Timer from './pages/Timer.jsx'
//router
//BrowserRouter: is a react tool to manage routing to different react components
const Router = createBrowserRouter(
  [
    {
  path: '/',     //our root path
  element:<App />, //main element where the app will be running
  errorElement:<ErrorElement />, //indicates an error in our pages or components
  children:[ //child routes, which are my pages defined in the app
    {
      // do not specify path for landig page because react is not going to know which to render first
      index:true, //only applies for one child route element
      element:<Landing /> //define landing page; child element
    },
    {
      path:'/Timer',
      element:<Timer />
    },
    {
      path:'/Chat',
      element:<Chat />
    },
    {
      path:'/Topics',
      element:<Topics />
    }
  ]
}]);
/*
React.StrictMode: Is a tool used in react to indicate problems during developing or running the react application
RouterProvider: It provides routes to different components in our Application
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} /> 
    </React.StrictMode>                              
)
