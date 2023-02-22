import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
    const [data, setData] = useState(null);

    const getProdutos = async () => {
        const response = await fetch('https://ranekapi.origamid.dev/json/api/produto/')
        .then((response) => response.json());
        setData(response)
    }

    const limparDados = () => {
        setData(null)
    }

    return <GlobalContext.Provider value={{getProdutos, limparDados, data, setData}}>{children}</GlobalContext.Provider>
}