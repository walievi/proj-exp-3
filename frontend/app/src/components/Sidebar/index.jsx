import React, { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import './index.css';

import Icon from '@mui/material/Icon';
import { FaEdit } from "react-icons/fa";
import { PiPulseBold } from "react-icons/pi";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
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
    { path: '/', label: '     Home', icon: <HomeOutlinedIcon /> },
    { path: '/equipamentos', label: '     Equipamentos', icon: <Inventory2OutlinedIcon /> },
    { path: '/patrimonios', label: '     Patrimônios', icon: <Inventory2OutlinedIcon /> },
    { path: '/emprestimos', label: '     Empréstimos', icon: <Inventory2OutlinedIcon /> },
    { path: '/pacientes', label: '     Pacientes', icon: <SupervisedUserCircleIcon /> },
    { path: '/relatorios', label: '     Relatórios', icon: <TrendingUpIcon /> },
  ];

  return (
    <div className="d-flex flex-column vh-100 bg-primary text-white p-3">
      <div className="text-center mb-4">
        <h2>Sistema CFA/CRAs</h2>
      </div>
        <nav className='flex-grow-1'>
          <ul className="nav flex-column">
            {menuItems.map((item) => (
              <li key={item.path} className="nav-item">
               <NavLink
                 to={item.path}
                 className={`nav-link d-flex align-items-center ${activePath === item.path ? 'active-link' : 'hover-effect'}`}
                 onClick={() => setActivePath(item.path)}
               >
                 {item.icon}
                 <span className="ms-2">{item.label}</span>
               </NavLink>
             </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto pt-3 border-top border-light text-center">
          <div className='d-flex flex-column align-items-center'>
            <Icon fontSize='large'><AccountCircleIcon className="mb-2" fontSize='large' /> </Icon>         
            <div className="profile-info">
              <div className="fw-bold">Usuário</div>
              <div className="text-muted">Role</div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SideMenu;
