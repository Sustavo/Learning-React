import { useState } from "react";

function UseState1() {
    const [ativo, setAtivo] = useState(false);
    const [data, setData] = useState({
        nome: "Gustavo",
        idade: '19'
    })
    const handleClick = () => {
        setAtivo(!ativo)
        setData({...data, faculdade: 'Possui Faculdade'})
    }

    return(
        <div>
            <p>{data.nome}</p>
            <p>{data.idade}</p>
            <p>{data.faculdade}</p>
            <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
        </div>
    )
}

export default UseState1;