'use client'
import React, { useState, useEffect, FormEvent, ChangeEvent} from 'react';
import { createContaCliente } from '@/services/contaClienteAPI/contaClienteAPI';
import { fetchViaCep } from '@/services/ViaCep/viaCepAPI';
import { Address, ContaCliente } from '@/services/types';
import Image from 'next/image';
import logo from "./../../../public/assets/logoazul.png"
import { useLeitorDeTela } from "@/contexts/speechContext/_app";
import LeitorDeTela from "@/components/Leitor/leitor";



const Cadastro: React.FC = () => {
    // Estados para armazenar os dados do endereço, da conta do cliente, erros de entrada, mensagem de sucesso e erro de senha
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
        complemento: false,
        bairro: false,
        cidade: false,
        estado: false,
        senha: false,
        confirmarSenha: false
    });

    const [passwordError, setPasswordError] = useState('');

    const [successMessage, setSuccessMessage] = useState<string>('');

    const { ativo, setarTexto } = useLeitorDeTela();

    const textoParaLeitura = `
    Inscreva-se para começar sua avaliação gratuita.
    Preencha o formulário abaixo e em breve entraremos em contato sobre seu teste gratuito. Nome. Digite o seu nome. Sobrenome.
    Digite seu sobrenome. Email. Exemplo@email.com. Cargo. Digite seu cargo. Empresa. Digite o nome da sua empresa. Telefone. CEP.
    Estado. Cidade. Bairro. Digite o bairro da sua empresa. Logradouro. Número. Complemento. Ex: Andar 4 - Sala 3. Senha. DIigite sua senha.
    Confirmar senha. Digite novamente a sua senha. Li e concordo com os termos de uso. Cadastre-se.
    `;

    useEffect(() => {
        if (ativo) {
            setarTexto(textoParaLeitura);
        }
    }, [ativo, setarTexto]);

    // Funções de manipulação de formulário


    // Função para lidar com o envio do formulário
const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
        // Verifica se há erros de entrada
        if (Object.values(inputErrors).some(error => error)) {
            throw new Error('Por favor, preencha todos os campos obrigatórios.');
        }

        // Verifica se as senhas coincidem
        if (contaCliente.senha !== confirmarSenha) {
            throw new Error('As senhas não correspondem.');
        }

        // Chama a função para criar a conta do cliente
        await createContaCliente(contaCliente);
        setSuccessMessage('Conta criada com sucesso!');
        // Limpa os dados do formulário após o envio bem-sucedido
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
        // Limpa o campo de confirmação de senha
        setConfirmarSenha('');
    } catch (error: any) {
        setPasswordError(error.message);
    }
};
    
    // Função para lidar com a mudança nos campos de entrada
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        // Atualiza o estado da conta do cliente e verifica se o campo está vazio
        setContaCliente(prevState => ({
            ...prevState,
            [name]: value
        }));
        setInputErrors(prevState => ({
            ...prevState,
            [name]: !value
        }));
    };

    // Função para lidar com a mudança no campo de CEP
    const handleCEPChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const cep = event.target.value.replace(/\D/g, '');
        if (cep.length !== 8) {
            return;
        }

        try {
            // Faz uma requisição para buscar informações do CEP
            const data = await fetchViaCep(cep);
            // Atualiza o estado do endereço e da conta do cliente com os dados do CEP
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
    };

    // Função para lidar com a mudança no campo de confirmação de senha
    const handleConfirmarSenhaChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        // Atualiza o estado da confirmação de senha e verifica se as senhas não coincidem
        setConfirmarSenha(value);
        setInputErrors(prevState => ({
            ...prevState,
            confirmarSenha: contaCliente.senha !== value
        }));
    };

    return (

        <section id ="cadastro" className='flex justify-center my-[5rem]'>
        <div className="container p-7 justify-center items-center  flex flex-col md:flex-row ">
            
            <form  className = "card bg-white shadow-2xl p-10 rounded-xl" onSubmit={handleSubmit}>

                <Image src={logo} alt="Logo azul da Salesforce" className='h-[4rem] w-auto mb-4'/>

                <div className='mb-[5rem] space-y-3 w-auto lg:w-[30rem]'>
                <h3 className='gradient text-2xl'>Inscreva-se para começar sua avaliação gratuita.</h3>
                <p>Preencha o formulário abaixo e em breve entraremos em contato sobre seu teste gratuito.</p>
                </div>
                <div className="grid grid-cols-1 gap-4 md:gap-9 lg:gap-15">
                <div className="flex flex-col">
                    <label htmlFor="nome" className="mb-2 ml-2">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        className="custom-input rounded-3xl p-2.5 placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        title="Nome"
                        autoComplete="name"
                        placeholder='Digite seu nome'
                        value={contaCliente.nome} 
                        onChange={handleChange}
                        required
                    />
                  {inputErrors.sobrenome && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="sobrenome" className="mb-2 ml-2">Sobrenome</label>
                    <input
                        type="text"
                        name="sobrenome"
                        id="sobrenome"
                        className="custom-input rounded-3xl p-2.5 placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        title="Sobrenome"
                        autoComplete="family-name"
                        placeholder='Digite seu sobrenome'
                        value={contaCliente.sobrenome} 
                        onChange={handleChange}
                        required
                    />
                     {inputErrors.sobrenome && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-2 ml-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="emailInsert"
                        className="custom-input rounded-3xl placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        title="Email *"
                        autoComplete="email"
                        placeholder='exemplo@email.com'
                        value={contaCliente.email} 
                        onChange={handleChange}
                        required
                    />
                     {inputErrors.email && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="cargo" className="mb-2 ml-2">Cargo</label>
                    <input
                        type="text"
                        name="cargo"
                        id="cargo"
                        className="custom-input rounded-3xl placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5"
                        title="Cargo"
                        placeholder='Digite seu cargo'
                        value={contaCliente.cargo} 
                        onChange={handleChange}
                        required
                    />
                     {inputErrors.cargo && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
                </div>
             
                <div className="flex flex-col">
                    <label htmlFor="empresa" className="mb-2 ml-2">Empresa</label>
                    <input
                        type="text"
                        name="nomeEmpresa"
                        id="empresa"
                        className="custom-input rounded-3xl placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 "
                        title="Empresa"
                        placeholder='Nome da sua empresa'
                        value={contaCliente.nomeEmpresa} 
                        onChange={handleChange}
                        required
                    />
                     {inputErrors.nomeEmpresa && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="telefone" className="mb-2 ml-2">Telefone</label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        aria-describedby="helper-text-explanation"
                        placeholder='(00) 00000-0000'
                        className="custom-input rounded-3xl placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        value={contaCliente.telefone} 
                        onChange={handleChange}
                        required
                    />
                     {inputErrors.telefone && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="cep" className="mb-2 ml-2">CEP</label>
                    <input
                        type="text"
                        name="cep"
                        id="cep"
                        placeholder='0000-000'
                        className="custom-input rounded-3xl placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        title="CEP"
                        onChange={(event) => {
                            handleCEPChange(event);
                            handleChange(event);
                        }}
                        value={contaCliente.cep}
                        
                        required
                    />
                     {inputErrors.cep && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="estado" className="mb-2 ml-2">Estado</label>
                    <input
                        type="text"
                        name="estado"
                        id="estado"
                        placeholder='Ex: RJ'
                        value={contaCliente.estado}
                        onChange={handleChange}
                      
                        className="custom-input rounded-3xl placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        title="Estado"
                        required
                    />
                     {inputErrors.estado && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
                </div> 

                <div className="flex flex-col">
                    <label htmlFor="cidade" className="mb-2 ml-2">Cidade</label>
                    <input
                        type="text"
                        name="cidade"
                        id="cidade"
                        placeholder='Cidade'
                        value={contaCliente.cidade} 
                        onChange={handleChange}
                        className="custom-input rounded-3xl placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        title="Cidade"
                        required 
                    />
                     {inputErrors.cidade && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="bairro" className="mb-2 ml-2">Bairro</label>
                    <input
                        type="text"
                        name="bairro"
                        id="bairro"
                        placeholder='Digite o bairro da empresa'
                        value={contaCliente.bairro}
                        onChange={handleChange}
                        className="custom-input rounded-3xl placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        title="Bairro" 
                        required
                    />
                     {inputErrors.bairro && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
                </div> 

                
                
                <div className="flex flex-col">
                    <label htmlFor="logradouro" className="mb-2 ml-2">Logradouro</label>
                    <input
                        type="text"
                        name="logradouro"
                        id="logradouro"
                        placeholder='Ex: "Avenida Brasil"'
                        value={contaCliente.logradouro}
                        onChange={handleChange}
                        className="custom-input rounded-3xl placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        title="Logradouro" 
                        required
                    />
                     {inputErrors.logradouro && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="numero" className="mb-2 ml-2">Número</label>
                    <input
                        type="text"
                        name="numero"
                        id="numero"
                        value={contaCliente.numero} 
                        onChange={handleChange}
                        placeholder='Digite o número do endereço'
                        className="custom-input rounded-3xl placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        title="Numero" 
                        required
                    />
                     {inputErrors.numero && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
                </div>

                
                <div className="flex flex-col">
                    <label htmlFor="Complemento" className="mb-2 ml-2">Complemento</label>
                    <input
                        type="text"
                        name="complemento"
                        id="complemento"
                        value={contaCliente.complemento} 
                        onChange={handleChange}
                        placeholder='Ex: Andar 4 - Sala 3'
                        className="custom-input rounded-3xl placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        title="Numero" 
                    />
                     {inputErrors.complemento && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
                </div>


                <div className="flex flex-col">
                    <label htmlFor="senha" className="mb-2 ml-2">Senha</label>
                    <input
                        type="password"
                        name="senha"
                        id="senha"
                        placeholder='Digite sua senha'
                        value = {contaCliente.senha}
                        onChange={handleChange}
                        className="custom-input rounded-3xl placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        title="Senha"
                        required
                    />
                     {inputErrors.senha && <span className="text-red-500 text-xs ml-2">Campo obrigatório.</span>}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="confirmarSenha" className="mb-2 ml-2">Confirme sua senha</label>
                    <input
                        type="password"
                        name="confirmarSenha"
                        id="confirmarSenha"
                        value={confirmarSenha} // Alterado aqui para confirmarSenha
                        onChange={handleConfirmarSenhaChange} // Adicionado o evento onChange
                        placeholder='Digite novamente a sua senha'
                        className="custom-input rounded-3xl placeholder-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        title="Senha"
                        required
                    />
                       {inputErrors.confirmarSenha && <span className="text-red-500 text-xs ml-2">As senhas não correspondem.</span>}
                </div>
                {passwordError && <div className="text-red-500">{passwordError}</div>}
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
                    className="bg-gradient-to-r from-[#0CBFE3] to-[#024754] hover:bg-[#0CBFE3] text-white mt-8 hover:text-[#1E494F] rounded-3xl text-xl h-[4rem] font-semibold"
                    type="submit"
                >
                    Cadastre-se
                </button>
                </div>
            </form>    
        </div>
        <LeitorDeTela/>
        </section>
  
    );
};

export default Cadastro;