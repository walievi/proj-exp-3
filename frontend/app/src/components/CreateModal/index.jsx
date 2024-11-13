import React, { useState } from "react";
import { useNavigate, useLocation  } from "react-router-dom";

import CloseIcon from '@mui/icons-material/Close';

import './index.css'; // Importar estilos

import Button from "../Button";
import DialogModal from '../DialogModal'
import { useTableList } from '../../providers/TableListProvider'

const modal = ({modalTitle, modalForm, dialogModal, action}) => {
    const tableListContext = useTableList();
    const [showPosModal, setShowPosModal] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    function handleCloseButton() {
        tableListContext.write.showCreateModal(false)
    }

    function handleSubmit(event) {
        event.preventDefault();
   
        if (location.pathname === '/equipamentos') {

            action({
                model: event.target.model.value,
                // serialNumber: event.target.serialNumber.value,
                manufacturer: event.target.manufacturer.value,
                categoryId: event.target.categoryId.value,
                description: event.target.description.value
            })

            setShowPosModal(true)

        } else if (location.pathname === '/patrimonios') {

            action({
                EquipamentId: event.target.EquipamentId.value,
                categEquipament: event.target.categEquipament.value,
                descEquipament: event.target.descEquipament.value
            })

        } else if (location.pathname === '/emprestimos') {

            action({
                patrimonyId: event.target.patrimonyId.value,
                pacient: event.target.pacient.value,
                startDate: event.target.startDate.value,
                endDate: event.target.endDate.value,
                descLoan : event.target.descLoan.value
            })

        } else if (location.pathname === '/pessoas') {

            action({
                patientName: event.target.patientName.value,
                patientSurname: event.target.patientSurname.value,
                patientDocument: event.target.patientDocument.value,
                patientBirthday: event.target.patientBirthday.value,
                patientEmail: event.target.patientEmail.value,
                patientPhone: event.target.patientPhone.value,
                patientObservation: event.target.patientObservation.value
            })

        }
 
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
                        <button type="button" onClick={handleCloseButton}><CloseIcon/></button>
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