import React, { useState } from "react";
import Dropdown from "../Dropdown";
import TextArea from "../TextArea";
import InputText from "../InputText";
import { useEquipament } from '../../providers/EquipamentsContext';
import { useTableList } from '../../providers/TableListProvider'

const PatrimonyModal = ({ action }) => {
    const tableListContext = useTableList();
    const equipamentsContext = useEquipament()

    function serializeEquipaments() {
        return equipamentsContext.read.equipaments.map(equipament => {
          return {
            value: equipament.id,
            description: `${equipament.model} - ${equipament.serialNumber}`,
          }
        })
      }

    function handleSubmit(event) {
        event.preventDefault();

        const formData = {
            patrimonyCode: event.target.patrimonyCode.value.trim(),
            equipamentId: event.target.equipamentId.value.trim(),
            description: event.target.description.value.trim(),
        };

        console.log(formData)
        action(formData);

    }

    function handleCloseButton() {
        tableListContext.write.showCreateModal(false)
    }

    return (
        <>
            <form className="modal-form" onSubmit={handleSubmit}>
                <InputText
                    label="Patrimônio"
                    description="Obrigatório"
                    identifier="patrimonyCode"
                    required={true}
                />
                <Dropdown
                    label="Equipamento"
                    description="Obrigatório"
                    identifier="equipamentId"
                    required={true}
                    data={serializeEquipaments()}
                />
                <TextArea
                    label="Descrição"
                    description="Opcional"
                    identifier="description"
                    required={false}
                />
                <div id="modal-footer">
                    <button type="button" className="btn btn-danger" onClick={handleCloseButton}>
                        Cancelar
                    </button>
                    <button type="submit" className="btn btn-primary">Cadastrar</button>
                </div>
            </form>
        </>
    )
}

export default PatrimonyModal;