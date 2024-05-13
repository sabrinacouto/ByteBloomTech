'use client'
import Image from "next/image";
import Mascotes from "@/components/Mascotes/mascotes";
import mascoteHome from "../../public/assets/mascotehome.png"
import { useImageContext } from "@/contexts/imageContext/_app";

export default function Home() {
  const { showImages } = useImageContext();
  return (
    <section id="home">
    <div className="section flex justify-center">
      <div className="flex items-center justify-center  flex-col sm:flex-row w-full shadow-xl inset-y-3">
        <div className="text">
          <h1 className="gradient text-2xl sm:text-5xl max-w-[600px] w-full">
            Introducing Salesforce Accessibility
          </h1>
         <a href="#acessibilidade"> <button type="button" naria-label="Clique aqui pra saber mais" className="bg-[#194750] w-[111px] h-[41px] rounded-md text-white mt-10">Saiba mais</button></a>
          <div>
            <p className="text-lg max-w-[700px] mt-5 mr-2 w-full py-3 hidden sm:block">
              Proporcione uma experiência inclusiva e acessível a todos os usuários!
            </p>
          </div>
          <div>
            <p className=" text-lg max-w-[700px] w-full mr-2 hidden sm:block">
              Nosso site apresenta um inovador Menu de Acessibilidade, permitindo que você ajuste o tamanho da fonte, escolha o idioma da página, ative leitores de tela, utilize opções de teclado e desfrute de recursos em linguagem de sinais.
            </p>
          </div>
          <div>
            <p className=" text-lg max-w-[700px] hidden sm:block w-full py-3">
              Valorizamos a diversidade e buscamos tornar a sua navegação mais fácil, independente das suas necessidades.
            </p>
          </div>
        </div>
        <div className="imageCustomer">
        {showImages && <Image
            src={mascoteHome}
            alt="Elefante segurando um computador."
            className="max-w-[300px] sm:max-w-[400px] w-full"
            priority
          />}
        </div>
      </div>
    </div>
    <div className="py-[100px]">
      <Mascotes />
    </div>
  </section>
   
  );
}
