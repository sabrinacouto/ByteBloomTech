'use client'
import Image from "next/image"
import acessibilidadeMascote from "../../../public/assets/acessibilidade.png"
import iconeAcessibilidade from "../../../public/assets/ÍconeAcessibilidade.png"
import { FaEye } from "react-icons/fa"; 
import { FaHands } from "react-icons/fa6";
import { AiTwotoneSound } from "react-icons/ai";
import { MdUpgrade } from "react-icons/md";
import { MdOutlineInvertColors } from "react-icons/md";
import { LuImageOff } from "react-icons/lu";
import { useImageContext } from "@/contexts/imageContext/_app";


const Acessibilidade = () =>{
  const { showImages } = useImageContext();



    return(
  
    <section id ="acessibilidade" className="my-[5rem]">
      
      <div className = "flex flex-col md:flex-row justify-center items-center mt-10 px-[5rem] sm:px-[7rem] md:px-[17rem] shadow-xl inset-y-3">
        <div>
        {showImages &&<Image src = {acessibilidadeMascote} alt= "Urso da Salesforce acenando"/>}
        </div>
      <div className="flex flex-col gap-4">
      <h1 className="gradient text-3xl sm:text-4xl md:text-5xl">Salesforce Acessibility</h1>
      <h2 className="gradient text-xl sm:text-2xl md:text-3xl">Acessibilidade para todos!</h2>
      <p className="mt-5 w-full sm:w-[35rem] text-xl">A acessibilidade não é um favor que fazemos, é um compromisso que assumimos.  Vamos trabalhar juntos para tornar a acessibilidade uma realidade para todos!</p>
    </div>
      </div>

      <div className="flex justify-center items-center text-center">
        <h1 className="gradient text-2xl sm:text-3xl md:text-4xl text-center w-[50rem] py-10">
        Conheça as ferramentas do menu acessível da Salesforce
        </h1>
      </div>

      <div className="grids grids-cols-1 sm:grid-cols-2 md:grid-cols-3 flex flex-wrap justify-center items-center gap-8">
                    <div className="card bg-white w-[20rem] h-[20rem] p-3 rounded-xl shadow-xl">
                    <div className="flex items-center">
                      <MdUpgrade className=" text-blue-950 text-2xl mb-7 mr-2 "/>
                      <h2 className="text-xl md:text-2xl lg:text-3xl gradient font-bold mt-5 mb-[3rem]">Aumento de fonte</h2>
                      </div>
                      <p className="text-base md:text-lg lg:text-lg">
                      Possuímos uma ferramenta que aumenta fonte dos elementos da página. Com apenas um clique, os textos do site ficam maiores.
                      </p>
                    </div>

                    <div className="card bg-white w-[20rem] h-[20rem] p-3 rounded-xl shadow-xl">
                    <div className="flex items-center">
                      <FaHands className=" text-blue-950 *:text-2xl mb-7 mr-3 "/>
                      <h2 className="text-xl md:text-2xl lg:text-3xl gradient font-bold mt-5 mb-[3rem]"> Libras</h2>
                      </div>
                      <p className=" text-base md:text-lg lg:text-lg">A ferramenta de Libras vai habilitar o <span className ="text-[#2EA7BF] font-bold"> VLibras </span> uma aplicação de língua de sinais destinada às pessoas com deficiência auditiva.</p>
                    </div>
          
                    <div className="card bg-white w-[20rem] h-[20rem] p-3 rounded-xl shadow-xl">
                    <div className="flex items-center">
                      <AiTwotoneSound className="text-black text-2xl mb-7 mr-3 "/>
                      <h2 className="text-xl md:text-2xl lg:text-3xl gradient font-bold mt-5 mb-[3rem]"> Audiodescrição</h2>
                      </div>
                      <p className=" text-base md:text-lg lg:text-lg">O menu Salesforce Acessibility disponibiliza a opção de ativar a audiodescrição para auxiliar pessoas com deficiência visual.</p>
                    </div>

                    <div className="card bg-white w-[20rem] h-[20rem] p-3 rounded-xl shadow-xl">
                      <div className="flex items-center">
                      <FaEye className="text-blue-950 text-2xl mb-7 mr-3 "/>
                      <h2 className="text-xl md:text-2xl lg:text-3xl gradient font-bold mt-5 mb-[3rem]"> Daltonismo</h2>
                      </div>
                      <p className="text-base md:text-lg lg:text-lg"> A cada clique, a tela mudará de cor de acordo com os tipos de daltonismo: protanopia, deuteranopia, acromatia e tritanopia.</p>
                    </div>

                    <div className="card bg-white w-[20rem] h-[20rem] p-3 rounded-xl shadow-xl">
                    <div className="flex items-center">
                      <LuImageOff className=" text-blue-950 text-xl mb-7 mr-2 "/>
                      <h2 className="text-xl md:text-2xl lg:text-3xl gradient font-bold mt-5 mb-[3rem]">Desativar Imagens</h2>
                      </div>
                  
                
                  <p className="text-base md:text-lg lg:text-lg">Ao clicar no botão de desativar imagens, você pode remover as imagens de todo o site!</p>
                </div>

                <div className="card bg-white w-[20rem] h-[20rem] p-3 rounded-xl shadow-xl">
                <div className="flex items-center">
                      <MdOutlineInvertColors className=" text-blue-950 text-xl mb-7 mr-2 "/>
                      <h2 className="text-xl md:text-2xl lg:text-3xl gradient font-bold mt-5 mb-[3rem]">Alterar constraste</h2>
                      </div>
                  <p className="text-base md:text-lg lg:text-lg">Essa funcionalide altera o contraste do site, deixando-o no dark mode.</p>
                </div>

    
                  </div>
             

 
  </section>

    )
};
    

export default Acessibilidade;