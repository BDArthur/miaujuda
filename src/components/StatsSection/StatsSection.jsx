import React from 'react';

const StatsSection = () => {
  return (
    <section className="bg-blue-900 text-white py-10 text-center">
      <h3 className="text-xl md:text-2xl font-semibold mb-8">
        Toda ajuda conta e faz muita diferença.
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
        <div>
          <p className="text-3xl font-bold">+ 6.1mil</p>
          <p className="text-sm mt-2">animais adotados em 2025</p>
        </div>
        <div>
          <p className="text-3xl font-bold">+ 95</p>
          <p className="text-sm mt-2">toneladas de ração doadas desde 2019</p>
        </div>
        <div>
          <p className="text-3xl font-bold">+ R$10.0M</p>
          <p className="text-sm mt-2">
            doações para ONGs por meio das parcerias com Arredondar e Editora MOL
          </p>
        </div>
        <div>
          <p className="text-3xl font-bold">+ 140</p>
          <p className="text-sm mt-2">ONGs e protetores cadastrados</p>
        </div>
        <div>
          <p className="text-3xl font-bold">+ 161.0mil</p>
          <p className="text-sm mt-2">itens doados por meio do programa Válidos</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
