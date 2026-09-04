import React, { useState } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaProjectDiagram, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import axios from 'axios';

const MessageMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectbreif: '' // Changed to match schema field name
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    // Log the data being sent
    console.log('Sending data:', formData);

    try {
      const response = await axios.post('http://localhost:3000/api/message/message-me', formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Message sent:', response.data);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', projectbreif: '' });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      console.error('Error response:', error.response?.data);
      setSubmitStatus('error');
      setErrorMessage(error.response?.data?.message || 'Failed to send message. Please try again.');
      
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-[#180809] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#79231C]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#79231C]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <span className="absolute -top-2 -left-2 w-3 h-3 bg-[#79231C] rotate-45"></span>
            <span className="absolute -bottom-2 -right-2 w-3 h-3 bg-[#79231C] rotate-45"></span>
            <p className="text-[#E7CEB0] font-oswald tracking-[0.3em] text-sm uppercase mb-2 opacity-60">
              Get in Touch
            </p>
          </div>
          <h2 className="font-oswald text-4xl sm:text-5xl md:text-6xl text-[#E7CEB0] font-bold tracking-wider">
            <span className="relative">
              Send Me
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#79231C]"></span>
            </span>
            <br />
            <span className="text-[#79231C]">A Message</span>
          </h2>
          <div className="flex justify-center gap-3 mt-6">
            <div className="w-12 h-[2px] bg-[#79231C]"></div>
            <div className="w-4 h-[2px] bg-[#79231C]"></div>
            <div className="w-12 h-[2px] bg-[#79231C]"></div>
          </div>
          <p className="text-[#E7CEB0]/60 font-oswald mt-4 text-sm md:text-base max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-[#201011] border border-[#79231C]/30 rounded-3xl p-6 md:p-10 shadow-2xl hover:border-[#79231C]/60 transition-all duration-500">
          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-[#79231C]/20 border border-[#79231C] rounded-xl flex items-center gap-3 animate-fadeIn">
              <FaCheckCircle className="text-[#79231C] text-xl" />
              <span className="text-[#E7CEB0] font-oswald">Message sent successfully! I'll get back to you soon.</span>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl flex items-center gap-3 animate-fadeIn">
              <span className="text-red-500 text-xl">⚠️</span>
              <span className="text-[#E7CEB0] font-oswald">{errorMessage}</span>
            </div>
          )}

          {/* Name Field */}
          <div className="mb-6 group">
            <label className="block text-[#E7CEB0] font-oswald text-sm mb-2 tracking-wider">
              <FaUser className="inline mr-2 text-[#79231C]" />
              Your Name
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#180809] border border-[#79231C]/30 rounded-xl px-5 py-3.5 text-[#E7CEB0] font-oswald placeholder-[#E7CEB0]/30 focus:border-[#79231C] focus:outline-none focus:ring-2 focus:ring-[#79231C]/30 transition-all duration-300"
                placeholder="Your Name"
              />
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#79231C] group-focus-within:w-full transition-all duration-300"></div>
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-6 group">
            <label className="block text-[#E7CEB0] font-oswald text-sm mb-2 tracking-wider">
              <FaEnvelope className="inline mr-2 text-[#79231C]" />
              Your Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#180809] border border-[#79231C]/30 rounded-xl px-5 py-3.5 text-[#E7CEB0] font-oswald placeholder-[#E7CEB0]/30 focus:border-[#79231C] focus:outline-none focus:ring-2 focus:ring-[#79231C]/30 transition-all duration-300"
                placeholder="YourName@gmail.com"
              />
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#79231C] group-focus-within:w-full transition-all duration-300"></div>
            </div>
          </div>

          {/* Project Brief Field - FIXED: name="projectbreif" to match schema */}
          <div className="mb-8 group">
            <label className="block text-[#E7CEB0] font-oswald text-sm mb-2 tracking-wider">
              <FaProjectDiagram className="inline mr-2 text-[#79231C]" />
              Project Brief
            </label>
            <div className="relative">
              <textarea
                name="projectbreif"  // Changed to match schema
                value={formData.projectbreif}  // Changed to match schema
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-[#180809] border border-[#79231C]/30 rounded-xl px-5 py-3.5 text-[#E7CEB0] font-oswald placeholder-[#E7CEB0]/30 focus:border-[#79231C] focus:outline-none focus:ring-2 focus:ring-[#79231C]/30 transition-all duration-300 resize-y min-h-[120px]"
                placeholder="Tell me about your project, ideas, or what you'd like to build..."
              />
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#79231C] group-focus-within:w-full transition-all duration-300"></div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#79231C] text-[#E7CEB0] font-oswald font-semibold px-8 py-4 rounded-xl hover:bg-[#79231C]/80 transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#79231C]/30 relative"
          >
            {isSubmitting ? (
              <>
                <FaSpinner className="animate-spin text-xl" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <FaPaperPlane className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                <span>Send Message</span>
              </>
            )}
          </button>

          {/* Footer Text */}
          <p className="text-center text-[#E7CEB0]/30 font-oswald text-xs mt-4 tracking-wider">
            <span className="inline-block w-1 h-1 bg-[#79231C] rounded-full mx-2"></span>
            I'll respond within 24 hours
            <span className="inline-block w-1 h-1 bg-[#79231C] rounded-full mx-2"></span>
          </p>
        </form>

        {/* Additional Info */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-center">
          <div className="bg-[#201011]/50 border border-[#79231C]/20 rounded-xl px-6 py-3 backdrop-blur-sm">
            <span className="text-[#E7CEB0]/40 font-oswald text-xs uppercase tracking-wider">Email</span>
            <p className="text-[#E7CEB0] font-oswald text-sm">umershakir987@gmail.com</p>
          </div>
          <div className="bg-[#201011]/50 border border-[#79231C]/20 rounded-xl px-6 py-3 backdrop-blur-sm">
            <span className="text-[#E7CEB0]/40 font-oswald text-xs uppercase tracking-wider">Response Time</span>
            <p className="text-[#E7CEB0] font-oswald text-sm">Within 24 hours</p>
          </div>
          <div className="bg-[#201011]/50 border border-[#79231C]/20 rounded-xl px-6 py-3 backdrop-blur-sm">
            <span className="text-[#E7CEB0]/40 font-oswald text-xs uppercase tracking-wider">Available</span>
            <p className="text-[#E7CEB0] font-oswald text-sm">Mon - Fri, 9am - 6pm</p>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </section>
  );
};

export default MessageMe;