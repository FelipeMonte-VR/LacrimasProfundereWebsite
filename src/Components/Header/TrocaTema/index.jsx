import React from "react";
import styled from "styled-components";

import TemaEscuroLigado from '../../../assets/images/temaEscuro.png'
import TemaClaroLigado from '../../../assets/images/temaClaro.png'

const Icone = styled.img`
    height: 25px;
    width: 25px;
`;

const claro = <Icone src={TemaEscuroLigado} alt="Tema Escuro" />;
const escuro = <Icone src={TemaClaroLigado} alt="Tema Claro" />;

// const claro = <p>Tema Escuro</p>;
// const escuro = <p>Tema Claro</p>;

export default ({temaProp}) => (temaProp ? escuro : claro);


