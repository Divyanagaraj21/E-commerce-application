// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Login from './Public/Login.jsx'
// import Home from './Public/Home.jsx'
// import Register from './Public/Register.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<App/>}>
//         <Route path='/' element={<Home/>}/>
//        <Route path='/login' element={<Login/>}/>
//        <Route path='/register' element={<Register/>}/>
//        </Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'

import AllRoutes from './Routes/AllRoutes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
       <AllRoutes />
    
    </BrowserRouter>
  </React.StrictMode>,
)