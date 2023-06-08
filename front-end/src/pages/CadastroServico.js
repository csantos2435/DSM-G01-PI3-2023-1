import React, { useState } from "react";
import '../Styles/CadastroSer.css';
import { Link } from 'react-router-dom';

const CadastroServico = () => {
  const [horario, setHorario, ] = useState(""); // Estado para armazenar o horário selecionado
   
  const [data, setData] = useState("");
  
  const handleHorarioChange = (event) => {
    setHorario(event.target.value);
  };

  const handleDataChange = (event) => {
    setData(event.target.value);
  };

  const horarios = [];
  for (let hora = 0; hora <= 23; hora++) {
    const horarioFormatado = hora.toString().padStart(2, "0") + ":00";
    horarios.push(<option value={horarioFormatado}>{horarioFormatado}</option>);
  }

  const datas = [];
  const hoje = new Date();
  for (let i = 0; i < 7; i++) {
    const dataAtual = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() + i);
    const dataFormatada = dataAtual.toLocaleDateString("pt-BR");
    datas.push(<option value={dataFormatada}>{dataFormatada}</option>);
  }

 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="corFundo">
        <nav className="navbar">
          <div className="navbar-container">
            <button id="item1" type="button" className="btn btn-outline-light">
              <Link to="/CadastroFuncionario/2" className="nav-link">Cadastro de Funcionário</Link>
            </button>
            <button id="item2" type="button" className="btn btn-outline-light">
              <Link to="/CadastroCliente/3" className="nav-link">Cadastro de Cliente</Link>
            </button>
            <button id="item3" type="button" className="btn btn-outline-light">
              <Link to="/CadastroServico/4" className="nav-link">Cadastro de Serviços</Link>
            </button>
            <button id="item4" type="button" className="btn btn-outline-light">
              <Link to="/AgendarHorario/5" className="nav-link">Agendar</Link>
            </button>
          </div>
        </nav>
        <div className="rectangle14">
          <h1 className="titulo3">Cadastrar Serviços</h1>
          <div className="mb-3" id="Descricao">
            <label htmlFor="formGroupExampleInput" className="form-label" id="letra">Descrição:</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Descrição" />
          </div>
          <div className="mb-3" id="Observacao">
            <label htmlFor="formGroupExampleInput" className="form-label" id="letra">Observação:</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Descrição" />
          </div>
          <div className="mb-3" id="preco">
            <label htmlFor="formGroupExampleInput" className="form-label" id="letra">Preço:</label>
            <input type="number" className="form-control" id="formGroupExampleInput" placeholder="Preço" />
          </div>
          <button type="button" className="btn btn-light" id="botaoC" onClick={openModal}>Marca Horários</button>
          <button id="Cadastrar4" type="button" className="btn btn-light">Cadastrar</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
            <h1 id="titulo4">Agendar Horários Disponíveis</h1>
            <select id="horario" value={horario} onChange={handleHorarioChange} class="form-select" aria-label="Default select example">
               <option value="">Selecione um horário</option>
                 {horarios}
            </select>
            <select id="data" value={data} onChange={handleDataChange} class="form-select" aria-label="Default select example">
              <option value="">Selecione uma data</option>
                 {datas}
            </select>
            <div id="Endereco2">
            <input type="text" className="form-control" id="inputAddress" placeholder="Endereço" />
            </div>
            <div id="numero">
            <input type="number" className="form-control" id="formGroupExampleInput" placeholder="0000" />
            </div>
            <button type="button" className="btn btn-light" onClick={closeModal} id="fechar">
                Fechar
              </button>

          </div>
      )}

      <div className="line2"></div>
      <footer className="Footer">
        <p>Nome da empresa</p>
        <p>Telefone</p>
        <p>Email de Contato</p>
      </footer>
    </>
  );
}

export default CadastroServico;
