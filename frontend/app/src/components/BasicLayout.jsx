import React from 'react';
import SideMenu from './SideMenu.jsx'; // Importando o SideMenu do diretório components
import './BasicLayout.css'; // Importar estilos

// Importar as fontes utilizadas com Material UI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const BasicLayout = ({children}) => {
  return (
    <div className="page-container">
        <div className="sideMenu-container">
          <SideMenu /> {/* Chamando o SideMenu */}
          <div className="content">
            { children }
          </div>
        </div>
    </div>
  );
};

export default BasicLayout;