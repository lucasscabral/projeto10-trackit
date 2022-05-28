import styled from "styled-components"
import NomeApp from "../../image/TrackIt.png"
import { Link } from "react-router-dom";
import "../../Estilos/fontes.css"

export default function Conteudos(props){
    console.log(props)

    return(
            <TodosConteudos>
                <Topo>
                    <img src={NomeApp} alt="Nome-App"/>
                    <img src={NomeApp} alt="foto-usuario"/>
                </Topo>
                {props.children}
                <RodaPe>
                    <Link to="/habitos" style={{ textDecoration: "none"}}>
                        <h1>Hábitos</h1>
                    </Link>
                    <Link to="/hoje" style={{ textDecoration: "none"}}>
                        <h1>Hoje</h1>
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
    
`;
