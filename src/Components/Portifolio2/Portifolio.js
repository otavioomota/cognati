import React from 'react';

import {
  Grid,
  Typography
} from '@material-ui/core';

import Carousel from './Carousel/Carousel';
import './Portifolio.css';



const Portifolio = ()  => {
  return (
    <div id="portifolio">
      <div id="portifolio-titulo">
        <Typography
          variant="display2"
          className="text-uppercase"
          id="titulo"
          style={{paddingLeft:25}}
          >
          Portifólio
        </Typography>
        <Typography
          variant="subheading"
          id="titulo"
          className="text-uppercase"
          style={{paddingTop:5,paddingLeft:50}}
          >
          Dos Nossos Colaboradores
        </Typography>
      </div>
      <Grid
        container
        alignItems="flex-start"
        justify="center"
        style={{height:530}}
        >
        <Grid
          sm={8}
          xs={12}>
          <Carousel />
        </Grid>
      </Grid>

    </div>
  )
}

export default Portifolio;
