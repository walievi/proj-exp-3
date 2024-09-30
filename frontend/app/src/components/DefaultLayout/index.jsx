import React from 'react';
import { Outlet } from 'react-router-dom'
import SideMenu from '../Sidebar'; // Importando o SideMenu do diretório components
import './index.css'; // Importar estilos

const BasicLayout = () => {
  return (
    <div className='layout'>
      <div className='sidebar'>
        <SideMenu />
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
};

export default BasicLayout;