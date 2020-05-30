// @flow
import React from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";
import Logo from "../../atoms/Logo";

const Header = ({ children }) => (
  <header className={style.header}>
    <Logo
      alternativeText="Fononaneura logo. Retorna para página principal"
    />
    <div>{children}</div>
  </header>
);

Header.propTypes = {
  children: PropTypes.any,
};

export default Header;
