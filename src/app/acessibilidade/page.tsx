import Image from "next/image"
import acessibilidadeMascote from "../../../public/assets/acessibilidade.png"
import iconeAcessibilidade from "../../../public/assets/ÍconeAcessibilidade.png"
import aumentoFonte from "../../../public/assets/aumentofonte.png"
import libras from "../../../public/assets/libras.png"
import audioDescricao from "../../../public/assets/audio.png"
import daltonismo from "../../../public/assets/daltonismo.png"
import diminuirFont from "../../../public/assets/diminuirfonte.png"


const Acessibilidade = () =>{




    return(
  
    <section id ="acessibilidade">
      
      <div className = "flex flex-col md:flex-row justify-center items-center mt-10 px-[5rem] sm:px-[7rem] md:px-[17rem] shadow-xl inset-y-3">
        <div>
          <Image src = {acessibilidadeMascote} alt= "Urso da Salesforce acenando"/>
        </div>
      <div className="flex flex-col gap-4">
      <h1 className="gradient text-3xl sm:text-4xl md:text-5xl">Salesforce Acessibility</h1>
      <h2 className="gradient text-xl sm:text-2xl md:text-3xl">Acessibilidade para todos!</h2>
      <p className="mt-5 w-full sm:w-[35rem] text-xl">A acessibilidade não é um favor que fazemos, é um compromisso que assumimos.  Vamos trabalhar juntos para tornar a acessibilidade uma realidade para todos!</p>
    </div>
      </div>

      <div className="flex justify-center items-center text-center mt-10">
        <h1 className="gradient text-2xl sm:text-3xl md:text-4xl text-center w-[50rem] py-5">
        Veja como funciona nosso menu de acessiblidade!
        </h1>
      </div>

  <div className="flex flex-col md:flex-row justify-center items-center mt-10 px-4 sm:px-8 md:px-16">
  <div className="flex flex-col md:flex-row items-center bg-white rounded-xl w-full md:max-w-[50rem] h-auto md:h-[20rem]  gap-5 md:gap-10 pl-3 sm:pl-0">
    <div className="ml-10">
    <Image src={iconeAcessibilidade} className= "h-[13rem]"alt="Icone de Acessibilidade da Salesforce" />
    </div>
    <p className="w-full md:w-[25rem] text-xl text-[#003652] mt-5 md:mt-0">
      No canto superior direito da tela, você verá o ícone do nosso menu acessível. Basta dar um clique para que você visualize todas as ferramentas! Fácil, não é?
    </p>
  </div>
</div>

      <div className="flex justify-center items-center text-center mt-10">
        <h1 className="gradient text-2xl sm:text-3xl md:text-4xl text-center w-[50rem] py-10">
        Conheça as ferramentas do menu acessível da Salesforce
        </h1>
      </div>

      <div className="grids grids-cols-1 sm:grid-cols-2 md:grid-cols-3 flex flex-wrap mt-[9rem] justify-center items-center gap-[19rem] md:gap-[9rem]">
                    <div className="cards bg-white w-[25rem] h-[40rem] p-3 rounded-xl">
                    <Image src={aumentoFonte} alt="Icone do menu de aumento de fonte" />
                      <h2 className=" mt-5 text-xl md:text-2xl lg:text-3xl font-bold gradient my-[3rem]">Aumentar fonte</h2>  
                      <p className="mt-5 text-base md:text-lg lg:text-lg">
                      O menu Salesforce Acessibility possui uma ferramenta que aumenta fonte dos elementos da página. Com apenas um clique, os textos do site ficam maiores.
                      </p>
                    </div>

                    <div className="cards bg-white w-[25rem] h-[40rem] p-3 rounded-xl">
                      <Image src={libras} alt="Icone do menu para habilitar a ferramenta de Libras" />
                      <h2 className=" mt-5 text-xl md:text-2xl lg:text-3xl font-bold gradient my-[3rem]">Libras</h2>
                      <p className="mt-5 text-base md:text-lg lg:text-lg">A ferramenta de Libras vai habilitar o <span className ="text-[#2EA7BF] font-bold"> VLibras </span> uma aplicação de língua de sinais destinada às pessoas com deficiência auditiva.</p>
                    </div>
          
                    <div className="cards bg-white w-[25rem] h-[40rem] p-3 rounded-xl">
                      <Image src={audioDescricao} alt="Icone do menu para habilitar a audiodeescrição" />
                      <h2 className="mt-5 text-xl md:text-2xl lg:text-3xl gradient font-bold my-[3rem]">Audiodescrição</h2>
                      <p className="mt-5 text-base md:text-lg lg:text-lg">O menu Salesforce Acessibility disponibiliza a opção de ativar a audiodescrição para auxiliar pessoas com deficiência visual.</p>
                    </div>

                    <div className="cards bg-white w-[25rem] h-[40rem] p-3 rounded-xl">
                      <Image src={daltonismo} alt="Icone do menu para habilitar a ferramenta de auxilio para daltonismo" />
                      <h2 className="mt-5 text-xl md:text-2xl lg:text-3xl gradient font-bold my-[3rem]">Daltonismo</h2>
                      <p className="mt-5 text-base md:text-lg lg:text-lg">É possível alterar a cor dos elementos do site através dessa ferramenta destinada para pessoas com daltonismo. A cada clique, a tela mudará de cor de acordo com os tipos de daltonismo: protanopia, deuteranopia, acromatia e tritanopia.</p>
                    </div>

                    <div className="cards bg-white w-[25rem] h-[40rem] p-3 rounded-xl">
                      <Image src={diminuirFont} alt="Icone do menu para diminuir a fonte" />
                      <h2 className="mt-5 text-xl md:text-2xl lg:text-3xl gradient font-bold my-[3rem]">Diminuir fonte</h2>
                      <p className="mt-5 text-base md:text-base lg:text-lg">O menu Salesforce Acessibility possui uma ferramenta que diminui fonte dos elementos da página. Com apenas um clique, os textos do site ficam maiores.</p>
                    </div>


            
            
                  </div>
             

 
  </section>

    )
};
    

export default Acessibilidade;