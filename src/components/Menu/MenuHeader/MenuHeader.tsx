import React from 'react';
import Image from 'next/image';
import logo from "../../../../public/assets/logo.png"
import LanguageSelector from './LanguageSelector';

interface MenuHeaderProps {
  onClose: () => void;
}

const MenuHeader: React.FC<MenuHeaderProps> = ({ onClose}) => {
  const handleClose = () => {
    if (typeof onClose === 'function') {
      onClose();
    }
  };
    
  return (
    <div className="modal-header bg-[#48CAE4] text-white rounded-tl-xl rounded-tr-xl px-4 py-2 flex justify-between items-center relative">
      <LanguageSelector/>
      <Image src={logo} className="h-[3rem] w-[4rem] mr-10" alt="Logo da Salesforce" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='close cursor-pointer h-5 w-10 fill-white' onClick={handleClose}><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
    </div>
  );
};

export default MenuHeader;