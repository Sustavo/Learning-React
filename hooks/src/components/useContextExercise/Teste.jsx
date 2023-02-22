import { useContext, useEffect } from "react"
import { GlobalContext } from "./GlobalContext"

export default function Teste() {
    const {data, getProdutos, limparDados} = useContext(GlobalContext)

    useEffect(() => {
        getProdutos()
    }, [])

    if(!data) {
        return (
            <div>
                <p>Dados Limpos</p>
                <button onClick={() => getProdutos()}>Voltar Dados</button>
            </div>
        )
    }

    return (
        <div>
            <button onClick={limparDados}>Limpar Dados</button>
            {
                data.map((item,index) => (
                    <p key={index}>{item.id}</p>
                ))
            }
        </div>
    )
}