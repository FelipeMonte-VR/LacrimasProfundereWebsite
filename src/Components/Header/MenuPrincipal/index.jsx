import React from "react";
import styled from "styled-components";
import { caminhosLinks } from "../../UI/caminhosLinks";

const HeaderFalso = styled.nav`
    /* background-color: ${({theme}) => theme.fundo}; */
    color: ${({theme}) => theme.texto};
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BotaoCabecalho = styled.a`
    //padding: 17px;
    height: 50px;
    width: 150px;
    margin: 0;
    border: none;

    color: ${({theme}) => (theme.texto)};
    font-weight: 600;
    text-align: center;
    line-height: 50px;
    text-decoration: none;

    cursor: pointer;
    &:hover {
        background-color: ${({theme}) => (theme.destaque)};
    }
`;

function MenuPrincipal() {
    return(
        <HeaderFalso>
            
            <BotaoCabecalho href={caminhosLinks["home"]}>Home</BotaoCabecalho>
            <BotaoCabecalho href="/#biografia">Biografia</BotaoCabecalho>
            <BotaoCabecalho href="/#discografia">Discografia</BotaoCabecalho>
            <BotaoCabecalho href="/">Membros</BotaoCabecalho>
            <BotaoCabecalho href={caminhosLinks["formularioMaterial"]}>Form - Material-UI</BotaoCabecalho>
            <BotaoCabecalho href={caminhosLinks["formularioHTML"]}>Form - HTML</BotaoCabecalho>
              
        </HeaderFalso>
    );
};

export default MenuPrincipal;