import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()

    const handleClick = () => {
        console.log('Fez fatch');
        navigate('/sobre')
    }

    return(
        <div>
            <h1>Login</h1>
            <button onClick={handleClick}>Login</button>
        </div>
    )
}