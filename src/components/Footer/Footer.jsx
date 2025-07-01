import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-primary to-secondary
        pt-12 pb-8 '>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                gap-8'>
                    {/* company details section  */}
                    <div className='space-y-6'>
                    <h1 className='text-3xl font-bold'>Miaujuda</h1>
                    <p className='text-sm max-w-[300px]'>Tentamos ajudar tutores e pets a se reencontrarem com ferramentas de busca eficazes em todo o Brasil. 
                        Nossa missão é dar uma vida boa para nossos pets. 
                        Crie seu anúncio gratuito e acesse o Painel de Busca agora mesmo.
                        </p>
                        </div>
                        {/* NavLink section  */}
                        <div className='space-y-6'>
                            <h1 className='text-4xl font-bold'>Links Rápidos</h1>
                            <div className='grid grid-cols-2 gap-3'>
                                <div>
                                    <ul className='space-y-2'>
                                        <li className='hover:text-purple-950'>
                                            <a href="#">Inicio</a>
                                        </li>
                                        <li className='hover:text-purple-950'>
                                            <a href="#">Services</a>
                                        </li>
                                        <li className='hover:text-purple-950'>
                                            <a href="#">Where To Find</a>
                                        </li>
                                        <li className='hover:text-purple-950'>
                                            <a href="#">Contato</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* social links section  */}
                        <div className='space-y-6'>
                            <h1 className='text-4xl font-bold'>
                                Nos acompanhe nas redes sociais
                            </h1>
                            <div className='flex items-center gap-3'>
                                <FaFacebook  className='text-3xl hover:scale-105 duration-300 hover:text-purple-950'/>
                                <FaInstagram   className='text-3xl hover:scale-105 duration-300 hover:text-purple-950'/>
                                <FaTelegram  className='text-3xl hover:scale-105 duration-300 hover:text-purple-950'/>
                                <FaGoogle className='text-3xl hover:scale-105 duration-300 hover:text-purple-950' />
                            </div>
                        </div>
                </div>
            </div>
        </div>
        )
}

export default Footer