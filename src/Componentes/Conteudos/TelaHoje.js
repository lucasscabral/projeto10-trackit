import styled from "styled-components";
import UserContext from "../UseContext"
import { useState,useContext,useEffect } from "react"
import Conteudos from "./conteudos";
import Check from "../../image/Check.png"
import axios from "axios";
import dayjs from "dayjs";


export default function TelaHoje(){
    const{dadosUsuario,
        taskSalva,
        checkhabitos,
        setCheckhabitos,
        setHabitosHoje,
        habitosCheck,
        setHabitosCheck,
        porcentagem,
        setPorcentagem,
        reloadEntreTela,
        setReloadEntreTela} = useContext(UserContext);

    const[atualizar,setAtualizar] = useState(0);
    const dayjs = require('dayjs')

    useEffect(() =>{
        setReloadEntreTela(!false);
            const config ={
                headers: {
                    "Authorization": `Bearer ${dadosUsuario.token}`
                }
            }
            const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",config);
            promise.then(response =>{
                setReloadEntreTela(!true);
                let aux = 0;
                setCheckhabitos(response.data)
                setHabitosHoje(response.data.length);
                response.data.forEach(habito => {if(habito.done === true){
                    aux++;
                }})
                setHabitosCheck(aux);

                if(response.data.length !== 0){
                    let total = (aux * 100) / response.data.length;
                    setPorcentagem(total)
                }    
            }).catch(err =>{
                
            })
    },[atualizar,taskSalva])

    function checkHabito(idCheck,habitosDone){
      
        const config ={
            headers: {
                "Authorization": `Bearer ${dadosUsuario.token}`
            }
        }  
        if(habitosDone){   
            
            const promiseUnCheck = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idCheck}/uncheck`,null,config);
            promiseUnCheck.then(response =>{
                setHabitosCheck(habitosCheck - 1);  
                setAtualizar(atualizar + 1);
            })
        }else{ 

            const promisecheck = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idCheck}/check`,null,config);
            promisecheck.then( response =>{ 
                setHabitosCheck(habitosCheck + 1);
                setAtualizar(atualizar + 1);
            })
           
        } 
    }
  
    

    return(
       checkHabito.length === 0? "" : <Conteudos dadosUsuario={dadosUsuario} porcentagem={porcentagem} reloadEntreTela ={reloadEntreTela} setReloadEntreTela={setReloadEntreTela}>
                                        <ConteudosPrincipais>
                                            <Topo>
                                                <h1>{dayjs().format('DD/MM')}</h1>
                                                {checkhabitos.length === 0? <span>Nenhum h??bito conclu??do ainda</span>: <Porcentagem>{Math.round(porcentagem)}% dos h??bitos conclu??dos</Porcentagem>}
                                            </Topo>
                                        {checkhabitos?.map(habitos => <ListaTarefa>
                                                                            <div>
                                                                                    <h2>{habitos.name}</h2>
                                                                                    <><h3>Sequ??ncia atual:<MelhorSequencia color={habitos.currentSequence === habitos.highestSequence? "#8FC549":"#666666"}> {habitos.currentSequence} dias</MelhorSequencia></h3>
                                                                                        <h3>Seu recorde: <MelhorSequencia color={habitos.currentSequence === habitos.highestSequence? "#8FC549":"#666666"}> {habitos.highestSequence} dias</MelhorSequencia></h3></>
                                                                            </div>
                                                                            <ImageCheck colorCheck={!habitos.done?"#EBEBEB":"#8FC549"} src={Check} alt="Check" onClick={() => checkHabito(habitos.id,habitos.done)}/>
                                                                        </ListaTarefa>)}
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
const Porcentagem = styled.h2`
    font-weight: 400;
    font-size: 17.976px;
    color: #8FC549;
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
            display: flex;
        }
    }
`;

const MelhorSequencia = styled.h4`
            font-weight: 400;
            font-size: 12.976px;
            color: ${props => props.color};
            margin-left: 5px;
            display: flex;
`;

const ImageCheck = styled.img`
        width: 69px;
        height: 69px;
        background-color: ${props => props.colorCheck};
        border: 1px solid #E7E7E7;
        border-radius: 5px;
        box-sizing: border-box;
        padding: 13px;
        cursor: pointer;
`;
