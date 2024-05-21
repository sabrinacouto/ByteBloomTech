'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define a interface para o contexto de exibição de imagens
interface ImageContextType {
  showImages: boolean; // Indica se as imagens devem ser exibidas
  toggleImages: () => void; // Função para alternar a exibição de imagens
}

// Cria o contexto para controlar a exibição de imagens com valores padrão
const ImageContext = createContext<ImageContextType>({
  showImages: true,
  toggleImages: () => {}
});

// Hook personalizado para usar o contexto de exibição de imagens
export const useImageContext = () => useContext(ImageContext);

// Define as propriedades do provedor de contexto
interface ImageProviderProps {
  children: ReactNode;
}

// Contexto de exibição de imagens para seus filhos
export const ImageProvider: React.FC<ImageProviderProps> = ({ children }) => {
  // Estado para controlar se as imagens devem ser exibidas
  const [showImages, setShowImages] = useState(true);

  // Função para alternar o estado de exibição de imagens
  const toggleImages = () => {
    setShowImages((prevState) => !prevState);
  };

  return (
    // Contexto com o estado atual e a função para alternar a exibição de imagens
    <ImageContext.Provider value={{ showImages, toggleImages }}>
      {children}
    </ImageContext.Provider>
  );
};