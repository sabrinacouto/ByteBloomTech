'use client'
import { useEffect } from 'react';
import { FaEye } from "react-icons/fa";
import { IoText } from "react-icons/io5";
import { AiTwotoneSound } from "react-icons/ai";
import { MdOutlineInvertColors } from "react-icons/md";
import { LuImageOff } from "react-icons/lu";
import { useTextSize } from '@/contexts/textContext/_app';
import { useImageContext } from '@/contexts/imageContext/_app';
import { useDaltonism } from '@/contexts/daltonismContext/_app';
import { useDarkMode } from '@/contexts/contrastContext/_app';
import { useLeitorDeTela } from '@/contexts/speechContext/_app';
import { Languages } from '@/services/types';
import { MenuTexts } from '@/services/types';

type MenuTextsMap = {
  [key in Languages]: MenuTexts;
};

const BodyModal: React.FC<{ selectedLanguage: Languages }> = ({ selectedLanguage }) => {
  const {increaseTextSize, desativarTodasFuncoes} = useTextSize();
  const { showImages, toggleImages } = useImageContext();
  const { toggleDaltonismType, daltonismText, resetDaltonism} = useDaltonism();
  const { darkMode, toggleDarkMode } = useDarkMode();// Use o hook useContext para acessar o contexto DarkModeContext
  const { ativarLeitor, desativarLeitor, ativo } = useLeitorDeTela();



  const menuTexts: MenuTextsMap = {
    [Languages.pt]: {
      accessibility: 'Acessibilidade',
      content: 'Conteúdo',
      textUp: 'Texto Maior',
      enableImages: 'Exibir imagens',
      disableImages: 'Desativar imagens',
      contrastOff: 'Alterar contraste',
      contrastOn: "Voltar ao padrão",
      enableAudio: 'Ativar audio',
      disableAudio: 'Desativar audio'
    },
    [Languages.en]: {
      accessibility: 'Accessibility',
      content: 'Content',
      textUp: 'Larger Text',
      enableImages: 'Enable images',
      disableImages: 'Disable images',
      contrastOff: 'Change contrast',
      contrastOn: "Vack to default",
      enableAudio: 'Enable audio',
      disableAudio: 'Disable audio',
    },
    [Languages.es]: {
      accessibility: 'Accesibilidad',
      content: 'Contenido',
      textUp: 'Texto Mayor',
      enableImages: 'Mostrar imágenes',
      disableImages: 'Ocultar imágenes',
      contrastOff: 'Cambiar el contraste',
      contrastOn: "Volver al predeterminado",
      enableAudio: 'Activar audio',
      disableAudio: 'Desactivar audio',
    },
  };

//Função que contola o botão de ativar o leitor de tela
const handleAtivarLeitor = () => {
  if (ativo) {
    desativarLeitor(); //Se estiver ativo, desativa o leitor.
  } else {
    ativarLeitor(); // caso não estiver, ativa o leitor
  }
};
//criando uma constante pra mudar o texto conforme o usuário clica no botão.
const imageButtonText = showImages ? menuTexts[selectedLanguage].disableImages : menuTexts[selectedLanguage].enableImages;
const audioButtonText = ativo ? menuTexts[selectedLanguage].disableAudio : menuTexts[selectedLanguage].enableAudio;

useEffect(() => {
  // Atualiza o componente quando o idioma mudar
  // Isso garantirá que os textos sejam atualizados quando o idioma mudar
}, [selectedLanguage]);
    return (
      <>
       <div className='h-[23rem]'>
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

                    <div className="border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-100 border w-[7rem] gap-3 h-[6rem] rounded-lg cursor-pointer flex justify-center items-center flex-col hover-effect" onClick={handleAtivarLeitor}>
                        <p>
                        <AiTwotoneSound className='text-2xl text-gray-500 hover:text-black icons' />
                        </p>
                        <p className=' menu-item text-xs font-bold text-gray-500 text-center'>
                        {audioButtonText}
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
      </>
    );
  };

  export default BodyModal;