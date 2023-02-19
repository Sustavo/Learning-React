import { useEffect, useState } from "react"

export default function UseEffect1() {
    const [contar, setContar] = useState(0);
    const [dados, setDados] = useState(null);

    useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
        .then((response) => response.json())
        .then((json) => setDados(json));

    }, [])
    console.log(dados)

    return(
        <div>
            {dados && (
                <div>
                    <h1>{dados.nome}</h1>
                    <p>R$ {dados.preco * contar}</p>
                </div>
            )}
            <button style={{padding: '10px'}} onClick={() => setContar(contar + 1)}>{contar}</button>
        </div>
    )
}