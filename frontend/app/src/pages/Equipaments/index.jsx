import React, { useEffect, useState } from 'react';
import BasicTable  from '../../components/TableList'; // Importando a Tabela base do diretório components
import './index.css'; // Importar estilos

import Modal from '../../components/Modal'
import InputText from '../../components/InputText';
import Dropdown from '../../components/Dropdown';
import TextArea from '../../components/TextArea';
import { useCategory } from '../../providers/CategoryContext';
import { useEquipament } from '../../providers/EquipamentsContext';

const Equipamentos = () => {
  const columns = ["Código", "Equipamento", "Categoria", "Quantidade", "Disponível", "Status"];
  const equipamentsContext = useEquipament();
  const categoriesContext = useCategory()

  function serializeCategories() {
    return categoriesContext.read.categories.map(category => {
      return {
        value: category.id,
        description: category.name
      }
    })
  }

  function serializeEquipaments() {
    return equipamentsContext.read.equipaments.map(equipament => {
      return {
        Código: equipament.code,
        Equipamento: equipament.model,
        Categoria: equipament.category,
        Quantidade: equipament.quantity,
        Disponível: 5,
        Status: equipament.status.name
      }
    })
  }

  console.log(categoriesContext.read.categories)

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
      field: <TextArea label='Descrição' description='Obrigatório' identifier='descEquipament' required={false} />
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
          data={serializeEquipaments()}
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