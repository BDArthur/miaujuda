import React from 'react';

const AdoptionForm = () => (
  <form className="space-y-4">
    <h2 className="text-pink-600 font-bold text-center">Formulário Adoção</h2>
    <input type="text" placeholder="Nome" className="input-style" />
    <input type="text" placeholder="Espécie" className="input-style" />
    <input type="text" placeholder="Raça" className="input-style" />
    <input type="text" placeholder="Local do pet" className="input-style" />
    <input type="text" placeholder="Contato" className="input-style" />
    <button type="submit" className="button-style">Login</button>
  </form>
);

export default AdoptionForm;
