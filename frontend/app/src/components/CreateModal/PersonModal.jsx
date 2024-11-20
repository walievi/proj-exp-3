import React, { useState } from "react";
import InputText from "../InputText";
import TextArea from "../TextArea";
import InputTextMasked from '../InputTextMasked';
import InputDate from '../DateInput';

import { useTableList } from '../../providers/TableListProvider'

const PersonModal = ({ action }) => {

    const tableListContext = useTableList();

    function handleSubmit(event) {
        event.preventDefault();

        const formData = {
            patientName: event.target.patientName.value.trim(),
            patientSurname: event.target.patientSurname.value.trim(),
            patientDocument: event.target.patientDocument.value.trim(),
            patientAdress: event.target.patientAdress.value.trim(),
            patientBirthday: event.target.patientBirthday.value,
            patientEmail: event.target.patientEmail.value.trim(),
            patientPhone: event.target.patientPhone.value.trim(),
            patientObservation: event.target.patientObservation.value.trim(),
        };

        action(formData);
        setShowPosModal(true);
    }

    function handleCloseButton() {
        tableListContext.write.showCreateModal(false)
    }

    return (
        <>
            <form className="modal-form" onSubmit={handleSubmit}>
                <InputText
                    label="Nome"
                    description="Obrigatório"
                    identifier="patientName"
                    placeholder="Digite o primeiro nome"
                    required={true}
                />
                <InputText
                    label="Sobrenome"
                    description="Obrigatório"
                    identifier="patientSurname"
                    placeholder="Digite o sobrenome"
                    required={true}
                />

                <InputTextMasked
                    label="CPF"
                    description="Obrigatório"
                    identifier="patientDocument"
                    mask="999.999.999-99"
                    placeholder="000.000.000-00"
                    required={true}
                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                    title="Digite um CPF no formato 000.000.000-00"
                />
                <InputText
                    label="Endereço"
                    description="Obrigatório"
                    identifier="patientAdress"
                    placeholder="Digite o endereço"
                    required={true}
                />
                <InputTextMasked
                    label="CPF"
                    description="Obrigatório"
                    identifier="patientDocument"
                    mask="999.999.999-99"
                    placeholder="000.000.000-00"
                    required={true}
                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                    title="Digite um CPF no formato 000.000.000-00"
                />
                <InputDate
                    label="Data de Nascimento"
                    description="Obrigatório"
                    identifier="patientBirthday"
                    required={true}
                />
                <InputText
                    label="E-mail"
                    description="Opcional"
                    identifier="patientEmail"
                    type="email"
                    placeholder="exemplo@email.com"
                />
                <InputTextMasked
                    label="Telefone"
                    description="Obrigatório"
                    identifier="patientPhone"
                    mask="(99) 99999-9999"
                    placeholder="(00) 00000-0000"
                    required={true}
                    pattern="\(\d{2}\)\s\d{4,5}-\d{4}"
                    title="Digite um telefone no formato (00) 00000-0000"
                />
                <TextArea
                    label="Observações"
                    description="Opcional"
                    identifier="patientObservation"
                    placeholder="Adicione informações adicionais sobre a pessoa"
                />
                <div id="modal-footer">
                    <button type="button" className="btn btn-danger" onClick={handleCloseButton}>
                        Cancelar
                    </button>
                    <button type="submit" className="btn btn-primary">Cadastrar</button>
                </div>
            </form>
        </>
    );
};

export default PersonModal;
