import styles from "./card.module.css"

export default function CardInfo(props){
    return(
        <div className={styles.container_card}>
            <h3>Informações</h3>
            <div className={styles.info}>
                {props.children}
            </div>
        </div>
    )
}