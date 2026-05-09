import { Grid, Box, Divider } from '@mui/material';
import { AccountCircle, TrackChanges, EmojiEvents } from '@mui/icons-material';
import InformationalText from '@/components/InformationalText/index.jsx';

const PaintingAboutMe = () => {
  return (
    <>
      <Grid container sx={{ marginTop: '5px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginTop: '50px',
            border: '2px solid',
            borderColor: '#162E93',
            borderRadius: '10px',
            width: '480px',
            height: '320px',
            marginLeft: '25px',
            padding: '25px',
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.04)',
              borderColor: '#162E93',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <AccountCircle
              sx={{
                color: 'white',
                fontSize: '40px',
                border: '2px solid',
                borderRadius: '50%',
                borderColor: '#162E93',
              }}
            />
            <Divider
              orientation=''
              flexItem
              sx={{ height: '2px', backgroundColor: '#162E93' }}
            />
            <InformationalText
              title='Sobre mim'
              fontSize='28px'
              colorText='white'
              fontFamily='montserrat, sans-serif'
              fontWeight='700'
            />
          </Box>

          <InformationalText
            title='Como um entusiasta de tecnologia focado em resultados, minha trajetória como Desenvolvedor Full Stack é pautada pela busca incessante por excelência técnica. Sou especialista em converter visões em realidade digital, utilizando arquiteturas robustas e práticas de desenvolvimento ágil para entregar softwares que não apenas funcionam, mas superam as expectativas de performance e usabilidade.'
            fontFamily='system-ui'
            colorText='white'
            fontSize='15px'
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
            width: '480px',
            height: '320px',
            marginLeft: '25px',
            padding: '25px',
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.04)',
              borderColor: '#162E93',
            },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <TrackChanges
              sx={{
                color: 'white',
                fontSize: '40px',
                border: '2px solid',
                borderRadius: '50%',
                borderColor: '#162E93',
              }}
            />
            <InformationalText
              title='Interesses'
              fontSize='28px'
              colorText='white'
              fontFamily='montserrat, sans-serif'
              fontWeight='700'
            />
          </Box>
          <InformationalText
            title='Meu foco central é a evolução para o patamar de Desenvolvedor Full Stack de alto nível, dominando tanto o backend escalável quanto o frontend intuitivo. Tenho profundo interesse em Engenharia de Software, Sistemas Distribuídos e na criação de ecossistemas digitais que utilizem as melhores práticas de Clean Code e Design Patterns para garantir longevidade e qualidade técnica.'
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
            width: '480px',
            height: '320px',
            marginLeft: '25px',
            padding: '25px',
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.04)',
              borderColor: '#162E93',
            },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <EmojiEvents
              sx={{
                color: 'white',
                fontSize: '40px',
                border: '2px solid',
                borderRadius: '50%',
                borderColor: '#162E93',
              }}
            />
            <InformationalText
              title='Objetivos'
              fontSize='28px'
              colorText='white'
              fontFamily='montserrat, sans-serif'
              fontWeight='700'
            />
          </Box>
          <InformationalText
            title='Almejo integrar equipes de alto desempenho onde eu possa aplicar minha expertise técnica para solucionar problemas de escala global. Meu objetivo de longo prazo é atuar como uma peça estratégica na arquitetura de grandes sistemas, evoluindo continuamente para posições de liderança técnica e influenciando positivamente a cultura de engenharia de software.'
            fontSize='15px'
            fontFamily='system-ui'
            colorText='white'
          />
        </Box>
      </Grid>
    </>
  );
};
export default PaintingAboutMe;
