import React from 'react'
import PropTypes from 'prop-types';
import style from './style.module.css';
import logo from '../../assets/icone-sem-fundo.png';

const ContentWithHeaderAndFooter = ({children}) =>{
return (
    <div className={style.content}>
        <header className={style.header}>
            <div className={style.logo}>
                <img src={logo} alt="Fononeura logo. Retorna para página principal"/>
            </div>
        </header>
        <main className={style.main}>
            {children}
        </main>
        <footer className={style.footer}>
            {`©${new Date().getFullYear()} Fononeura`}
        </footer>
    </div>
    );
};

ContentWithHeaderAndFooter.propTypes = {
    children: PropTypes.any,
};

export default ContentWithHeaderAndFooter;
