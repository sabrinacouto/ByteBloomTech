'use client'
import React, { createContext, useContext, useState } from 'react';
import { ReactNode } from 'react';

// Define a interface para o contexto do leitor de tela
interface LeitorDeTelaContextType {
  ativo: boolean; // Indica se o leitor de tela está ativo
  texto: string; // O texto que será lido pelo leitor de tela
  ativarLeitor: () => void; // Função para ativar o leitor de tela
  desativarLeitor: () => void; // Função para desativar o leitor de tela
  setarTexto: (texto: string) => void; // Função para definir o texto a ser lido
}

// Cria o contexto para o leitor de tela com valores padrão
const LeitorDeTelaContext = createContext<LeitorDeTelaContextType>({
  ativo: false,
  texto: '',
  ativarLeitor: () => {},
  desativarLeitor: () => {},
  setarTexto: () => {},
});

// Hook personalizado para usar o contexto do leitor de tela
export const useLeitorDeTela = () => {
  return useContext(LeitorDeTelaContext);
};

// Define as propriedades do provedor de contexto
interface LeitorDeTelaProviderProps {
  children: ReactNode;
}

// Componente que provê o contexto do leitor de tela para seus filhos
export const LeitorDeTelaProvider = ({ children }: LeitorDeTelaProviderProps) => {
  // Estado para indicar se o leitor de tela está ativo
  const [ativo, setAtivo] = useState(false);
  // Estado para armazenar o texto a ser lido pelo leitor de tela
  const [texto, setTexto] = useState('');

  // Função para ativar o leitor de tela
  const ativarLeitor = () => {
    setAtivo(true);
  };

  // Função para desativar o leitor de tela
  const desativarLeitor = () => {
    setAtivo(false);
  };

  // Função para definir o texto a ser lido pelo leitor de tela
  const setarTexto = (novoTexto: string) => {
    setTexto(novoTexto);
  };

  return (
    // Prove o contexto com o estado atual e as funções para manipular o leitor de tela
    <LeitorDeTelaContext.Provider
      value={{ ativo, texto, ativarLeitor, desativarLeitor, setarTexto }}
    >
      {children}
    </LeitorDeTelaContext.Provider>
  );
};
