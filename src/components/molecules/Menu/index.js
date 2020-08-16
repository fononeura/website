// @flow
import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import type { MenuItem } from "./types";

const renderMenuItems = (items: Array<MenuItem>) => {
  return items.map((menuItem) => (
    <li>
      <Link to={menuItem.path}>{menuItem.name}</Link>
    </li>
  ));
};

type Props = {
  menuItems: Array<MenuItem>,
};

const Menu = (props: Props) => (
  <>
    <section className={style.bt_menu}>
      <input type="checkbox" id="bt_menu" />
      <label hmtlFor="bt_menu">&#9776;</label>
    </section>
    <section className={style.navbar}>
      <nav>
        <ul>{renderMenuItems(props.menuItems)}</ul>
      </nav>
    </section>
  </>
);

export default Menu;
