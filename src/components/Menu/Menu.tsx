'use client'
import { useState, useEffect } from 'react';
import MenuHeader from './MenuHeader/MenuHeader';
import Image from 'next/image';
import MenuFooter from './MenuFooter/MenuFooter';
import iconeAcessibilidade from "../../../public/assets/ÍconeAcessibilidade.png"
import { LuImageOff } from "react-icons/lu";
import { useTextSize } from '@/contexts/textContext/_app';
import { useImageContext } from '@/contexts/imageContext/_app';
import { useDaltonism } from '@/contexts/daltonismContext/_app';
import { useDarkMode } from '@/contexts/contrastContext/_app';
import { Languages, MenuTexts } from '@/services/types';
import BodyModal from './Inicio/BodyModal';
import HelpModalBodyContent from './Ajuda/Help';


const Menu: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const {desativarTodasFuncoes} = useTextSize();
  const { showImages, toggleImages } = useImageContext();
  const {resetDaltonism} = useDaltonism();
  const {darkMode, toggleDarkMode } = useDarkMode();// Use o hook useContext para acessar o contexto DarkModeContext
  const [selectedLanguage, setSelectedLanguage] = useState<Languages>(Languages.pt);

  const handleLanguageChange = (language: Languages) => {
    setSelectedLanguage(language);
  };
  const [modalBodyContent, setModalBodyContent] = useState(<BodyModal selectedLanguage={selectedLanguage} /> );


  // Função para atualizar o conteúdo da modal-body quando o botão "Ajuda" é clicado
  const handleHelpButtonClick = () => {
    setModalBodyContent(<HelpModalBodyContent />);
  };
  // Função para atualizar o conteúdo da modal-body quando o botão "Inicio" é clicado
  const handleHomeButtonClick = () => {
    setModalBodyContent(<BodyModal selectedLanguage={selectedLanguage}  />);
  };

 

  const resetMenu = () => {
    // Verificar se as funções estão ativadas e desativá-las
    if (!showImages) toggleImages();
    desativarTodasFuncoes();  // Desativar todas as funções relacionadas ao tamanho de texto
    if (darkMode) toggleDarkMode(); // Desativar o modo escuro se estiver ativado
    resetDaltonism();
    // Você pode adicionar mais verificações aqui para desativar outras funções se necessário
  };
   // Adiciona a classe "dark-mode" ao body se darkMode for verdadeiro
   if (typeof document !== 'undefined') {
    if (darkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

}


  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    // Atualiza o conteúdo da modal-body quando a linguagem selecionada muda
    setModalBodyContent(<BodyModal selectedLanguage={selectedLanguage} />);
  }, [selectedLanguage]);


  return (
    <div className="relative">
    {!modalOpen && (
      <div>
        <Image
          src={iconeAcessibilidade}
          className="h-[3rem] w-[3rem] mx-2 fixed top-[30rem] right-0 flex items-center justify-center cursor-pointer"
          onClick={openModal}
          alt="Icone de Acessibilidade da Salesforce"
        />
      </div>
    )}

    {modalOpen && (
      <div className="modal-container fixed inset-0 flex items-center justify-end">
        <div className="modal-content bg-[#EDFAFC] rounded-xl">
          <MenuHeader onClose={closeModal} onLanguageChange={handleLanguageChange} /> 
          <div className="modal-body px-4 py-2">
            {modalBodyContent}
        
           
          </div>
          <MenuFooter resetMenu={resetMenu} onHelpButtonClick={handleHelpButtonClick} onHomeButtonClick={handleHomeButtonClick} />
        </div>
      </div>
    )}
  </div>
  ); 
}; 

export default Menu;
