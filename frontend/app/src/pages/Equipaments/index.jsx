import React, { useEffect, useState } from 'react';
import BasicTable  from '../../components/TableList'; // Importando a Tabela base do diretório components
import './index.css'; // Importar estilos

import Modal from '../../components/Modal'
import InputText from '../../components/InputText';
import Dropdown from '../../components/Dropdown';
import TextArea from '../../components/TextArea';
import { useCategory } from '../../providers/CategoryContext';

const Equipamentos = () => {
  const columns = ["Equipamento", "Tipo", "Quantidade", "Disponível", "Status"];
  const data = [
    {Equipamento: "Cadeira de Rodas", Tipo: "Locomoção", Quantidade: "20", Disponível: 5, Status: "Ativo" },
    {Equipamento: "Muleta", Tipo: "Locomoção", Quantidade: "20", Disponível: 5, Status: "Inativo" },
    {Equipamento: "Cama Hospitalar", Tipo: "Leito", Quantidade: "20", Disponível: 5, Status: "Inativo" },
    {Equipamento: "Tubo Oxigênio", Tipo: "Auxilio Respiratório", Quantidade: "20", Disponível: 5, Status: "Ativo" },
    {Equipamento: "Cadeira de Rodas", Tipo: "Locomoção", Quantidade: "20", Disponível: 5, Status: "Ativo" },
    {Equipamento: "Muleta", Tipo: "Locomoção", Quantidade: "20", Disponível: 5, Status: "Inativo" },
    {Equipamento: "Cama Hospitalar", Tipo: "Leito", Quantidade: "20", Disponível: 5, Status: "Inativo" },
    {Equipamento: "Tubo Oxigênio", Tipo: "Auxilio Respiratório", Quantidade: "20", Disponível: 5, Status: "Ativo" },
    {Equipamento: "Cadeira de Rodas", Tipo: "Locomoção", Quantidade: "20", Disponível: 5, Status: "Ativo" },
    {Equipamento: "Muleta", Tipo: "Locomoção", Quantidade: "20", Disponível: 5, Status: "Inativo" },
    {Equipamento: "Cama Hospitalar", Tipo: "Leito", Quantidade: "20", Disponível: 5, Status: "Inativo" },
    {Equipamento: "Tubo Oxigênio", Tipo: "Auxilio Respiratório", Quantidade: "20", Disponível: 5, Status: "Ativo" },
    {Equipamento: "Cadeira de Rodas", Tipo: "Locomoção", Quantidade: "20", Disponível: 5, Status: "Ativo" },
    {Equipamento: "Muleta", Tipo: "Locomoção", Quantidade: "20", Disponível: 5, Status: "Inativo" },
    {Equipamento: "Cama Hospitalar", Tipo: "Leito", Quantidade: "20", Disponível: 5, Status: "Inativo" },
    {Equipamento: "Tubo Oxigênio", Tipo: "Auxilio Respiratório", Quantidade: "20", Disponível: 5, Status: "Ativo" },
    {Equipamento: "Cadeira de Rodas", Tipo: "Locomoção", Quantidade: "20", Disponível: 5, Status: "Ativo" },
    {Equipamento: "Muleta", Tipo: "Locomoção", Quantidade: "20", Disponível: 5, Status: "Inativo" },
    {Equipamento: "Cama Hospitalar", Tipo: "Leito", Quantidade: "20", Disponível: 5, Status: "Inativo" },
    {Equipamento: "Tubo Oxigênio", Tipo: "Auxilio Respiratório", Quantidade: "20", Disponível: 5, Status: "Ativo" },
  ];
  const categoriesContext = useCategory()

  function serializeCategories() {
    return categoriesContext.read.categories.map(category => {
      return {
        value: category.id,
        description: category.name
      }
    })
  }

  const modalForm = [
    {
      id: 1,
      field: <InputText label='Código' description='Obrigatório' identifier='codEquipament' required={true} />
    },
    {
      id: 2,
      field: <InputText label='Modelo' description='Obrigatório' identifier='modelEquipament' required={true} />
    },
    {
      id: 3,
      field: <Dropdown label='Categoria' description='Obrigatório' identifier='categEquipament' required={true} data={serializeCategories()} />
    },
    {
      id: 4,
      field: <TextArea label='Descrição' description='Obrigatório' identifier='descEquipament' required={true} />
    }
  ]

  return (
    <>
    <div className="equipment-container">
        
        <div className="count-equipment-container">
          <div className="count-container">
            <div className="count-name-container"> 
              Total Equipamentos
            </div>
            <div className="count-quantity-container">
              100
            </div>
          </div>
          <div className="count-container">
            <div className="count-name-container"> 
              Total Equipamentos
            </div>
            <div className="count-quantity-container">
              100
            </div>
          </div>
          <div className="count-container">
            <div className="count-name-container"> 
              Total Equipamentos
            </div>
            <div className="count-quantity-container">
              100
            </div>
          </div>
        </div>

        <BasicTable 
          title="Equipamentos"
          subtitle="Listagem de Equipamentos" 
          columns={columns}
          data={data}
          createModal={
            <Modal 
              modalTitle="Cadastro de Equipamento" 
              modalForm={modalForm} 
              dialogModal={ { title: "Deseja continuar com o cadastro de Patrimônio desse Equipamento?", description: "Se continuar com o cadastro de Patrimônio todos os dados do Equipamento serão carregados automaticamente no formulário." } }
            />
          }
        />
    </div>
    </>
  );
};

export default Equipamentos;