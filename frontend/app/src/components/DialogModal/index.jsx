import React from "react";

import './index.css'

import Button from "../Button";

import { Modal, Button as BootstrapButton, Form } from 'react-bootstrap';


const DialogModal = ({title, description, handleCancel, handleConfirmation}) => {

    return (
        <div id="modal-blur">
            <div id="modal-dialog-container">
                <div id="modal-dialog-header">
                   {title}
                </div>
                <div id="modal-dialog-content">
                    {description}
                </div>
                <div id="modal-dialog-footer">
                    <Button text="Continuar" opacity="100%" width="100%" type="button" onClick={handleConfirmation} />
                    <Button text="Cancelar" opacity="70%" width="100%" type="button" onClick={handleCancel} />
                </div>
            </div>
        </div>
    )
}

export default DialogModal