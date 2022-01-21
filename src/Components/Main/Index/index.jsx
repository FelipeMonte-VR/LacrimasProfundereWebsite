import React, { useState } from "react";
import styled from "styled-components";
import useScroll from "../../../hooks/useScroll";

import Biografia from "./Biografia";
import Discografia from "./Discografia";

const BotaoTopo = styled.a`
    width: 100px;
    height: 100px;
    background-color: #AFAFAF;
    position: fixed;
    bottom: 70px;
    right: 20px;

    border: none;
    cursor: pointer;

    transform: translateY(50%);
`;

function MainIndex() {
    const [mostra, setMostra] = useState(false);


    window.onscroll = function(e) {
        // print "false" if direction is down and "true" if up
        //console.log(this.oldScroll > this.scrollY);
        //this.oldScroll = this.scrollY;
        
        if (this.scrollY > 100 && !mostra) {
            setMostra(true);
            console.log(mostra);
        } else if (this.scrollY <= 100 && mostra) {
            setMostra(false);
            console.log(mostra);
        }
    }

    function toTop() {
        window.scrollTo(0, 0);
        console.log("aqui")
    }

    function printa() {
        if (mostra) {
            return <BotaoTopo onClick={toTop} />
        } else {
            return <></>
        }
    }

    return(
        <>
            <Biografia />

            <Discografia />

            {printa()}
        </>
    );
};

export default MainIndex;