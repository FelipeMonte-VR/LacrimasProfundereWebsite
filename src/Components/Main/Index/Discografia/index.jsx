import styled from "styled-components";

import { albuns } from "../../../UI/discografia.js"


const DiscografiaSection = styled.section`
    /* background-color: ${({theme}) => (theme.fundo)}; */
    /* height: 1600px; */
    /* width: 100%; */
    /* text-align: center; */
    margin: auto;
`;


const TituloSection = styled.h2`
    color: ${({theme}) => (theme.texto)};
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 50px;
    text-align: center;
`;


const DiscosDiv = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
`;

const DiscosList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    /* --w: calc( (100vw / (500 + 40)) );
    --shf: 4.9406564584124654e-324;
    --t: 0.1e-37;
    --w: 2.56px;
    --t: 9.0e-38;
    max-width: calc(var(--w) * var(--t) / var(--t)) ; */
`;


const DiscoCard = styled.li`
    width: 500px;
    border: 1px solid;
    border-color: rgba(0, 0, 0, 0.2);
    box-shadow: 5px 5px 5px black;
    padding: 10px 20px;
    margin: 0px 25px 50px 25px;
`;


const DiscoHeader = styled.div`
`;

const DiscoNome = styled.h3`
    color: ${({theme}) => (theme.texto)};
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 25px;
`;


const DiscoBody = styled.div`
    display: flex;
`;


const DiscoCardLeftSide = styled.div`
    /* display: grid;
    align-items: left; */
`;

const Capa = styled.img`
    height: 200px;
    margin-right: 10px;
    margin-bottom: 5px;
`;

const Ano = styled.p`
    color: ${({theme}) => (theme.texto)};
    font-size: 14px;
    text-align: center;
`;


const DiscoCardRightSide = styled.ul`
`;

const Texto = styled.li`
    color: ${({theme}) => (theme.texto)};
    font-size: 16px;
`;


function montaAlbum(titulo, capa, ano, faixas, index) {
    return(
        <DiscoCard key={index}>

            <DiscoHeader>
                <DiscoNome>{titulo}</DiscoNome>
            </DiscoHeader>

            <DiscoBody>
                
                <DiscoCardLeftSide>
                    <Capa src={capa} alt={titulo} />
                    <Ano>{ano}</Ano>
                </DiscoCardLeftSide>

                <DiscoCardRightSide>
                    {
                        faixas.map((faixa, index) => {
                            return (
                                <Texto key={index}>
                                    {faixa}
                                </Texto>
                            );
                        })
                    }
                </DiscoCardRightSide>

            </DiscoBody>

        </DiscoCard>
    );
}

function Discografia() {
    return(
        <DiscografiaSection id="discografia">
            <TituloSection>Discografia</TituloSection>

            <DiscosDiv>
                <DiscosList>
                    {
                        albuns.map((album, index) => {
                            return (
                                montaAlbum(album.titulo, album.capa, album.ano, album.faixas, index)
                            );
                        })
                    }
                </DiscosList>
            </DiscosDiv>

        </DiscografiaSection>
    );
}

export default Discografia;