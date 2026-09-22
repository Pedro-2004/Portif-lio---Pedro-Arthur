import Head from '@/components/Head';
import PhotoCard from '@/components/PhotoCard';
import InformationalText from '@/components/InformationalText';
import { Box } from '@mui/material';
import SkillsMatrix from '@/components/SkillsMatrix';
import { Code } from '@mui/icons-material';
const Skills = () => {
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
        <Box sx={{ maxWidth: '600px', marginTop: '100px' }}>
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
                  MINHAS HABILIDADES <span className='wave'>💻</span>
                </>
              }
              fontSize='14px'
              colorText='#2563EB'
              fontFamily='system-ui'
              fontWeight='500'
            />{' '}
            <Box>
              {' '}
              <InformationalText
                title='MINHAS'
                colorText='white'
                fontSize='45px'
                fontFamily='montserrat, sans-serif'
                fontWeight='700'
                lineHeight='20px'
              />
              <InformationalText
                title='HABILIDADES'
                colorText='#2563EB'
                fontSize='40px'
                fontFamily='montserrat, sans-serif'
                fontWeight='700'
              />
              <InformationalText
                title='Esta seção apresenta as principais habilidades que construí ao longo da minha trajetória como desenvolvedor. Aqui você encontrará as tecnologias, ferramentas e competências que utilizo para transformar ideias em soluções eficientes, sempre com foco em código limpo, aprendizado contínuo, boas práticas de desenvolvimento e evolução profissional constante.'
                colorText='white'
                fontSize='15px'
                fontFamily='system-ui'
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
      <Box sx={{ marginTop: '50px' }}>
        <Box
          sx={{
            margin: '20px',
            padding: '10px',
            width: '100%',
            maxWidth: '400px',
            marginLeft: '50px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Code sx={{ color: '#2563EB', fontSize: '30px' }} />
          <InformationalText
            title='EXPERIÊNCIAS PROFISSIONAIS'
            colorText='white'
            fontFamily='montserrat, sans-serif'
            fontSize='15px'
            fontWeight='700'
          />
        </Box>
      </Box>
      <SkillsMatrix
        title='FRONTEND'
        skills={[
          {
            nome: 'React',
            nivel: 60,
          },
          { nome: 'TypeScript', nivel: 40 },
          { nome: 'JavaScript', nivel: 80 },
        ]}
      />
      <SkillsMatrix
        title='BACKEND'
        skills={[{ nome: 'Node.js', nivel: 70 }, { nome: 'Express.js' }]}
      />
    </>
  );
};
export default Skills;
