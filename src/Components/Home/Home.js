import React from 'react';

import './Home.css';
import cognati from './cognati.png';
import background from './background1.jpeg';

const Home = ()  => {
  return (

          <div id="logo">
            <img src={cognati} id="myImg"  className="responsive" alt="logo"/>
            <img  className="banner " src={background} alt=""/>
          </div>
  )
}

export default Home;
