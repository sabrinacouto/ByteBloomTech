'use client'
import { useState } from 'react';
import { LuBadgeHelp } from "react-icons/lu";
import { PiHouse } from "react-icons/pi";
import { RiShutDownLine } from "react-icons/ri";

interface MenuFooterProps {
  resetMenu: () => void;
  onHelpButtonClick: () => void;
  onHomeButtonClick: () => void;
}

const MenuFooter: React.FC<MenuFooterProps> = ({ resetMenu, onHelpButtonClick, onHomeButtonClick }) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleHomeClick = () => {
    setActiveButton('home');
    onHomeButtonClick();
  };

  const handleHelpClick = () => {
    setActiveButton('help');
    onHelpButtonClick();
  };

  return (
    <div className="modal-footer card bg-white rounded-bl-xl border-t rounded-br-xl px-4 py-2">
      <div className="flex justify-between mb-4">
        <div
          className={`menu-footer flex-col flex bg-white w-[5rem] gap-1 cursor-pointer items-center ${activeButton === 'home' ? 'text-[#48CAE4] underline' : 'hover:text-[#48CAE4] hover:underline'}`}
          onClick={handleHomeClick}
        >
          <PiHouse className="text-3xl react-icons" />
          <p className="menu-item text-[14px] text-center">Inicio</p>
        </div>

        <div
          className={`menu-footer flex-col cursor-pointer bg-white w-[5rem] gap-1 flex items-center ${activeButton === 'help' ? 'text-[#48CAE4] underline' : 'hover:text-[#48CAE4] hover:underline'}`}
          onClick={handleHelpClick}
        >
          <LuBadgeHelp className="text-3xl react-icons" />
          <p className="menu-item text-[14px]">Ajuda</p>
        </div>

        <div
          className="menu-footer reset flex-col cursor-pointer bg-white w-[5rem] gap-1 hover:bg-gray-100 hover:rounded-lg flex items-center"
          onClick={resetMenu}
        >
          <RiShutDownLine className="text-red-600 text-3xl reset-icon" />
          <p className="menu-item reset text-red-600 text-[14px]">Reset</p>
        </div>
      </div>

      <div className="flex-col flex items-center">
        <h3 className="menu-item text-center text-xs gradient">ByteBloomTech</h3>
      </div>
    </div>
  );
};

export default MenuFooter;
