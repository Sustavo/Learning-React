import { NavLink, useLocation } from "react-router-dom"
import './Header.css'
import { useEffect } from "react";

export default function Header() {
    const location = useLocation();

    useEffect(() => {
        console.log('Mudou a rota')
    }, [location])

    return(
        <nav>
            <NavLink activeStyle={{color: 'tomato'}} to="/" end>Home</NavLink> |{' '}
            <NavLink activeStyle={{color: 'tomato'}} to="sobre">Sobre</NavLink>|{' '}
            <NavLink activeStyle={{color: 'tomato'}} to="login">Login</NavLink>
            <p>Esse é o header</p>
        </nav>
    )
}