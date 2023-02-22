import { useContext, useEffect } from "react"
import { GlobalStorage } from "./GlobalContext"
import Teste from "./Teste"

export default function UseContextExercise() {    

    return(
        <GlobalStorage>
            <Teste />
        </GlobalStorage>
    )
}