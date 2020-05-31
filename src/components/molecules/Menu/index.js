// @flow
import React from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";

const Menu = () => (
  <>
    <section className={style.label}>
      <label>&#9776;</label>
    </section>
    <section className={style.navbar}>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </section>
  </>
);

Menu.propTypes = {
  children: PropTypes.any,
};

export default Menu;
