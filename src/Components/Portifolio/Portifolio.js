import React, {Component} from 'react';

import {
  Grid,
  Typography
} from '@material-ui/core';

import Carousel from './Carousel/Carousel';

import './Portifolio.css';

import der from './Images/der.jpg';
import gaspar from './Images/gaspar.jpg';
import maia from './Images/maia.jpg';
import multipla from './Images/multipla.jpg';
import real from './Images/real.jpg';
import suplan from './Images/suplan.jpg';

const urlImages = [
  der,
  gaspar,
  maia,multipla,
  real,
  suplan
]

const Portifolio = ()  => {
  return (
    <div>
      <div id="portifolio">
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
        flex
        wrap="wrap"
        justify="space-between"

        >
        <Grid
          container
          justify="center"
          alignItems="center"

          sm={4}
          xl={12}
          xs={12}
          >
          {urlImages.map(image => {
            return (
              <Grid sm={6} xl={6}>
                <img src={image} className="empresas"/>
              </Grid>
            )
          })}
        </Grid>
        <Grid
          sm={7}
          xs={12}>
          <div id="carousel">
            <Carousel  />
          </div>
        </Grid>
      </Grid>
      {/* <Grid
        container
        flex
        alignContent ="space-between"
        justify="space-between"
        >
        <Grid
          flex
          direction="row"
          align="center"
          container
          sm={4}
          xl={12}
           >
          {urlImages.map(image => {
            return (
              <Grid  sm={6} xl={6}>
                <img src={image} className="empresas"/>
              </Grid>
            )
          })}
        </Grid>
        <Grid sm xl={12}>
          <Carousel />
        </Grid>
      </Grid> */}
    </div>
  )
}

export default Portifolio;
