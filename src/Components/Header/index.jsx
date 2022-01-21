import React from "react";

import {BtnTema} from "../UI"
import TrocaTema from "./TrocaTema"
import MenuPrincipal from "./MenuPrincipal";
import LogoTopo from "./LogoTopo";

function Header({trocaTema, temaVar}) {
    return(
        <>
            <BtnTema onClick={trocaTema}>
                <TrocaTema temaProp={temaVar}/>
            </BtnTema>

            <MenuPrincipal />

            <LogoTopo />
        </>
    );
}

export default Header;