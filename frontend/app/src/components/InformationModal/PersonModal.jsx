import React, { useState, useEffect } from "react";
import InputTextMasked from "../InputTextMasked";
import InputText from "../InputText";
import InputDate from "../DateInput";
import Dropdown from "../Dropdown";
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

    function serializePeople() {
        return peopleContext.read.people.map((person) => {
            return {
                value: person.id,
                description: person.name,

            };
        });
    }


    function verifyEmailData(email) {
        const existingEmails = peopleContext.read.people.map(person => person.email);

        if (email === personData.email) {
            return false;
        }
        return existingEmails.includes(email);
    }

    function verifyCPFData(CPF) {
        const existingCPFs = peopleContext.read.people.map(person => person.CPF);

        if (CPF === personData.CPF) {
            return false;
        }
        return existingCPFs.includes(CPF);
    }

    function verifyRGData(RG) {
        const existingRGs = peopleContext.read.people.map(person => person.RG);

        if (RG === personData.RG) {
            return false;
        }
        return existingRGs.includes(RG);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const verifyEmail = event.target.email.value.trim();
        const verifyCPF = event.target.cpf.value.trim();
        const verifyRG = event.target.rg.value.trim();

        // Verifica se o email já existe
        if (verifyEmailData(verifyEmail)) {
            alert(`Erro: O email "${verifyEmail}" já está cadastrado!`);
            return;  // Impede o envio do formulário
        }

        // Verifica se o email já existe
        if (verifyCPFData(verifyCPF)) {
            alert(`Erro: O CPF "${verifyCPF}" já está cadastrado!`);
            return;  // Impede o envio do formulário
        }

        // Verifica se o email já existe
        if (verifyRGData(verifyRG)) {
            alert(`Erro: O RG "${verifyRG}" já está cadastrado!`);
            return;  // Impede o envio do formulário
        }

        const formData = {
            name: event.target.name.value.trim(),
            cpf: verifyCPF,
            rg: verifyRG,
            email: verifyEmail,
            birth_date: event.target.birth_date.value.trim(),
            phone: event.target.phone.value.trim(),
            mother_name: event.target.mother_name.value.trim(),
            father_name: event.target.father_name.value.trim(),
            is_disabled: event.target.is_disabled.value.trim(),
            card_sus: event.target.card_sus.value.trim(),
            education_level: event.target.education_level.value.trim(),
        };

        // Chama a função de update
        peopleContext.write.updatesPeople(id, formData);
        console.log(formData)
        alert(`Cadastro do paciente "${event.target.name.value}" atualizado com sucesso. 
            \n\nDados Principais:
            \n\nNome:"${event.target.name.value}" 
            \n\nCPF: "${verifyCPF}"
            \n\nRG: "${verifyRG}"
            \n\nEmail: "${verifyEmail}"
        `);
        handleCloseButton()

    }

    function handleCloseButton() {
        tableListContext.write.showInfoModal(false);
    }

    if (!personData) {
        return <p>Carregando...</p>;
    }

    return (
        <>
            <form className="modal-form" onSubmit={handleSubmit}>
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
                <Dropdown
                    label="Mãe"
                    identifier="mother_name"
                    required={true}
                    data={serializePeople()}
                    defaultValue={personData.mother_id}
                    disabled={!isEditable}
                />
                <Dropdown
                    label="Pai"
                    identifier="father_name"
                    required={true}
                    data={serializePeople()}
                    defaultValue={personData.father_id}
                    disabled={!isEditable}
                />
                <Dropdown
                    label="Deficiente?"
                    identifier="is_disabled"
                    required={true}
                    data={[
                        { value: true, description: 'Sim' },
                        { value: false, description: 'Não' },
                    ]}
                    defaultValue={personData.is_disabled}
                    disabled={!isEditable}
                />
                <InputText
                    label="Cartão SUS"
                    identifier="card_sus"
                    required={true}
                    defaultValue={personData.card_sus}
                    disabled={!isEditable}
                />
                <Dropdown
                    label="Nível de Educação"
                    identifier="education_level"
                    required={true}
                    data={[
                        { value: 'Fundamental', description: 'Fundamental' },
                        { value: 'Médio', description: 'Médio' },
                        { value: 'Faculdade', description: 'Faculdade' }
                    ]}
                    defaultValue={personData.education_level}
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