import React, { useState } from "react";
import { useLocation  } from "react-router-dom";

import CloseIcon from '@mui/icons-material/Close';


import './index.css'; // Importar estilos

// import CategoryModal from '../CreateModal/CategoryModal';
import EquipmentModal from '../CreateModal/EquipmentModal';
import PatrimonyModal from '../CreateModal/PatrimonyModal';
import PersonModal from '../CreateModal/PersonModal';
import LoanModal from '../CreateModal/LoanModal';

import { useTableList } from '../../providers/TableListProvider'

const Modal = ({ modalTitle }) => {
    const location = useLocation();
    const tableListContext = useTableList();

    function handleCloseButton() {
        tableListContext.write.showCreateModal(false)
    }

    function renderForm() {
        switch (location.pathname) {
            // case '/categorias':
            //     return <CategoryModal />;
            case '/equipamentos':
                return <EquipmentModal />;
            case '/patrimonios':
                return <PatrimonyModal />;
            case '/pacientes':
                return <PersonModal />;
            case '/emprestimos':
                return <LoanModal />;
            default:
                return null;
        }
    }

    return (
        <div id="modal-blur">
            <div id="modal-container">
                <div id="modal-header">
                    <div id="modal-title">{modalTitle}</div>
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