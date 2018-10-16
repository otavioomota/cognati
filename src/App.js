import React, { Component } from 'react';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import QuemSomos from './Components/QuemSomos/QuemSomos';
import Servicos  from './Components/Servicos/Servicos';
import ComoFazemos  from './Components/ComoFazemos/ComoFazemos';
import Portifolio from './Components/Portifolio2/Portifolio';
import Contato from './Components/Contato/Contato';

import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Navbar />
        <section id='inicio'>
          <Home />
        </section>
        <section id='quemsomos'>
          <QuemSomos />
        </section>
        <section id='servico'>
          <Servicos />
        </section>
        <section id="comofazemos">
          <ComoFazemos />
        </section>
        <section id="portifolio">
          <Portifolio />
        </section>
        <section>
          <Contato />
        </section>
      </div>
    );
  }
}

export default App;
