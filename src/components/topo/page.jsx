import Link from "next/link";

import styles from "./topo.module.css"

import { FaTooth } from "react-icons/fa";

export default function Topo() {
    return (
        <div className={styles.container_topo}>
            <div className={styles.logo}>
                <FaTooth className={styles.icon_logo} />
                <span>Dentes Saudáveis</span>
            </div>
            <nav className={styles.container_links}>
                <Link className={styles.link} href="#beneficios">Benefícios</Link>
                <Link className={styles.link} href="#clientes">Nossos Clientes</Link>
                <Link className={styles.link} href="#informacao">Informações</Link>
                <Link className={styles.link} href="#localizacao">Localização</Link>
            </nav>
        </div>
    )
}