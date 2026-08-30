import React from 'react'
import {Routes , Route , BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import '@fontsource/bebas-neue'; // Defaults to weight 400
import AdminLogin from './components/AdminLogin';
import AddProject from './components/AddProject';
import ClientMessages from './components/ClientMessages';
import AdminDashboard from './components/AdminDashboard';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return (
    <div>
     <AuthProvider>
        <BrowserRouter>
        <Routes>  
          <Route path='/' element={<Home />} />
          <Route path='/ad' element={<AdminLogin/>} />
          <Route path='/ap' element={<AddProject/> } />
          <Route path='/cm' element={<ClientMessages/> } />
          <Route path='/AdminDashboard' element={<AdminDashboard/> } />
         
          
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
