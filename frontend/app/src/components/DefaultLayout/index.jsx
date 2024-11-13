import React from 'react';
import { Outlet } from 'react-router-dom'
import SideMenu from '../Sidebar'; // Importando o SideMenu do diretório components
import './index.css'; // Importar estilos

const BasicLayout = () => {
  return (
    <div className='container-fluid vh-100 overflow-hidden'>
      <div className='row h-100'>
        <div className='col-2 col-md-2 bg-light p-0' style={{ position: 'fixed', top: 0, left: 0, height: '100%', zIndex: 110}}>
          <SideMenu />
        </div>
        <div className='col offset-2 col-md-9' style={{ overflowY: 'auto', padding: '20px'}}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BasicLayout;