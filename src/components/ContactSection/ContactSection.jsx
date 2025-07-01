import React from 'react';
import { MdEmail, MdHelp, MdSupport, MdPhone } from 'react-icons/md';
import { FaUserTie } from 'react-icons/fa';

const contacts = [
  { icon: <MdEmail size={24} />, title: 'REPORTAR UM INCIDENTE', phone: '(12) 4567-8901' },
  { icon: <FaUserTie size={24} />, title: 'ASSUNTOS DE RH', phone: '(12) 4567-8901' },
  { icon: <MdSupport size={24} />, title: 'SUPORTE TÉCNICO', phone: '(12) 4567-8901' },
  { icon: <MdPhone size={24} />, title: 'HELPDESK DA EMPRESA', phone: '(12) 4567-8901' },
];

const ContactSection = () => {
  return (
    <section className="bg-purple-200 py-10 text-center">
      <h2 className="text-2xl font-semibold text-purple-800 mb-8">Entre em contato conosco</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {contacts.map((c, idx) => (
          <div key={idx} className="bg-pink-100 p-4 rounded-lg flex items-center space-x-4">
            <div className="text-purple-700">{c.icon}</div>
            <div className="text-left">
              <p className="text-xs font-semibold text-gray-700 uppercase">{c.title}</p>
              <p className="text-lg font-bold text-purple-900">{c.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
