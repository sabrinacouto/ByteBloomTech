'use client'
import React, { createContext, useContext, useState } from 'react';
import { ReactNode } from 'react';

interface LeitorDeTelaContextType {
  ativo: boolean;
  texto: string;
  ativarLeitor: () => void;
  desativarLeitor: () => void;
  setarTexto: (texto: string) => void;
}

const LeitorDeTelaContext = createContext<LeitorDeTelaContextType>({
  ativo: false,
  texto: '',
  ativarLeitor: () => {},
  desativarLeitor: () => {},
  setarTexto: () => {},
});

export const useLeitorDeTela = () => {
  return useContext(LeitorDeTelaContext);
};

interface LeitorDeTelaProviderProps {
  children: ReactNode;
}

export const LeitorDeTelaProvider = ({ children }: LeitorDeTelaProviderProps) => {
  const [ativo, setAtivo] = useState(false);
  const [texto, setTexto] = useState('');

  const ativarLeitor = () => {
    setAtivo(true);
  };

  const desativarLeitor = () => {
    setAtivo(false);
  };

  const setarTexto = (novoTexto: string) => {
    setTexto(novoTexto);
  };

  return (
    <LeitorDeTelaContext.Provider
      value={{ ativo, texto, ativarLeitor, desativarLeitor, setarTexto }}
    >
      {children}
    </LeitorDeTelaContext.Provider>
  );
};
