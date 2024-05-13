'use client'
import Image from 'next/image';
import img1 from "../../../public/assets/360.png"
import img2 from "../../../public/assets/products.png"
import img3 from "../../../public/assets/image 24.png"
import img4 from "../../../public/assets/image 25.png"
import img5 from "../../../public/assets/image 26.png"
import { useImageContext } from "@/contexts/imageContext/_app";

const Produtos = () => {
  const { showImages } = useImageContext();
    return (
     
        <section id="produtos">
          <div className="products flex flex-col md:flex-row p-10 justify-center  items-center">
            <div className="elementos md:mb-0">
              <Image
                src={img1}
                alt="Logo do produto Customer 360"
                className='w-[20rem] h-auto'
              

              />
              <h1 className="text-[#003652] text-3xl font-bold max-w-[637px] pb-2 pt-2">
                Agora todo mundo é um Einstein.
              </h1>
              <p className="max-w-[35rem] text-lg lg:text-xl mt-5">
                O Customer 360, todo o nosso portfólio de produtos, ajuda você a
                se conectar com seus clientes de uma maneira totalmente nova. Agora
                todos — suas equipes de marketing, vendas, e-commerce, serviços de
                atendimento ao cliente, TI e dados — podem trabalhar de maneira
                mais inteligente e ser mais produtivos com dados conectados, IA
                confiável e o CRM de IA nº 1.
              </p>
            </div>
            <div className="image">
              <Image
                src={img2}
                alt="Um homem segurando um tablet ao lado do mascote da Salesforce"
                className='w-[33rem] h-auto'
              />
            </div>
          </div>
  
          <div className="flex justify-center items-center text-center">
            <h2 className="text-[#304B51] font-bold mt-10 text-3xl">
              Dados + IA + CRM.
            </h2>
          </div>
          <div className="flex justify-center items-center text-center">
  <h2 className="text-[#304B51] font-bold text-3xl">
    Essa é a genialidade do Customer 360.
  </h2>
</div>

<div className="flex justify-center flex-col md:flex-row mt-[70px] mb-[70px]">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
    <div className="bg-white w-full h-auto md:max-w-md rounded-xl mx-auto overflow-hidden shadow-md p-6">
      <Image
        src= {img3}
        alt="Homem mexendo no seu computador. Ao fundo, tem ilustrações de gráficos de dados"
        className="w-full h-auto rounded-t-xl"
      />
      <h3 className="text-[#0077B6] font-bold text-lg md:text-xl mt-5">
        Dados conectados levam a experiências perfeitas para o cliente.
      </h3>
      <p className="text-base md:text-lg mt-2 md:mt-5 text-[#153D45]">
        Conecte todos os seus dados para dar a cada equipe uma visão completa
        de cada cliente. Com seus dados unidos, suas equipes podem oferecer a
        experiência certa, na hora certa e sempre.
      </p>
    </div>
    <div className="bg-white w-full md:max-w-md h-auto rounded-xl mx-auto overflow-hidden shadow-md p-6 ">
      <Image
        src={img4}
        alt="Einsten, mascote da Salesforce, ao lado da ferramenta Einsten da Salesforce."
        className="w-full h-auto rounded-t-xl"
      />
      <h3 className="text-[#0077B6] font-bold text-lg md:text-xl mt-5">
        Capacite as equipes com IA confiável em uma plataforma segura e
        escalonável.
      </h3>
      <p className="text-base md:text-lg h-auto mt-2 md:mt-5 text-[#153D45]">
        Com IA desenvolvida para CRM, suas equipes estão mais produtivas do que
        nunca, gerando conteúdo otimizado para desempenho imediato. E com o
        Einstein Trust Layer, seus dados estarão sempre privados e protegidos.
      </p>
    </div>
    <div className="bg-white w-full md:max-w-md h-auto rounded-xl mx-auto overflow-hidden shadow-md p-6 m">
      <Image
        src={img5}
        alt="Várias pessoas dentro de um balão, ilustrando diferentes equipes."
        className="w-full h-auto rounded-t-xl"
      />
      <h3 className="text-[#0077B6] font-bold text-lg md:text-xl mt-5">
        As equipes podem fazer mais e mais rápido quando têm a ferramenta certa
        para cada trabalho.
      </h3>
      <p className="text-base md:text-lg mt-2 md:mt-5 text-[#153D45]">
        Quer potencializar os resultados e encantar os clientes? Mantenha tudo
        avançando cada vez mais, unindo todas as suas equipes em torno de seus
        clientes com os melhores aplicativos da categoria desenvolvidos pelo
        Einstein.
      </p>
    </div>
  </div>
</div>
    </section>
    );
  };
  
  export default Produtos;