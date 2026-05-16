import Head from '@/components/Head/index';
import { Box } from '@mui/material';
import InformationalText from '@/components/InformationalText/index';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CalculateIcon from '@mui/icons-material/Calculate';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import PhotoCard from '@/components/PhotoCard/index';
import PaintingAboutMe from '@/components/PaintingAboutMe';

const Projects = () => {
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
                  MEUS TRABALHOS <span className='wave'>👋</span>
                </>
              }
              fontSize='14px'
              colorText='#2563EB'
              fontFamily='system-ui'
              fontWeight='500'
            />
            <Box>
              <InformationalText
                title='PROJETOS'
                colorText='white'
                fontSize='45px'
                fontFamily='montserrat, sans-serif'
                fontWeight='700'
                lineHeight='20px'
              />
              <InformationalText
                title='EM DESTAQUE'
                colorText='#2563EB'
                fontSize='40px'
                fontFamily='montserrat, sans-serif'
                fontWeight='700'
              />
              <InformationalText
                title='Nesta seção, apresento uma vitrine detalhada dos meus projetos mais relevantes, onde transformo conceitos complexos em aplicações reais e funcionais. Utilizo tecnologias modernas e sigo as melhores práticas de desenvolvimento para garantir que cada solução entregue seja não apenas eficiente, mas também escalável e de alta qualidade técnica.'
                colorText='white'
                fontSize='15px'
                fontFamily='system-ui'
                s
              />
            </Box>
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
        carHeight='260px'
        carWidth='480px'
        // Primeiro BOX
        FirstIcon={ListAltIcon}
        firstTitle='Commitment Planner'
        firstDescription='O Commitment Planner é um aplicativo completo para organização e gestão de compromissos diários. Desenvolvido para ajudar usuários a gerenciar tarefas e atividades de forma simples e intuitiva, foi inspirado em ferramentas robustas como o Microsoft Planner, oferecendo um ambiente moderno para o acompanhamento de produtividade.'
        firstLink='https://github.com/Pedro-2004/Commitment_List'
        // Secundo BOX
        SecondIcon={CalculateIcon}
        secondTitle='Smart Calculator'
        secondDescription='Calculadora interativa desenvolvida com HTML, CSS e JavaScript. O projeto foca em oferecer uma experiência de usuário fluida e responsiva, permitindo realizar operações matemáticas diretamente no navegador com uma interface limpa, moderna e totalmente adaptável a diferentes dispositivos.'
        secondLink='https://github.com/Pedro-2004/Calculadora'
        // Terceiro BOX
        ThirdIcon={AccountBoxIcon}
        thirdTitle='Personal Portfolio'
        thirdDescription='Meu hub profissional de projetos e habilidades, construído utilizando HTML, CSS e JavaScript para garantir alta performance e acessibilidade. O portfólio apresenta um design limpo e responsivo, servindo como uma vitrine digital para demonstrar minha evolução técnica e competências em desenvolvimento web.'
        thirdLink='https://github.com/Pedro-2004/trabalho_perfil_terceira_parte'
      />
    </>
  );
};
export default Projects;
