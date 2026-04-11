import * as React from 'react';
import { Card, CardContent, CardMedia, Box } from '@mui/material';
import InformationalText from '../informationalText';

const PhotoGard = () => {
  return (
    <Card
      sx={{
        display: 'flex', // Ativa o Flexbox
        width: 800, // Largura fixa que você definiu
        height: 400, // Altura fixa
        marginTop: '60px',
        marginX: 'auto', // Centraliza horizontalmente
        borderRadius: '20px',
        border: '4px solid #00FA9A',
        overflow: 'hidden',
      }}
    >
      {/* Lado Esquerdo: Imagem */}
      <CardMedia
        component='img'
        sx={{
          width: '50%', // Ocupa metade do Card
          objectFit: 'cover',
        }}
        image='/FotoPrincipal.jpeg'
        alt='Foto Principal'
      />

      {/* Lado Direito: Texto */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%', // Ocupa a outra metade
        }}
      >
        <CardContent
          sx={{
            flex: '1 0 auto',
            overflowY: 'auto',
            height: '100%',
            padding: '20px',
          }}
        >
          <InformationalText
            title='Pedro Arthur Ferreira Resende, 22 anos, residente em Sabará, Minas
        Gerais, é um desenvolvedor Full Stack Júnior com foco em evolução
        contínua e excelência técnica. Atualmente, integra a equipe de
        tecnologia da empresa Se7loc, especializada em terceirização de frotas
        para os setores de mineração, energia e agropecuária. No ambiente
        corporativo, atua diretamente no time interno de tecnologia, sendo
        responsável pelo desenvolvimento, manutenção e aprimoramento de sistemas
        estratégicos da empresa, com destaque para o SeteOps. Seu trabalho
        envolve a implementação de melhorias contínuas, otimização de processos
        e aplicação de soluções voltadas à escalabilidade e eficiência dos
        sistemas, contribuindo diretamente para a inovação e crescimento
        tecnológico da organização. Paralelamente à sua atuação profissional,
        cursa o quinto período de Ciência da Computação pela Universidade UNA,
        consolidando sua base teórica e ampliando suas competências técnicas.
        Sua trajetória é marcada pelo comprometimento com o aprendizado
        constante e pela busca por soluções modernas e eficazes no
        desenvolvimento de software. Com uma visão orientada ao futuro, Pedro
        Arthur tem como objetivo alcançar grandes conquistas profissionais,
        consolidando-se como um profissional de referência na área de
        tecnologia, sempre alinhado às melhores práticas do mercado e à entrega
        de resultados de alto impacto.'
          />
        </CardContent>
      </Box>
    </Card>
  );
};

export default PhotoGard;
