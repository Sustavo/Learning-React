import { NavLink } from "react-router-dom";
import Head from "../head/Head";
import { Helmet } from "react-helmet";


export default function Home() {
    return(
        <div>
            {/* <Head title="Home" descriptions="Essa é a descrição da home"/> */}
            <Helmet>
                <title>Dogs | Home</title>
                <meta name="description" content="Essa é a descrição da home"/>
            </Helmet>
            <h1>Home</h1>
            <p>Essa é a home</p>
            <NavLink to="produto/notebook">Notebook</NavLink> | {' '}
            <NavLink to="produto/smartphone">Smartphone</NavLink>
        </div>
    )
}