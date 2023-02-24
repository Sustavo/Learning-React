import { useState } from "react";
import RadioStructure from "./RadioStructure";

export default function RadioComponent() {
    const [cor, setCor] = useState('');

    return(
        <div>
            <RadioStructure  options={['azul','vermelho','preto']} value={cor} setValue={setCor}  />
        </div>
    )
}