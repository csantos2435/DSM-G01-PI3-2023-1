import React from "react";
import '../Styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="corFundo">
        <div className="container">
          <div className="square">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" />
            <p className="welcome">Welcome</p>
            <Link to="/CadastroFuncionario/2" className="button">Entrar</Link>
          </div>
          <div className="squareblack"></div>
          <div className="squarelines"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
