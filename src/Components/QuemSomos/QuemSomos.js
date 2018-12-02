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
    descricao: `Desenvolver e executar  projetos e obras de alto impacto no âmbito da engenharia e arquitetura, visando a satisfação dos nossos clientes, com a entrega de produtos diferenciados, respeitando o meio ambiente e contribuindo
                para a melhoria contínua das obras sobre nossa gestão.`,
    image: bandeira
  },
  {
    title:"Nosso Objetivo",
    descricao:`Ser referencia na área de atuação, junto aos órgãos de fomento e para
              nossos clientes, na construção de uma relação de confiabilidade,
              embasada na ética profissional.`,
    image:objetivo
  },
  {
    title:"Nossos Valores",
    descricao:`Criatividade e inovação, Competitividade, Satisfação dos clientes, Transparência e Respeito ao meio ambiente`,
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

            A COGNATI ENGENHARIA é uma empresa jovem, atuante no mercado desde 2017, no desenvolvimento de projetos, execução de obras, e reformas. Para isso, contemplamos diversos segmentos da engenharia.
            Formada por uma equipe diversificada, e principalmente  qualificada, contamos com engenheiros ambientais, civis, e arquitetos.
            Com a aplicação de conhecimentos técnicos e princípios éticos, e o desenvolvimento permanente da equipe e dos processos produtivos, disponilizamos para os nossos contratantes as mais modernas tecnologias para concepção, detalhamento e gerenciamento de soluções da engenharia.
            Acima de tudo, somos uma empresa comprometida com a qualidade na prestação de nossos serviços, e contentamento de nossos clientes, afim de estabelecer um excelente nível de satisfação e consolidar a qualidade desse vínculo.
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
