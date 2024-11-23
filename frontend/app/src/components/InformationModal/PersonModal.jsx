import React, { useState, useEffect } from "react";
import InputTextMasked from "../InputTextMasked";
import InputText from "../InputText";
import InputDate from "../DateInput";
import Dropdown from "../Dropdown";
import TextArea from "../TextArea";
import { usePeople } from "../../providers/PeopleContext";
import { useTableList } from "../../providers/TableListProvider";

const PersonModal = ({ id }) => {
    const tableListContext = useTableList();
    const peopleContext = usePeople();
    const [personData, setPersonData] = useState(null);
    const [isEditable, setIsEditable] = useState(false);

    // Atualizado para usar `getPersonById`
    useEffect(() => {
        async function fetchPerson() {
            const person = await peopleContext.read.getPersonById(id);
            if (person) {
                setPersonData(person);
            }
        }
        if (id) {
            fetchPerson();
        }
    }, [id, peopleContext.read]);


    // function verifySerialNumber(serialNumber) {
    //     const existingSerialNumbers = equipamentsContext.read.equipaments.map(equipament => equipament.serialNumber);
    //     return existingSerialNumbers.includes(serialNumber);
    // }

    // function handleSubmit(event) {
    //     event.preventDefault();

    //     const verifySN = event.target.serialNumber.value.trim();

    //     // Verifica se o número de série já existe
    //     if (verifySerialNumber(verifySN)) {
    //         alert(`Erro: O número de série "${verifySN}" já está cadastrado!`);
    //         return;  // Impede o envio do formulário
    //     }

    //     const formData = {
    //         model: event.target.model.value.trim(),
    //         serialNumber: verifySN,
    //         manufacturer: event.target.manufacturer.value.trim(),
    //         categoryId: event.target.categoryId.value.trim(),
    //         description: event.target.description.value.trim(),
    //     };

    //     // Chama a função de update
    //     equipamentsContext.write.updatesEquipament(id, formData);
    //     alert(`Equipamento atualizado com sucesso. \n\nDados Principais: \n\nEquipamento:"${event.target.model.value}" \n\nNúmero de Série: "${verifySN}"`);
    //     handleCloseButton()

    // }

    function handleCloseButton() {
        tableListContext.write.showInfoModal(false);
    }

    if (!personData) {
        return <p>Carregando...</p>;
    }

    return (
        <>
            <form className="modal-form" >
                <InputText
                    label="Nome"
                    identifier="name"
                    required={true}
                    defaultValue={personData.name}
                    disabled={!isEditable}
                />
                <InputTextMasked
                    label="CPF"
                    identifier="cpf"
                    mask="999.999.999-99"
                    placeholder="000.000.000-00"
                    required={true}
                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                    title="Digite um CPF no formato 000.000.000-00"
                    defaultValue={personData.cpf}
                    disabled={!isEditable}
                />
                <InputText
                    label="RG"
                    identifier="rg"
                    required={true}
                    defaultValue={personData.rg}
                    disabled={!isEditable}
                />
                <InputDate
                    label="Data de Nascimento"
                    identifier="birth_date"
                    required={true}
                    defaultValue={personData.birth_date}
                    disabled={!isEditable}
                />
                <InputText
                    label="Email"
                    identifier="email"
                    required={true}
                    defaultValue={personData.email}
                    disabled={!isEditable}
                />
                <InputTextMasked
                    label="Telefone"
                    identifier="phone"
                    mask="(99) 99999-9999"
                    placeholder="(00) 00000-0000"
                    required={true}
                    pattern="\(\d{2}\)\s\d{4,5}-\d{4}"
                    title="Digite um telefone no formato (00) 00000-0000"
                    defaultValue={personData.phone}
                    disabled={!isEditable}
                />
                <InputText
                    label="Cartão SUS"
                    identifier="card_sus"
                    required={true}
                    defaultValue={personData.card_sus}
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

export default PersonModal;