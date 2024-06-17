'use client';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { createContaCliente } from '@/services/contaClienteAPI/contaClienteAPI';
import { fetchViaCep } from '@/services/ViaCep/viaCepAPI';
import { Address, ContaCliente } from '@/services/types';

const SignUp: React.FC = () => {
    const [address, setAddress] = useState<Address>({
        cep: '',
        logradouro: '',
        bairro: '',
        cidade: '',
        estado: '',
    });

    const [contaCliente, setContaCliente] = useState<ContaCliente>({
        nome: '',
        sobrenome: '',
        cargo: '',
        nomeEmpresa: '',
        telefone: '',
        email: '',
        cep: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
        senha: '',
    });

    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [inputErrors, setInputErrors] = useState({
        nome: false,
        sobrenome: false,
        cargo: false,
        nomeEmpresa: false,
        telefone: false,
        email: false,
        cep: false,
        logradouro: false,
        numero: false,
        bairro: false,
        cidade: false,
        estado: false,
        senha: false,
        confirmarSenha: false,
    });

    const [passwordError, setPasswordError] = useState('');
    const [successMessage, setSuccessMessage] = useState<string>('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            if (Object.values(inputErrors).some(error => error)) {
                throw new Error('Por favor, preencha todos os campos obrigatórios.');
            }

            if (contaCliente.senha !== confirmarSenha) {
                throw new Error('As senhas não correspondem.');
            }

            await createContaCliente(contaCliente);
            setSuccessMessage('Conta criada com sucesso!');
            setContaCliente({
                nome: '',
                sobrenome: '',
                cargo: '',
                nomeEmpresa: '',
                telefone: '',
                email: '',
                cep: '',
                logradouro: '',
                numero: '',
                complemento: '',
                bairro: '',
                cidade: '',
                estado: '',
                senha: '',
            });
            setConfirmarSenha('');
        } catch (error: any) {
            setPasswordError(error.message);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setContaCliente(prevState => ({
            ...prevState,
            [name]: value,
        }));
        setInputErrors(prevState => ({
            ...prevState,
            [name]: !value,
        }));
    };

    const handleCEPChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const cep = event.target.value.replace(/\D/g, '');
        setContaCliente(prevState => ({
            ...prevState,
            cep: cep,
        }));
        setInputErrors(prevState => ({
            ...prevState,
            cep: cep.length !== 8,
        }));

        if (cep.length === 8) {
            try {
                const data = await fetchViaCep(cep);
                setAddress({
                    cep: data.cep,
                    logradouro: data.logradouro,
                    bairro: data.bairro,
                    cidade: data.localidade,
                    estado: data.uf,
                });
                setContaCliente(prevState => ({
                    ...prevState,
                    cep: data.cep,
                    logradouro: data.logradouro,
                    bairro: data.bairro,
                    cidade: data.localidade,
                    estado: data.uf,
                }));
            } catch (error) {
                console.error('Erro ao buscar CEP:', error);
            }
        }
    };

    const handleConfirmarSenhaChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setConfirmarSenha(value);
        setInputErrors(prevState => ({
            ...prevState,
            confirmarSenha: contaCliente.senha !== value,
        }));
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="shadow-lg rounded-3xl w-[19rem] lg:w-[30rem] bg-gray-100 px-7 pt-9">
                <div className="grid justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-5">
                        <input
                            className="border border-gray-400  outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
                            placeholder="Nome*"
                            type="text"
                            name="nome"
                            value={contaCliente.nome}
                            onChange={handleChange}
                        />
                        {inputErrors.nome && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
                        <input
                            className="border border-gray-400  outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
                            placeholder="Sobrenome*"
                            type="text"
                            name="sobrenome"
                            value={contaCliente.sobrenome}
                            onChange={handleChange}
                        />
                        {inputErrors.sobrenome && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
                   
                        <input
                            className="border border-gray-400  outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
                            placeholder="Email corporativo*"
                            type="email"
                            name="email"
                            value={contaCliente.email}
                            onChange={handleChange}
                        />
                        {inputErrors.email && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
                        <input
                            className="border border-gray-400  outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
                            placeholder="Cargo*"
                            type="text"
                            name="cargo"
                            value={contaCliente.cargo}
                            onChange={handleChange}
                        />
                        {inputErrors.cargo && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}   
                    </div>

                    <div className="grid grid-cols-1 gap-7 md:gap-5 mt-4">
                        <input
                            className="border border-gray-400  outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
                            placeholder="Empresa*"
                            type="text"
                            name="nomeEmpresa"
                            value={contaCliente.nomeEmpresa}
                            onChange={handleChange}
                        />
                        {inputErrors.nomeEmpresa && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-5 mt-4">
                        <input
                            className="border border-gray-400  outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
                            placeholder="Telefone*"
                            type="text"
                            name="telefone"
                            value={contaCliente.telefone}
                            onChange={handleChange}
                        />
                        {inputErrors.telefone && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
                        <input
                            className="border border-gray-400  outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
                            placeholder="CEP da empresa*"
                            type="text"
                            name="cep"
                            value={contaCliente.cep}
                            onChange={handleCEPChange}
                        />
                        {inputErrors.cep && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
                    </div>

                    <div className="grid grid-cols-1 gap-7 md:gap-5 mt-4">
                        <input
                            className="border border-gray-400 outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
                            placeholder="Logradouro"
                            type="text"
                            name="logradouro"
                            value={contaCliente.logradouro}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-5 mt-4">
                        <input
                            className="border border-gray-400  outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
                            placeholder="Número*"
                            type="text"
                            name="numero"
                            value={contaCliente.numero}
                            onChange={handleChange}
                        />
                        {inputErrors.numero && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
                        <input
                            className="border border-gray-400  outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
                            placeholder="Bairro"
                            type="text"
                            name="bairro"
                            value={contaCliente.bairro}
                            onChange={handleChange}
                        />
                    </div>

                               
                    <div className="grid grid-cols-1 gap-7 md:gap-5 mt-4">
                          <input
                            className="border border-gray-400 outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
                            placeholder="Complemento (opcional)"
                            type="complemento"
                            name="complemento"
                            value={contaCliente.complemento}
                            onChange={handleChange}
                        />
                       
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-5 mt-4">
                        <input
                            className="border border-gray-400  outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
                            placeholder="Cidade"
                            type="text"
                            name="cidade"
                            value={contaCliente.cidade}
                            onChange={handleChange}
                        />
                        <input
                            className="border border-gray-400 outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
                            placeholder="Estado"
                            type="text"
                            name="estado"
                            value={contaCliente.estado}
                            onChange={handleChange}
                        />
                    </div>
                      
                    <div className="grid grid-cols-1 gap-7 md:gap-5 mt-4">
                          <input
                            className="border border-gray-400 outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
                            placeholder="Senha*"
                            type="password"
                            name="senha"
                            value={contaCliente.senha}
                            onChange={handleChange}
                        />
                        {inputErrors.senha && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
                       
                    </div>

                    <div className="grid grid-cols-1 gap-7 md:gap-5 mt-4">
                    <input
                            className="border border-gray-400 outline-none bg-white h-8 shadow-lg rounded-lg p-2 font-montserrat text-xs sm:text-sm text-darkgray placeholder-sm"
                            placeholder="Confirmar Senha*"
                            type="password"
                            name="confirmarSenha"
                            value={confirmarSenha}
                            onChange={handleConfirmarSenhaChange}
                        />
                        {inputErrors.confirmarSenha && <span className="text-red-500 text-xs ml-2">Senhas não coincidem.</span>}
                  
                         
                       
                    </div>


                    <div className='flex mt-8'>
                        <input
                            name="userTerms"
                            id="userTerms"
                            type="checkbox"
                            className="custom-checkbox h-6 w-6 text-primary accent-[#0CBFE3]"
                            required
                        />
                        <label htmlFor="userTerms" className="ml-4 text-lg text-description">Li e concordo com os <span className="text-[#2EA7BF]">Termos e Condições</span></label>
                    </div>
                    
                    <div className="flex items-center justify-center mt-4">
                        <button
                            className="bg-[#66c4e8] text-white w-full mb-10 py-1.5 px-10 mt-4 shadow-lg rounded-lg"
                            type="submit"
                        >
                            Criar conta
                        </button>
                    </div>
                    {passwordError && (
                        <div className="flex justify-center mt-3 mb-5 text-red-500">
                            {passwordError}
                        </div>
                    )}
                    {successMessage && (
                        <div className="flex justify-center mt-3 mb-5 text-green-500">
                            {successMessage}
                        </div>
                    )}
                </div>
            </form>
        </>
    );
};

export default SignUp;


