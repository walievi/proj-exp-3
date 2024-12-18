import React, { useState } from 'react';
import { useTableList } from '../../providers/TableListProvider'

import TextArea from "../TextArea";
import InputDate from "../DateInput";
import Dropdown from "../Dropdown";

// import { useLoan } from '../../providers/LoanContext';
import { usePatrimony } from '../../providers/PatrimonyContext';
import { usePeople } from "../../providers/PeopleContext";

const LoanModal = ({ action }) => {

//Serialization dos dados necessário para a page
  // const loansContext = useLoan();
    const patrimonysContext = usePatrimony();
    const peopleContext = usePeople();
    const tableListContext = useTableList();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

  function serializePatrimony() {
    return patrimonysContext.read.patrimonys.map(patrimony => {
      return {
        value: patrimony.id,
        description: patrimony.patrimonyCode,
      }
    })
  }

  // function serializeLoan() {
  //   return loansContext.read.loans.map(loan => {
  //     return {
  //       Patrimônio: loan.patrimony.code,
  //       Status: loan.status,
  //     }
  //   })
  // }

    function serializePeople() {
        return peopleContext.read.people.map((person) => {
            return {
                value: person.id,
                description: person.name,

            };
        });
    }

    const handleStartDateChange = event => {
        const newStartDate = event.target.value;
        setStartDate(newStartDate);

        const newEndDate = new Date(newStartDate);
        newEndDate.setDate(newEndDate.getDate() + 14);
        setEndDate(newEndDate.toISOString().split('T') [0]);
    };

    function handleSubmit(event) {
        event.preventDefault();

        const formData = {
            patrimonyId: event.target.patrimonyId.value.trim(),
            personId: event.target.personId.value.trim(),
            startDate: event.target.startDate.value.trim(),
            endDate: event.target.endDate.value.trim(),
            comment: event.target.comment.value.trim(),
        };
        // action(formData);

        alert(`Cadastro do Empréstimo realizado com sucesso. 
            \n\nDados Principais:
            \n\nPatrimônio: "${event.target.patrimonyId.value.trim()}"
            \n\nData Inicial: "${event.target.startDate.value.trim()}"
            \n\nData Devolução: "${event.target.endDate.value.trim()}"
        `);
        handleCloseButton()
    }

    function handleCloseButton() {
        tableListContext.write.showCreateModal(false)
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
                /> 
                <Dropdown
                    label="Responsável"
                    description="Obrigatório"
                    identifier="personId"
                    required={true}
                    data={serializePeople()}
                />
                <TextArea
                    label="Descrição"
                    description="Opcional"
                    identifier="comment"
                    required={false}
                />
                <InputDate
                    label="Data de Empréstimo"
                    description="Obrigatório"
                    identifier="startDate"
                    defaultValue={startDate}
                    onChange={handleStartDateChange}
                    required={true}
                />
                <InputDate
                    label="Data de Devolução"
                    description="Obrigatório"
                    identifier="endDate"
                    defaultValue={endDate}
                    onChange={handleStartDateChange}
                    readOnly={true}
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

export default LoanModal;