import Image from "next/image";
import image from "../../../public/assets/empresa.png";
import imageHistoria from "../../../public/assets/historia.gif";
import confianca from "../../../public/assets/confianca.png";
import sucesso from "../../../public/assets/sucesso.png";
import inovacao from "../../../public/assets/inovacao.png";
import igualdade from "../../../public/assets/igualdade.png";
import sustentabilidade from "../../../public/assets/sustentabilidade.png";


const Empresa = () => {
  return (

    <section id="empresa">
      <div className="flex justify-center my-6 items-center text-center mb-5">
        <h1 className="gradient text-4xl sm:text-5xl md:text-4xl">Sobre a Salesforce</h1>
      </div>
      <div className="products mt-[5rem] flex flex-col md:flex-row md:px-[50px] justify-center items-center">
        <div className="card bg-white rounded-xl mr-10 p-6 md:p-10">
          <h1 className="title gradient text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold max-w-[637px] pb-3 sm:pb-5 pt-3 sm:pt-5">
            Nossa história
          </h1>
          <p className="max-w-[43rem] text-base sm:text-lg lg:text-xl">
            Em 1999, quatro fundadores da Salesforce, trabalhando lado a lado em um pequeno apartamento de São Francisco, lançaram um sistema de gerenciamento de relacionamento com o cliente (CRM) com uma abordagem inovadora. Todo o software e os dados críticos do cliente seriam hospedados na Internet e disponibilizados como um serviço de assinatura. Esse modelo pioneiro de “software como serviço”, ou SaaS, se espalhou rapidamente pelo setor de tecnologia.
          </p>
        </div>
        <div className="image hidden md:block">
          <Image
            src={imageHistoria}
            className="h-[20rem]"
            alt="Mascote da Salesforce cercado de borboletas"
          />
        </div>
        
      </div>
      <div> 
        <Image
        src={image}
        alt="Dois mascotes fazendo uma excursão na floresta"
        className="w-full lg:h-[50vh]"
      />
      </div>
     
  <div className="flex flex-col md:flex-row justify-center pt-0 px-[20px] md:px-[50px] box-border max-w-full text-left">
  <div className="flex-1 flex flex-col justify-center gap-[1rem] max-w-full">
    <div className="flex flex-col md:flex-row justify-center mb-6 max-w-full">
    <b className="gradient text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mt-8">Nossos valores essenciais</b>
    </div>

    <div className="flex flex-col md:flex-row justify-center max-w-full">
      <div className="flex flex-col items-start justify-start gap-3 sm:gap-4 ml-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-8 gradient">Confiança</h2>
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#002A40]">Agimos como consultores confiáveis.</h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[600px]">Conquistamos a confiança de nossos clientes, funcionários e família estendida por meio de transparência, segurança, conformidade, privacidade e desempenho. E fornecemos a infraestrutura mais confiável do setor.</p>
      </div>
      <div className="image md:order-first mt-4 md:mt-0">
        <Image src={confianca} alt="Grupo de mascotes da Salesforce trabalhando em conjunto contra uma colmeia de abelhas." className="w-[35rem] h-auto" />
      </div>
    </div>


    <div className="flex flex-col md:flex-row justify-center max-w-full">
      <div className="flex flex-col items-start justify-start gap-3 sm:gap-4 ml-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-8 gradient">Sucesso do Cliente</h2>
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold max-w-[600px] text-[#002A40]">Quando nossos clientes são bem-sucedidos, temos sucesso.</h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[600px]">Então, nós os defendemos para alcançar coisas extraordinárias. Inovamos e expandimos nossas ofertas de negócios para fornecer a todos os nossos acionistas novas vias para alcançar um sucesso cada vez maior.</p>
      </div>
      <div className="image md:order-first mt-4 md:mt-0">
        <Image src={sucesso} alt="Mascotes vencendo uma corrida." className="w-[35rem] h-auto" />
      </div>
    </div>


    <div className="flex flex-col md:flex-row justify-center max-w-full">
      <div className="flex flex-col items-start justify-start gap-3 sm:gap-4 ml-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-8 gradient">Inovação</h2>
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold max-w-[600px] text-[#002A40]">Inovamos juntos.</h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[600px]">As opiniões de nossos clientes nos ajudam a desenvolver produtos que possam atender melhor às necessidades de negócios. Os lançamentos contínuos de tecnologia e novas iniciativas proporcionam uma vantagem competitiva a nossos clientes.</p>
      </div>
      <div className="image md:order-first mt-4 md:mt-0">
        <Image src={inovacao} alt="Einsten numa sala de aula." className="w-[35rem] h-auto" />
      </div>
    </div>


    <div className="flex flex-col md:flex-row justify-center max-w-full">
      <div className="flex flex-col items-start justify-start gap-3 sm:gap-4 ml-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-8 gradient">Igualdade</h2>
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold max-w-[600px] text-[#002A40]">Todos merecem oportunidades iguais.</h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[600px]">Acreditamos que todos devem ser vistos, ouvidos, valorizados e capacitados para o sucesso. Ouvir perspectivas diversas impulsiona a inovação, aprofunda as conexões entre as pessoas e nos torna uma empresa melhor.</p>
      </div>
      <div className="image md:order-first mt-4 md:mt-0">
        <Image src={igualdade} alt="Mascotes medindo suas alturas." className="w-[35rem] h-auto" />
      </div>
    </div>

    <div className="flex flex-col md:flex-row justify-center max-w-full">
      <div className="flex flex-col items-start justify-start gap-3 sm:gap-4 ml-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-8 gradient">Sustentabilidade</h2>
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold max-w-[600px] text-[#002A40]">Nós conduzimos ousadamente para tratar da emergência do clima.</h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[600px]">Temos o compromisso de trazer todo o poder do Salesforce para acelerar a jornada do mundo rumo à emissão líquida zero.</p>
      </div>
      <div className="image md:order-first mt-4 md:mt-0">
        <Image src={sustentabilidade} alt="Mascostes rodeados de borboletas" className="w-[35rem] h-auto" />
      </div>
    </div>
    
  </div>
</div>



</section>
  );
};

export default Empresa;
