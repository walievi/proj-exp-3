import React from "react";
import InputTextMasked from "../InputTextMasked";
import InputText from "../InputText";
import InputDate from "../DateInput";
import Dropdown from "../Dropdown";
import { usePeople } from "../../providers/PeopleContext";

import { useTableList } from '../../providers/TableListProvider'

const PersonModal = ({ action }) => {

    const tableListContext = useTableList();
    const peopleContext = usePeople();

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
        return existingEmails.includes(email);
    }

    function verifyCPFData(CPF) {
        const existingCPFs = peopleContext.read.people.map(person => person.CPF);
        return existingCPFs.includes(CPF);
    }

    function verifyRGData(RG) {
        const existingRGs = peopleContext.read.people.map(person => person.RG);
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

        action(formData);

        alert(`Cadastro do paciente "${event.target.name.value}" criado com sucesso. 
            \n\nDados Principais:
            \n\nNome:"${event.target.name.value}" 
            \n\nCPF: "${verifyCPF}"
            \n\nRG: "${verifyRG}"
            \n\nEmail: "${verifyEmail}"
        `);
        handleCloseButton()
    }

    function handleCloseButton() {
        tableListContext.write.showCreateModal(false)
    }

    return (
        <>
            <form className="modal-form" onSubmit={handleSubmit}>
                <InputText
                    label="Nome"
                    identifier="name"
                    required={true}
                />
                <InputTextMasked
                    label="CPF"
                    identifier="cpf"
                    mask="999.999.999-99"
                    placeholder="000.000.000-00"
                    required={true}
                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                    title="Digite um CPF no formato 000.000.000-00"
                />
                <InputText
                    label="RG"
                    identifier="rg"
                    required={true}
                />
                <InputDate
                    label="Data de Nascimento"
                    identifier="birth_date"
                    required={true}
                />
                <InputText
                    label="Email"
                    identifier="email"
                    required={true}
                />
                <InputTextMasked
                    label="Telefone"
                    identifier="phone"
                    mask="(99) 99999-9999"
                    placeholder="(00) 00000-0000"
                    required={true}
                    pattern="\(\d{2}\)\s\d{4,5}-\d{4}"
                    title="Digite um telefone no formato (00) 00000-0000"
                />
                <Dropdown
                    label="Mãe"
                    identifier="mother_name"
                    required={true}
                    data={serializePeople()}
                />
                <Dropdown
                    label="Pai"
                    identifier="father_name"
                    required={true}
                    data={serializePeople()}
                />
                <Dropdown
                    label="Deficiente?"
                    identifier="is_disabled"
                    required={true}
                    data={[
                        { value: true, description: 'Sim' },
                        { value: false, description: 'Não' },
                    ]}
                />
                <InputText
                    label="Cartão SUS"
                    identifier="card_sus"
                    required={true}
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
                />
                <div id="modal-footer">
                    <button type="button" className="btn btn-danger" onClick={handleCloseButton}>
                        Cancelar
                    </button>
                    <button type="submit" className="btn btn-primary">Cadastrar</button>
                </div>
            </form>
        </>
    );
};

export default PersonModal;
