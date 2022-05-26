import Conteudos from "./conteudos";


export default function TelaHabitos (props){
    let { dadosUsuario } = props;
    console.log(dadosUsuario);

    return(
        <Conteudos>
            <h1>Eu sou a tela de habitos</h1>
        </Conteudos>
    )
}