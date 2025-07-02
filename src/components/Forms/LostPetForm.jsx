import React from 'react';

const LostPetForm = () => (
  <form className="space-y-4">
    <h2 className="text-pink-600 font-bold text-center">Formulário Pet Perdido</h2>
    <input type="text" placeholder="Atende por" className="input-style" />
    <input type="text" placeholder="Animal" className="input-style" />
    <input type="text" placeholder="Raça" className="input-style" />
    <input type="date" placeholder="Data de desaparecimento" className="input-style" />
    <input type="text" placeholder="Contato" className="input-style" />
    <button type="submit" className="button-style">Login</button>
  </form>
);

export default LostPetForm;
