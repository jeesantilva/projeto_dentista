import Image from "next/image"
import styles from "./cards.module.css"

export default function CardClientes(props) {
    return (
        <div className={styles.container_card}>
            <div className={styles.container_img}>
                <Image className={styles.imagem} src={props.imagem} alt={props.nome} />
            </div>
            <div className={styles.container_text_card}>
                <h3>{props.nome}</h3>
                <p>{props.depoimento}</p>
            </div>
        </div>
    )
}