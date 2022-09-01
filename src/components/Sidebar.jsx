import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-white dark:bg-gray-900 shadow-lg">
      <SidebarIcon icon={<FaFire size="28" />} text={"Homepage"} />
      <SidebarIcon icon={<BsPlus size="32" />} text={"Adicionar server"} />
      <SidebarIcon
        icon={<BsFillLightningFill size="20" />}
        text={"Comprar nitro"}
      />
      <SidebarIcon icon={<FaPoo size="20" />} text={"Reportar bug"} />
      <SidebarIcon icon={<BsGearFill size="22" />} text={"Configurações"} />
    </div>
  );
};

const SidebarIcon = ({ icon, text }) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

export default Sidebar;
