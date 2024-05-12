import Image from "next/image";

import mascoteCustomer from "../../../public/assets/image 40.png";
import avaliacao from "../../../public/assets/image 41.png";


const Customer = () => {

  return (
 
    <section id="customer" className="py-10 md:py-20">
      <div className="section flex justify-center">
        <div className="card flex flex-col md:flex-row items-center w-[20rem] h-[24rem] sm:w-[60rem] sm:h-[25rem] justify-center bg-white shadow-lg border rounded-lg mt-5 md:mt-0 p-6 md:p-10">
          <div className="text md:mr-10">
            <h1 className="gradient text-lg sm:text-xl md:text-3xl mb-5 w-[15rem] sm:w-[30rem] md:mb-10">
              Saiba o que nossos clientes têm a dizer
            </h1>
            <p className="texto w-[15rem] sm:w-[30rem] text-[16px] sm:text-[18px] md:text-[20px] mb-10 md:mb-0">
              Na jornada pela acessibilidade, cada feedback é um farol que ilumina nosso caminho. Ouvir é o primeiro passo para transformar barreiras em pontes de inclusão.
            </p>
          </div>
          <div className="imageCustomer h-[24rem] hidden md:flex justify-center mt-5 md:mt-0">
          <Image
              src={mascoteCustomer}
              alt="Mascote da Salesforce com as mãos erguidas ao lado de duas árvores"
              className="imagem w-[15rem] sm:w-[20rem]"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center text-center mt-10">
        <h1 className="gradient text-2xl sm:text-3xl md:text-4xl">
          Feedbacks
        </h1>
      </div>

      <div className="flex justify-center mt-10">
        <div className="cards grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div className="card bg-white shadow-lg w-full md:max-w-[30rem] h-auto flex flex-col items-center justify-center text-center p-6 md:p-8">
            <h2 className="gradient text-lg sm:text-xl md:text-2xl mb-5">
              Carla Rodrigues
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-5">
              "A experiência de usuário neste site é excepcionalmente suave e amigável para pessoas com deficiência."
            </p>
            <Image
              src={avaliacao}
              alt="5 estrelas azuis"
              className="mx-auto w-[10rem]"
            />
          </div>
          <div className="card bg-white shadow-lg w-full md:max-w-[30rem] h-auto flex flex-col items-center justify-center text-center p-6 md:p-8">
            <h2 className="gradient text-lg sm:text-xl md:text-2xl mb-5">
              João Mazzucato
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-5">
              “Estou impressionado com a facilidade de uso do menu de acessibilidade.”
            </p>
            <Image
              src={avaliacao}
              alt="5 estrelas azuis"
              className="mx-auto w-[10rem]"
            />
          </div>

          <div className="card bg-white shadow-lg w-full md:max-w-[30rem] h-auto flex flex-col items-center justify-center text-center p-6 md:p-8">
            <h2 className="gradient text-lg sm:text-xl md:text-2xl mb-5">
            Gustavo Silva
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-5">
            "A acessibilidade deste site não é apenas um recurso adicional, é parte integrante da sua essência.”
            </p>
            <Image
              src={avaliacao}
              alt="5 estrelas azuis"
              className="mx-auto w-[10rem]"
            />
          </div>
  
          <div className="card bg-white shadow-lg w-full md:max-w-[30rem] h-auto flex flex-col items-center justify-center text-center p-6 md:p-8">
            <h2 className="gradient text-lg sm:text-xl md:text-2xl mb-5">
            Larissa Ferreira
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-5">
            "O layout simples e as opções de personalização fazem deste site um verdadeiro oásis de acessibilidade. Parabéns pela atenção aos detalhes!"
            </p>
            <Image
              src={avaliacao}
              alt="5 estrelas azuis"
              className="mx-auto w-[10rem]"
            />
          </div>
        </div>
      </div>
    </section>

  );
};

export default Customer;