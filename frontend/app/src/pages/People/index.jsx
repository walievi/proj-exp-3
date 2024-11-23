import React, { useState } from 'react';
import BasicTable  from '../../components/TableList'; // Importando a Tabela base do diretório components
import './index.css'; // Importar estilos

import Modal from '../../components/CreateModal';
import { usePeople } from '../../providers/PeopleContext';

const People = () => {
  const columns = ["Nome", "CPF", "Telefone", "Email", "Data de Nascimento"];

  // Serialization dos dados necessário para a page
  const peopleContext = usePeople();

  function serializePeople() {
    return peopleContext.read.people.map(people => {
      return {
        id: people.id,
        Nome: people.name,
        CPF: people.cpf,
        RG: people.rg,
        Telefone: people.phone,
        Email: people.email,
        "Data de Nasicmento": people.birth_date,
        Deficiente: people.is_disabled,
        "Cartão SUS": people.card_sus,
        Educação: people.education_level,
      }
    })
  }

  // Funções de contagem de cadastros
  function getTotalPeople() {
    return peopleContext.read.people.length;
  }

  return (
    <>
      <div className="equipment-container"> 
        <div className="count-equipment-container d-flex flex-row align-items-center p-3 gap-4 w-100" style={{ maxWidth: '1552px', height: '200px' }}>
          <div className="count-container d-flex flex-column align-items-start p-3 gap-3 w-25 h-25 h-100 bg-primary rounded">
            <div className="count-name-container fs-4 fw-normal text-white"> 
              Total
            </div>
            <div className="count-quantity-container fs-1 fw-bold d-flex align-items-end text-white">
              {getTotalPeople()}
            </div>
          </div> 
        </div>

        <BasicTable 
          title="Pacientes"
          subtitle="Listagem de Pacientes" 
          columns={columns}
          data={serializePeople()}
          createModal={
            <Modal 
              modalTitle="Cadastro de Pacientes"  
              // action={peopleContext.write.people} 
            />
          }
        />
    </div>
    </>
  );
};

export default People;