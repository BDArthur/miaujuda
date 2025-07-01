import React from 'react';
import dog1 from '../../assets/dog1.png';
import dog2 from '../../assets/dog2.png';
import dog3 from '../../assets/dog3.png';
import dog4 from '../../assets/dog4.png';

const animals = [
  { tipo: 'Perdido', nome: 'Lívia', tempo: '1 dia atrás', imagem: dog1 },
  { tipo: 'Adoção', nome: 'Laíza', tempo: '23 dias atrás', imagem: dog2 },
  { tipo: 'Adoção', nome: 'Arthur', tempo: '31 dias atrás', imagem: dog3 },
  { tipo: 'Perdido', nome: 'Caio', tempo: '5 dias atrás', imagem: dog4 },
];

const AnimalCards = () => {
  return (
    <section className="bg-[#ffe1f3] py-10 text-center">
      <h2 className="text-2xl font-bold text-purple-700">Faça sua parte</h2>
      <p className="text-sm mb-6 text-purple-700">animais anunciados em Caraguatatuba</p>
      
      <div className="flex flex-wrap justify-center gap-6">
        {animals.map((animal, idx) => (
          <div key={idx} className="bg-purple-100 rounded-2xl w-40 p-3 shadow-md">
            <img
              src={animal.imagem}
              alt={`Imagem de ${animal.nome}`}
              className="rounded-lg h-32 w-full object-cover mb-2"
            />
            <p className="text-sm font-semibold">{animal.tipo}</p>
            <p className="text-xs text-gray-700">{animal.nome}</p>
            {animal.tempo && <p className="text-xs text-gray-500">{animal.tempo}</p>}
            <a href="#" className="text-xs text-blue-600 hover:underline block mt-2">
              Entre em contato
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimalCards;
