import { useState } from "react";

function UseState1() {
    const [contar, setContar] = useState(1);
    const [itens, setItens] = useState(['Item 1']);

    const handleClick = () => {
        setContar(contar + 1)
        setItens([...itens, 'Item' + (contar + 1)])
    }

    return(
        <div>
            {itens.map((item) => (
                <li key={item}>{item}</li>
            ))}
            <button style={{padding: '10px'}} onClick={handleClick}>{contar}</button>
        </div>
    )

}

export default UseState1;