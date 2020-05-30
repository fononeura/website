// @flow

import React from 'react'

type Props = {
    source: any,
    alternativeText: string,
    className: any,
};

const Image = (props: Props) => <img src={props.source} alt={props.alternativeText} className={props.className}/>

export default Image;