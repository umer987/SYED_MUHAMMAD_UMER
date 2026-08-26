import React from 'react';

const AddProject = () => {
  return (
    <div className="flex items-center justify-center font-oswald w-full">
      <div className="bg-[#201011] border border-[#79231C] p-8 rounded-lg w-full max-w-2xl shadow-lg mt-8 mb-8">
        <h2 className="text-3xl text-white text-center mb-8 tracking-wide">UPLOAD NEW PROJECT</h2>
        
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 tracking-wider">PROJECT TITLE</label>
            <input 
              type="text" 
              placeholder="e.g. Voice2Law Legal Assistant"
              className="bg-black border border-[#79231C] text-white p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#79231C]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 tracking-wider">CATEGORY</label>
