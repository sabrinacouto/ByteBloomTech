'use client'
import { useState } from 'react';
import MenuHeader from './MenuHeader/MenuHeader';
import Image from 'next/image';
import MenuFooter from './MenuFooter/MenuFooter';
import iconeAcessibilidade from "../../../public/assets/ÍconeAcessibilidade.png"
import { FaEye } from "react-icons/fa";
import { IoText } from "react-icons/io5";
import { AiTwotoneSound } from "react-icons/ai";
import { MdOutlineInvertColors } from "react-icons/md";
import { LuImageOff } from "react-icons/lu";
import { useTextSize } from '@/contexts/textContext/TextSizeContext';
import { useImageContext } from '@/contexts/imageContext/_app';
import { useDaltonism } from '@/contexts/daltonismContext/DaltonismContext';
import { useDarkMode } from '@/contexts/contrastContext/DarkModeContext';
import { useLeitorDeTela } from '@/contexts/speechContext/_app';
import LanguageSelector from './MenuHeader/LanguageSelector';
import { Languages } from './MenuHeader/types'; 


// Defina uma interface para os textos do menu
interface MenuTexts {
  accessibility: string;
  content: string;
  textUp: string;
  disableImages:string;
  enableImages:string;
  contrastOff: string;
  contrastOn: string;
  audio: string;
}

type MenuTextsMap = {
  [key in Languages]: MenuTexts;
};



const Menu: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const {increaseTextSize, desativarTodasFuncoes} = useTextSize();
  const { showImages, toggleImages } = useImageContext();
  const { toggleDaltonismType, daltonismText, resetDaltonism} = useDaltonism();
  const { darkMode, toggleDarkMode } = useDarkMode();// Use o hook useContext para acessar o contexto DarkModeContext
  const { ativarLeitor } = useLeitorDeTela();
  const [selectedLanguage, setSelectedLanguage] = useState<Languages>(Languages.pt); 
  // Define o tipo de selectedLanguage como Languages.pt

  const handleLanguageChange = (language: Languages) => {
    setSelectedLanguage(language);
  };

  const menuTexts: MenuTextsMap = {
    [Languages.pt]: {
      accessibility: 'Acessibilidade',
      content: 'Conteúdo',
      textUp: 'Texto Maior',
      enableImages: 'Exibir imagens',
      disableImages: 'Desativar imagens',
      contrastOff: 'Alterar contraste',
      contrastOn: "Voltar ao padrão",
      audio: 'Ativar audio'
    },
    [Languages.en]: {
      accessibility: 'Accessibility',
      content: 'Content',
      textUp: 'Larger Text',
      enableImages: 'Enable images',
      disableImages: 'Disable images',
      contrastOff: 'Change contrast',
      contrastOn: "Vack to default",
      audio: 'Enable audio'
    },
    [Languages.es]: {
      accessibility: 'Accesibilidad',
      content: 'Contenido',
      textUp: 'Texto Mayor',
      enableImages: 'Mostrar imágenes',
      disableImages: 'Ocultar imágenes',
      contrastOff: 'Cambiar el contraste',
      contrastOn: "Volver al predeterminado",
      audio: "Activar audio"
    },
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

const imageButtonText = showImages ? menuTexts[selectedLanguage].disableImages : menuTexts[selectedLanguage].enableImages;

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  

  


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
            <h1 className='gradient text-xl text-center menu-item'>{menuTexts[selectedLanguage].accessibility}</h1>

            <h2 className='font-bold text-base text-gray-500 mt-5 menu-item'>{menuTexts[selectedLanguage].content}</h2>

            <div className='caixas flex-wrap gap-3 grid grid-cols-3 my-5'>

            <div className="border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-100 border w-[7rem] gap-3 h-[6rem] rounded-lg cursor-pointer flex justify-center items-center flex-col hover-effect" onClick={increaseTextSize}>
               <p className=''>
               <IoText className='text-2xl text-gray-500 hover:text-black icons' />
               </p>

                <p className=' menu-item text-xs font-bold text-gray-500'>{menuTexts[selectedLanguage].textUp}</p>
                    </div>

                    
                    <div className="border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-100 border w-[7rem] gap-3 h-[6rem] rounded-lg cursor-pointer flex justify-center items-center flex-col hover-effect"  onClick={toggleImages} >
                  
                        <p>
                        <LuImageOff className='text-2xl text-gray-500 hover:text-black icons' />
                        </p>
                        <p className='menu-item text-xs text-center font-bold text-gray-500 '>
                        {imageButtonText}
                       </p>
                    </div>

                    <div className="border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-100 border w-[7rem] gap-3 h-[6rem] rounded-lg cursor-pointer flex justify-center items-center flex-col hover-effect" onClick={ativarLeitor}>
                        <p>
                        <AiTwotoneSound className='text-2xl text-gray-500 hover:text-black icons' />
                        </p>
                        <p className=' menu-item text-xs font-bold text-gray-500 text-center'>
                        {menuTexts[selectedLanguage].audio}
                    </p>
                    </div>

                    </div>

                    <hr/>

                    <div className='caixas flex-wrap gap-3 flex items-center justify-center my-5'>


                    <div className="border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-100 border w-[7rem] gap-3 h-[6rem] rounded-lg cursor-pointer flex justify-center items-center flex-col hover-effect" onClick={toggleDaltonismType}>
                        <p>
                        <FaEye className='text-2xl text-gray-500 hover:text-black icons'/>
                        </p>
                        <p className=' menu-item text-xs font-bold text-gray-500'>{daltonismText}</p>
                    </div>

                    <div className="border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-100 border w-[7rem] gap-3 h-[6rem] rounded-lg cursor-pointer flex justify-center items-center flex-col hover-effect" onClick={toggleDarkMode}>
                        <p>
                        <MdOutlineInvertColors className='text-2xl text-gray-500 hover:text-black icons' />
                        </p>
                        <p className=' menu-item text-xs font-bold text-gray-500 text-center'> {darkMode ? menuTexts[selectedLanguage].contrastOn : menuTexts[selectedLanguage].contrastOff}</p>
                    </div>
                 </div>
          </div>
          <MenuFooter resetMenu={resetMenu}/>
        </div>
      </div>
    )}
  </div>
  ); 
}; 

export default Menu;
