import React, { useState } from 'react';
import { useTableList } from '../../providers/TableListProvider'

import InputDate from "../DateInput";
import TextArea from "../TextArea";

// import { useLoan } from '../../providers/LoanContext';
// import { usePatrimony } from '../../providers/PatrimonyContext';
// import { useEquipament } from '../../providers/EquipamentsContext';
// import { usePeople } from '../..providers/PeopleContext';

const LoanModal = () => {

//Serialization dos dados necessário para a page
  // const equipamentsContext = useEquipament();
  // const loansContext = useLoan();
  // const patrimonysContext = usePatrimony();
  // const peopleContext = usePeople();
    const tableListContext = useTableList();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

  // function serializeEquipaments() {
  //   return equipamentsContext.read.equipaments.map(equipament => {
  //     return {
  //       Modelo: equipament.model,
  //       Fabricante: equipament.manufacturer,
  //     }
  //   })
  // }

  // function serializePatrimony() {
  //   return patrimonysContext.read.patrimonys.map(patrimony => {
  //     return {
  //       Patrimônio: patrimony.code,
  //       Equipamento: patrimony.equipament.id,
  //     }
  //   })
  // }

  // function serializeLoan() {
  //   return loansContext.read.loans.map(loan => {
  //     return {
  //       Patrimônio: loan.patrimony.code,
  //       Status: loan.status,
  //     }
  //   })
  // }

  // function serializePeople() {
  //   return peopleContext.read.people.map(person => {
  //     return {
  //       Nome: person.first_name + ' ' + person.surname,
  //       CPF: person.cpf,
  //       Endereço: person.address,
  //       Telefone: person.phone,
  //       Email: person.email,
  //       Data de Nasicmento: person.birthday,
  //     }
  //   })
  // }

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
        action(formData);
    }

    function handleCloseButton() {
        tableListContext.write.showCreateModal(false)
    }

    return (
        <>
            <form className="modal-form" onSubmit={handleSubmit}>
                {/* <Dropdown
                    label="Patrimônio"
                    description="Obrigatório"
                    identifier="patrimonyId"
                    required={true}
                    data={serializePatrimonys()}
                /> */}
                {/* <Dropdown
                    label="Responsável"
                    description="Obrigatório"
                    identifier="personId"
                    required={true}
                    data={serializePeople()}
                /> */}
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
                    value={startDate}
                    onChange={handleStartDateChange}
                    required={true}
                />
                <InputDate
                    label="Data de Devolução"
                    description="Obrigatório"
                    identifier="endDate"
                    value={endDate}
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