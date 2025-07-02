import React, { useState } from 'react';
import LoginForm from './LoginForm';
import AdoptionForm from './AdoptionForm';
import LostPetForm from './LostPetForm';
import FoundPetForm from './FoundPetForm';
import DeleteAccountForm from './DeleteAccountForm';
import ForgotPasswordForm from './ForgotPasswordForm';

const FormModal = () => {
  const [visible, setVisible] = useState(false);
  const [formType, setFormType] = useState('login'); // 'adoption', 'lost', etc.

  const openModal = (type) => {
    setFormType(type);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const renderForm = () => {
    switch (formType) {
      case 'login': return <LoginForm />;
      case 'adoption': return <AdoptionForm />;
      case 'lost': return <LostPetForm />;
      case 'found': return <FoundPetForm />;
      case 'delete': return <DeleteAccountForm />;
      case 'forgot': return <ForgotPasswordForm />;
      default: return null;
    }
  };

  return (
    <>
      {/* Botões de teste (remova depois ou use como base) */}
      <div className="flex gap-4 p-4">
        <button onClick={() => openModal('login')} className="bg-purple-500 text-white px-4 py-2 rounded">Login</button>
        <button onClick={() => openModal('adoption')} className="bg-pink-500 text-white px-4 py-2 rounded">Adotar</button>
        <button onClick={() => openModal('lost')} className="bg-red-500 text-white px-4 py-2 rounded">Perdi meu pet</button>
        <button onClick={() => openModal('found')} className="bg-green-500 text-white px-4 py-2 rounded">Achei um pet</button>
      </div>

      {/* Modal */}
      {visible && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[90%] max-w-md relative">
            <button onClick={closeModal} className="absolute top-2 right-4 text-gray-700 text-xl">&times;</button>
            {renderForm()}
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
