import styled from "styled-components";

import foto1 from "../../../../assets/images/banda1.jpg"

const BioSection = styled.section`
    /* background-color: ${({theme}) => (theme.fundo)}; */
    height: 600px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Componentes = styled.div`
    width: 30%;
    height: 400px;
    margin: 0 5%;
`;

const TituloSection = styled.h2`
    color: ${({theme}) => (theme.texto)};
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 25px;
    text-align: center;
`;

const Texto = styled.p`
    color: ${({theme}) => (theme.texto)};
    font-size: 16px;
`;

const Foto1 = styled.img`
    height: 400px;
`;

function Biografia() {
    return(
        <BioSection>
            
            <Componentes>
                <TituloSection id="biografia">Biografia</TituloSection>
                <Texto>Lacrimas Profundere foi fundado em 1993 pelo guitarrista Oliver Schmid. Na altura eram uma banda de death/doom metal com elementos góticos e clássicos, contando com vocais guturais. Utilizavam também vocais femininos (Anja Hötzendorfer).

O primeiro trabalho saiu em 1995, intitulado … and the Wings Embraced Us. Dois anos depois é a vez de La Naissance d’un Rêve (em português Nascimento de um Sonho).

Após este dois lançamentos assinam com a Napalm Records, por 5 álbuns. A harpista Ursula Schmidhammer foi convidada a participar na gravação do álbum Memorandum, que iria sair em 1999.

Apenas em 2001 a banda teve algum reconhecimento por parte da imprensa internacional, devido ao álbum Burning: A Wish. Este álbum já não possui os elementos clássicos caracteristícos da banda. O irmão de Oliver, Christopher Schmid ocupa os vocais deste álbum.

Nesse ano a banda faz a primeira digressão internacional, que inclui a Europa e a América Latina.

Seguem-se mais dois álbuns: Fall, I Will Follow (2002), Ave End (2004) e Filthy Notes For Frozen Hearts (2006).

Em Abril de 2007 Christopher Schmid deixa a banda após 14 anos como vocalista, alegando stress devido às tours. Peter Kafka ocupou o seu lugar. Meses depois Daniel Lechner deixa a banda e Peter Kafka deixa os vocais para ser baixista. Rob Vitacca foi contratado para vocalista. </Texto>
            </Componentes>

            <Componentes>
                <Foto1 src={foto1} alt="Foto dos integrantes da banda." />
            </Componentes>
            
        </BioSection>
    );
};

export default Biografia;