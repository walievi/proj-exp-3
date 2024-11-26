import React, { useState, useEffect } from "react";
import TextArea from "../TextArea";
import InputDate from "../DateInput";
import Dropdown from "../Dropdown";
import { useTableList } from "../../providers/TableListProvider";
import { usePatrimony } from '../../providers/PatrimonyContext';
import { usePeople } from "../../providers/PeopleContext";


const LoanModal = ({ id }) => {
    const patrimonysContext = usePatrimony();
    const peopleContext = usePeople();
    const tableListContext = useTableList();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isEditable, setIsEditable] = useState(false);

    function serializePatrimony() {
        return patrimonysContext.read.patrimonys.map(patrimony => {
            return {
                value: patrimony.id,
                description: patrimony.patrimonyCode,
            }
        })
    }

    function serializePeople() {
        return peopleContext.read.people.map((person) => {
            return {
                value: person.id,
                description: person.name,

            };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        const formData = {
            patrimonyId: event.target.patrimonyId.value.trim(),
            personId: event.target.personId.value.trim(),
            startDate: event.target.startDate.value.trim(),
            endDate: event.target.endDate.value.trim(),
            comment: event.target.comment.value.trim(),
        };

        // Chama a função de update
        // equipamentsContext.write.updatesEquipament(id, formData);
        alert(`Cadastro do Empréstimo realizado com sucesso. 
            \n\nDados Principais:
            \n\nPatrimônio: "${event.target.patrimonyId.value.trim()}"
            \n\nData Inicial: "${event.target.startDate.value.trim()}"
            \n\nData Devolução: "${event.target.endDate.value.trim()}"
        `);
        handleCloseButton()
    }

    const handleStartDateChange = event => {
        const newStartDate = event.target.value;
        setStartDate(newStartDate);

        const newEndDate = new Date(newStartDate);
        newEndDate.setDate(newEndDate.getDate() + 14);
        setEndDate(newEndDate.toISOString().split('T') [0]);
    };


    function handleCloseButton() {
        tableListContext.write.showInfoModal(false);
    }


    return (
        <>
            <form className="modal-form" onSubmit={handleSubmit}>
            <Dropdown
                    label="Patrimônio"
                    description="Obrigatório"
                    identifier="patrimonyId"
                    required={true}
                    data={serializePatrimony()}
                    disabled={!isEditable}
                /> 
                <Dropdown
                    label="Responsável"
                    description="Obrigatório"
                    identifier="personId"
                    required={true}
                    data={serializePeople()}
                    disabled={!isEditable}
                />
                <TextArea
                    label="Descrição"
                    description="Opcional"
                    identifier="comment"
                    required={false}
                    disabled={!isEditable}
                />
                <InputDate
                    label="Data de Empréstimo"
                    description="Obrigatório"
                    identifier="startDate"
                    defaultValue={startDate}
                    onChange={handleStartDateChange}
                    required={true}
                    disabled={!isEditable}
                />
                <InputDate
                    label="Data de Devolução"
                    description="Obrigatório"
                    identifier="endDate"
                    defaultValue={endDate}
                    onChange={handleStartDateChange}
                    readOnly={true}
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

export default LoanModal;