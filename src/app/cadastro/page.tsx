'use client'
import React, { useState, FormEvent, ChangeEvent} from 'react';
import Image from 'next/image';
import img from "../../../public/assets/giphy.gif"
import { fetchViaCep } from '@/services/ViaCep/viaCepAPI';
import { useImageContext } from "@/contexts/imageContext/_app";
import { Address } from '@/services/types';


const Cadastro: React.FC = () => {
    const { showImages } = useImageContext();
    const [address, setAddress] = useState<Address>({
        cep: '',
        logradouro: '',
        bairro: '',
        cidade: '',
        estado: '',
      });
      
      const [contaCliente, setContaCliente] = useState({
          nome: '',
          sobrenome: '',
          cargo: '',
          nomeEmpresa: '',
          telefone: '',
          email: '',
          cep: '',
          rua: '',
          bairro: '',
          cidade: '',
          estado: '',
          senha: ''
      });
  
      const [successMessage, setSuccessMessage] = useState<string>('');

      const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
  
          try {
              const response = await fetch('http://localhost:8080/contaCliente', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(contaCliente)
              });
  
              if (response.ok) {
                  setSuccessMessage('Conta criada com sucesso!');
                  setContaCliente({
                      nome: '',
                      sobrenome: '',
                      cargo: '',
                      nomeEmpresa: '',
                      telefone: '',
                      email: '',
                      cep: '',
                      rua: '',
                      bairro: '',
                      cidade: '',
                      estado: '',
                      senha: ''
                  });
              } else {
                  console.error('Erro ao criar ContaCliente:', response.statusText);
              }
          } catch (error) {
              console.error('Erro ao enviar solicitação:', error);
          }
      };
  
      const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
          const { name, value } = event.target;
          setContaCliente(prevState => ({
              ...prevState,
              [name]: value
          }));
      };

    
      const handleCEPChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const cep = event.target.value.replace(/\D/g, '');
        if (cep.length !== 8) {
          return;
        }
    
        try {
          const data = await fetchViaCep(cep);
          setAddress({
              cep: data.cep,
              logradouro: data.logradouro,
              bairro: data.bairro,
              cidade: data.localidade,
              estado: data.uf,
          });
          // Atualizar automaticamente os campos do formulário com os dados do CEP
          setContaCliente(prevState => ({
              ...prevState,
              cep: data.cep,
              rua: data.logradouro,
              bairro: data.bairro,
              cidade: data.localidade,
              estado: data.uf,
          }));
        } catch (error) {
          console.error('Erro ao buscar CEP:', error);
        }
      };

    return (

        <section id ="cadastro" className='flex justify-center my-[5rem]'>
        <div className="container p-7 justify-center items-center  flex flex-col md:flex-row ">
            
            <form  className = "card bg-white shadow-2xl p-10 rounded-xl" onSubmit={handleSubmit}>
                <div className='mb-[5rem] space-y-3 w-[45rem]'>
                <h3 className='gradient text-2xl'>Inscreva-se para começar sua avaliação gratuita.</h3>
                <p>Preencha o formulário abaixo e em breve entraremos em contato sobre seu teste gratuito.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-9 lg:gap-15">
                <div className="flex flex-col">
                    <label htmlFor="nome" className="text-description mb-2">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        className="custom-input rounded-lg p-2.5 placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        title="Nome"
                        autoComplete="name"
                        placeholder='Digite seu nome'
                        value={contaCliente.nome} 
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="sobrenome" className="text-description mb-2">Sobrenome</label>
                    <input
                        type="text"
                        name="sobrenome"
                        id="sobrenome"
                        className="custom-input rounded-lg p-2.5 placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        title="Sobrenome"
                        autoComplete="family-name"
                        placeholder='Digite seu sobrenome'
                        value={contaCliente.sobrenome} 
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className=" text-description mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="emailInsert"
                        className="custom-input rounded-lg placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        title="Email *"
                        autoComplete="email"
                        placeholder='exemplo@email.com'
                        value={contaCliente.email} 
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="cargo" className="text-description mb-2">Cargo</label>
                    <input
                        type="text"
                        name="cargo"
                        id="cargo"
                        className="custom-input  rounded-lg placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5"
                        title="Cargo"
                        placeholder='Digite seu cargo'
                        value={contaCliente.cargo} 
                        onChange={handleChange}
                        required
                    />
                </div>
             
    
<div className="flex flex-col">
    <label htmlFor="empresa" className="text-description mb-2">Empresa</label>
    <input
        type="text"
        name="nomeEmpresa"
        id="empresa"
        className="custom-input rounded-lg placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 "
        title="Empresa"
        placeholder='Nome da sua empresa'
        value={contaCliente.nomeEmpresa} 
        onChange={handleChange}
        required
    />
</div>

<div className="flex flex-col">
    <label htmlFor="telefone" className="text-description mb-2">Telefone</label>
    <input
        type="tel"
        id="telefone"
        name="telefone"
        aria-describedby="helper-text-explanation"
        placeholder='(00) 00000-0000'
        className="custom-input rounded-lg placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
        value={contaCliente.telefone} 
        onChange={handleChange}
        required
    />
</div>
                <div className="flex flex-col">
                    <label htmlFor="cep" className="text-description mb-2">CEP</label>
                    <input
                        type="text"
                        name="cep"
                        id="cep"
                        placeholder='0000-000'
                        className="custom-input rounded-lg placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        title="CEP"
                        onChange={(event) => {
                            handleCEPChange(event);
                            handleChange(event);
                        }}
                        value={contaCliente.cep}
                        
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="estado" className="text-description mb-2">Estado</label>
                    <input
                        type="text"
                        name="estado"
                        id="estado"
                        placeholder='Ex: RJ'
                        value={contaCliente.estado}
                        onChange={handleChange}
                      
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
                        placeholder='Cidade'
                        value={contaCliente.cidade} 
                        onChange={handleChange}
                  
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
                        placeholder='Seu bairro'
                        value={contaCliente.bairro}
                        onChange={handleChange}
                        className="custom-input rounded-lg placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        title="Bairro" 
                        required
                    />
                </div> 
                
                <div className="flex flex-col">
                    <label htmlFor="rua" className="text-description mb-2">Logradouro:</label>
                    <input
                        type="text"
                        name="rua"
                        id="rua"
                        placeholder='Ex: "Avenida Brasil"'
                        value={contaCliente.rua}
                        onChange={handleChange}
                        className="custom-input rounded-lg placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        title="Rua" 
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="senha" className="text-description mb-2">Senha</label>
                    <input
                        type="password"
                        name="senha"
                        id="senha"
                        placeholder='*******'
                        value = {contaCliente.senha}
                        onChange={handleChange}
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
                {successMessage && <div className="text-green-500">{successMessage}</div>}
                <button
                    className="bg-gradient-to-r from-[#0CBFE3] to-[#024754] hover:bg-[#0CBFE3] text-white mt-8 hover:text-[#1E494F] text-xl h-[4rem] font-semibold rounded-md"
                    type="submit"
                >
                    Cadastre-se
                </button>
                </div>
            </form>    
        </div>
        </section>
  
    );
};

export default Cadastro;