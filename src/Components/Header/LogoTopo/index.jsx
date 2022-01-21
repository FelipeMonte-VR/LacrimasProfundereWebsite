import styled from "styled-components";

import logo_img from "../../../assets/images/logo.jpg";

const Logo = styled.img`
    width: 100%;
`;

function LogoTopo() {
    return(
        <Logo src={logo_img} alt="Logo da Banda" />
    );
};

export default LogoTopo;