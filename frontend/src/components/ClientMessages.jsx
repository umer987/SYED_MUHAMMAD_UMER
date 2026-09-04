import { useState, useEffect } from 'react';
import axios from 'axios';

const ClientMessages = () => {
  // 1. Initialize with an empty array instead of dummy data
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/message/get-message', 
          { withCredentials: true }
        );
        
        // Ensure response.data is an array (adjust depending on your backend structure)
        const data = response.data.messages || response.data;
        setMessages(data);
      } catch (err) {
        setError('Failed to load messages');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, []);

  // 2. Handle Loading State
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <h2 className="text-2xl text-white font-oswald tracking-widest animate-pulse">
          LOADING MESSAGES...
        </h2>
      </div>
    );
  }

  // 3. Handle Error State
  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <h2 className="text-2xl text-red-500 font-oswald tracking-widest">
          {error}
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black font-oswald p-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl text-white mb-8 border-b-2 border-[#79231C] inline-block pr-8 pb-2 tracking-wide">
          CLIENT MESSAGES
        </h2>
        
        {/* 4. Handle Empty State gracefully */}
        {messages.length === 0 ? (
          <p className="text-gray-400 text-xl tracking-wider">NO MESSAGES FOUND.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {messages.map((msg) => (
              <div 
                key={msg._id} 
                className="bg-[#201011] border border-[#79231C] p-6 rounded-lg flex flex-col gap-4 shadow-lg transition-transform hover:scale-[1.02]"
              >
                <div className="border-b border-[#79231C] pb-4">
                  <h3 className="text-2xl text-white tracking-wide">{msg.name}</h3>
                  <a href={`mailto:${msg.email}`} className="text-[#79231C] hover:text-red-400 tracking-wider">
                    {msg.email}
                  </a>
                </div>
                
                <div className="flex flex-col gap-2">
                  <span className="text-gray-400 text-sm tracking-widest uppercase">Project Brief</span>
                  <p className="text-gray-200 leading-relaxed font-sans">
                    {msg.projectbreif}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientMessages;