import React, { useState } from "react";
import "../Styles/Agendar.css";
import { Link } from "react-router-dom";

const AgendarHorarios = () => {
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
              <Link to="/CadastroFuncionario/2" className="nav-link">
                Cadastro de Funcionário
              </Link>
            </button>
            <button id="item2" type="button" className="btn btn-outline-light">
              <Link to="/CadastroCliente/3" className="nav-link">
                Cadastro de Cliente
              </Link>
            </button>
            <button id="item3" type="button" className="btn btn-outline-light">
              <Link to="/CadastroServico/4" className="nav-link">
                Cadastro de Serviços
              </Link>
            </button>
            <button id="item4" type="button" className="btn btn-outline-light">
              <Link to="/AgendarHorarios/5" className="nav-link">
                Agendar
              </Link>
            </button>
          </div>
        </nav>
        <div className="rectangle14">
          <h1 className="titulo">Agendar Horários</h1>
          <div className="SeleF">
            <label htmlFor="funcionarioInput" className="form-label" id="letra">
              Selecione Funcionário
            </label>
            <input
              className="form-control"
              list="funcionarioOptions"
              id="funcionarioInput"
              placeholder=""
            />
            <datalist id="funcionarioOptions">
              <option value="Funcionário 1" />
              <option value="Funcionário 2" />
              <option value="Funcionário 3" />
              <option value="Funcionário 4" />
              <option value="Funcionário 5" />
            </datalist>
          </div>

          <div className="SeleC">
            <label htmlFor="clienteInput" className="form-label" id="letra">
              Selecione Cliente
            </label>
            <input
              className="form-control"
              list="clienteOptions"
              id="clienteInput"
              placeholder=""
            />
            <datalist id="clienteOptions">
              <option value="Cliente 1" />
              <option value="Cliente 2" />
              <option value="Cliente 3" />
              <option value="Cliente 4" />
              <option value="Cliente 5" />
            </datalist>
          </div>

          <div className="SeleS">
            <label htmlFor="servicoInput" className="form-label" id="letra">
              Selecione o Serviço
            </label>
            <input
              className="form-control"
              list="servicoOptions"
              id="servicoInput"
              placeholder=""
            />
            <datalist id="servicoOptions">
              <option value="Serviço 1" />
              <option value="Serviço 2" />
              <option value="Serviço 3" />
              <option value="Serviço 4" />
              <option value="Serviço 5" />
            </datalist>
          </div>

          <button type="button" className="btn btn-light" id="botaoH" onClick={openModal}>
            Horários Disponíveis 
          </button>
          <button id="Cadastrar4" type="button" className="btn btn-light">
            Cadastrar
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay2">
          <h1 id="titulo4">Selecione um Horário Disponível</h1>
          <select class="form-select" aria-label="Selecione um horário" id="SelecioneH">
            <option selected>Selecione um horário</option>
            <option value="1">Horário 1</option>
            <option value="2">Horário 2</option>
            <option value="3">Horário 3</option>
          </select>

          <select class="form-select" aria-label="Selecione uma Data" id="SelecioneD">
            <option selected>Selecione uma data</option>
            <option value="1">Data 1</option>
            <option value="2">Data 2</option>
            <option value="3">Data 3</option>
          </select>

          <button type="button" className="btn btn-light" onClick={closeModal} id="fechar2">
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
};

export default AgendarHorarios;
