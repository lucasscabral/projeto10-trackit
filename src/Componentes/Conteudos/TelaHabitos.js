import styled from "styled-components";
import UserContext from "../UseContext"
import React, { useState,useContext, useEffect } from "react"
import Conteudos from "./conteudos";
import ImageLixeiro from "../../image/Vector (1).png"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"

function Dias({id,dia,diasSelec,setDiasSelec}){
    const[clicado,setClicado] = useState(false);

    function Selecionar(){
        if(!clicado){
            setClicado(!clicado); 
            setDiasSelec([...diasSelec,id]);  
        }else{
            setClicado(!clicado); 
            let novosDias =  diasSelec.filter((diaId) => diaId !== id);
            setDiasSelec([...novosDias]);
        }
        
    }

    return(
            <Dia corSelec ={clicado?"#CFCFCF":"#FFFFFF"} mudarCorText={clicado?"#FFFFFF":"#CFCFCF"} onClick={Selecionar}>{dia}</Dia> 
    )

}

function DiasSelecs({index,dia,diasEscolhidos}){
    const selecionados = diasEscolhidos.some(value => index === value);

    return(
        <DiasEscolhidos backgroudColor={selecionados?"#CFCFCF":"#FFFFFF"} mudarCorText={selecionados?"#FFFFFF":"#CFCFCF"}>{dia}</DiasEscolhidos>
    )
}


export default function TelaHoje(){
    const[nomeHabito,setNomeHabito] = useState("");
    const[apareceForm,setApareceForm] = useState(false);
    const[loadingSalvar,setLoadingSalvar] = useState(false);
    const[diasSelec,setDiasSelec] = useState([]);
    const dias = ["D","S","T","Q","Q","S","S"];
    const{dadosUsuario,
        taskSalva,
        setTaskSalva,
        porcentagem,
        reloadEntreTela,
        setReloadEntreTela} = useContext(UserContext);

    const[atualizar,setAtualizar] = useState(0);
      
       useEffect(() => { 
        setReloadEntreTela(!false);
            const tokenList ={
                headers: {
                    "Authorization": `Bearer ${dadosUsuario.token}`
                }
            }     
            if(diasSelec !== undefined){
                const listaTarefas = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",tokenList);
                listaTarefas.then(response =>{
                    setReloadEntreTela(!true);
                    setTaskSalva([...response.data]);
                    })
            }       
        },[atualizar])



    function validaTarefa(event){
        event.preventDefault();
        setLoadingSalvar(true)
        if(diasSelec.length !== 0){
            if(nomeHabito !== null){
                    const config ={
                        headers: {
                            "Authorization": `Bearer ${dadosUsuario.token}`
                        }
                    }
        
                    const body = {
                                name: nomeHabito,
                                days: diasSelec
                    }
                    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",body,config);
                    promise.then(response => {
                        setLoadingSalvar(false);
                        setAtualizar(atualizar + 1)
                        setNomeHabito("");
                        setApareceForm(!apareceForm);
                    })
                
                }
            }else{
                alert("É Necessario escolher os dias para o seu Hábito");
            }  
    }

    function deletarHabito(idHabito){
       const config ={
            headers: {
                "Authorization": `Bearer ${dadosUsuario.token}`
            }
        }
        if(window.confirm("Você tem certeza que quer excluir esse hábito?")){
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabito}`,config);
            promise.then(response =>{
                setAtualizar(atualizar + 1)
            })
        }
    }
   

    return(
        <Conteudos dadosUsuario={dadosUsuario} porcentagem={porcentagem} reloadEntreTela ={reloadEntreTela} setReloadEntreTela={setReloadEntreTela}>
            <ConteudosPrincipais>
                <TopoAdd>
                    <h1>Meus hábitos</h1>
                    <button onClick={() => setApareceForm(!apareceForm)}>+</button>
                </TopoAdd>
                { apareceForm? <FormarTarefa onSubmit={validaTarefa}>
                                                                    <input type="text" placeholder="nome do hábito" value={nomeHabito} onChange={(e) => setNomeHabito(e.target.value)} required/>
                                                                    <DiasSemana> 
                                                                    {
                                                                        dias.map((dia,index)=> <Dias diasSelec={diasSelec} setDiasSelec={setDiasSelec} id={index} dia={dia} dias={dias} />)
                                                                    }
                                                                    </DiasSemana>
                                                                    <BotoesForm>
                                                                        <div onClick={() => setApareceForm(!apareceForm)}>Cancelar</div>
                                                                        {!loadingSalvar? <button type="submit">Salvar</button>:  <Loading>
                                                                                                                                    <ThreeDots  color='white' height={20} width={50}/>
                                                                                                                                </Loading>}
                                                                    </BotoesForm>
                                                                </FormarTarefa> : ""}
                {taskSalva.length === 0? "": taskSalva?.map(tarefa =>        <HabitosAdds>
                                                                                <Habitos>
                                                                                    <h2>{tarefa.name}</h2> 
                                                                                    <div>      
                                                                                    {
                                                                                        dias.map((dia,index)=> <DiasSelecs index={index} dia={dia} diasEscolhidos={tarefa.days}/>)
                                                                                    } 
                                                                                    </div> 
                                                                                </Habitos>
                                                                                <img src={ImageLixeiro} alt="lixeiro" onClick={() => deletarHabito(tarefa.id)}/>
                                                                            </HabitosAdds>) }                  
                {
                    taskSalva.length === 0? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> : ""
                }
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
const TopoAdd = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        color: #126BA5;
        font-weight: 400;
        font-size: 22.976px;
    }
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;
        color: #FFFFFF;
        font-weight: 400;
        font-size: 26.976px;
        cursor: pointer;
    }
`;
const FormarTarefa = styled.form`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 15px 15px;
    margin-top: 30px;
    width: 100%;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    input{
        box-sizing: border-box;
        padding: 0px 10px;
        width: 340px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-weight: 400;
        font-size: 19.976px;
    }
`;

const DiasSemana = styled.div`
    display: flex;
    margin-top: 15px;
`;
const Dia = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        background-color: ${props => props.corSelec};
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        color: ${props => props.mudarCorText};
        cursor: pointer;
        margin-right: 5px;
`;
const BotoesForm = styled.div`
    margin-top: 30px;
    margin-left: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        color: #52B6FF;
        cursor: pointer;
    }
    button{
        width: 84px;
        height: 35px;
        margin-left: 20px;
        background: #52B6FF;
        border-radius: 4.63636px;
        color: white;
        border: none;
        cursor: pointer;
    }
`;
const Loading = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 84px;
        height: 35px;
        opacity: 0.7;
        box-sizing: border-box;
        margin-left: 20px;
        background: #52B6FF;
        border-radius: 4.63636px;
        cursor: pointer;
`;

const HabitosAdds = styled.div`
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-top: 15px;
    box-sizing: border-box;
    padding: 15px 25px;
    display: flex;
    justify-content: space-between;
    img{
        width: 16px;
        height:20px;
        cursor: pointer;
    }
`;
const Habitos = styled.div`
    display: flex;
    flex-direction: column;
    h2{
        font-weight: 400;
        font-size: 19.976px;
        color: #666666;
    }
    div{
        margin-top: 5px;
        display: flex;
    }
`;
const DiasEscolhidos = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        background-color: ${props => props.backgroudColor};
        border: 1px solid #D5D5D5;
        margin-top: 20px;
        border-radius: 5px;
        color: ${props => props.mudarCorText};
        margin-right: 5px;
`;

