import { Grid, Box, Divider } from '@mui/material';
import InformationalText from '@/components/InformationalText/index.jsx';

const PaintingAboutMe = () => {
  return (
    <>
      <Box display='flex'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            marginLeft: '25px',
          }}
        >
          <InformationalText
            title='Sobre mim'
            fontSize='50px'
            colorText='white'
            fontFamily='montserrat, sans-serif'
            fontWeight='700'
          />
          <Divider
            orientation='horizontal'
            flexItem
            sx={{ backgroundColor: 'white' }}
          />

          <InformationalText
            title='Desenvolvedor de Software em início de carreira, apaixonado por transformar ideias em soluções digitais eficientes. Com foco em aprendizado contínuo e nas melhores práticas do mercado, busco constantemente explorar novas tecnologias para enfrentar desafios e entregar aplicações que gerem impacto real.'
            fontFamily='system-ui'
            colorText='white'
            fontSize='15px'
          />
        </Box>
        <Grid container sx={{ marginTop: '1px' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginTop: '50px',
              border: '2px solid',
              borderColor: '#162E93',
              borderRadius: '10px',
              width: '810px',
              height: '170px',
              marginLeft: '25px',
              paddingLeft: '15px',
              cursor: 'pointer',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.04)',
                borderColor: '#162E93',
              },
            }}
          >
            <InformationalText
              title='Interesses'
              fontSize='25px'
              colorText='white'
              fontFamily='montserrat, sans-serif'
              fontWeight='700'
            />
            <InformationalText
              title='Tenho como interesse aprimorar minhas habilidades como desenvolvedor e estar em constante evolução profissional, buscando sempre novos conhecimentos e desafios.'
              fontSize='15px'
              fontFamily='system-ui'
              colorText='white'
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginTop: '50px',
              border: '2px solid',
              borderColor: '#162E93',
              borderRadius: '10px',
              width: '810px',
              height: '170px',
              marginLeft: '25px',
              paddingLeft: '15px',
              cursor: 'pointer',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.04)',
                borderColor: '#162E93',
              },
            }}
          >
            <InformationalText
              title='Objetivos'
              fontSize='25px'
              colorText='white'
              fontFamily='montserrat, sans-serif'
              fontWeight='700'
            />
            <InformationalText
              title='Em busca de desafios que exijam soluções técnicas sofisticadas. Tenho como meta aplicar meu conhecimento de forma prática e estratégica no dia a dia, visando não apenas o crescimento mútuo, mas a evolução constante rumo ao topo da maturidade profissional no desenvolvimento de software'
              fontSize='15px'
              fontFamily='system-ui'
              colorText='white'
            />
          </Box>
        </Grid>
      </Box>
    </>
  );
};
export default PaintingAboutMe;
