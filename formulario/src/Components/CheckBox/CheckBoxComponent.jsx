import { useState } from "react";
import CheckBoxStructure from "./CheckBoxStructure";

export default function CheckBoxComponent() {
    const[linguagens, setLinguagens] = useState([]);
    
    return(
        <div>
            <form>
                <h2>CheckBox</h2>
                <CheckBoxStructure options={['JavaScript','PHP','Ruby']} value={linguagens} setValue={setLinguagens} />
            </form>
            
        </div>
    )
}