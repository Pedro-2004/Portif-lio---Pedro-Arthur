import Head from '@/components/Head';
import { Box } from '@mui/material';
import InformationalText from '@/components/InformationalText';
import WorkIcon from '@mui/icons-material/Work';

const Experiences = () => {
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
                  OLÁ SEJA BEM-VINDO <span className='wave'>👋</span>
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
                title='EXPERIÊNCIAS'
                colorText='#2563EB'
                fontSize='40px'
                fontFamily='montserrat, sans-serif'
                fontWeight='700'
              />
              <InformationalText
                title='Embora esteja no início da minha carreira, já adquiri experiências relevantes em projetos e ambientes colaborativos que impulsionaram minha evolução como desenvolvedor. Minha paixão por tecnologia, aliada à busca constante por aprendizado e excelência, permite que eu contribua com soluções inovadoras e gere impacto real em cada desafio que assumo.'
                colorText='white'
                fontSize='15px'
                fontFamily='system-ui'
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginTop: '50px' }}>
        <Box
          sx={{
            margin: '20px',
            padding: '10px',
            border: '2px solid',
            borderRadius: '8px',
            width: '100%',
            maxWidth: '400px',
            marginLeft: '50px',
            display: 'flex',
            gap: '10px',
          }}
        >
          <WorkIcon sx={{ color: '#2563EB', fontSize: '30px' }} />
          <InformationalText
            title='EXPERIÊNCIAS PRFISSIONAIS'
            colorText='white'
            fontFamily='montserrat, sans-serif'
            fontSize='15px'
            fontWeight='700'
          />
        </Box>
        <Box>
          <Box
            sx={{
              display: 'flex',

              margin: '20px',
              padding: '10px',
              border: '2px solid #2563EB',
              borderRadius: '8px',
              width: '60%',
              gap: '10px',
              height: '400px',
              marginLeft: '200px',
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
};
export default Experiences;
