export default function ProddutoExercise({ data }) {
    
    return(
        <div>
            <h1>{data.nome}</h1>
            <p>R$ {data.preco}</p>
        </div>
    )
}