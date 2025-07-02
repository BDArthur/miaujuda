import React from 'react';

const DeleteAccountForm = () => (
  <form className="space-y-4">
    <h2 className="text-pink-600 font-bold text-center">Deletar conta</h2>
    <input type="text" placeholder="Usuário" className="input-style" />
    <input type="password" placeholder="Senha" className="input-style" />
    <button className="bg-purple-200 text-red-600 w-full py-2 rounded-full font-semibold">Deletar</button>
  </form>
);

export default DeleteAccountForm;
