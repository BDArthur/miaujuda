import React from 'react';

const LoginForm = () => (
  <form className="space-y-4">
    <h2 className="text-pink-600 font-bold text-center">Cadastre-se</h2>
    <input type="text" placeholder="Usuário" className="input-style" />
    <input type="password" placeholder="Senha" className="input-style" />
    <button className="button-style">Login</button>
    <div className="text-sm text-right text-blue-800 flex justify-between mt-1">
      <a href="#" onClick={(e) => e.preventDefault()}>Esqueceu a senha?</a>
      <a href="#" onClick={(e) => e.preventDefault()}>Deletar conta</a>
    </div>
  </form>
);

export default LoginForm;
