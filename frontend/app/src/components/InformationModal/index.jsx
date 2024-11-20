import React, { useState } from "react";
import { useLocation  } from "react-router-dom";

import CloseIcon from '@mui/icons-material/Close';


import './index.css'; // Importar estilos

// import CategoryModal from '../InformationModal/CategoryModal';
// import EquipmentModal from '../InformationModal/EquipmentModal';
// import PatrimonyModal from '../InformationModal/PatrimonyModal';
// import PersonModal from '../InformationModal/PersonModal';
// import LoanModal from '../InformationModal/LoanModal';

import { useTableList } from '../../providers/TableListProvider'

const Modal = ({ itemId, onClose }) => {
    console.log(itemId)
    const location = useLocation();
    const tableListContext = useTableList();

    function handleCloseButton() {
        onClose()
        tableListContext.write.showInfoModal(false)
    }

    function renderForm() {
        switch (location.pathname) {
            // case '/categorias':
            //     return <CategoryModal />;
            // case '/equipamentos':
            //     return <EquipmentModal id={itemId} />;
            // case '/patrimonios':
            //     return <PatrimonyModal id={itemId} />;
            // case '/pacientes':
            //     return <PersonModal id={itemId} />;
            // case '/emprestimos':
            //     return <LoanModal id={itemId} />;
            default:
                return null;
        }
    }

    return (
        <div id="modal-blur">
            <div id="modal-container">
                <div id="modal-header">
                    <div id="modal-title">Informações</div>
                    <div id="modal-close">
                        <button type="button" onClick={handleCloseButton}>
                            <CloseIcon />
                        </button>
                    </div>
                </div>
                <div id="modal-content">
                    {renderForm()}
                </div>
            </div>
        </div>
    );
};

export default Modal;