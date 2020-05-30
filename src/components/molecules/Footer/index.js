import React from 'react'
import PropTypes from 'prop-types';
import style from './style.module.css';

const Footer = ({children}) => {
return (
    <footer className={style.footer}>
        {children}
    </footer>
    );
};

Footer.propTypes = {
    children: PropTypes.any,
};

export default Footer;
