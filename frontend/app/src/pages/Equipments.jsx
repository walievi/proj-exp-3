import React from 'react';
import BasicLayout from '../components/BasicLayout.jsx'; // Importando o Layout base do diretório components
import BasicTable  from '../components/BasicTable.jsx'; // Importando a Tabela base do diretório components
import './Equipments.css'; // Importar estilos

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
  return (
    <div className="equipment-container">

      <BasicLayout>  {/* Chamando o Layout base */}
        
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
        />

      </BasicLayout> 
    </div>
  );
};

export default Equipamentos;