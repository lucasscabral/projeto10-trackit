import Conteudos from "./conteudos"
import styled from "styled-components"
import UserContext from "../UseContext"
import React, { useState,useContext, useEffect } from "react"

export default function TelaHistorico(){
    const{dadosUsuario} = useContext(UserContext);

    return(
        <Conteudos dadosUsuario={dadosUsuario}>
        <ConteudosPrincipais>
            <Topo>
                <h1>Histórico</h1>
            </Topo>
            <Historico>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Historico>
        </ConteudosPrincipais>
    </Conteudos>  
    )
}

const ConteudosPrincipais = styled.div`
    width: 100%;
    height: 100%;
    padding: 100px 15px;
    box-sizing: border-box;
    overflow: scroll;
`;
const Topo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1{
        color: #126BA5;
        font-weight: 400;
        font-size: 22.976px;
        margin-bottom: 5px;
    }
    span{
        color: #BABABA;
    }
`;
const Historico = styled.div`
    display: flex;
    margin-top: 20px;
    p{
        font-weight: 400;
        font-size: 17.976px;
        color: #666666;
    }
`;
