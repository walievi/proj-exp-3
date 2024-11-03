import React, { useState } from 'react';
import BasicTable  from '../../components/TableList'; // Importando a Tabela base do diretório components
import './index.css'; // Importar estilos

import Modal from '../../components/Modal'
import InputText from '../../components/InputText';
import TextArea from '../../components/TextArea';
// import { usePeople } from '../..providers/PeopleContext';

const Emprestimos = () => {
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
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" },
    {Nome: "Fulao da Silva" , CPF: "099.9xx.xxx-xx", Endereço: "Rua dos Bobos", Telefone: "(XX)XXXXX-XXXX", Email: "fulano@gmail.com" }
    
  ];
  const modalForm = [
    {
      id: 1,
      field: <InputText label='Nome' description='Obrigatório' identifier='patientName' required={true} data={[{value: 1, description: 'dd4ebb0d-2352-4105-b502-092bc9c2ac60'}, {value: 2, description: 'dd4ebb0d-2352-4105-b502-092bc9c2ac60'}]} />
    },
    {
      id: 2,
      field: <InputText label='Sobrenome' description='Obrigatório' identifier='patientSurname' required={true} data={[{value: 1, description: 'Juliana'}, {value: 2, description: 'William'}, {value: 3, description: 'Daniel'}]} />
    },
    {
      id: 4,
      field: <InputText label='CPF' description='Obrigatório' identifier='patientDocument' required={true} />
    },
    {
      id: 5,
      field: <InputText label='Data de Nascimento' description='Obrigatório' identifier='patientBirthday' required={true} />
    },
    {
      id: 6,
      field: <InputText label='Email' description='Obrigatório' identifier='patientEmail' required={true} />
    },
    {
       id: 7,
       field: <InputText label='Telefone' description='Obrigatório' identifier='patientPhone' required={true} />
    },
    {
       id: 8,
       field: <TextArea label='Observações' identifier='patientObservation' required={false} />
    }
  ]

  return (
    <>
    <div className="equipment-container">
        
        <div className="count-equipment-container">
          <div className="count-container">
            <div className="count-name-container"> 
              Total Empréstimos
            </div>
            <div className="count-quantity-container">
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
              modalForm={modalForm} 
              // action={peopleContext.write.people} 
            />
          }
        />
    </div>
    </>
  );
};

export default Emprestimos;