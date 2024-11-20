import React, { useState } from 'react';
import BasicTable  from '../../components/TableList'; // Importando a Tabela base do diretório components
import './index.css'; // Importar estilos

import Modal from '../../components/CreateModal';
// import { usePeople } from '../..providers/PeopleContext';

const People = () => {
  const columns = ["Nome", "CPF", "Endereço", "Telefone", "Email"];

  //Serialization dos dados necessário para a page
  // const peopleContext = usePeople();

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

  //Funções de contagem de cadastros
  // function getTotalPeople() {
  //   return peopleContext.read.people.length;
  // }


  const data = [
    { Nome: "Fulao da Silva", CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    { Nome: "Maria Souza", CPF: "123.456.789-10", Endereço: "Rua das Flores, 123", Telefone: "(11)98765-4321", Email: "maria.souza@email.com" },
    { Nome: "João Pereira", CPF: "987.654.321-00", Endereço: "Avenida Paulista, 900", Telefone: "(21)98765-4321", Email: "joao.pereira@email.com" },
    { Nome: "Ana Costa", CPF: "555.666.777-88", Endereço: "Praça XV, 500", Telefone: "(31)98876-5432", Email: "ana.costa@email.com" },
    { Nome: "Carlos Silva", CPF: "222.333.444-55", Endereço: "Rua do Sol, 1000", Telefone: "(41)97766-1234", Email: "carlos.silva@email.com" },
    { Nome: "Fernanda Oliveira", CPF: "111.222.333-44", Endereço: "Rua do Porto, 200", Telefone: "(51)96677-2345", Email: "fernanda.oliveira@email.com" },
    { Nome: "Ricardo Lima", CPF: "444.555.666-77", Endereço: "Rua das Pedras, 300", Telefone: "(61)95566-9876", Email: "ricardo.lima@email.com" },
    { Nome: "Luciana Rocha", CPF: "777.888.999-00", Endereço: "Rua dos Lírios, 800", Telefone: "(71)94455-8765", Email: "luciana.rocha@email.com" },
    { Nome: "Pedro Alves", CPF: "333.444.555-66", Endereço: "Rua das Andorinhas, 1500", Telefone: "(81)93333-4444", Email: "pedro.alves@email.com" },
    { Nome: "Juliana Mendes", CPF: "666.777.888-99", Endereço: "Avenida Brasil, 150", Telefone: "(91)92222-5555", Email: "juliana.mendes@email.com" }
    
  ];

  return (
    <>
      <div className="equipment-container"> 
        <div className="count-equipment-container d-flex flex-row align-items-center p-3 gap-4 w-100" style={{ maxWidth: '1552px', height: '200px' }}>
          <div className="count-container d-flex flex-column align-items-start p-3 gap-3 w-25 h-25 h-100 bg-primary rounded">
            <div className="count-name-container fs-4 fw-normal text-white"> 
              Total
            </div>
            <div className="count-quantity-container fs-1 fw-bold d-flex align-items-end text-white">
              {/* {getTotalPeople)} */}
            </div>
          </div> 
        </div>

        <BasicTable 
          title="Pacientes"
          subtitle="Listagem de Pacientes" 
          columns={columns}
          data={data}
          // data={serializePeople()}
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