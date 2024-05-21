'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define um tipo para os tamanhos de texto, com chaves como strings e valores como números
type TextSizes = {
  [key: string]: number;
}

// Define a interface para o contexto de tamanhos de texto
interface TextSizeContextType {
  textSizes: TextSizes;
  increaseTextSize: () => void; // Função para aumentar o tamanho do texto
  desativarTodasFuncoes: () => void; // Função para desativar todas as funções (resetar tamanhos de texto)
}

// Cria o contexto para armazenar os tamanhos de texto
const TextSizeContext = createContext<TextSizeContextType | undefined>(undefined);

// Hook personalizado para usar o contexto de tamanhos de texto
export const useTextSize = () => {
  const context = useContext(TextSizeContext);
  if (!context) {
    throw new Error('useTextSize must be used within a TextSizeProvider');
  }
  return context;
};

// Define as propriedades do provedor de contexto
interface TextSizeProviderProps {
  children: ReactNode;
}

// Componente que provê o contexto de tamanhos de texto para seus filhos
const TextSizeProvider: React.FC<TextSizeProviderProps> = ({ children }) => {
  // Define os tamanhos de texto padrão
  const defaultTextSizes: TextSizes = {
    h1: 35,
    h2: 30,
    h3: 25,
    h4: 16,
    h5: 14,
    h6: 12,
    p: 20,
    li: 16,
  };

  // Estado para armazenar os tamanhos de texto atuais
  const [textSizes, setTextSizes] = useState<TextSizes>(defaultTextSizes);
  // Estado para contar quantas vezes o botão de aumentar tamanho foi clicado
  const [clickCount, setClickCount] = useState(0);

  // Função para aumentar o tamanho de todos os textos em 3 unidades
  const increaseTextSize = () => {
    setTextSizes(prevSizes => {
      const updatedSizes: TextSizes = { ...prevSizes };
      for (const key in prevSizes) {
        if (prevSizes.hasOwnProperty(key)) {
          updatedSizes[key] += 3;
        }
      }
      return updatedSizes;
    });
    setClickCount(prevCount => prevCount + 1);
  };

  // Função para resetar os tamanhos de texto para os valores padrão
  const resetTextSize = () => {
    setTextSizes(defaultTextSizes);
    setClickCount(0);
  };

  // Função para desativar todas as funções (resetar tamanhos de texto)
  const desativarTodasFuncoes = () => {
    setTextSizes(defaultTextSizes);
  };

  // Efeito que reseta os tamanhos de texto se o botão foi clicado 4 ou mais vezes
  useEffect(() => {
    if (clickCount >= 4) {
      resetTextSize();
    }
  }, [clickCount]);

  // Efeito que atualiza os tamanhos de texto dos elementos na página quando os tamanhos mudam
  useEffect(() => {
    const textElements = ['h1', 'h2', 'h3', 'p', 'li'];
    textElements.forEach(tag => {
      const elements = document.querySelectorAll(`${tag}:not(.menu-item)`);
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i] as HTMLElement;
        element.style.fontSize = `${textSizes[tag]}px`;
      }
    });
  }, [textSizes]);

  return (
    // Prove o contexto com os tamanhos de texto e as funções para manipular esses tamanhos
    <TextSizeContext.Provider value={{ textSizes, increaseTextSize, desativarTodasFuncoes }}>
      {children}
    </TextSizeContext.Provider>
  );
};

export default TextSizeProvider;

