import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import '@fontsource/bebas-neue'; // Defaults to weight 400
import AdminLogin from './components/AdminLogin';
import AddProject from './components/AddProject';
import ClientMessages from './components/ClientMessages';
import AdminDashboard from './components/AdminDashboard';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Projects from './components/Projects';
import MessageMe from './components/Messageme';
import ThreeBackground from './components/ThreeBackground';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="w-full max-w-full overflow-x-hidden min-h-screen bg-black relative">
      <CustomCursor />
      <ThreeBackground />
      <div className="relative z-10 w-full min-h-screen">
        <AuthProvider>
          <BrowserRouter>
            <Routes>  
              <Route path='/' element={<Home />} />
              <Route path='/ad' element={<AdminLogin/>} />
              <Route path='/all-projects' element={<Projects />} />
              <Route path='/message-me' element={<MessageMe />} />
              
              <Route element={<ProtectedRoute />}>
                <Route path='/ap' element={<AddProject />} />
                <Route path='/cm' element={<ClientMessages />} />
                <Route path='/AdminDashboard' element={<AdminDashboard />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </div>
    </div>
  )
}

export default App
