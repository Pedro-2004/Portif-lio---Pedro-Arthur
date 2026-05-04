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
          marginTop: '160px',
          padding: '0 80px',
        }}
      >
        <Box sx={{ maxWidth: '600px' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <InformationalText
              title='DESENVOLVEDOR'
              colorText='white'
              fontSize='45px'
              fontFamily='montserrat, sans-serif'
              fontWeight='700'
            />
            <InformationalText
              title='DE SOFTWARE'
              colorText='#162E93'
              fontSize='45px'
              fontFamily='montserrat, sans-serif'
              fontWeight='700'
            />
            <InformationalText
              title='Olá! Seja bem-vindo ao meu portfólio. Sou Pedro Arthur, desenvolvedor Full Stack apaixonado por tecnologia e por transformar ideias em soluções reais. Aqui você pode conhecer meus projetos, habilidades e um pouco da minha jornada na programação.'
              colorText='white'
              fontSize='15px'
              fontFamily='system-ui'
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              marginTop: '25px',
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
            />
            <ButtonHead
              icon={<GitHubIcon />}
              title='GitHub'
              fontSize='14px'
              border='2px solid'
              borderColor='white'
              borderRadius='100px'
              onClick={() => handleRedirect('https://github.com/Pedro-2004')}
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
      <PaintingAboutMe />
    </>
  );
};
export default Home;
