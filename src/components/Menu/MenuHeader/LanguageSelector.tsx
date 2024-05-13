import React, { useState, ChangeEvent } from 'react';


const LanguageSelector = () => {

  return (
    <div>
      <select
        id="languages"
        title ="Selecione a linguagem"
        className="bg-gray-500 border h-7 border-gray-300 text-white text-xs rounded-lg m-0  focus:ring-blue-500 focus:border-blue-500 block w-full px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="pt">Português</option>
        <option value="en">English</option>
        <option value="es">Espanhol</option>
      </select>
    </div>
  );
};

export default LanguageSelector;