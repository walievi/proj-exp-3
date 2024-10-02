import React, { useState } from "react";

import { useNavigate  } from "react-router-dom";

import Icon from '@mui/material/Icon';
import CloseIcon from '@mui/icons-material/Close';

import './index.css'; // Importar estilos

import Button from "../Button";
import DialogModal from '../DialogModal'
import { useTableList } from '../../providers/TableListProvider'

const modal = ({modalTitle, modalForm, dialogModal}) => {
    const tableListContext = useTableList();
    const [showPosModal, setShowPosModal] = useState(false)
    const navigate = useNavigate()

    function handleCloseButton() {
        tableListContext.write.showCreateModal(false)
    }

    function handleSubmit(e) {
        setShowPosModal(true)
        e.preventDefault();
    }

    function handleCloseDialogModal() {
        setShowPosModal(false)
        handleCloseButton()
    }

    function handleConfirmationDialogModal() {
        setShowPosModal(false)
        handleCloseButton()
        navigate('/patrimonios')
        tableListContext.write.showCreateModal(true)
    }

    return (
        <>
        <div id="modal-blur">
            <div id="modal-container">
                <div id="modal-header">
                    <div id="modal-title">{modalTitle}</div>
                    <div id="modal-close">
                        <button type="button" onClick={handleCloseButton}><Icon><CloseIcon/></Icon></button>
                    </div>
                </div>
                <div id="modal-content">
                    <form className="modal-form" onSubmit={handleSubmit}>
                        {
                            modalForm.map(field => {
                               return (
                                <div key={field.id}>{field.field}</div>
                               )
                            })
                        }
                        <div id="modal-footer">
                            <Button text="Cancelar" opacity="70%" width="50%" type="button" onClick={handleCloseButton} />
                            <Button text="Cadastrar" opacity="100%" width="50%" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {
            showPosModal ? <DialogModal title={dialogModal.title} description={dialogModal.description} handleCancel={handleCloseDialogModal} handleConfirmation={handleConfirmationDialogModal} /> : null
        }
        </>
    )
}

export default modal