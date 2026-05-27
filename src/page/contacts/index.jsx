import Head from '@/components/Head/index';
import { Box } from '@mui/material';
import InformationalText from '@/components/InformationalText/index';
import MarkunreadIcon from '@mui/icons-material/Markunread';

import PhotoCard from '@/components/PhotoCard/index';

const Contacts = () => {
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
                  VAMOS CONVERSAR <span className='wave'>💬</span>
                </>
              }
              fontSize='14px'
              colorText='#2563EB'
              fontFamily='system-ui'
              fontWeight='500'
            />
            <Box>
              <InformationalText
                title='ENTRE EM '
                colorText='white'
                fontSize='45px'
                fontFamily='montserrat, sans-serif'
                fontWeight='700'
                lineHeight='20px'
              />
              <InformationalText
                title='CONTATO'
                colorText='#2563EB'
                fontSize='40px'
                fontFamily='montserrat, sans-serif'
                fontWeight='700'
              />
              <InformationalText
                title='Estou sempre aberto a novas oportunidades de carreira, projetos desafiadores e parcerias estratégicas. Vamos conversar e tirar sua ideia do papel! 🚀'
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

      <Box
        sx={{
          display: 'flex',
          marginTop: '40px',
          paddingLeft: '80px',
          marginLeft: '-39px',
        }}
      >
        <Box
          sx={{
            border: '3px solid',
            borderColor: '#162E93',
            borderRadius: '20px',
            padding: '12px 32px', // Aumentamos o padding para dar mais espaço interno
            width: 'max-content', // Faz o Box se ajustar ao tamanho do texto
          }}
        >
          <InformationalText
            title='MEUS CONTATOS'
            colorText='white'
            fontFamily='system-ui'
            fontWeight='700'
            fontSize='20px' // Aumentamos o tamanho da fonte para o texto ficar maior
          />{' '}
          <InformationalText
            icon={<MarkunreadIcon />}
            title='E-mail'
            fontFamily='system-ui'
            fontSize='15px'
            colorText='white'
          />
        </Box>
      </Box>
    </>
  );
};
export default Contacts;
