import React from 'react'
import {Routes , Route , BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import '@fontsource/bebas-neue'; // Defaults to weight 400
import AdminLogin from './components/AdminLogin';
import AddProject from './components/AddProject';
import ClientMessages from './components/ClientMessages';
import AdminDashboard from './components/AdminDashboard';


function App() {
  return (
    <div>
     
        <BrowserRouter>
        <Routes>  
          <Route path='/' element={<Home />} />
          <Route path='/ad' element={<AdminLogin/>} />
          <Route path='/ap' element={<AddProject/> } />
          <Route path='/cm' element={<ClientMessages/> } />
          <Route path='/add' element={<AdminDashboard/> } />
         
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
