'use client'
import { Languages } from '@/services/types';

import React, { useState } from 'react';

interface LanguageSelectorProps {
  onLanguageChange: (language: Languages) => void; // Ajuste o tipo da propriedade onLanguageChange
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('pt'); // Estado para armazenar o idioma selecionado

  // Função para lidar com a alteração do idioma selecionado
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value as Languages; // Convertendo para o tipo Languages
    setSelectedLanguage(language);
    // Chama a função onLanguageChange com o novo idioma selecionado
    onLanguageChange(language);
  };
  return (
    <div>
      {/* Seletor de idioma */}
      <select
        id="languages"
        title="Selecione a linguagem"
        className="bg-gray-500 border h-7 border-gray-300 text-white text-xs rounded-lg m-0  focus:ring-blue-500 focus:border-blue-500 block w-full px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={selectedLanguage} // Valor selecionado é definido pelo estado selectedLanguage
        onChange={handleLanguageChange} // Função de manipulador de evento para lidar com a alteração do idioma selecionado
      >
        {/* Opções de idioma */}
        <option value="pt">Português</option>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
};

export default LanguageSelector;


