'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import logo from "../../../public/assets/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
 


  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      const keyword = searchTerm.trim().toLowerCase();
      // Mapeamento de palavras-chave para URLs correspondentes
      const keywordToPage: {[key: string]: string} = {
        "produtos": "/produtos",
        "empresa": "/empresa",
        "customer": "/customer",
        "acessibilidade": "/acessibilidade",
        "desenvolvedores": "/desenvolvedores"
        // Adicione mais palavras-chave e URLs conforme necessário
      };

      if (keyword in keywordToPage) {
        // Redireciona para a página correspondente à palavra-chave
        window.location.href = keywordToPage[keyword];
      } else {
        // Se a palavra-chave não for encontrada, você pode lidar com isso aqui
        console.log("Palavra-chave não encontrada");
      }

      setSearchTerm('');
    }
  };


  return (

      <main>
        <nav className="flex justify-between bg-[#0077B6] px-3 lg:px-8 items-center py-6">
          <div className="flex items-center">
           
              <FiMenu
                onClick={() => setMenu(true)}
                className="text-3xl text-white cursor-pointer lg:hidden"
              />
              <Link href="/">
                <Image src={logo} className="h-auto w-auto md:h-[3rem] md:w-[4rem] mr-2 lg:mr-5 ml-4 lg:ml-1" alt="Uma nuvem branca com o nome da Salesforce em azul" />
              </Link>
         
            <ul className="flex gap-5">
           <li><Link href="/produtos" className="hidden lg:block text-white transition duration-500 hover:text-blue-300 transform hover:scale-110 ">Produtos</Link></li> 
            <li><Link href="/empresa" className="hidden  lg:block text-white transition duration-500  hover:text-blue-300 transform hover:scale-110 ">Empresa</Link></li>
            <li><Link href="/customer" className="hidden  lg:block text-white transition duration-500  hover:text-blue-300 transform hover:scale-110  ">Customer</Link></li>
           <li><Link href="/acessibilidade" className="hidden lg:block text-white transition duration-500 hover:text-blue-300 transform hover:scale-110 ">Acessibilidade</Link></li> 
            <li><Link href="/desenvolvedores" className="hidden lg:block text-white transition duration-500  hover:text-blue-300 transform hover:scale-110">Desenvolvedores</Link></li>
            </ul>
          </div>
          

          <div
            className={` fixed h-full w-screen lg:hidden bg-white/50 backdrop-blur-sm top-0  right-0 ${
              isSideMenuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-all`}
          >
            <section className="text-white bg-[#0077B6] flex-col left-0 top-0 h-screen p-8 gap-6 z-50 w-56 flex">
              <IoCloseOutline
                onClick={() => setMenu(false)}
                className=" mb-8 text-2xl cursor-pointer"
              />
              <Link href="/produtos" className="font-bold">Produtos</Link>
              <Link href="/empresa" className="font-bold ">Empresa</Link>
              <Link href="/customer" className="font-bold">Customer</Link>
              <Link href="/acessibilidade" className="font-bold ">Acessibilidade</Link>
              <Link href="/desenvolvedores" className="font-bold ">Desenvolvedores</Link>
              <hr className="" />
              <div className='text-white'>
                <p className="text-xs ml-5 mb-2 font-bold">Contato:</p>
                <div className=" flex text-sm">
                  <FaPhoneAlt className="h-3 mr-2 mt-1" />
                  <a href="">0800 891 1887</a>
                </div>
              </div>
            </section>
          </div>

          {!showSearch && (
            <div className='text-white'>
              <p className="menu-item text-xs hidden md:block ml-5 mb-1">Entre em contato</p>
              <div className=" hidden md:flex text-sm">
                <FaPhoneAlt className="h-3 mr-2 mt-1" />
                <a href="">0800 891 1887</a>
              </div>
            </div>
          )}

         
        <section className="flex items-center gap-4">
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-4">
            <div className="flex items-center justify-center w-full">
              <button type="button" id="search" title="Barra de pesquisa" onClick={() => setShowSearch(!showSearch)}>
                <IoSearchSharp className="text-xl rounded-2xl ml-3 mt-1 text-white transition duration-300 hover:bg-blue-300 bg-opacity-50 transform hover:scale-125" />
              </button>
              {showSearch && (
                <input
                  type="search"
                  placeholder="Encontre aqui"
                  className="bg-white focus:outline-none rounded text-xs ml-2 md:ml-7 py-2 pr-[2rem]"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              )}
            </div>
          </form>

            {!showSearch && (
              <>
                <Link href="/login">
                  <FaUser title="Login" className="text-base fill-white hover:fill-blue-950 rounded cursor-pointer" />
                </Link>
                <p className="text-white font-bold">|</p>
                <Link href="/cadastro">
                  <button type="button" className=" w-[6rem] h-[2.5rem] md:w-[10rem] md:h-10  rounded-lg border-lg  bg-[#194750] hover:bg-blue-950 text-white shadow-2xl  ">
                 Teste grátis
                  </button>
                </Link>
              </>
            )}
          </section>


        </nav>
        <hr className="" />
     
        
      </main>

 


  );
};

export default Navbar;