import React, { useState } from "react";

import Icon from '@mui/material/Icon';
import CloseIcon from '@mui/icons-material/Close';

import InputText from '../InputText'
import Dropdown from '../Dropdown'

import './index.css'; // Importar estilos
import TextArea from "../TextArea";

const modal = () => {
    return (
        <div id="modal-blur">
            <div id="modal-container">
                <div id="modal-header">
                    <div id="modal-title">Cadastro de Equipamento</div>
                    <div>
                        <Icon><CloseIcon/></Icon>
                    </div>
                </div>
                <div id="modal-content">
                    <form className="modal-form">
                        <InputText label='Código' description='Obrigatório' identifier='codEquipament' required={true} />
                        <InputText label='Código' description='Obrigatório' identifier='codEquipament' required={true} />
                        <Dropdown label='Categoria' description='Obrigatório' identifier='codEquipament' required={true} data={[{value: 1, description: 'Teclado'}]} />
                        <TextArea label='Categoria' description='Obrigatório' identifier='codEquipament' required={true} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default modal