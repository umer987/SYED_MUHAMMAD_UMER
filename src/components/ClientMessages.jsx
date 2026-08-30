import { useState, useEffect } from 'react';
const ClientMessages = () => {
  // Static dummy data just to show the UI layout
  const [messages, setMessages] = useState([ {
      id: 1,
      name: "Ahmed Khan",
      email: "ahmed@example.com",
      brief: "Looking to build a custom interactive machine learning dashboard for predicting energy consumption."
    }]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
   useEffect(() => {
    
    // Create an async helper function inside the useEffect
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/message/get-message', 
          { withCredentials: true }
        );
        console.log(response)
        
        // Save the data to state
        setMessages(response.messages);
      } catch (err) {
        setError('Failed to load messages');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    // Call the function
    fetchMessages();
  }, []);


  return (
    <div className="min-h-screen bg-black font-oswald p-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl text-white mb-8 border-b-2 border-[#79231C] inline-block pr-8 pb-2 tracking-wide">
          CLIENT MESSAGES
        </h2>
        
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
                  {msg.brief}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientMessages;