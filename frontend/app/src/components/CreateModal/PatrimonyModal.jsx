import React, { useState } from "react";
import Dropdown from "../Dropdown";
import TextArea from "../TextArea";
import InputText from "../InputText";
import { useEquipament } from '../../providers/EquipamentsContext';
import { usePatrimony } from '../../providers/PatrimonyContext';
import { useTableList } from '../../providers/TableListProvider'

const PatrimonyModal = ({ action }) => {
    const tableListContext = useTableList();
    const equipamentsContext = useEquipament();
    const patrimonyContext = usePatrimony();

    function serializeEquipaments() {
        return equipamentsContext.read.equipaments.map(equipament => {
            return {
                value: equipament.id,
                description: `${equipament.model} - ${equipament.serialNumber}`,
            }
        })
    }
    
    function serializePatrimony() {
        return patrimonyContext.read.patrimonys.map(patrimony => {
            return{
                patrimonyId: patrimony.id,
                equipamentId: patrimony.equipament.id,
            }
        })
    }

    function availableEquipaments() {
        const allEquipaments = serializeEquipaments(); // Lista de todos os equipamentos
        const assignedEquipamentIds = serializePatrimony().map(patrimony => patrimony.equipamentId); // IDs de equipamentos atribuídos
    
        // Filtra equipamentos que não estão atribuídos a um patrimônio
        return allEquipaments.filter(equipament => !assignedEquipamentIds.includes(equipament.value));
    }

    

    function handleSubmit(event) {
        event.preventDefault();

        const verifyPatrimony = event.target.PatrimonyCode.value.trim();

        // Verifica se o número de série já existe
        if (verifyPatrimonyCode(verifyPatrimony)) {
            alert(`Erro: O número de patrimônio "${verifyPatrimony}" já está cadastrado!`);
            return;  // Impede o envio do formulário
        }

        const formData = {
            patrimonyCode: verifyPatrimony,
            equipamentId: event.target.equipamentId.value.trim(),
            description: event.target.description.value.trim(),
        };

        action(formData);
        alert(`Patrimônio cadastrado com sucesso. \n\nCódigo do Patrimônio Cadastrador:"${verifyPatrimony}" `);
        handleCloseButton();

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
                    data={availableEquipaments()}
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