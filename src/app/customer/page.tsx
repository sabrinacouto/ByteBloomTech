'use client'
import Image from "next/image";
import { useEffect } from "react";
import mascoteCustomer from "../../../public/assets/image 40.png";
import avaliacao from "../../../public/assets/image 41.png";
import { useImageContext } from "@/contexts/imageContext/_app";
import ClientesTable from "@/components/ClientsTable/ClientesTable";
import { useLeitorDeTela } from "@/contexts/speechContext/_app";
import LeitorDeTela from "@/components/Leitor/leitor";


const Customer = () => {
  const { showImages } = useImageContext();
  const { ativo, setarTexto } = useLeitorDeTela();

  const textoParaLeitura = `
    Saiba o que nossos clientes têm a dizer. Na jornada pela acessibilidade, cada feedback é um farol que ilumina nosso caminho. Ouvir é o primeiro passo para transformar barreiras em pontes de inclusão. Feedbacks:

    Carla Rodrigues: "A experiência de usuário neste site é excepcionalmente suave e amigável para pessoas com deficiência."

    João Mazzucato: “Estou impressionado com a facilidade de uso do menu de acessibilidade.”

    Gustavo Silva: "A acessibilidade deste site não é apenas um recurso adicional, é parte integrante da sua essência.”

    Larissa Ferreira: "O layout simples e as opções de personalização fazem deste site um verdadeiro oásis de acessibilidade. Parabéns pela atenção aos detalhes!"
  `;

  useEffect(() => {
    if (ativo) {
      setarTexto(textoParaLeitura);
    }
  }, [ativo, setarTexto]);

  return (

 
    <section id="customer" className="py-10 md:py-20">

      <div className='flex justify-center mb-[5rem]'>
      <ClientesTable/>
      </div>
  
      <div className="section flex justify-center">
 
        <div className="card flex flex-col md:flex-row items-center w-[20rem] h-auto sm:w-[60rem] sm:h-[25rem] justify-center bg-white shadow-lg border rounded-lg mt-5 md:mt-0 p-6 md:p-10">
          <div className="text md:mr-10">
            <h1 className="gradient text-lg sm:text-xl md:text-3xl mb-5 w-[15rem] sm:w-[30rem] md:mb-10">
              Saiba o que nossos clientes têm a dizer
            </h1>
            <p className="texto w-[15rem] sm:w-[30rem] text-[16px] sm:text-[18px] md:text-[20px] mb-10 md:mb-0">
              Na jornada pela acessibilidade, cada feedback é um farol que ilumina nosso caminho. Ouvir é o primeiro passo para transformar barreiras em pontes de inclusão.
            </p>
          </div>
          <div className="imageCustomer h-[24rem] hidden md:flex justify-center mt-5 md:mt-0">
          {showImages &&<Image
              src={mascoteCustomer}
              alt="Mascote da Salesforce com as mãos erguidas ao lado de duas árvores"
              className="imagem w-[15rem] sm:w-[20rem]"
            />}
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
          <div className="card rounded-lg bg-white shadow-lg w-full md:max-w-[30rem] h-auto flex flex-col items-center justify-center text-center p-6 md:p-8">
            <h2 className="gradient text-lg sm:text-xl md:text-2xl mb-5">
              Carla Rodrigues
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-5">
              "A experiência de usuário neste site é excepcionalmente suave e amigável para pessoas com deficiência."
            </p>
            {showImages &&<Image
              src={avaliacao}
              alt="5 estrelas azuis"
              className="mx-auto w-[10rem]"
            />}
          </div>
          <div className="card rounded-lg bg-white shadow-lg w-full md:max-w-[30rem] h-auto flex flex-col items-center justify-center text-center p-6 md:p-8">
            <h2 className="gradient text-lg sm:text-xl md:text-2xl mb-5">
              João Mazzucato
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-5">
              “Estou impressionado com a facilidade de uso do menu de acessibilidade.”
            </p>
            {showImages &&<Image
              src={avaliacao}
              alt="5 estrelas azuis"
              className="mx-auto w-[10rem]"
            />}
          </div>

          <div className="card rounded-lg bg-white shadow-lg w-full md:max-w-[30rem] h-auto flex flex-col items-center justify-center text-center p-6 md:p-8">
            <h2 className="gradient text-lg sm:text-xl md:text-2xl mb-5">
            Gustavo Silva
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-5">
            "A acessibilidade deste site não é apenas um recurso adicional, é parte integrante da sua essência.”
            </p>
            {showImages &&<Image
              src={avaliacao}
              alt="5 estrelas azuis"
              className="mx-auto w-[10rem]"
            />}
          </div>
  
          <div className="card rounded-lg bg-white shadow-lg w-full md:max-w-[30rem] h-auto flex flex-col items-center justify-center text-center p-6 md:p-8">
            <h2 className="gradient text-lg sm:text-xl md:text-2xl mb-5">
            Larissa Ferreira
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-5">
            "O layout simples e as opções de personalização fazem deste site um verdadeiro oásis de acessibilidade. Parabéns pela atenção aos detalhes!"
            </p>
            {showImages &&<Image
              src={avaliacao}
              alt="5 estrelas azuis"
              className="mx-auto w-[10rem]"
            />}
          </div>
        </div>
        <LeitorDeTela/>
      </div>
    </section>

  );
};

export default Customer;