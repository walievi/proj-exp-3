import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputText from "../InputText";
import Dropdown from "../Dropdown";
import TextArea from "../TextArea";
import DialogModal from "../DialogModal";
import { useCategory } from '../../providers/CategoryContext';
import { useEquipament } from '../../providers/EquipamentsContext';  // Corrigido de 'useCategory' para 'useEquipament'
import { useTableList } from '../../providers/TableListProvider';

const EquipmentModal = ({ action, dialogModal }) => {
    const [showPosModal, setShowPosModal] = useState(false);
    const tableListContext = useTableList();
    const categoriesContext = useCategory();
    const equipamentsContext = useEquipament();  // Corrigido de 'useCategory' para 'useEquipament'
    const navigate = useNavigate();

    // Função para verificar se o número de série já existe
    function verifySerialNumber(serialNumber) {
        const existingSerialNumbers = equipamentsContext.read.equipaments.map(equipament => equipament.serialNumber);
        return existingSerialNumbers.includes(serialNumber);
    }

    function serializeCategories() {
        return categoriesContext.read.categories.map(category => {
            return {
                value: category.id,
                description: category.name
            }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        const verifySN = event.target.serialNumber.value.trim();

        // Verifica se o número de série já existe
        if (verifySerialNumber(verifySN)) {
            alert(`Erro: O número de série "${verifySN}" já está cadastrado!`);
            return;  // Impede o envio do formulário
        }

        const formData = {
            model: event.target.model.value.trim(),
            serialNumber: verifySN,
            manufacturer: event.target.manufacturer.value.trim(),
            categoryId: event.target.categoryId.value.trim(),
            description: event.target.description.value.trim(),
        };

        action(formData); // Chama a função de ação passada como prop\
        alert(`Equipamento cadastrado com sucesso. \n\nDados Principais: \n\nEquipamento:"${event.target.model.value}" \n\nNúmero de Série: "${verifySN}"`);
        setShowPosModal(true);
    }

    function handleCloseButton() {
        tableListContext.write.showCreateModal(false);
    }

    function handleCloseDialogModal() {
        setShowPosModal(false);
        handleCloseButton();
    }

    function handleConfirmationDialogModal() {
        setShowPosModal(false);
        handleCloseButton();
        navigate('/patrimonios');
        tableListContext.write.showCreateModal(true);
    }

    return (
        <>
            <form className="modal-form" onSubmit={handleSubmit}>
                <InputText
                    label="Equipamento"
                    description="Obrigatório"
                    identifier="model"
                    required={true}
                />
                <InputText
                    label="Número de Série"
                    description="Obrigatório"
                    identifier="serialNumber"
                    required={true}
                />
                <InputText
                    label="Fabricante"
                    description="Obrigatório"
                    identifier="manufacturer"
                    required={true}
                />
                <Dropdown
                    label="Categoria"
                    description="Obrigatório"
                    identifier="categoryId"
                    required={true}
                    data={serializeCategories()}
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
            {
                showPosModal ? <DialogModal title={dialogModal.title} description={dialogModal.description} handleCancel={handleCloseDialogModal} handleConfirmation={handleConfirmationDialogModal} /> : null
            }
        </>
    );
};

export default EquipmentModal;
