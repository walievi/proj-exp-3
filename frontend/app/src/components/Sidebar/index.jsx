import React from 'react';
import { Link } from 'react-router-dom'
import './index.css'; // Importar estilos

import Icon from '@mui/material/Icon';

//Icones Fa
import { FaEdit } from "react-icons/fa";
import { PiPulseBold } from "react-icons/pi";

//Icones de Material UI
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

const SideMenu = () => {

  return (
    <div className="container-sidebar">
      <div className="logo">
        <h2>Sistema CFA/CRAs</h2>
      </div>
      <div className="content-sidebar">
        <nav>
          <ul className="sidebar-items">
            <li className='navlink'>
              <div><Icon fontSize="medium"><PiPulseBold /></Icon></div>
              <div><Link to='/dashboard'>Dashboard</Link></div>
            </li>
            <li className='navlink'>
              <div><Icon fontSize="medium"><Inventory2OutlinedIcon /></Icon></div>
              <div><Link to='/'>Equipamentos</Link></div>
            </li>
            <li className='navlink'>
              <div><Icon fontSize="medium"><Inventory2OutlinedIcon /></Icon></div>
              <div><Link to='/patrimonios'>Patrimônios</Link></div>
            </li>
            <li className='navlink'>
              <div><Icon fontSize="medium"><Inventory2OutlinedIcon /></Icon></div>
              <div><Link to='/emprestimos'>Empréstimos</Link></div>
            </li>
            <li className='navlink'>
              <div><Icon fontSize="medium"><SupervisedUserCircleIcon /></Icon></div>
              <div><Link to='/emprestimos'>Pacientes</Link></div>
            </li>
            <li className='navlink'>
              <div><Icon fontSize='medium'><TrendingUpIcon /></Icon></div>
              <div><Link>Relatórios</Link></div>
            </li>
            <li className='navlink'>
              <div><Icon fontSize='medium'><SettingsOutlinedIcon /></Icon></div>
              <div><Link>Configurações</Link></div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer-sidebar">
        <div className="profile-block">
          <div className='profile-avatar'>
            <Icon fontSize='large'><AccountCircleIcon className="profile-icon"/> </Icon>
          </div>
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