import styled from "styled-components"
import NomeApp from "../../image/TrackIt.png"
import React from "react";
import { Link } from "react-router-dom";
import "../../Estilos/fontes.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BallTriangle } from "react-loader-spinner";

export default function Conteudos(props){
    const {reloadEntreTela,setReloadEntreTela } = props;
    
    return(
            <TodosConteudos>
                
                <Topo>
                    <img src={NomeApp} alt="Nome-App"/>
                    <img src={props.dadosUsuario.image} alt="foto-usuario"/>
                </Topo>
                {!reloadEntreTela ? props.children : <Loading><BallTriangle color="#52B6FF"/> </Loading> }
                <RodaPe>
                    <Link to="/habitos" style={{ textDecoration: "none"}} >
                        <h1>Hábitos</h1>
                    </Link>
                    <Link to="/hoje" style={{ textDecoration: "none"}}>
                        <div>
                            <h2>Hoje</h2>
                            <CircularProgressbar
                                value={props.porcentagem}
                                background
                                backgroundPadding={6}
                                styles={buildStyles({
                                    width: 20,
                                    backgroundColor: "#52B6FF",
                                    textColor: "#fff",
                                    pathColor: "#fff",
                                    trailColor: "transparent"
                                })}
                            />
                        </div>
                    </Link>
                    <Link to="/historico" style={{ textDecoration: "none"}}>
                        <h1>Histórico</h1>
                    </Link>
                </RodaPe>
            </TodosConteudos>
    )
}

const TodosConteudos = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #E5E5E5;
    font-family: 'Lexend Deca', sans-serif;

`;
const Loading = styled.div`
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
`;

const Topo = styled.div`
    display: flex;
    justify-content: space-between;

    align-items: center;
    position: fixed;
    width: 100%;
    height: 70px;
    left: 0px;
    top: 0px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    padding: 0 15px;
    img:nth-child(2){
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`;
const RodaPe = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    position: fixed;
    height: 70px;
    left: 0px;
    bottom: 0;
    background-color: #FFFFFF;
    h1{
        color: #52B6FF;
    }
    h2{
        color: #FFFFFF;
        position: absolute;
    }
    div{
        width: 91px;
        height: 91px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
    }
    
`;
