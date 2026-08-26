import React from 'react';

const AdminLogin = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center font-oswald p-4">
      <div className="bg-[#201011] border border-[#79231C] p-8 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-3xl text-white text-center mb-6 tracking-wide">ADMIN LOGIN</h2>
        
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 tracking-wider">EMAIL</label>
            <input 
              type="email" 
              placeholder="admin@example.com"
              className="bg-black border border-[#79231C] text-white p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#79231C]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 tracking-wider">PASSWORD</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="bg-black border border-[#79231C] text-white p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#79231C]"
            />
          </div>

          <button 
            type="button" 
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