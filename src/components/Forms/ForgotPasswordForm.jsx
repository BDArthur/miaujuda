import React from 'react';

const ForgotPasswordForm = () => (
  <form className="space-y-4">
    <h2 className="text-pink-600 font-bold text-center">Esqueceu a senha?</h2>
    <input type="email" placeholder="Email" className="input-style" />
    <input type="text" placeholder="Código de verificação" className="input-style" />
    <input type="password" placeholder="Nova senha" className="input-style" />
    <button className="button-style">Login</button>
  </form>
);

export default ForgotPasswordForm;
