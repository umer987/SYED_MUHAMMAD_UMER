import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext' 

const AdminLogin = () => {
  const [username , setusername] = useState("")
  const [password , setpassword] = useState("")
  const {login} = useAuth()
  const navigate = useNavigate();

  const handlelogin = async (e) =>{
    e.preventDefault()
    const success = await login(username,password)
    if (success) {
      navigate('/AdminDashboard');
    }
  }
  return (
    <div className="min-h-screen bg-black flex items-center justify-center font-oswald p-4">
      <div className="bg-[#201011] border border-[#79231C] p-8 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-3xl text-white text-center mb-6 tracking-wide">ADMIN LOGIN</h2>
        
        <form className="flex flex-col gap-5" onSubmit={handlelogin}>
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 tracking-wider">EMAIL</label>
            <input 
              type="email" 
              placeholder="admin@email.com"
              value={username}
              onChange={(e)=> setusername(e.target.value)}
              className="bg-black border border-[#79231C] text-white p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#79231C]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 tracking-wider">PASSWORD</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e)=> setpassword(e.target.value)}
              className="bg-black border border-[#79231C] text-white p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#79231C]"
            />
          </div>

          <button 
            type="submit" 
            className="mt-4 bg-[#79231C] hover:bg-red-900 text-white p-3 rounded tracking-widest transition-colors"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;