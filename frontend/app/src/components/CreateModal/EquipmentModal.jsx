import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputText from "../InputText";
import Dropdown from "../Dropdown";
import TextArea from "../TextArea";
import DialogModal from "../DialogModal";
import { useCategory } from '../../providers/CategoryContext';
import { useTableList } from '../../providers/TableListProvider'



const EquipmentModal = () => {
    const [showPosModal, setShowPosModal] = useState(false);
    const tableListContext = useTableList();
    const categoriesContext = useCategory()
    const navigate = useNavigate();

    function serializeCategories() {
        return categoriesContext.read.categories.map(category => {
          return {
            value: category.id,
            description: category.name
          }
        })
      }

    function handleSubmit(event) {
        event.preventDefault();

        const formData = {
            model: event.target.model.value.trim(),
            // serialNumber: event.target.serialNumber.value.trim(),
            manufacturer: event.target.manufacturer.value.trim(),
            categoryId: event.target.categoryId.value.trim(),
            description: event.target.description.value.trim(),
        };
        action(formData);
        setShowPosModal(true);
    }

    function handleCloseButton() {
        tableListContext.write.showCreateModal(false)
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
            <form className="modal-form" onSubmit={handleSubmit}>
                <InputText
                    label="Modelo"
                    description="Obrigatório"
                    identifier="model"
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
    )
}

export default EquipmentModal;