import styled from "styled-components"
import { useState } from "react"
import LogoTrackit from "../image/Group 8.png"
import "../Estilos/fontes.css"
import { Link,useNavigate } from "react-router-dom"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"


export default function TelaLogin(props){
    let { setDadosUsuario } = props;
    const navigate = useNavigate();

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[able,setAble] = useState(true);

    function logarUser(event){
        event.preventDefault();
        setAble(false);
            if((email || password) !== null){
                const corpoForm = {
                                    email,
                                    password
                                }
                
                const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
                const promise = axios.post(URL,corpoForm);
                promise.then((response) => {
                    // DAQUI ELE VAI PARA A TELA DE HOJE
                    setDadosUsuario({...response.data});
                    navigate("/hoje");
                })
                .catch((err)=>{
                    setTimeout(() => {
                        alert(err.response.data.message);
                        setAble(true);
                    }, 3000);
                })
    
            }
  
    }


    return(
        <ConteudoLogin>
            <img src={LogoTrackit} alt="imagem-trackit"/>
            { 
                able ? <FormLogin onSubmit={logarUser}>
                            <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}  required/>
                            <input type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)}  required/>
                            <button type="submit">Entrar</button>
                        </FormLogin> :  <FormLogin onSubmit={logarUser}>
                                                <input type="email" placeholder="E-mail"  disabled required/>
                                                <input type="password" placeholder="senha"  disabled required/>
                                                <div>
                                                    <ThreeDots  color='white'/>
                                                </div>
                                            </FormLogin> 
                  
            }
            {able ? <Link to="/cadastro" style={{ textDecoration: "blue"}}>
                <span>Não tem uma conta? Cadastre-se!</span>
            </Link> : <Link to="" style={{ textDecoration: "blue"}}>
                <span>Não tem uma conta? Cadastre-se!</span>
            </Link> }
        </ConteudoLogin>
    )

}


const ConteudoLogin = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding-top: 150px;
    padding-left: 25px;
    padding-right: 25px;
    font-family: 'Lexend Deca', sans-serif;
    img{
        width: 180px;
        height: 178.38px;
    }
    span{
        font-weight: 400;
        font-size: 13.976px;
        color: #52B6FF;
        cursor: pointer;
    }
`;
const FormLogin = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 20px;
    input{
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-weight: 400;
        font-size: 19.976px;
        padding-left: 10px;
        margin-bottom: 10px;
    }
    button{
        height: 45px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;
        font-weight: 400;
        font-size: 20.976px;
        text-align: center;
        color: #FFFFFF;
        cursor: pointer;
    }
    div{
        width: 100%;
        height: 45px;
        justify-content: center;
        align-items: center;
        background-color: #52B6FF;
        color: #FFFFFF;
        opacity: 0.7;
        border-radius: 4.63636px;
    }
`;