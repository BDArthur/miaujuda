import React from 'react'
import PetImg from "../../assets/Pet.png"
import Navbar from '../Navbar/Navbar';
import LupaImg from "../../assets/lupa.png";


const Hero = () => {
    const [sidebar, setSidebar] = React.useState(false);
    return (
        <main className='md:px-12 md:py-6 bg-primaryDark'>
            <section className='relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md'>
                <div className='container'>
                    {/* Navbar */}
                    <Navbar sidebar={sidebar} setSidebar={setSidebar} />

                    {/* Hero section */}
                    <div className='grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[650px]'>
                        {/* text content section */}
                        <div className='mt-[100px] md:mt-0 p-4 space-y-4'>
                            <h1
                                data-aos="fade-up"
                                className='text-5xl font-bold uppercase text-shadow'>
                                Encontre o seu pet perdido
                            </h1>
                            <p className='text-sm'>
                                Utilize ferramentas de busca de pets com eficácia comprovada em todo o Brasil.
                                Crie seu anúncio gratuito agora mesmo para ter acesso ao Painel de Busca.
                            </p>

                            {/* Botões lado a lado */}
                            <div className='flex flex-col md:flex-row gap-4'>
                                {/* Botão rosa */}
                                <button className='bg-pink-500 text-white px-4 py-3 rounded-xl shadow-md flex items-center space-x-2 hover:bg-pink-600 transition'>
                                    <img src={LupaImg} alt="Ícone de pet" className='w-12 h-12' />
                                    <span>
                                        Perdi meu pet <br />
                                        Quero encontrar
                                    </span>
                                </button>

                                {/* Botão com borda rosa */}
                                <button className='border-2 border-pink-500 text-pink-700 px-4 py-3 rounded-xl shadow-md flex items-center space-x-2 hover:bg-pink-100 transition'>
                                    <img src={LupaImg} alt="Ícone de pet" className='w-12 h-12' />
                                    <span>
                                        Achei um pet <br />
                                        Quero buscar o tutor
                                    </span>
                                </button>
                            </div>

                            {/* Texto e botão de login mais à esquerda */}
                            <div className="mt-6 text-left pl-2 space-y-2">
                                <p className="text-lg font-semibold text-purple-800">
                                    Quer encontrar seu Pet ou ajudar um animal<br />Faça o Login!
                                </p>
                                <button className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition">
                                    Login
                                </button>
                            </div>

                        </div>

                        {/* image section */}
                        <div className='justify-self-end'>
                            <img src={PetImg} alt="Pet" className='relative z-10 w-[800px] md:w-[900px] lg:w-[1000px]' />
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}

export default Hero
