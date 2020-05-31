// @flow
import React from "react";
import style from "./style.module.css";
import cover from "../../../assets/card-cover.jpg";
import Image from "../../atoms/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

type Props = {
  title: string,
};

const Card = (props: Props) => (
  <article className={style.card}>
    <header className={style.header} id="card-title">
      <h1>{props.title}</h1>
    </header>

    <section id="card-cover">
      <Image source={cover} className={style.cover} />
    </section>

    <section id="card-content" className={style.content}>
      <p>
        Sou fonoaudióloga da clínica, atuo no desenvolvimento infantil. Conheci
        a Elaine a alguns anos e desde o primeiro encontro já sabíamos que ia
        ser uma relação para a vida. Sempre pensamos em criar algo que refletia
        o que somos e o amor que sentimos pela nossa profissão. Quando ela me
        apresentou a Marcela e junto a Ju criamos ali um elo para dar corpo aos
        nossos sonhos. Acredito na parceria terapeuta/ família e no potencial de
        cada criança.
      </p>
    </section>

    <footer className={style.footer}>
      <a
        href="https://www.instagram.com/fononaneuro/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href="https://www.linkedin.com/in/andreza-vieira-65360678/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </footer>
  </article>
);

export default Card;
