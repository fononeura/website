import React from "react";
import ContentWithHeaderAndFooter from "../../templates/ContentWithHeaderAndFooter";
import style from "./style.module.css";

const Home = () => {
  return (
    <ContentWithHeaderAndFooter>
      <div className={style.background} />
    </ContentWithHeaderAndFooter>
  );
};

export default Home;
