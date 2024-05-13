'use client'
import React from 'react';
import Image from 'next/image';
import logo from "../../../../public/assets/logo.png"
import LanguageSelector from './LanguageSelector';
import { IoCloseSharp } from "react-icons/io5";
import {Languages} from "./types"

interface MenuHeaderProps {
  onClose: () => void;
  onLanguageChange: (language: Languages) => void; // Ajuste o tipo da propriedade onLanguageChange
}

const MenuHeader: React.FC<MenuHeaderProps> = ({ onClose, onLanguageChange }) => {
  const handleClose = () => {
    if (typeof onClose === 'function') {
      onClose();
    }
  };
    
  return (
    <div className="modal-header bg-[#48CAE4] text-white rounded-tl-xl rounded-tr-xl px-4 py-2 flex justify-between items-center relative">
      {/* Passa a prop onLanguageChange para o LanguageSelector */}
      <LanguageSelector onLanguageChange={onLanguageChange} />
      <Image src={logo} className="h-[3rem] w-[4rem] mr-10" alt="Logo da Salesforce" />
      <button onClick={handleClose} className='close cursor-pointer h-5 w-10 fill-white'>
      <IoCloseSharp className='text-2xl' />
      </button>
    </div>
  );
};

export default MenuHeader;

