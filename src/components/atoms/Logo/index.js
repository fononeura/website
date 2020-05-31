// @flow

import React from "react";
import logo from "../../../assets/logo.png";
import style from "./style.module.css";
import Image from "../Image";
import { withRouter } from "react-router-dom";

type Props = {
  alternativeText: "Fononeura",
  history: any,
};

const Logo = (props: Props) => {
  return (
    <div className={style.container}>
      <Image
        source={logo}
        alternativeText={props.alternativeText}
        className={style.logo}
        onClick={() => props.history.push("/")}
      />
    </div>
  );
};

export default withRouter(Logo);
