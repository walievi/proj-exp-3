import React from 'react';
import './SideMenu.css'; // Importar estilos

//Icones Fa
import { FaEdit } from "react-icons/fa";
import { PiPulseBold } from "react-icons/pi";

//Icones de Material UI
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const SideMenu = () => {
  return (
    <div className="side-menu">
      <div className="logo">
        <h2>Sistema CFA/CRAs</h2>
      </div>
      <div className="side-menu-content">
        <nav>
          <ul>
            <li>
              <a href="/dashboard">
                <PiPulseBold />
                Dashboard
              </a>
            </li>
            <li>
              <a href="/equipamentos">
                <Inventory2OutlinedIcon />
                Equipamentos
              </a>
            </li>
            <li>
              <a href="/patrimonios">
                <Inventory2OutlinedIcon />
                 Patrimônios
              </a>
            </li>
            <li>
              <a href="/relatorios">
                <TrendingUpIcon />
                Relatórios
              </a>
            </li>
            <li>
              <a href="/configuracoes">
                  <SettingsOutlinedIcon />
                Configurações
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="profile">
        <div className="profile-block">
            <AccountCircleIcon classNane="profile-icon"/> 
            <div className="profile-info">
              <div className="profile-name">Usuario</div>
              <div className="profile-type">Role</div>
            </div>
        </div>
        <div>
          <button className="edit-profile">
            <FaEdit />
            Editar Perfil
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;