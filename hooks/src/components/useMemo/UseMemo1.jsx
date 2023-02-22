import { useMemo, useState } from "react"

export default function UseMemo1() {
    const [contar, setContar] = useState(0);
    // const valor = useMemo(() => {
    //     const localStorageItem = window.localStorage.getItem('produto');
    //     console.log('So acontecerá uma vez')
    //     return localStorageItem
    // },[])
    

    const operacaoLenta = () => {
        let c;
        for(let i = 0; i < 1000000; i++) {
            c = i + i / 10
        }


        return c;
        
    }

    const t1 = performance.now();
    const valor = useMemo(() => {
        operacaoLenta();
    },[]);
    
    console.log(valor)
    console.log(performance.now() - t1);

    return(
        <div>
            <button onClick={() => setContar(contar + 1)}>{contar}</button>
        </div>
    )
}