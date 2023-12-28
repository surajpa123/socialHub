import { useState } from 'react'
import HomePage from './pages/homePage';
import LogInPage from './pages/loginPage';
import ProfilePage from './pages/profilePage';
import {BrowserRouter, Navigate, Routes,Route} from "react-router-dom"
function App() {

  return (
    
    <div className='app'>

<BrowserRouter>
<Routes>

 <Route path='/' element = {<LogInPage/>} /> 

 <Route path='/home' element = {<HomePage/>} /> 

 <Route path='/profile/:userId' element = {<ProfilePage/>} /> 

</Routes>


</BrowserRouter>

    </div>

       
    
  )
}

export default App
