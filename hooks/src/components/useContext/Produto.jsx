import { useContext } from "react"
import { GlobalContext } from "./GlobalContext"

export default function Produto() {
    const {setContar, contar} = useContext(GlobalContext)

    return(
        <div>
            <button onClick={() => setContar(contar => contar + 1)}>{contar}</button>
        </div>
    )
}