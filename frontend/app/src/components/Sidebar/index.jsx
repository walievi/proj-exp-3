import React, { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import './index.css';

import Icon from '@mui/material/Icon';
import { FaEdit } from "react-icons/fa";
import { PiPulseBold } from "react-icons/pi";
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

const SideMenu = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const menuItems = [
    { path: '/dashboard', label: '     Dashboard', icon: <PiPulseBold /> },
    { path: '/', label: '     Equipamentos', icon: <Inventory2OutlinedIcon /> },
    { path: '/patrimonios', label: '     Patrimônios', icon: <Inventory2OutlinedIcon /> },
    { path: '/emprestimos', label: '     Empréstimos', icon: <Inventory2OutlinedIcon /> },
    { path: '/pacientes', label: '     Pacientes', icon: <SupervisedUserCircleIcon /> },
    { path: '/relatorios', label: '     Relatórios', icon: <TrendingUpIcon /> },
    { path: '/configuracoes', label: '     Configurações', icon: <SettingsOutlinedIcon /> },
  ];

  return (
    <div className="container-sidebar">
      <div className="logo">
        <h2>Sistema CFA/CRAs</h2>
      </div>
      <div className="content-sidebar">
        <nav>
          <ul className="sidebar-items">
            {menuItems.map((item) => (
              <li
                key={item.path}
                className={`navlink ${activePath === item.path ? 'selected' : ''}`} // Garantir que a expressão é sempre uma string
              >
                <NavLink to={item.path} onClick={() => setActivePath(item.path)}>
                  <Icon fontSize="medium">{item.icon}</Icon>
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer-sidebar">
        <div className="profile-block">
          <div className='profile-avatar'>
            <Icon fontSize='large'><AccountCircleIcon className="profile-icon" /> </Icon>
          </div>
          <div className="profile-info">
            <div className="profile-name">Usuário</div>
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
