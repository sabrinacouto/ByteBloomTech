import React, { useState } from 'react';
import icon from "../../../../public/assets/ÍconeAcessibilidade.png"
import { FaArrowRight } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const HelpModalBodyContent: React.FC = () => {
  const [liked, setLiked] = useState<boolean>(false);
  const [disliked, setDisliked] = useState<boolean>(false);

  const handleLikeClick = () => {
    if (!liked) {
      setLiked(true);
      setDisliked(false);
    }
  };

  const handleDislikeClick = () => {
    if (!disliked) {
      setLiked(false);
      setDisliked(true);
    }
  };

  return (
    <div className="h-[23rem] w-[22rem]">
       <div className="flex ml-3 mt-3 mb-2">
        <Image src = {icon} alt = "icone de acessibilidade" className="h-[3rem] w-auto"/>
        <p className="ml-2">Saiba mais sobre nossas ações para deixar este site mais acessível</p>
        </div>
        <hr/>
        <div className="my-2 flex justify-center items-center">
        <a className="text-[#0077B6] hover:underline"><Link href='/acessibilidade'> Saiba mais sobre as funcionalidades </Link></a>
        <FaArrowRight className="text-[#0077B6] ml-2"/>
        </div>

        <hr className="mt-3"/>


        <div className="mt-2">
        <h3 className=" font-bold text-gray-500">Ainda precisa de ajuda?</h3>
        <p>Se precisar de ajuda, entre em contato conosco:</p>
        <div className="flex">
        <BsFillTelephoneFill className="text-gray-500 mt-2"/>
        <h3 className="my-1 ml-2">0800 891 1887</h3>
        </div>
        </div>
        <hr/>

    
      <div className="mt-3">
        <h3 className="font-bold text-gray-500">O que achou da nossa ferramenta?</h3>
        <p className="text-medium text-gray-400">Avalie sua experiência</p>
        <div className="flex gap-5 mt-3">
          <AiOutlineLike
            className={`text-3xl ${liked ? 'text-green-500' : ''}`}
            onClick={handleLikeClick}
            style={{ cursor: liked ? 'not-allowed' : 'pointer' }}
          />
          <AiOutlineDislike
            className={`text-3xl ${disliked ? 'text-red-500' : ''}`}
            onClick={handleDislikeClick}
            style={{ cursor: disliked ? 'not-allowed' : 'pointer' }}
          />
        </div>
        {liked && <p className="text-green-500 mt-2">Obrigado pelo feedback positivo!</p>}
        {disliked && <p className="text-red-500 mt-2">Obrigado pelo feedback! Iremos melhorar! </p>}
      </div>
    </div>
  );
};

export default HelpModalBodyContent;
