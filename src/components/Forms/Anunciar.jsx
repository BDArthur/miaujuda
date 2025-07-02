import React from 'react';
import { useNavigate } from 'react-router-dom';

const Anunciar = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 to-purple-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">Como você gostaria de anunciar?</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <button
          onClick={() => navigate('/perdi-meu-pet')}
          className="bg-red-400 hover:bg-red-500 text-white font-semibold px-6 py-4 rounded-xl shadow-lg transition"
        >
          Perdi meu pet
        </button>

        <button
          onClick={() => navigate('/achei-um-pet')}
          className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-6 py-4 rounded-xl shadow-lg transition"
        >
          Achei um pet
        </button>

        <button
          onClick={() => navigate('/adotar')}
          className="bg-green-400 hover:bg-green-500 text-white font-semibold px-6 py-4 rounded-xl shadow-lg transition"
        >
          Quero colocar para adoção
        </button>
      </div>
    </div>
  );
};

export default Anunciar;
