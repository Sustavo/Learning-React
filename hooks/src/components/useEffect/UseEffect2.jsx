import { useEffect, useState } from "react"
import Produto from "./Produto";

export default function UseEffect2() {
    const [ativo, setAtivo] = useState(false);

    return(
        <div>
            {ativo && <Produto />}
            <button onClick={() => setAtivo(!ativo)} >Ativar</button>
        </div>
    )
}