import logo from "../../../public/assets/logo.png"
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";


const Footer = () =>{
    return(

        <footer className=" box-footer bg-[#0077B6]">
        <div className="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:px-6">
          <div className="grid grid-cols-1 gap-10 lg:gap-[16rem] lg:grid-cols-3">
            <div className="">
            <Image src={logo} className="mr-5 h-[4rem] w-auto" alt="logo" />
              <h4 className="max-w-xs mt-4 text-sm text-white">
              Entre em contato 0800 891 1887
              </h4>
              <div className="flex mt-8 space-x-4 text-gray-600">
                <a className="hover:opacity-75" href="https://www.facebook.com/salesforce/?locale=pt_BR" target="_blank" rel="noreferrer" title = "Facebook">
                <FaFacebookSquare className="text-white text-2xl" />
                </a>
                <a className="hover:opacity-75" href="https://twitter.com/salesforce" target="_blank" rel="noreferrer" title="X">
                <FaSquareXTwitter className="text-white text-2xl" />
                </a>
                <a className="hover:opacity-75" href="https://www.linkedin.com/company/salesforce/" target="_blank" rel="noreferrer"  title="Linkedin">
                  <IoLogoLinkedin className="text-white text-2xl" />
                </a>
                <a className="hover:opacity-75" href="https://www.instagram.com/salesforcebrasil/" target="_blank" rel="noreferrer" title="Instagram">
                 <FaSquareInstagram  className="text-white text-2xl" />
                </a>
                <a className="hover:opacity-75" href="https://github.com/sabrinacouto/ByteBloomTech" target="_blank" rel="noreferrer" title="Link do Repositório Github">
                 <FaGithubSquare  className="text-white text-2xl" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-9 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
          
              <div>
                <p className="font-medium text-white">
                Empresa
                </p>
                <nav className="flex flex-col mt-4 text-white">
                <ul className="space-y-2">
                  <li className="hover:opacity-75"><Link href="/produtos"> Produtos </Link></li>
                  <li className="hover:opacity-75"><Link href="/acessibilidade"> Acessibilidade </Link></li>
                  <li className="hover:opacity-75"><Link href="/customer"> Customer</Link></li>
                  <li className="hover:opacity-75"><Link href="/empresa"> Empresa</Link></li>
                 </ul>
                </nav>
              </div>
              
              <div>
                <p className="font-medium text-white">
                 Links populares
                </p>
                <nav className="flex flex-col mt-4 text-white">
                  <ul className="space-y-2 ">
                    <li> <a className="hover:opacity-75" href="https://www.salesforce.com/video/"> Salesforce LIVE </a></li>
                    <li><a className="hover:opacity-75" href="https://www.salesforce.com/br/crm/" > CRM Software </a></li>
                    <li><a className="hover:opacity-75" href="https://www.salesforce.com/br/solutions/mobile/overview/" > Salesforce Mobile </a></li>
                    <li><a className="hover:opacity-75" href="https://www.salesforce.com/dreamforce/" > Dreamforce </a></li>
                  </ul>
                </nav>
              </div>
              <div>
                <p className="font-medium text-white">
                 Equipe
                </p>
                <nav className="flex flex-col mt-4  text-white">
                 <ul className="space-y-2">
                  <li className="hover:opacity-75">Juliana Moreira</li>
                  <li className="hover:opacity-75">Kevin Nobre</li>
                  <li className="hover:opacity-75">Sabrina Couto</li>
                 </ul>
                  
                </nav>
              </div>
            </div>
          </div>
          <h4 className="mt-8 text-white">
          © { new Date().getFullYear()} - 
           <b> ByteBloomTech </b> - Todos os direitos reservados
          </h4>
        </div>
      </footer>

    )
}

export default Footer;