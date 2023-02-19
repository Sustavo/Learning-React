import { useEffect, useState } from "react"

export default function UseEffect1() {
    const [contar, setContar] = useState(1);

    const handleClick = () => {
        setContar((contar) => contar + 1)
    }


    useEffect(() => {
        console.log('executou')
        document.title = 'Total' + contar
    }, [contar])

    return(
        <div>
            <button style={{padding: '10px'}} onClick={() => setContar(contar + 1)}>{contar}</button>
        </div>
    )
}