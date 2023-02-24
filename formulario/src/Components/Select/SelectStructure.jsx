import { useState } from "react";
import SelectComponent from "./SelectComponent";

export default function SelectStructure() {
    const[produto, setProduto] = useState('');

    return(
        <div>
            <SelectComponent options={['smarthphone', 'tablet','awa']} value={produto} setValue={setProduto} />
        </div>
    )
}