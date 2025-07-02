// src/components/Forms/FoundPetForm.jsx
import React from 'react';

const FoundPetForm = () => {
  return (
    <div>
      <h2 className="text-pink-600 font-bold text-lg mb-4 text-center">FORMULÁRIO ENCONTREI UM PET</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Encontrado por" className="bg-pink-100 px-4 py-2 rounded-full" />
        <input type="text" placeholder="Espécie" className="bg-pink-100 px-4 py-2 rounded-full" />
        <input type="text" placeholder="Raça" className="bg-pink-100 px-4 py-2 rounded-full" />
        <input type="text" placeholder="Local encontrado" className="bg-pink-100 px-4 py-2 rounded-full" />
        <input type="text" placeholder="Contato" className="bg-pink-100 px-4 py-2 rounded-full" />
        <button className="bg-purple-400 text-white rounded-full py-2">Enviar</button>
      </form>
    </div>
  );
};

export default FoundPetForm;
