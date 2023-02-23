import { useState } from "react"

export default function CheckBox() {
    const[termos, setTermos] = useState(false);
    return(
        <div>
            <form>
                <label>
                    <input type="checkbox" value="Termos" checked={termos} onChange={({target}) => setTermos(target.checked)} />
                    Aceito os termos
                </label>
            </form>
        </div>
    )
}