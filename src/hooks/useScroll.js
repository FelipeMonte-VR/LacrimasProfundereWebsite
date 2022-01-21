// import React, {useState} from "react";

// function useScroll(validacoes) {
//     const estadoInicial = criarEstadoInicial(validacoes);

//     const [erros, setErros] = useState(estadoInicial);
    
//     function validarCampos(event) {
//         const {name, value} = event.target;
//         const noveEstado = {...erros};
//         noveEstado[name] = validacoes[name](value);
//         setErros(noveEstado);
//     }

//     // function possoEnviar() {
//     //     for (let campo in erros) {
//     //         if (!erros[campo].valido) {
//     //             return false
//     //         }
//     //     }
//     //     return true
//     // }

//     function mostraBotao(mostra) {
//         if (mostra) {
//             console.log("Mostra");
//         } else {
//             console.log("Esconde");
    
//         }
//     }

//     return [erros, validarCampos, possoEnviar];
// }

// export default useScroll;