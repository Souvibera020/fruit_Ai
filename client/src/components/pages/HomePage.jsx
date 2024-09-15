import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-yellow-100 to-green-100">
      <div className="rounded-lg shadow-lg bg-gradient-to-b from-blue-200 to-purple-200 w-11/12 sm:w-96 mt-10 mb-8 p-4 sm:p-6 h-[90vh] sm:h-[85vh] overflow-hidden">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">Fruit.Ai</h1>
          <p className="text-base sm:text-lg pb-8 font-bold text-gray-700">"Be Healthy!"</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button
            className="bg-indigo-300 rounded-lg shadow-lg px-4 sm:px-6 py-3 h-[12vh] sm:h-[16vh] text-lg sm:text-2xl font-bold text-gray-800"
            onClick={() => navigate('/chatbot')} 
          >
            Chat
          </button>
          <button className="bg-blue-300 rounded-lg shadow-lg px-4 sm:px-6 py-3 h-[12vh] sm:h-[16vh] text-lg sm:text-2xl font-bold text-gray-800"
          >
            Option 1
          </button>
          <button className="bg-red-300 rounded-lg shadow-lg px-4 sm:px-6 py-3 h-[12vh] sm:h-[16vh] text-lg sm:text-2xl font-bold text-gray-800"
          >
            Option 2
          </button>
          <button className="bg-green-300 rounded-lg shadow-lg px-4 sm:px-6 py-3 h-[12vh] sm:h-[16vh] text-lg sm:text-2xl font-bold text-gray-800 flex items-center justify-center"
          onClick={() => navigate('/translator')} 
          >
            Translate
          </button>
          <button className="bg-orange-300 rounded-lg shadow-lg px-4 sm:px-6 py-3 h-[12vh] sm:h-[16vh] text-lg sm:text-2xl font-bold text-gray-800"
          onClick={() => navigate('/faq')}
          >
            FAQs
          </button>
          <button className="bg-pink-300 rounded-lg shadow-lg px-4 sm:px-6 py-3 h-[12vh] sm:h-[16vh] text-lg sm:text-2xl font-bold text-gray-800"
          onClick={() => navigate('/about')}
          >
            About
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
