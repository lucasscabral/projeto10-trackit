import styled from "styled-components"
import axios from "axios";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import LogoTrackit from "../image/Group 8.png"
import { ThreeDots } from "react-loader-spinner"

export default function TelaCadastro(){
    const[email,setEmail] = useState("");
    const[name,setName] = useState("");
    const[image,setImage] = useState("");
    const[password,setPassword] = useState("");
    const[able,setAble] = useState(true);

    const navigate = useNavigate();

    function cadastrarUsuario(event){
        event.preventDefault();
        setAble(false);

        const dadosCadastrados = {
            email,
            name,
            image,
            password
        }

        if((email|| name || image || password) !== null){
            const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
            const promise = axios.post(URL,dadosCadastrados);                        
            promise.then((response) =>{
                console.log(response.data);
                navigate("/");
            }).catch((err)=>{
                console.log(err.response.data);
                setAble(true);
                alert(err.response.data.message)
            }) 
        }
                         

    }

    return(
        <ConteudoLogin>
            <img src={LogoTrackit} alt="imagem-trackit"/>
            { able ? <FormLogin onSubmit={cadastrarUsuario}>
                <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <input type="text" placeholder="nome" value={name} onChange={(e) => setName(e.target.value)} required/>
                <input type="text" placeholder="image" value={image} onChange={(e) => setImage(e.target.value)} required/>
                <input type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <button type="submit">Cadastrar</button>
            </FormLogin> : <FormLogin onSubmit={cadastrarUsuario}>
                                <input type="email" placeholder="E-mail" disabled/>
                                <input type="text" placeholder="nome" disabled/>
                                <input type="text" placeholder="image" disabled/>
                                <input type="password" placeholder="senha" disabled/>
                                <div>
                                   <ThreeDots  color='white'/>
                                </div>
                            </FormLogin>
            
            }
             {able ? <Link to="/cadastro" style={{ textDecoration: "blue"}}>
                <span>Já tem uma conta? Faça login!</span>
            </Link> : <Link to="" style={{ textDecoration: "blue"}}>
                <span>Já tem uma conta? Faça login!</span>
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