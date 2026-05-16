import './style.css';
import InformationalText from '@/components/InformationalText/index';
import Head from '@/components/Head/index';
import { Box } from '@mui/material';
import PhotoCard from '@/components/PhotoCard/index';
import ButtonHead from '@/components/ButtonHead/index';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import PaintingAboutMe from '@/components/PaintingAboutMe/index';
import { AccountCircle, TrackChanges, EmojiEvents } from '@mui/icons-material';

const Home = () => {
  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };
  return (
    <>
      <Head />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '140px',
          padding: '0 80px',
          marginLeft: '-39px',
        }}
      >
        <Box sx={{ maxWidth: '600px' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
            }}
          >
            <InformationalText
              title={
                <>
                  OLÁ SEJA BEM-VINDO <span className='wave'>👋</span>
                </>
              }
              fontSize='14px'
              colorText='#2563EB'
              fontFamily='system-ui'
              fontWeight='500'
            />
            <Box>
              <InformationalText
                title='DESENVOLVEDOR'
                colorText='white'
                fontSize='45px'
                fontFamily='montserrat, sans-serif'
                fontWeight='700'
                lineHeight='20px'
              />
              <InformationalText
                title='DE SOFTWARE'
                colorText='#2563EB'
                fontSize='40px'
                fontFamily='montserrat, sans-serif'
                fontWeight='700'
              />
              <InformationalText
                title='Sou Pedro Arthur, Desenvolvedor Full Stack apaixonado por tecnologia e por transformar ideias em soluções reais. Aqui você vai pode conhecer meus projetos, habilidades e um pouco da minha jornada na programação.'
                colorText='white'
                fontSize='15px'
                fontFamily='system-ui'
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              marginTop: '15px',
              gap: '10px',
            }}
          >
            <ButtonHead
              icon={<WhatsAppIcon />}
              title='WhatsApp'
              fontSize='14px'
              border='2px solid'
              borderColor='white'
              borderRadius='100px'
              onClick={() => handleRedirect('https://wa.me/5531988306039')}
              showBar={false}
            />
            <ButtonHead
              icon={<GitHubIcon />}
              title='GitHub'
              fontSize='14px'
              border='2px solid'
              borderColor='white'
              borderRadius='100px'
              onClick={() => handleRedirect('https://github.com/Pedro-2004')}
              showBar={false}
            />
            <ButtonHead
              icon={<LinkedInIcon />}
              title='Linkedin'
              fontSize='14px'
              border='2px solid'
              borderColor='white'
              borderRadius='100px'
              onClick={() =>
                handleRedirect(
                  'https://www.linkedin.com/in/pedroarthurresende/',
                )
              }
              showBar={false}
            />
            <ButtonHead
              icon={<MarkunreadIcon />}
              title='E-mail'
              fontSize='14px'
              border='2px solid'
              borderColor='white'
              borderRadius='100px'
              onClick={() =>
                handleRedirect('mailto:arthur.resende758@gmail.com')
              }
              showBar={false}
            />
          </Box>
        </Box>

        <Box>
          <PhotoCard
            border='3px solid'
            borderColor='#162E93'
            borderRadius='100%'
            marginRight='40px'
          />
        </Box>
      </Box>
      <PaintingAboutMe
        carHeight='320px'
        carWidth='480px'
        FirstIcon={AccountCircle}
        firstTitle='Sobre mim'
        firstDescription='Como um entusiasta de tecnologia focado em resultados, minha trajetória como Desenvolvedor Full Stack é pautada pela busca incessante por excelência técnica. Sou especialista em converter visões em realidade digital, utilizando arquiteturas robustas e práticas de desenvolvimento ágil para entregar softwares que não apenas funcionam, mas superam as expectativas de performance e usabilidade.'
        SecondIcon={TrackChanges}
        secondTitle='Interesses'
        secondDescription='Meu foco central é a evolução para o patamar de Desenvolvedor Full Stack de alto nível, dominando tanto o backend escalável quanto o frontend intuitivo. Tenho profundo interesse em Engenharia de Software, Sistemas Distribuídos e na criação de ecossistemas digitais que utilizem as melhores práticas de Clean Code e Design Patterns para garantir longevidade e qualidade técnica.'
        ThirdIcon={EmojiEvents}
        thirdTitle='Objetivos'
        thirdDescription='Almejo integrar equipes de alto desempenho onde eu possa aplicar minha expertise técnica para solucionar problemas de escala global. Meu objetivo de longo prazo é atuar como uma peça estratégica na arquitetura de grandes sistemas, evoluindo continuamente para posições de liderança técnica e influenciando positivamente a cultura de engenharia de software.'
      />
    </>
  );
};
export default Home;
