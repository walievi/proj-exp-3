
import React, { useState } from 'react';
import BasicTable  from '../../components/TableList'; // Importando a Tabela base do diretório components
import './index.css'; // Importar estilos

import Modal from '../../components/CreateModal';
import InputText from '../../components/InputText';
import Dropdown from '../../components/Dropdown';
import TextArea from '../../components/TextArea';
// import { usePatrimony } from '../../providers/PatrimonyContext';
// import { useEquipament } from '../../providers/EquipamentsContext';

const Patrimonios = () => {
  const columns = ["Patrimônio", "Equipamento", "Disponível", "Status"];

  //Serialization dos dados necessário para a page
  // const equipamentsContext = useEquipament();
  // const patrimonysContext = usePatrimony();

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


  const data = [
    { Patrimônio: "dd4ebb0d-2352-4105-b502-092bc9c2ac60", Equipamento: "Cadeira de Rodas", Status: "Ativo" },
    { Patrimônio: "a1d5b2c9-134b-4c8d-9b82-ef4ac7c1a1c2", Equipamento: "Cadeira de Escritório", Status: "Inativo" },
    { Patrimônio: "b5ff4e00-2235-4d7f-a5b7-01babc8b4533", Equipamento: "Mesa de Escritório", Status: "Em Manutenção" },
    { Patrimônio: "fa3dc2d8-3af4-47a5-b1b1-e9f4bb234d10", Equipamento: "Computador", Status: "Ativo" },
    { Patrimônio: "c6aa5d22-16a7-42c8-a987-53c5f3b23445", Equipamento: "Impressora", Status: "Inativo" },
    { Patrimônio: "ee4dc340-46f4-441f-9654-a32bc6c4d1a3", Equipamento: "Projetor", Status: "Em Manutenção" },
    { Patrimônio: "dc0ebb0d-87e2-4f10-b4c1-092b9d2c3a60", Equipamento: "Ar Condicionado", Status: "Ativo" },
    { Patrimônio: "fb2a4d55-3456-4b0e-8c7f-d22bcb4f14a7", Equipamento: "Televisão", Status: "Inativo" },
    { Patrimônio: "ab2f2c11-33c7-4231-897d-f32a1c6b1f65", Equipamento: "Microondas", Status: "Ativo" },
    { Patrimônio: "c2bb0d1e-9d8e-4f2f-b6c1-12cde7f8c5b4", Equipamento: "Geladeira", Status: "Em Manutenção" }
  ];

  //Funções de contagem de cadastros
  // function getTotalPatrimonys() {
  //   return patrimonysContext.read.patrimonys.length;
  // }

  // function getTotalActivePatrimonys() {
  //   const activePatrimonys = new Set();
  
  //   patrimonysContext.read.patrimonys.forEach(patrimonys => {
  //     activePatrimonys.add(patrimonys.status.active);
  //   });
  
  //   return {
  //     totalActivePatrimonys: activePatrimonys.size,
  //   };
  // }

  // function getTotalInactivePatrimonys() {
  //   const inactivePatrimonys = new Set();
  
  //   patrimonysContext.read.patrimonys.forEach(patrimonys => {
  //     inactivePatrimonys.add(patrimonys.status.inactive);
  //   });
  
  //   return {
  //     totalInactivePatrimonys: inactivePatrimonys.size,
  //   };
  // }


  const modalForm = [
    {
      id: 1,
      field: <InputText label='Código' description='Obrigatório' identifier='EquipamentId' required={true} />
    },
    {
      id: 2,
      field: <Dropdown label='Equipamento' description='Obrigatório' identifier='categEquipament' required={true} data={[{value: 1, description: 'Teclado'}]} />
    },
    {
      id: 4,
      field: <TextArea label='Comentários' description='Obrigatório' identifier='descEquipament' required={true} />
    }
  ]

  return (
    <>
      <div className="equipment-container"> 
        <div className="count-equipment-container d-flex flex-row align-items-center p-3 gap-4 w-100" style={{ maxWidth: '1552px', height: '200px' }}>
          <div className="count-container d-flex flex-column align-items-start p-3 gap-3 w-25 h-25 h-100 bg-primary rounded">
            <div className="count-name-container fs-4 fw-normal text-white"> 
              Total
            </div>
            <div className="count-quantity-container fs-1 fw-bold d-flex align-items-end text-white">
              {/* {getTotalPatrimonys()} */}
            </div>
          </div>
          <div className="count-container d-flex flex-column align-items-start p-3 gap-3 w-25 h-100 bg-primary rounded">
            <div className="count-name-container fs-4 fw-normal text-white"> 
              Ativos
            </div>
            <div className="count-quantity-container fs-1 fw-bold d-flex align-items-end text-white">
              {/* {getTotalActivePatrimonys().totalActivePatrimonys} */} 
            </div>
          </div>
          <div className="count-container d-flex flex-column align-items-start p-3 gap-3 w-25 h-100 bg-primary rounded">
            <div className="count-name-container fs-4 fw-normal text-white"> 
            Inativos
            </div>
            <div className="count-quantity-container fs-1 fw-bold d-flex align-items-end text-white">
              {/* {getTotalInactivePatrimonys().totalInactivePatrimonys} */}
            </div>
          </div>  
        </div>

        <BasicTable 
          title="Patrimônios"
          subtitle="Listagem de Patrimônios" 
          columns={columns}
          data={data}
          // data={serializePatrimonys()}
          createModal={
            <Modal 
              modalTitle="Cadastro de Patrimônio" 
              modalForm={modalForm} 
              // action={patrimonysContext.write.patrimonys} 
            />
          }
        />
      </div>
    </>
  );
};

export default Patrimonios;