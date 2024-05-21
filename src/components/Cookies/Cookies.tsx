'use client'
import React, { useState, useEffect } from 'react';

const Cookies = () => {
    // Estado para controlar a exibição do popup e o consentimento dos cookies
    const [show, setShow] = useState(false);
    const [accepted, setAccepted] = useState(false);

    useEffect(() => {
        // Verifica se o usuário já aceitou os cookies ao carregar o componente
        const acceptedCookies = localStorage.getItem('acceptedCookies');
        if (!acceptedCookies) {
            setShow(true);
        } else {
            setAccepted(true);
        }
    }, []);

    // Função para aceitar os cookies
    const acceptCookies = () => {
        localStorage.setItem('acceptedCookies', 'true');
        setShow(false);
        setAccepted(true);
    };

    // Função para rejeitar os cookies
    const rejectCookies = () => {
        setShow(false);
        setAccepted(false);
        // Você pode adicionar aqui a lógica para limpar cookies ou tomar outras ações necessárias
    };

    // Função para fechar o popup
    const close = () => {
        setShow(false);
    };

    // Se o popup não estiver sendo exibido ou se os cookies já foram aceitos, retorna null para não renderizar nada
    if (!show || accepted) {
        return null;
    }

    return (
        <section className="fixed max-w-md p-4 mx-auto bg-white border border-gray-200 dark:bg-gray-800 left-12 bottom-16 dark:border-gray-700 rounded-2xl">
            {/* Container para título e botão de fechar */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-gray-800 dark:text-white">🍪 Nós usamos cookies!</h2>
                {/* Botão de fechar */}
                <button 
                    className="text-gray-400 hover:text-gray-800 dark:hover:text-white focus:outline-none"
                    onClick={close}
                >
                    {/* Ícone de "x" */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Descrição sobre o uso de cookies */}
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                Olá, este site usa cookies essenciais para garantir seu funcionamento adequado e cookies de rastreamento para entender como você interage com ele. Estes últimos só serão configurados após consentimento.
            </p>

            {/* Mensagem sobre o fechamento do modal */}
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">Fechando este modal, as configurações padrão serão salvas.</p>

            {/* Botões para aceitar, rejeitar e fechar */}
            <div className="grid grid-cols-2 gap-4 mt-4 shrink-0">
                <button 
                    className="text-xs bg-[#0077B6] font-medium rounded-lg hover:bg-blue-800 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"
                    onClick={acceptCookies}
                >
                    Aceitar todos
                </button>

                <button 
                    className="text-xs border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none"
                    onClick={rejectCookies}
                >
                    Rejeitar todos
                </button>
            </div>
        </section>
    );
};

export default Cookies;


