import styled from "styled-components";
import UserContext from "../UseContext"
import { useState,useContext } from "react"
import Conteudos from "./conteudos";
import Check from "../../image/Check.png"

export default function TelaHoje(){
    //const[nomeHabito,setNomeHabito] = useState("");
    //const{salvar,setSalvar,dadosUsuario} = useContext(UserContext);
    //console.log(dadosUsuario);

    return(
        <Conteudos>
            <ConteudosPrincipais>
                <Topo>
                    <h1>Segunda, 17/05</h1>
                    <span>Nenhum hábito concluído ainda</span>
                </Topo>
                <ListaTarefa>
                   <div>
                        <h2>Ler 1 capítulo de livro</h2>
                        <h3>Sequência atual: 3 diass</h3>
                        <h3>Seu recorde: 5 dias</h3>
                   </div>
                   <img src={Check} alt="Check"/>
                </ListaTarefa>
                <ListaTarefa>
                   <div>
                        <h2>Ler 1 capítulo de livro</h2>
                        <h3>Sequência atual: 3 diass</h3>
                        <h3>Seu recorde: 5 dias</h3>
                   </div>
                   <img src={Check} alt="Check"/>
                </ListaTarefa>
                <ListaTarefa>
                   <div>
                        <h2>Ler 1 capítulo de livro</h2>
                        <h3>Sequência atual: 3 diass</h3>
                        <h3>Seu recorde: 5 dias</h3>
                   </div>
                   <img src={Check} alt="Check"/>
                </ListaTarefa>
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
    p{
        margin-top: 40px;
        font-weight: 400;
        font-size: 17.976px;
        color: #666666;
    }
`;
const Topo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 30px;
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
const ListaTarefa = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 15px 15px;
    margin-bottom: 10px;
    width: 100%;
    height: 94px;
    background-color: #FFFFFF;
    border-radius: 5px;
    img{
        width: 69px;
        height: 69px;
        //background-color: #8FC549;
        background: #EBEBEB;
        border: 1px solid #E7E7E7;
        border-radius: 5px;
        box-sizing: border-box;
        padding: 13px;
        cursor: pointer;
    }
    div{
        h2{
            font-weight: 400;
            font-size: 19.976px;
            color: #666666;
            margin-bottom: 10px;
        }
        h3{
            font-weight: 400;
            font-size: 12.976px;
            color: #666666;
            margin-bottom: 5px;
        }
    }
`;
