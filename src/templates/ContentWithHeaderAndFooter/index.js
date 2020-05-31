// @flow

import React from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";
import Header from "../../components/molecules/Header";
import Footer from "../../components/molecules/Footer";
import Menu from "../../components/molecules/Menu";
import type { MenuItem } from "../../components/molecules/Menu/types";

const menuItems: Array<MenuItem> = [
  { name: "Home", path: "/" },
  { name: "Sobre", path: "/sobre" },
];

const ContentWithHeaderAndFooter = ({ children }) => (
  <div className={style.content}>
    <Header>
      <Menu menuItems={menuItems} />
    </Header>
    <main className={style.main}>{children}</main>
    <Footer>{`©${new Date().getFullYear()} Fononaneuro`}</Footer>
  </div>
);

ContentWithHeaderAndFooter.propTypes = {
  children: PropTypes.any,
};

export default ContentWithHeaderAndFooter;
