import React from "react";
import '../Styles/CadastroCli.css';
import { Link } from 'react-router-dom';

const CadastroCliente = () => {
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
          <h1 className="titulo-cliente">Cadastrar Cliente</h1>
          <div className="mb-3" id="nomeCli">
            <label htmlFor="formGroupExampleInput" className="form-label" id="letra">Nome:</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Nome" />
          </div>
          <div className="Sexo">
            <label htmlFor="exampleDataList" className="form-label" id="letra">Sexo:</label>
            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Sexo" />
            <datalist id="datalistOptions">
              <option value="Feminino" />
              <option value="Masculino" />
            </datalist>
          </div>
          <div className="mb-3" id="TelefoneCli">
            <label htmlFor="formGroupExampleInput" className="form-label" id="letra">Telefone:</label>
            <input type="tel" className="form-control" id="formGroupExampleInput" placeholder="(00)00000-0000" />
          </div>
          <div className="mb-3" id="EmailCli">
            <label htmlFor="exampleFormControlInput1" className="form-label" id="letra">Email:</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="col-12" id="EnderecoCli">
            <label htmlFor="inputAddress" className="form-label" id="letra">Endereço</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>
          <div className="mb-3" id="NumeroCli">
            <label htmlFor="formGroupExampleInput" className="form-label" id="letra">Número:</label>
            <input type="number" className="form-control" id="formGroupExampleInput" placeholder="0000" />
          </div>
          <button id="Cadastrar3" type="button" className="btn btn-light">Cadastrar</button>
        </div>
      </div>

      <div className="line2"></div>
      <footer className="Footer">
        <p>Nome da empresa</p>
        <p>Telefone</p>
        <p>Email de Contato</p>
      </footer>
    </>
    );
}
export default CadastroCliente;