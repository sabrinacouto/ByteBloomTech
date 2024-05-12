'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import img from "../../../public/assets/giphy.gif"
import { fetchViaCep } from '@/services/ViaCep/viaCepAPI';



interface Address {
  cep: string;
  logradouro: string;
  bairro: string;
  cidade: string;
  estado: string;
}

const Cadastro: React.FC = () => {
    const [address, setAddress] = useState<Address>({
      cep: '',
      logradouro: '',
      bairro: '',
      cidade: '',
      estado: '',
    });
  
    const handleCEPChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const cep = event.target.value.replace(/\D/g, '');
      if (cep.length !== 8) {
        return;
      }
  
      try {
        const data = await fetchViaCep(cep);;
        setAddress({
            cep: data.cep,
            logradouro: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf,
        });
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
      }
    };

    return (

        <section id ="cadastro" className='flex justify-center my-[5rem]'>
        <div className="container card bg-white p-[5rem] md:p-[3rem] rounded-xl md:gap-[3rem] lg:gap-[10rem] flex flex-col md:flex-row items-center">
            <div className="flex flex-col">
                <div className="">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl gradient mb-10">
                        Experimente nossa solução completa de CRM e vendas.
                    </h2>
                    <Image src={img} className="hidden md:block" alt="Mascote da Salesforce balançando uma bandeira azul."  unoptimized priority/>
                    <p className="text-base md:text-lg lg:text-xl text-description mt-10 text-[#808080] mb-7 items-end">
                        Dúvidas? Entre em contato e fale com um de nossos especialistas.
                    </p>
                </div>
            </div>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-9 lg:gap-15">
                <div className="flex flex-col">
                    <label htmlFor="nome" className="-description mb-2">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        className="custom-input rounded-lg p-2.5 placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        title="Nome"
                        autoComplete="name"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className=" text-description mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="emailInsert"
                        className="custom-input rounded-lg placeholder-blue-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        title="Email *"
                        autoComplete="email"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="cargo" className="text-description mb-2">Cargo</label>
                    <input
                        type="text"
                        name="cargo"
                        id="cargo"
                        className="custom-input  rounded-lg placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        title="Cargo"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="empresa" className="text-description mb-2">Empresa</label>
                    <input
                        type="text"
                        name="empresa"
                        id="empresa"
                        className="custom-input rounded-lg placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        title="Empresa"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="telefone" className="text-description mb-2">Telefone</label>
                    <input
                        type="text"
                        id="telefone"
                        aria-describedby="helper-text-explanation"
                        className="custom-input rounded-lg placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="cep" className="text-description mb-2">CEP</label>
                    <input
                        type="text"
                        name="cep"
                        id="cep"
                        className="custom-input rounded-lg placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        title="CEP"
                        onChange={handleCEPChange}
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="estado" className="text-description mb-2">Estado</label>
                    <input
                        type="text"
                        name="estado"
                        id="estado"
                        value={address.estado}
                        readOnly
                        className="custom-input rounded-lg placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        title="Estado"
                        required
                    />
                </div> 

                <div className="flex flex-col">
                    <label htmlFor="cidade" className="text-description mb-2">Cidade</label>
                    <input
                        type="text"
                        name="cidade"
                        id="cidade"
                        value={address.cidade}
                        readOnly
                        className="custom-input rounded-lg placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        title="Cidade"
                        required 
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="bairro" className="text-description mb-2">Bairro</label>
                    <input
                        type="text"
                        name="bairro"
                        id="bairro"
                        value={address.bairro}
                        readOnly
                        className="custom-input rounded-lg placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        title="Bairro" 
                        required
                    />
                </div> 
                
                <div className="flex flex-col">
                    <label htmlFor="rua" className="text-description mb-2">Rua</label>
                    <input
                        type="text"
                        name="rua"
                        id="rua"
                        value={address.logradouro}
                        readOnly
                        className="custom-input rounded-lg placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        title="Rua" 
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password" className="text-description mb-2">Senha</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="custom-input rounded-lg placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        title="Senha"
                        required
                    />
                </div>
                
                <div className="mt-8">
                    <input
                        name="userTerms"
                        id="userTerms"
                        type="checkbox"
                        className="custom-checkbox h-6 w-6 text-primary accent-[#0CBFE3]"
                        required
                    />
                    <label htmlFor="userTerms" className="ml-4 text-lg text-description">Li e concordo com os <span className="text-[#2EA7BF]">Termos e Condições</span></label>
                </div>
                <button
                    className="bg-gradient-to-r from-[#0CBFE3] to-[#024754] hover:from-[#0CBFE3] hover:to-white text-white mt-8 hover:text-[#1E494F] text-xl h-[4rem] font-semibold rounded-md"
                    type="submit"
                >
                    Cadastre-se
                </button>
             
            </form>    
        </div>
        </section>
  
    );
};

export default Cadastro;