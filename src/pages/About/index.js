import React from "react";
import ContentWithHeaderAndFooter from "../../templates/ContentWithHeaderAndFooter";
import style from "./style.module.css";
import Card from "../../components/molecules/Card";

const About = () => (
  <ContentWithHeaderAndFooter>
    <div className={style.content}>
      <Card title="Andreza Vieira" />
    </div>
  </ContentWithHeaderAndFooter>
);

export default About;
