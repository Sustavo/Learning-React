import useLocalStorage from './useLocalStorage/useLocalStorage'

export default function CustomHook() {
    const [produto, setProduto] = useLocalStorage('produto', '')

    const handleClick = ({target}) => {
        setProduto(target.innerText);
    }

    return(
        <div>
            <p>Produto Preferido: {produto}</p>
            <button onClick={handleClick}>Notebook</button>
            <button onClick={handleClick}>SmartPhone</button>
        </div>
    )
}