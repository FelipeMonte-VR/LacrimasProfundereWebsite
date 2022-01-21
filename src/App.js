import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";

import { temaEscuro, temaClaro } from "./Components/UI/temas";

import Header from "./Components/Header";
import MainIndex from "./Components/Main/Index";
import MainFormulario from "./Components/Main/FormularioHTML";


import Home from './Components/Pages/'
import FormularioHTML from "./Components/Pages/formularioHTML.jsx";
import FormularioMaterial from "./Components/Pages/formularioMaterial.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

import {getCookie, setCookie} from "./Cookies/manager";
import { caminhosLinks } from "./Components/UI/caminhosLinks";

function App() {
  const [temaVar, setTema] = useState(retornaValorTempLocal());

  const trocaTema = () => {
    var novoValorTema = !temaVar
    salvaValorTempLocal(novoValorTema);
    setTema((temaVar) => novoValorTema);
  };

  function retornaValorTempLocal() {
    var temaString = getCookie("temaEscolhido");
    if (temaString === "") {
      return true;
    }
    return (temaString === 'true');
  }

  function salvaValorTempLocal(temaVar) {
    setCookie("temaEscolhido", temaVar, 1);
  }

  function printa() {
      var intElemScrollTop = window.scrollY;
      console.log("intElemScrollTop");
      console.log(intElemScrollTop);
  }

  // window.onscroll = function(e) {
  //   // print "false" if direction is down and "true" if up
  //   //console.log(this.oldScroll > this.scrollY);
  //   //this.oldScroll = this.scrollY;
    
  //   if (this.scrollY > 100) {
  //     console.log("Mostra botao");
  //   } else {
  //     console.log("Esconde");
  //   }
  // }

  const Divv = styled.div`
    background-color:  ${({theme}) => (theme.fundo)};
  `;

  return (

    

    //theme é uma propriedade nativa
    <div onScroll={printa}>
      <ThemeProvider theme={temaVar ? temaEscuro : temaClaro}>
        
        <Divv>
        {/*</ThemeProvider><Header trocaTema={trocaTema} temaVar={temaVar}/> */}
        
          <BrowserRouter>
            <Routes>
              
              <Route path={caminhosLinks["home"]} element={<Home trocaTema={trocaTema} temaVar={temaVar} />} />
              <Route path={caminhosLinks["formularioMaterial"]} element={<FormularioMaterial trocaTema={trocaTema} temaVar={temaVar} />} />
              <Route path={caminhosLinks["formularioHTML"]} element={<FormularioHTML trocaTema={trocaTema} temaVar={temaVar} />} />
              
            </Routes>
          </BrowserRouter>

          
        </Divv>

      </ThemeProvider>
    </div>
  );
}

export default App;
