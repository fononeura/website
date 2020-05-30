import React from 'react'
import PropTypes from 'prop-types';
import style from './style.module.css';
import Header from '../../components/molecules/Header';
import Footer from '../../components/molecules/Footer';

const ContentWithHeaderAndFooter = ({children}) =>{
return (
    <div className={style.content}>
         <Header />
        <main className={style.main}>
            {children}
        </main>
        <Footer>
            {`©${new Date().getFullYear()} Fononaneura`}
        </Footer>
    </div>
    );
};

ContentWithHeaderAndFooter.propTypes = {
    children: PropTypes.any,
};

export default ContentWithHeaderAndFooter;
