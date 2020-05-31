// @flow

import React from "react";

type Props = {
  source: any,
  alternativeText: string,
  className: any,
  onClick: any,
};

const Image = (props: Props) => (
  <img
    src={props.source}
    alt={props.alternativeText}
    className={props.className}
    onClick={props.onClick}
  />
);

export default Image;
