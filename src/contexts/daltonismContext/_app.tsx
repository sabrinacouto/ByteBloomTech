'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

enum DaltonismType {
  Normal,
  Achromatopsia,
  Tritanopia,
  Protanopia,
  Deuteranopia,
}

const daltonismTexts = {
  [DaltonismType.Normal]: 'Daltonismo',
  [DaltonismType.Achromatopsia]: 'Achromatopsia',
  [DaltonismType.Tritanopia]: 'Tritanopia',
  [DaltonismType.Protanopia]: 'Protanopia',
  [DaltonismType.Deuteranopia]: 'Deuteranopia',
};

interface DaltonismContextType {
  daltonismType: DaltonismType;
  toggleDaltonismType: () => void;
  daltonismText: string; 
  resetDaltonism: () => void; // Adicionando a propriedade resetDaltonism
}

const DaltonismContext = createContext<DaltonismContextType | undefined>(undefined);

export const useDaltonism = () => {
  const context = useContext(DaltonismContext);
  if (!context) {
    throw new Error('useDaltonism deve ser usado com o DaltonismProvider');
  }
  return context;
};

export const DaltonismProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [daltonismType, setDaltonismType] = useState<DaltonismType>(DaltonismType.Normal);
  const [daltonismText, setDaltonismText] = useState<string>(daltonismTexts[daltonismType]); // Inicialize o texto com base no tipo de daltonismo atual

  const toggleDaltonismType = () => {
    setDaltonismType(prevType => (prevType + 1) % (Object.keys(DaltonismType).length / 2));
    const nextType: DaltonismType = (daltonismType + 1) % (Object.keys(DaltonismType).length / 2);
    setDaltonismText(daltonismTexts[nextType]); // Atualize o texto com base no novo tipo de daltonismo
  };

  const applyDaltonismFilter = (type: DaltonismType) => {
    switch (type) {
      case DaltonismType.Achromatopsia:
        // Aplicar filtro para acromatia (preto e branco)
        document.documentElement.style.filter = 'grayscale(100%)';
        break;
      case DaltonismType.Tritanopia:
        document.documentElement.style.filter = 'contrast(100%) hue-rotate(-20deg) saturate(120%)';
        break;
      case DaltonismType.Deuteranopia:
        document.documentElement.style.filter = 'contrast(100%) sepia(20%) hue-rotate(-330deg) saturate(70%)';
        break;
      case DaltonismType.Protanopia:
        document.documentElement.style.filter = 'contrast(110%) sepia(20%) hue-rotate(-330deg) saturate(70%)';
        break;
      default:
        document.documentElement.style.filter = 'none';
        break;
    }
  };

  const resetDaltonism = () => {
    setDaltonismType(DaltonismType.Normal); // Definir o tipo de daltonismo de volta para o normal
    setDaltonismText(daltonismTexts[DaltonismType.Normal]); // Atualizar o texto para refletir o modo normal
  };

  useEffect(() => {
    applyDaltonismFilter(daltonismType);
  }, [daltonismType]);

  const value: DaltonismContextType = {
    daltonismType,
    toggleDaltonismType,
    daltonismText,
    resetDaltonism,
  };

  return (
    <DaltonismContext.Provider value={value}>
      {children}
    </DaltonismContext.Provider>
  );
};
