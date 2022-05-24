import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaLogin />}/>
                <Route path="/cadastro" element={<TelaCadastro />}/>
            </Routes>
        </BrowserRouter>
    )
}
