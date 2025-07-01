import React from 'react'
import logoImg from "../../assets/Logo.png"
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ sidebar, setSidebar }) => {
    return (
        <div className='absolute top-0 left-0 w-full py-2 z-20'>
            <div className='container'>
                <div className='flex justify-between items-center'>
                    {/* Logo + texto */}
                    <div className='flex items-center space-x-3'>
                        <img src={logoImg} alt="Logo" className='w-20 md:w-24' />
                        <h1 className='text-xl font-bold uppercase'>Miaujuda</h1>
                    </div>

                    {/* NavLinks */}
                    <ul className='hidden md:flex space-x-8 font-bold'>
                        <li><a href="#">Sobre Nós</a></li>
                        <li><a href="#">Busca</a></li>
                        <li><a href="#">Adoção</a></li>
                        <li><a href="#">Anunciar</a></li>
                        <li><a href="#">Entrar</a></li>
                    </ul>


                    {/* Hamburger menu */}
                    <div onClick={() => setSidebar(!sidebar)} className='md:hidden'>
                        <GiHamburgerMenu className='text-3xl cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
