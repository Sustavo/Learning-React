import { NavLink, useLocation, useParams, Outlet } from "react-router-dom"


export default function Produto() {
    const params = useParams();
    const location = useLocation();
    console.log(location);
    const search = new URLSearchParams(location.search);
    console.log(search.get('q'))
    
    return(
        <div>
            <h1>Produto: {params.id}</h1>
            <nav>
                <NavLink to="">Descrição</NavLink> | {" "}
                <NavLink to="avaliacao">Avaliação</NavLink> | {" "}
                <NavLink to="customizado">Descrição</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}