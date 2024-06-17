'use client'
import React, { useEffect} from 'react';
import Image from 'next/image';
import logo from "./../../../public/assets/logoazul.png"
import { useLeitorDeTela } from "@/contexts/speechContext/_app";
import SignUp from '@/components/FormSignUp/SignUp';
import LeitorDeTela from "@/components/Leitor/leitor";

const Cadastro: React.FC = () => {
    const { ativo, setarTexto } = useLeitorDeTela();

    const textoParaLeitura = `
    Inscreva-se para começar sua avaliação gratuita.
    Preencha o formulário e em breve entraremos em contato sobre seu teste gratuito. Nome. Digite o seu nome. Sobrenome.
    Digite seu sobrenome. Email. Exemplo@email.com. Cargo. Digite seu cargo. Empresa. Digite o nome da sua empresa. Telefone. CEP.
    Estado. Cidade. Bairro. Digite o bairro da sua empresa. Logradouro. Número. Complemento. Ex: Andar 4 - Sala 3. Senha. Digite sua senha.
    Confirmar senha. Digite novamente a sua senha. Li e concordo com os termos de uso. Cadastre-se.
    `;

    useEffect(() => {
        if (ativo) {
            setarTexto(textoParaLeitura);
        }
    }, [ativo, setarTexto]);

    return (
        <section id ="cadastro" className='flex justify-center my-[5rem]'>
            <div className="w-full flex flex-col md:flex-row items-center justify-center font-montserrat  mt-10 gap-10 p-4">
                <div className="w-auto md:w-[38rem] flex flex-col items-start justify-start">
                    <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-row items-start justify-start py-0 box-border">
                            <div className="w-[9.375rem] flex flex-row items-start justify-start relative mb-9">
                                <Image
                                    className="h-[5rem] w-[7rem]"
                                    alt="Logo da Salesforce"
                                    src={logo}
                                />
                            </div>
                        </div>
                        <div className="text-5xl text-black">
                            <h2 className="m-0 gradient font-bold w-auto md:w-[30rem]">
                                Inscreva-se na Salesforce e transforme sua empresa:
                            </h2>
                        </div>
                        <div className="flex flex-col gap-5 mt-7 pb-[6rem] w-[35rem] ">
                            <div>
                                <p>
                                    <span className="font-bold text-[#66c4e8] mr-1">
                                        Gestão de Relacionamento com o Cliente (CRM):
                                    </span>
                                    Centralize todas as informações de seus clientes em uma única plataforma e ofereça um atendimento mais personalizado e eficiente.
                                </p>
                            </div>
                            <div>
                                <p>
                                    <span className="font-bold text-[#66c4e8] mr-1">
                                        Automação de Marketing:
                                    </span>
                                    Crie campanhas de marketing automatizadas e acompanhe os resultados em tempo real, ajustando suas estratégias para obter o melhor desempenho.
                                </p>
                            </div>
                            <div>
                                <p>
                                    <span className="font-bold text-[#66c4e8] mr-1">
                                        Análise de Dados:
                                    </span>
                                    Utilize ferramentas avançadas de análise para tomar decisões baseadas em dados concretos, melhorando a eficiência e os resultados de sua empresa.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <LeitorDeTela />
                <SignUp />

            </div>
        </section>
    );
};

export default Cadastro;
