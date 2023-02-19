import { useEffect, useRef, useState } from "react"

export default function UseRef1() {
    const [comentarios, setComentarios] = useState([]);
    const [input, setInput] = useState('');
    
    const handleClick = () => {
        if(input != '') {
            setComentarios([...comentarios, input]);
            setInput('')
        }
    }

    useEffect(() => {
    })
    return(
        <div>
            <ul>
                {comentarios.map((comentario, index) => <li key={index}>{comentario}</li>)}
            </ul>
            <input type="text" value={input} onChange={({target}) => setInput(target.value)} />
            <button onClick={handleClick}>Enviar</button>
        </div>
    )
}
