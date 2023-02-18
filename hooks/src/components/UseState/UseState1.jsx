import { useState, useEffect } from "react";

function UseState1() {
    const [product, setProduct] = useState(null);

    const fetchApi = async (valor) => {
        try {
            const response = await fetch(
                `https://ranekapi.origamid.dev/json/api/produto/${valor}`
            ).then((response) => response.json());

            setProduct(response);
        } catch (error) {
            console.log(error);
        }
    };



    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <button onClick={() => fetchApi('tablet')}>tablet</button>
            <button onClick={() => fetchApi('smartphone')}>smartphone</button>
            <button onClick={() => fetchApi('notebook')}>notebook</button>
            {product && (
                <ul>
                    <li>{product.descricao}</li>
                    <li>{product.id}</li>
                    <li>{product.nome}</li>
                    <li>{product.preco}</li>
                    <li>{product.usuario}</li>
                </ul>
            )}
        </div>
    );
}

export default UseState1;