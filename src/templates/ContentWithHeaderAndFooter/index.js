import React from 'react'
import PropTypes from 'prop-types';
import {Layout} from 'antd'
import style from './style.module.css';
import logo from '../../assets/icone-sem-fundo.png';

const { Header, Content, Footer } = Layout;

const ContentWithHeaderAndFooter = ({children, size}) =>{
return (
        <Layout className={style.content}>
            <Header className={style.header}>
                <div className={style.logo}>
                    <img src={logo} alt="Fononeura logo. Retorna para página principal"/>
                </div>
            </Header>
            <Content className={style.content}>
                    {children}
            </Content>
            <Footer className={style.footer}>
                {`©${new Date().getFullYear()} Fononeura`}
            </Footer>
        </Layout>
    );
};

ContentWithHeaderAndFooter.propTypes = {
    children: PropTypes.any,
    size: PropTypes.oneOf(['medium', 'large']),
};

ContentWithHeaderAndFooter.defaultProps = {
    size: 'large',
  };
export default ContentWithHeaderAndFooter;
