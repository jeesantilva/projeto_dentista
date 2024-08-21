// importando imagens
import Image from "next/image";
import Aparelho from "/public/aparelho.png"
import Cliente01 from "/public/cliente01.png"
import Cliente02 from "/public/cliente02.png";
import Cliente03 from "/public/cliente03.png";
import Dentista01 from "/public/dentista01.png";
import Dentista02 from "/public/dentista02.png";
// importando CSS
import styles from "./page.module.css";
import { FaTooth } from "react-icons/fa";
// importando componentes
import Topo from "../components/topo/page"
import CardClientes from "@/components/cards_clientes/page";
import CardInfo from "@/components/cards_info/page";
import Footer from "@/components/footer/page";

export default function Home() {
  return (
    <div className={styles.body}>
      <Topo />
      <header className={styles.header}>
        <h1>Os melhores <span>aparelhos dentários</span></h1>
        <h2>Confira abaixo todas as especialidades odontologicas que temos à sua disposição!</h2>
        <div className={styles.especialidades}>
          <ul>
            <li>
              <FaTooth className={styles.icon} />
              <p>Pré-avaliação</p>
            </li>
            <li>
              <FaTooth className={styles.icon} />
              <p>Raio-X digital</p>
            </li>
          </ul>
          <ul>
            <li>
              <FaTooth className={styles.icon} />
              <p>Aparelhos Dentários</p>
            </li>
            <li>
              <FaTooth className={styles.icon} />
              <p>Clareamento dental</p>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <section className={styles.container_principal} id="beneficios">
          <h3 className={styles.titulo_container}>Por que usar <span>aparelho?</span></h3>
          <Image className={styles.img_beneficios} src={Aparelho} />
          <div className={styles.beneficios}>
            <div>
              <h3>Alinhar os dentes</h3>
              <p>Dentes desalinhados causam problemas nos dentes e podem afetar a digestão dos alimentos e a respiração.</p>
            </div>
            <div>
              <h3>Melhorar a dicção e a higiene dentária</h3>
              <p>Muitas pessoas não conseguem nem usar fio dental devido à posição
                da sua dentição. Contudo, a correção possibilita o cuidado com a
                saúde bucal de forma bem mais ampla.</p>
            </div>
            <div>
              <h3>Corrigir espaço entre os dentes</h3>
              <p>Uma dentição desalinhada e com espaços significativos incomodam
                muitas pessoas. Usar aparelho nos dentes é uma das formas mais
                eficientes para que esses problemas possam ser corrigidos.</p>
            </div>
          </div>
        </section>
        <section className={styles.container_principal} id="clientes">
          <h2 className={styles.titulo_container}>Veja o que nossos <span>clientes</span> estão falando...</h2>
          <div className={styles.container_cards}>
            <CardClientes
              imagem={Cliente01}
              nome={"Alberto"}
              depoimento={"Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado."}
            />
            <CardClientes
              imagem={Cliente02}
              nome={"Alberto"}
              depoimento={"Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado."}
            />
            <CardClientes
              imagem={Cliente03}
              nome={"Alberto"}
              depoimento={"Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado."}
            />
          </div>
        </section>
        <section className={styles.container_principal} id="informacao">
          <div className={styles.cards_info}>
            <CardInfo>
              <ul className={styles.lista_horarios}>
                <li>Segunda - 09:00 às 18:00</li>
                <li>Terça - 09:00 às 18:00</li>
                <li>Quarta - 09:00 às 18:00</li>
                <li>Quinta - 09:00 às 18:00</li>
                <li>Sexta - 09:00 às 17:00</li>
                <li>Sábado - 09:00 às 12:00</li>
              </ul>
            </CardInfo>
            <CardInfo>
              <div className={styles.card_dentista}>
                <figure>
                  <Image className={styles.img_dentista} src={Dentista01} />
                </figure>
                <div>
                  <p>Dra. Ana - Ortodontista</p>
                  <p>Segundas e sextas</p>
                </div>
              </div>
              <div className={styles.card_dentista}>
                <figure>
                  <Image className={styles.img_dentista} src={Dentista02} />
                </figure>
                <div>
                  <p>Dr. Carlos - Endodontia</p>
                  <p>Terças e quartas</p>
                </div>
              </div>
            </CardInfo>
            <CardInfo>
              <p>Ligue para agendar uma consulta:</p>
              <p>(21) 3699 - 9999</p>
              <p>(21) 97788 - 5566</p>
            </CardInfo>
          </div>

        </section>
        <section className={styles.container_principal} id="localizacao">

          <h2 className={styles.titulo_container}>
            Onde estamos <span>localizados?</span>
          </h2>
          <p>
            Av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro - RJ. CEP:
            22775-904
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29385.675969309108!2d-43.384802570898614!3d-22.979322563917293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2c2293fa63%3A0x539cb07246f0e38d!2sVia%20Parque%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1611596986401!5m2!1spt-BR!2sbr"
            width="100%"
            height="350"
          ></iframe>

        </section>
        <Footer/>


      </main>
    </div>
  );
}
