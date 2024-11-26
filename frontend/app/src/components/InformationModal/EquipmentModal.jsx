import React, { useState, useEffect } from "react";
import InputText from "../InputText";
import Dropdown from "../Dropdown";
import TextArea from "../TextArea";
import { useCategory } from "../../providers/CategoryContext";
import { useEquipament } from "../../providers/EquipamentsContext";
import { useTableList } from "../../providers/TableListProvider";

const EquipmentModal = ({ id }) => {
    const tableListContext = useTableList();
    const categoriesContext = useCategory();
    const equipamentsContext = useEquipament();
    const [equipamentData, setEquipamentData] = useState(null);
    const [isEditable, setIsEditable] = useState(false);

    // Atualizado para usar `getEquipamentById`
    useEffect(() => {
        async function fetchEquipament() {
            const equipament = await equipamentsContext.read.getEquipamentById(id);
            if (equipament) {
                setEquipamentData(equipament);
            }
        }
        if (id) {
            fetchEquipament();
        }
    }, [id, equipamentsContext.read]);

    function serializeCategories() {
        return categoriesContext.read.categories.map((category) => {
            return {
                value: category.id,
                description: category.name,
            };
        });
    }

    function verifySerialNumber(serialNumber) {
        const existingSerialNumbers = equipamentsContext.read.equipaments.map(equipament => equipament.serialNumber);

        if (serialNumber === equipamentData.serialNumber) {
            return false;
        }
        return existingSerialNumbers.includes(serialNumber);
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

        // Chama a função de update
        equipamentsContext.write.updatesEquipament(id, formData);
        alert(`Equipamento atualizado com sucesso. \n\nDados Principais: \n\nEquipamento:"${event.target.model.value}" \n\nNúmero de Série: "${verifySN}"`);
        handleCloseButton()

    }

    function handleCloseButton() {
        tableListContext.write.showInfoModal(false);
    }

    if (!equipamentData) {
        return <p>Carregando...</p>;
    }

    return (
        <>
            <form className="modal-form" onSubmit={handleSubmit}>
                <InputText
                    label="Modelo"
                    identifier="model"
                    required={true}
                    defaultValue={equipamentData.model}
                    disabled={!isEditable}
                />
                <InputText
                    label="Número de Série"
                    identifier="serialNumber"
                    defaultValue={equipamentData.serialNumber}
                    disabled={!isEditable}
                />
                <InputText
                    label="Fabricante"
                    identifier="manufacturer"
                    required={true}
                    defaultValue={equipamentData.manufacturer}
                    disabled={!isEditable}
                />
                <Dropdown
                    label="Categoria"
                    identifier="categoryId"
                    required={true}
                    data={serializeCategories()}
                    defaultValue={equipamentData.category.id}
                    disabled={!isEditable}
                />
                <TextArea
                    label="Descrição"
                    identifier="description"
                    required={false}
                    defaultValue={equipamentData.description}
                    disabled={!isEditable}
                />
                <div>
                    
                </div>
                <div id="modal-footer">
                    <button type="button" className="btn btn-danger" onClick={handleCloseButton}>
                        Cancelar
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Atualizar
                    </button>
                    <input
                        type="checkbox"
                        checked={isEditable}
                        onChange={() => setIsEditable((prev) => !prev)}
                        className="form-check-input border-primary"
                        id="enabledEdit"
                    />
                    <label>
                        Habilitar Edição
                    </label>
                </div>
            </form>
        </>
    );
};

export default EquipmentModal;