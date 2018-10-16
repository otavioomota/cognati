import React from 'react';

import {
  Grid,
  Typography
} from '@material-ui/core';

import projeto  from  './icons/001-sketch.svg';
import supervisionar from './icons/002-helmet.svg';
import ambiental  from './icons/005-eco-home.svg';
import reformas from './icons/008-hammer.svg';
import tecnico from './icons/006-drawing-tool.svg';
import orcamento from './icons/009-finance.svg';
import agrimensura  from './icons/009-agrimensura.png';
import construcao from './icons/truck.svg';

import "./Servicos.css";

const servicos = [
  {
    image: agrimensura,
    titulo:"Agrimensura"
  },
  {
    image:projeto,
    titulo:"Projetos"
  },
  {
    image: ambiental,
    titulo:"Consultoria Ambiental"
  },
  {
    image: orcamento,
    titulo:"Orçamento e Cronograma"
  },

  {
    image: tecnico,
    titulo:"Consultoria Técnica"
  },
  {
    image:supervisionar,
    titulo:"Supervisão de Obras"
  },
  {
    image:construcao,
    titulo:"Construção"
  },
  {
    image:reformas,
    titulo:"Reformas"
  }
]
const Servicos = () => {
  return(
    <div id="Servicos">
      <Typography
        variant="display2"
        className="text-uppercase"
        id="titulo"
        style={{color:""}}
        >
        Nossos Serviços
      </Typography>

      <Grid
        container
        display="flex"
        align-items-xs-flex-end
        justify="flex-start"
        align="center"
        wrap="wrap"
        style={{paddingTop:80}}
        >
          {servicos.map(servico => {
            return (
              <Grid item sm={3} xs={6}>
                <img src={servico.image} className="icons" alt="servicos"/>
                <h3>{servico.titulo}</h3>
              </Grid>
            )
          })}

      </Grid>
    </div>
  )
}

export default Servicos;
