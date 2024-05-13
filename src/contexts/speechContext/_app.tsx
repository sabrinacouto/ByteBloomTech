'use client'
import { MouseEvent } from 'react';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Criando o contexto para o estado global
interface SpeechContextType {
  isReading: boolean;
  toggleReading: () => void;
}

const SpeechContext = createContext<SpeechContextType>({
  isReading: false,
  toggleReading: () => {},
});

// Hook para usar o contexto em componentes
export const useSpeechContext = () => useContext(SpeechContext);

// Provedor para encapsular os componentes com o estado global
export const SpeechProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isReading, setIsReading] = useState(false);

  const toggleReading = () => {
    setIsReading((prevIsReading) => !prevIsReading);
  };

  return (
    <SpeechContext.Provider value={{ isReading, toggleReading }}>
      {children}
    </SpeechContext.Provider>
  );
};

// Função para ler o texto sob o cursor
export const handleMouseMove = (event: MouseEvent) => {
  if (window.speechSynthesis) {
    const hoveredElement = document.elementFromPoint(event.clientX, event.clientY);

    if (hoveredElement) {
      const textContent = hoveredElement.textContent;

      if (textContent && textContent.trim()) {
        const textToSpeak = textContent.trim();
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        window.speechSynthesis.speak(utterance);
      }
    }
  }
};
