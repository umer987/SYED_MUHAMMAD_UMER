import React, { useState } from 'react';
import AddProject from './AddProject';
import ClientMessages from './ClientMessages';

const AdminDashboard = () => {
  // State to track which page to show ('messages' or 'addProject')
  const [activePage, setActivePage] = useState('messages');

  return (
    <div className="min-h-screen bg-black font-oswald flex flex-col">
      
      {/* Top Navigation Bar */}
      <nav className="bg-[#201011] border-b border-[#79231C] px-8 py-4 shadow-lg sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          
          {/* Logo / Title */}
          <h1 className="text-2xl text-white tracking-widest uppercase">
            Admin <span className="text-[#79231C]">Panel</span>
          </h1>

          {/* Navigation Buttons */}
          <div className="flex gap-8">
            <button 
              onClick={() => setActivePage('messages')}
              className={`tracking-widest transition-colors text-lg ${
                activePage === 'messages' 
                  ? 'text-[#79231C] border-b-2 border-[#79231C]' 
                  : 'text-gray-300 hover:text-[#79231C]'
              }`}
            >
              CLIENT MESSAGES
            </button>

            <button 
              onClick={() => setActivePage('addProject')}
              className={`tracking-widest transition-colors text-lg ${
                activePage === 'addProject' 
                  ? 'text-[#79231C] border-b-2 border-[#79231C]' 
                  : 'text-gray-300 hover:text-[#79231C]'
              }`}
            >
              ADD PROJECT
            </button>
          </div>

          {/* Logout Button */}
          <button 
            className="text-gray-300 hover:text-red-500 tracking-widest transition-colors"
            onClick={() => alert("Logout functionality goes here")}
          >
            LOGOUT
          </button>
          
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-6xl mx-auto">
        {/* Render the component based on which button was clicked */}
        {activePage === 'messages' && <ClientMessages />}
        {activePage === 'addProject' && <AddProject />}
      </main>

    </div>
  );
};

export default AdminDashboard;