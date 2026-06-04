import Head from '@/components/Head/index';
import { Box } from '@mui/material';
import InformationalText from '@/components/InformationalText/index';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import PhotoCard from '@/components/PhotoCard/index';
import { WhatsApp } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
            border='2px solid'
            borderColor='#162E93'
            borderRadius='100%'
            marginRight='40px'
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: '32px',
          marginTop: '40px',
          paddingLeft: '80px',
          marginLeft: '-39px',
        }}
      >
        <Box
          sx={{
            border: '2px solid',
            borderColor: '#162E93',
            borderRadius: '20px',
            padding: '20px 32px',
            width: 'max-content',
          }}
        >
          <InformationalText
            title='MEUS CONTATOS'
            colorText='white'
            fontFamily='system-ui'
            fontWeight='700'
            fontSize='20px'
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginTop: '16px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid',
                borderColor: '#162E93',
                borderRadius: '12px',
                height: '50px',
                width: '50px',
              }}
            >
              <MarkunreadIcon sx={{ color: '#e0e0e0ff' }} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
              }}
            >
              <InformationalText
                title='E-mail'
                fontFamily='system-ui'
                fontSize='15px'
                colorText='white'
                fontWeight='600'
              />
              <InformationalText
                title='arthur.resende758@gmail.com'
                fontFamily='system-ui'
                fontSize='15px'
                colorText='white'
              />
            </Box>
          </Box>
          <Divider
            orientation='horizontal'
            sx={{ borderColor: 'white', marginY: '16px' }}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginTop: '16px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid',
                borderColor: '#162E93',
                borderRadius: '12px',
                height: '50px',
                width: '50px',
              }}
            >
              <WhatsApp sx={{ color: '#e0e0e0ff' }} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
              }}
            >
              <InformationalText
                title='WhatsApp'
                fontFamily='system-ui'
                fontSize='15px'
                colorText='white'
                fontWeight='600'
              />
              <InformationalText
                title='(31) 98830-6039'
                fontFamily='system-ui'
                fontSize='15px'
                colorText='white'
              />
            </Box>
          </Box>
          <Divider
            orientation='horizontal'
            sx={{ borderColor: 'white', marginY: '16px' }}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginTop: '16px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid',
                borderColor: '#162E93',
                borderRadius: '12px',
                height: '50px',
                width: '50px',
              }}
            >
              <LinkedInIcon sx={{ color: '#e0e0e0ff' }} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
              }}
            >
              <InformationalText
                title='Linkedin'
                fontFamily='system-ui'
                fontSize='15px'
                colorText='white'
                fontWeight='600'
              />
              <InformationalText
                title='https://www.linkedin.com/in/pedroarthurresende/'
                fontFamily='system-ui'
                fontSize='15px'
                colorText='white'
              />
            </Box>
          </Box>
          <Divider
            orientation='horizontal'
            sx={{ borderColor: 'white', marginY: '16px' }}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginTop: '16px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid',
                borderColor: '#162E93',
                borderRadius: '12px',
                height: '50px',
                width: '50px',
              }}
            >
              <LinkedInIcon sx={{ color: '#e0e0e0ff' }} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
              }}
            >
              <InformationalText
                title='Instagram'
                fontFamily='system-ui'
                fontSize='15px'
                colorText='white'
                fontWeight='600'
              />
              <InformationalText
                title='https://www.instagram.com/pedroarthu_10/'
                fontFamily='system-ui'
                fontSize='15px'
                colorText='white'
              />
            </Box>
          </Box>
          <Divider
            orientation='horizontal'
            sx={{ borderColor: 'white', marginY: '16px' }}
          />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Box
            sx={{
              border: '2px solid',
              borderColor: '#162E93',
              borderRadius: '20px',
              padding: '20px 32px',
              width: 'max-content',
            }}
          >
            <InformationalText
              title='ENVIE UMA MENSAGEM'
              colorText='white'
              fontFamily='system-ui'
              fontWeight='700'
              fontSize='20px'
            />
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <TextField
                id='meu-campo'
                label='Digite seu nome'
                variant='outlined'
                fullWidth // Ocupa toda a largura disponível do card
                sx={{
                  marginTop: '20px',
                  // 1. Cor do texto digitado (branco)
                  input: { color: 'white', fontFamily: 'system-ui' },

                  // 2. Cor da Label (quando está flutuando e quando está em repouso)
                  '& .MuiInputLabel-root': {
                    color: '#8892b0',
                    fontFamily: 'system-ui',
                  },
                  '& .MuiInputLabel-root.Mui-focused': { color: '#2563EB' },

                  // 3. Estilização da Borda do Input
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px', // Bordas levemente arredondadas para o campo
                    '& fieldset': {
                      borderColor: '#162E93', // Borda azul escura padrão (combina com seus cards)
                      borderWidth: '2px',
                    },
                    '&:hover fieldset': {
                      borderColor: '#2563EB', // Borda acende em azul claro ao passar o mouse
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#2563EB', // Borda azul clara quando clicado
                    },
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Contacts;
