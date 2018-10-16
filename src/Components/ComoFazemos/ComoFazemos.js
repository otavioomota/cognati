import React from 'react';

import {
  Grid,
  Typography
} from '@material-ui/core';
import './ComoFazemos.css';

import calendario from './Images/001-calendar.png';
import reuniao from './Images/002-student.png';
import executar from './Images/003-brick.png';
import casa from './Images/004-house.png';

const styles ={
  titulo:{
    color:"black",
    fontWeight:700,
    paddingTop:25,
    paddingBottom:20
  },
  texto:{
    marginRight:30,
    marginLeft:30
  }
}
const ComoFazemos = () => {
  return(
    <div
      id="comofazemos"
      >
      <Grid
        container
        align="center"
        justify="center"
        >
        <Grid
          sm={3}
          xs={12}
          className="quadro"
          >
          <img className="img" src={calendario} alt=""/>
          <Typography
            variant="display1"
            style={styles.titulo}
            >
            Planejamos
          </Typography>
          <Typography
            paragraphy
            style={styles.texto}
            >
            A primeira etapa de serviço, o planejamento auxilia na redução de custos e prazos, otimizando os procedimentos.
          </Typography>
        </Grid>
        <Grid
          sm={3}
          xs={12}
          className="quadro"
          style={{background:"rgba(232,231,231,1)"}}
          >
            <img className="img" src={reuniao} alt=""/>
          <Typography
            variant="display1"
            style={styles.titulo}
            >
            Acompanhamos
          </Typography>
          <Typography
            paragraphy
            style={styles.texto}
            >
            A Dinâmica da uma obra exige atualização do Cliente, Fornecedor e Empresa, e a Cognati dispõe de ferramentas e métodos para tornar esse processo rápido e eficiente.
          </Typography>
        </Grid>
        <Grid
          sm={3}
          xs={12}
          className="quadro"
          style={{background:"rgba(151,150,150,1)"}}
          >
            <img className="img" src={executar} alt=""/>
          <Typography
            variant="display1"
            style={styles.titulo}
            >
            Executamos
          </Typography>
          <Typography
            paragraphy
            style={styles.texto}
            >
              Mãos a Obra! É Hora de por em prática tudo o que foi Planejado com o auxílio dos nossos profissionais qualificados.
          </Typography>
        </Grid>
        <Grid
          sm={3}
          xs={12}
          className="quadro"
          style={{background:"rgba(91,91,91,1)"}}
          >
              <img className="img" src={casa} alt=""/>
            <Typography
              variant="display1"
              style={styles.titulo}
              >
              Entregamos
            </Typography>
            <Typography
              paragraphy
              style={styles.texto}
              >
              Buscamos gerar a maior satisfação de nossos clientes e parceiros, por isso entregamos um produto com qualidade e segurança para você.
            </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default ComoFazemos;
