import styles from './Produto.module.css'

console.log(styles)

export default function Produto() {

    return(
        <div>
            <h1 className={styles.titulo}>Notebook</h1>
            <p className={styles.preco}>R$ 20000</p>
            <button className={styles.comprar}>Comprar</button>
        </div>
    )
}