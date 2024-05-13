'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ImageContextType {
  showImages: boolean;
  toggleImages: () => void;
}

const ImageContext = createContext<ImageContextType>({
  showImages: true,
  toggleImages: () => {}
});

export const useImageContext = () => useContext(ImageContext);

interface ImageProviderProps {
  children: ReactNode;
}

export const ImageProvider: React.FC<ImageProviderProps> = ({ children }) => {
  const [showImages, setShowImages] = useState(true);

  const toggleImages = () => {
    setShowImages((prevState) => !prevState);
  };

  
  return (
    <ImageContext.Provider value={{ showImages, toggleImages }}>
      {children}
    </ImageContext.Provider>
  );
};
