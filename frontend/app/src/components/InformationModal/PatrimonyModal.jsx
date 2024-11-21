import React, { useState, useEffect } from "react";
import Dropdown from "../Dropdown";
import TextArea from "../TextArea";
import InputText from "../InputText";
import { useEquipament } from "../../providers/EquipamentsContext";
import { usePatrimony } from "../../providers/PatrimonyContext";
import { useTableList } from "../../providers/TableListProvider";

const PatrimonyModal = ({ id }) => {
    const tableListContext = useTableList();
    const equipamentsContext = useEquipament();
    const patrimonyContext = usePatrimony();
    const [patrimonyData, setPatrimonyData] = useState(null);
    const [isEditable, setIsEditable] = useState(false);

    // Atualizado para usar `getPatrimonyById`
    useEffect(() => {
        async function fetchPatrimony() {
            const patrimony = await patrimonyContext.read.getPatrimonyById(id);
            if (patrimony) {
                setPatrimonyData(patrimony);
            }
        }
        if (id) {
            fetchPatrimony();
        }
    }, [id, patrimonyContext.read]);

    function serializeEquipaments() {
        return equipamentsContext.read.equipaments.map((equipament) => {
            return {
                value: equipament.id,
                description: `${equipament.model} - ${equipament.serialNumber}`,
            };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        const formData = {
            patrimonyCode: event.target.patrimonyCode.value.trim(),
            equipamentId: event.target.equipamentId.value.trim(),
            description: event.target.description.value.trim(),
        };

        // Chama a função de update
        patrimonyContext.write.updatesPatrimony(id, formData);
    }

    function handleCloseButton() {
        tableListContext.write.showInfoModal(false);
    }

    if (!patrimonyData) {
        return <p>Carregando...</p>;
    }

    return (
        <>
            <form className="modal-form" onSubmit={handleSubmit}>
                <InputText
                    label="Patrimônio"
                    description="Obrigatório"
                    identifier="patrimonyCode"
                    required={true}
                    defaultValue={patrimonyData.patrimonyCode}
                    disabled={!isEditable}
                />
                <Dropdown
                    label="Equipamento"
                    identifier="equipamentId"
                    required={true}
                    data={serializeEquipaments()}
                    defaultValue={patrimonyData.equipament.id}
                    disabled={!isEditable}
                />
                <TextArea
                    label="Descrição"
                    identifier="description"
                    required={false}
                    defaultValue={patrimonyData.description}
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
                        />
                    <label>
                        Habilitar Edição
                    </label>
                </div>
            </form>
        </>
    );
};

export default PatrimonyModal;