import "../Estilos/reset.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaHoje from "./TelaHoje";
import TelaHabitos from "./TelaHabitos";
import TelaHistorico from "./TelaHistorico";
import { useState,createContext } from "react";
import UserContext from "./UseContext";
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
//import ThreeDots from "react-loader-spinner"


export default function App(){
    const[salvar,setSalvar] = useState({nome:"lucas",sobreNome:"cabral"});
    const[dadosUsuario,setDadosUsuario] = useState({});

    //let obj = {salvar,setSalvar,dadosUsuario,setDadosUsuario} 
    
    return(
        <UserContext.Provider value={{salvar,setSalvar,dadosUsuario}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaLogin setDadosUsuario={setDadosUsuario}/>}/>
                    <Route path="/cadastro" element={<TelaCadastro />}/>
                    <Route path="/hoje" element={<TelaHoje />}/>
                    <Route path="/habitos" element={<TelaHabitos />}/>
                    <Route path="/historico" element={<TelaHistorico />}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}
