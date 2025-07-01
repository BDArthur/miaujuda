import React from 'react';
import DogImg from '../../assets/dog.png'; // substitua pelo caminho real

const AboutSection = () => {
  return (
    <section className="bg-[#ffe1f3] py-12">
      <div className="container mx-auto px-5 text-center">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">Conheça o Miaujuda!</h2>

        {/* Texto */}
        <p className="max-h-3x1 mx-auto text-base md:text-lg text-gray-800 mb-2">
          Nós fazemos a conexão entre quem deseja adotar um pet com uma rede de mais de 140 ONGs e protetores parceiros.
          Funciona assim: a Petz disponibiliza espaços especialmente dedicados para a adoção no centro de suas lojas e as ONGs/protetores parceiros ficam responsáveis pelo processo e entrevistas com os potenciais adotantes. Juntos somos mais fortes!
        </p>

        {/* Imagem */}
        <img src={DogImg} alt="Cachorro" className="mx-full w-full"/>

        {/* Subtítulo */}
        <div className="mt-10">
          <p className="text-sm font-medium text-gray-700">Toda ajuda é bem vinda!</p>
          <h3 className="text-2xl md:text-3xl font-bold text-purple-800 mb-2">O QUE FAZER PARA AJUDAR?</h3>
          <p className="text-sm text-gray-700 mb-8">Além de adotar, você também pode ajudar de outras maneiras:</p>

          {/* Três opções */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4 md:px-12">
            <div>
              <div className="bg-purple-100 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl">🐶</span>
              </div>
              <p className="text-purple-700 font-semibold">Oferecer um lar temporário</p>
            </div>

            <div>
              <div className="bg-purple-100 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl">😺</span>
              </div>
              <p className="text-purple-700 font-semibold">Ser voluntário nos eventos ou nos próprios abrigos das ONGs parceiras</p>
            </div>

            <div>
              <div className="bg-purple-100 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl">📣</span>
              </div>
              <p className="text-purple-700 font-semibold">Divulgar os animais perdidos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
