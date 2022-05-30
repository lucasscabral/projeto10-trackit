import "../Estilos/reset.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaHoje from "./Conteudos/TelaHoje";
import TelaHabitos from "./Conteudos/TelaHabitos";
import TelaHistorico from "./Conteudos/TelaHistorico";
import { useState,createContext } from "react";
import UserContext from "./UseContext";
import "react-loader-spinner";


export default function App(){
    const[dadosUsuario,setDadosUsuario] = useState({});
    const[taskSalva,setTaskSalva] = useState([]);  
    const[checkhabitos,setCheckhabitos] = useState([]);
    const[habitosHoje,setHabitosHoje] = useState();
    const[habitosCheck,setHabitosCheck] = useState();
    const[porcentagem,setPorcentagem] = useState();
    const[reloadEntreTela,setReloadEntreTela] = useState(false);

    return(
        <UserContext.Provider value={{dadosUsuario,
                                    taskSalva,
                                    setTaskSalva,
                                    checkhabitos,
                                    setCheckhabitos,
                                    habitosHoje,
                                    setHabitosHoje,
                                    habitosCheck,
                                    setHabitosCheck,
                                    porcentagem,
                                    setPorcentagem,
                                    reloadEntreTela,
                                    setReloadEntreTela}}>
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
