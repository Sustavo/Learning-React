import { useEffect } from "react"

export default function Produto() {

    useEffect(() => {
        const handleScroll = (scroll) => {
            console.log(scroll)
        }
    
        window.addEventListener('scroll', handleScroll)
        return() => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    

    return(
        <div style={{height: '200vh'}}>
            <p>meu produto</p>
        </div>
    )
}