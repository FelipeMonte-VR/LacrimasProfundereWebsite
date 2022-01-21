import React from "react";

import Header from "../Header";
import MainFormulario from "../Main/FormularioMaterial";

function Formulario({trocaTema, temaVar}) {
    return(
        <>
            <Header trocaTema={trocaTema} temaVar={temaVar}/>

            <MainFormulario />
        </>
    );
}

export default Formulario;