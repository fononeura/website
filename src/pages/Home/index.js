import React from 'react'
import ContentWithHeaderAndFooter from '../../templates/ContentWithHeaderAndFooter';
import style from './style.module.css';
import bg from '../../logo-principal.png';

const Home = () => {
return( <ContentWithHeaderAndFooter> 
        <div className={style.home}>
            <img src={bg} alt=""/>
        </div>
        </ContentWithHeaderAndFooter>
      )
}

export default Home;