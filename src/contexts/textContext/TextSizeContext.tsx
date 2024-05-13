'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type TextSizes = {
  [key: string]: number;
}

interface TextSizeContextType {
  textSizes: TextSizes;
  increaseTextSize: () => void;
  desativarTodasFuncoes: () => void; // Função para desativar todas as funções
}

const TextSizeContext = createContext<TextSizeContextType | undefined>(undefined);

export const useTextSize = () => {
  const context = useContext(TextSizeContext);
  if (!context) {
    throw new Error('useTextSize must be used within a TextSizeProvider');
  }
  return context;
};

interface TextSizeProviderProps {
  children: ReactNode;
}

const TextSizeProvider: React.FC<TextSizeProviderProps> = ({ children }) => {
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

  const [textSizes, setTextSizes] = useState<TextSizes>(defaultTextSizes);
  const [clickCount, setClickCount] = useState(0);
 
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

  const resetTextSize = () => {
    setTextSizes(defaultTextSizes);
    setClickCount(0);
  };

  const desativarTodasFuncoes = () => {
    // Redefinir os tamanhos de texto de volta aos valores padrão
    setTextSizes(defaultTextSizes);
  };
  useEffect(() => {
    if (clickCount >= 4) {
      resetTextSize();
    }
  }, [clickCount]);

  useEffect(() => {
    const textElements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li'];
    textElements.forEach(tag => {
      const elements = document.querySelectorAll(`${tag}:not(.menu-item)`);
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i] as HTMLElement;
        element.style.fontSize = `${textSizes[tag]}px`;
      }
    });
  }, [textSizes]);

  return (
    <TextSizeContext.Provider value={{ textSizes, increaseTextSize, desativarTodasFuncoes }}>
      {children}
    </TextSizeContext.Provider>
  );
};

export default TextSizeProvider;
