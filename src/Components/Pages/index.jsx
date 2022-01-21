import React from "react";

import Header from "../Header";
import MainIndex from "../Main/Index";

function Home({trocaTema, temaVar}) {
    return(
        <>
            <Header trocaTema={trocaTema} temaVar={temaVar}/>

            <MainIndex />
        </>
    );
}

export default Home;