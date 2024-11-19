import React, { useState } from "react";
import Dropdown from "../Dropdown";
import TextArea from "../TextArea";
import { useEquipament } from '../../providers/EquipamentsContext';
import { useTableList } from '../../providers/TableListProvider'

const EquipmentModal = () => {
    const tableListContext = useTableList();
    const equipamentsContext = useEquipament()

    function serializeEquipaments() {
        return equipamentsContext.read.equipaments.map(equipament => {
          return {
            value: equipament.id,
            description: equipament.model,
            // numeroSerie: equipament.serialNumber,
          }
        })
      }

    function handleSubmit(event) {
        event.preventDefault();

        const formData = {
            equipmentId: event.target.equipmentId.value.trim(),
            description: event.target.description.value.trim(),
        };
        action(formData);

    }

    function handleCloseButton() {
        tableListContext.write.showCreateModal(false)
    }

    return (
        <>
            <form className="modal-form" onSubmit={handleSubmit}>
                <Dropdown
                    label="Equipamento"
                    description="Obrigatório"
                    identifier="equipmentId"
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

export default EquipmentModal;