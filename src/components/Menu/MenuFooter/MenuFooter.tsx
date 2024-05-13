import { LuBadgeHelp } from "react-icons/lu";
import { PiHouse } from "react-icons/pi";
import { RiShutDownLine } from "react-icons/ri";


interface MenuFooterProps {
    resetMenu: () => void;
  }
  
  const MenuFooter: React.FC<MenuFooterProps> = ({ resetMenu }) => {
    return(
<div className="modal-footer card bg-white rounded-bl-xl border-t rounded-br-xl px-4 py-2">

    <div className="flex justify-between mb-4 ">

        <div className=" menu-footer flex-col flex bg-white w-[5rem] gap-1 hover:bg-gray-100 hover:rounded-lg cursor-pointer items-center">
        <PiHouse className=" text-3xl  react-icons"/>
        <p className=" menu-item text-[14px] ">Inicio</p>

        </div>

        <div className=" menu-footer flex-col cursor-pointer bg-white w-[5rem] gap-1 hover:bg-gray-100 hover:rounded-lg flex items-center ">
        <LuBadgeHelp className=" text-3xl react-icons" />
        <p className="menu-item text-[14px]">Ajuda</p>


        </div>

        <div className=" menu-footer flex-col cursor-pointer  bg-white w-[5rem] gap-1 hover:bg-gray-100 hover:rounded-lg flex items-center  " onClick={resetMenu}>
        <RiShutDownLine className=" text-3xl react-icons" />
        <p className=" menu-item text-[14px]">Desativar</p>
        </div>
    </div>

            <div className="flex-col flex items-center">
              <h3 className=" menu-item text-center text-xs gradient">ByteBloomTech</h3>
            </div>
         </div>
    )
}
export default MenuFooter;