import styled from "styled-components";
import UserContext from "./UseContext"
import { useState,useContext } from "react"
import Conteudos from "./conteudos";
import TelaHabitos from "./TelaHabitos";


export default function TelaHoje(){
    const{salvar,setSalvar,dadosUsuario} = useContext(UserContext);
    console.log(dadosUsuario);

    return(
        <Conteudos>
            <h1>Eu sou a tela das tarefas de hoje</h1>
        </Conteudos>  
    )
}