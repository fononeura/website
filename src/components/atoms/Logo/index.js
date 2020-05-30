// @flow

import React from "react";
import logo from "../../../assets/logo.png";
import style from "./style.module.css";
import Image from "../Image";

type Props = {
  alternativeText: "Fononeura",
};

const Logo = (props: Props) => {
  return (
    <div className={style.container}>
      <Image
        source={logo}
        alternativeText={props.alternativeText}
        className={style.logo}
      />
    </div>
  );
};

export default Logo;
