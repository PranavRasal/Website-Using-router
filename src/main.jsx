import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './assets/componets/home/home.jsx'
import About from './assets/componets/about/about.jsx'
import Contact from './assets/componets/contact/contact.jsx'
import User from './assets/componets/User/user.jsx'
import Github from './assets/componets/Github/github.jsx'
import { Apl } from './assets/componets/AplForGitHub/apl.jsx'

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//     children:[
//       {
//       path:"",
//       element:<Home/>,
//     },
//     {
//       path:"about",
//       element:<About/>,
//     }
//     ]
//   }
// ])
const router = createBrowserRouter (
createRoutesFromElements(
  <Route path='/' element={<App/>}>
  <Route path='' element={<Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='contact' element={<Contact/>}/>
  <Route path='user/:id' element={<User/>}/>
  <Route 
  loader={Apl}
  path='github' 
   element={<Github />}/>
  </Route>
)
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>
  </StrictMode>,
)
