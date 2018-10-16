import React,{ Component } from 'react';

import {
  Grid,
  Typography,
} from '@material-ui/core';

import './Contato.css';
import linkedin from './Images/013-linkedin.png';
import instagram from './Images/011-instagram.png';
import email from './Images/email.png';
import telefone from './Images/telefone.png';
import endereco from './Images/endereco.png';

import Localizacao from './Map/Map';
class Contato extends Component {


  render(){
    return(
      <div>
        <Grid
          container
          justify="space-between"
          id="contato"
          >
          <Grid
            sm={6}
            xs={12}
            align="center"
            >
            {/* <Typography
              variant="display2"
              style={{color:"white"}}
              >
              Fale Conosco !
            </Typography> */}
          <div id="contatos">
            <div>
              <img
                src={email}
                style={{height:25, paddingTop:10}}
                alt=""
              />
              <Typography
                style={{color:"white",marginTop:15}}
                variant="h4"
                >
                kenderson@cognati.com.br
              </Typography>
              <Typography
                style={{color:"white",marginTop:15}}
                variant="h4"
                >
                thiago@cognati.com.br
              </Typography>
              <Typography
                style={{color:"white",marginTop:15,marginBottom:25}}
                variant="h4"
                >
                vendas@cognati.com.br
              </Typography>
            </div>
            <div >
              <img
                src={telefone}
                style={{height:25, paddingTop:10}}
                alt=""
              />
              <Typography
                style={{color:"white",marginTop:15,marginBottom:25}}
                variant="h4"
                >
                (083) 98888-8888
              </Typography>
            </div>
            <div >
              <img
                src={endereco}
                style={{height:25, paddingTop:10}}
                alt=""
              />
              <Typography
                style={{color:"white",marginTop:15}}
                >
                R. Abdias Gomes de Almeida, 800 - Tambauzinho, João Pessoa - PB, 58042-900
              </Typography>
            </div>
          </div>
          </Grid>
          <Grid
            align="center"
            sm ={6}
            xs={12}
            id="mapa"
            >
            <Localizacao />
          </Grid>
        </Grid>
        <div id="redes-sociais">
          <img
            className="sociais"
            src={linkedin}
            alt="sociais"
          />
          <a href="https://www.instagram.com/cognati_engenharia/" target="_blank" rel="noopener noreferrer">
            <img
              className="sociais"
              src={instagram}
              alt="sociais"
            />
          </a>
        </div>
      </div>
    )
  }
}

export default Contato;
