import Produto from "./Produto";
import { GlobalStorage } from "./GlobalContext";

export default function UseContext1() {
    
    return(
        <GlobalStorage>
            <Produto />
        </GlobalStorage>
    )
}