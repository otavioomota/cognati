import React from 'react';

import {
  Grid,
  Typography
} from '@material-ui/core';

import bandeira from './bandeira2.png';
import diamante from './diamante.png';
import objetivo from './objetivo.png';

import "./QuemSomos.css";

const textos = [
  {
    title:"Nossa Missão",
    descricao:"Fornecer produtos de excelência trabalhando pelo resultado e pela prosperidade do nosso time",
    image: bandeira
  },
  {
    title:"Nosso Objetivo",
    descricao:"Ser referência como marca inspirando pessoas com nossa cultura.",
    image:objetivo
  },
  {
    title:"Nossos Valores",
    descricao:"Cooperação, Versatilidade, Conectividade e Empreendedorismo.",
    image: diamante
  }
]

const QuemSomos =  () =>  {
  return(
      <Grid
        container
        display="flex"
        justify="center"
        id="QuemSomos"
        >
        <Grid
          sm
          display="flex"
          justify="center"
          id="QuemSomos-image-div"
          >
          <div id="quem-somos-box">
            <img
              src="https://images.pexels.com/photos/1059120/pexels-photo-1059120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              id="QuemSomos-image"
              alt="empresa"

            />
          </div>

        </Grid>
        <Grid
          sm
          id="QuemSomos-texto"
          >
          <Typography
            variant="display2"
            className="text-uppercase"
            id="titulo"
            >
            Quem Somos
          </Typography>
          <Typography
              variant="subheading"
              id="QuemSomos-historia"
              className="text-uppercase"
              id="titulo"
            >
            Nossa História
          </Typography>
          <Typography
              variant="body2"
              align="justify"
              paragraph
            >
            A Cognati Engenharia  Ltda. foi fundada em 25 de Abril de 1985, sob a iniciativa dos engenheiros Celso de Souza Macedo e Luiz Gonzaga Sant’Anna Lorentz que compartilhavam o desejo recíproco de elevar o padrão da construção civil mineira e tornar essa a empresa referência para os seus colaboradores e clientes. Mediante a esse propósito, a Alcance Engenharia consolidou sua posição de destaque no mercado da construção civil como empreiteira de tradição do nordeste de Minas Gerais, e ao longo dos seus anos de atuação a realização de importantes empreendimentos ...
          </Typography>
          <div>

              {textos.map( texto => {
                return(

                  <Grid
                   container
                   direction="row"
                   display="flex"
                   justify="flex-start"
                   wrap="nowrap"
                   alignItems="center"
                   >

                   <Grid
                     item
                     style={{paddingBottom: 10}}
                     >
                     <div className="circle">
                       <img src={texto.image} style={{height:25,width:"auto"}} className="figura" alt=""/>
                     </div>
                   </Grid>
                   <Grid item style={{marginLeft: 6}}>
                     <Typography
                       variant="subheading"
                       className="text-uppercase"
                       id="titulo"
                       >
                       {texto.title}
                     </Typography>

                     <Typography
                       paragraph
                       align="justify"
                       >
                         {texto.descricao}
                     </Typography>
                   </Grid>
                 </Grid>
                )
            })}

          </div>
        </Grid>
      </Grid>
  )
};

export default QuemSomos;
