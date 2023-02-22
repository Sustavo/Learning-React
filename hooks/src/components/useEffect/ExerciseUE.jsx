import { useEffect, useState } from "react"
import ProdutoExercise from "./ProdutoExercise";

export default function ExerciseUE() {
    const [data, setData] = useState(null);

    const fetchData = async (valor) => {
        try {
            const response = await fetch(
              `https://ranekapi.origamid.dev/json/api/produto/${valor}`
            ).then((response) => response.json());
      
            setData(response);
            localStorage.setItem('produto', JSON.stringify(response.id));
          } catch (error) {
            console.log(error);
          }
    }

    useEffect(() => {
        const storageValue = localStorage.getItem("produto");
        if(storageValue) {
            fetchData(storageValue.replace(/"/g, ''))
        }
    },[])

    return(
        <div>
            <h1>Preferência: {data && data.nome}</h1>
            <button onClick={() => fetchData('notebook')}>Notebook</button>
            <button onClick={() => fetchData('smartphone')}>SmartPhone</button>
            {data && <ProdutoExercise data={data} />}
        </div>
    )
}