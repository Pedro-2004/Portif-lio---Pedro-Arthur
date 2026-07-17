import Head from '@/components/Head/index';
import { Box } from '@mui/material';
import InformationalText from '@/components/InformationalText/index';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import PhotoCard from '@/components/PhotoCard/index';
import { WhatsApp } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ButtonHead from '@/components/ButtonHead';
import { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contacts = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const enviarWhatsapp = () => {
    if (!nome || !email || !mensagem) {
      alert('Preencha todos os campos.');
      return;
    }

    const texto = `
Olá Pedro!

Meu nome é ${nome}.
E-mail: ${email}

Gostaria de conversar sobre um projeto:

${mensagem}
`;

    const url = `https://wa.me/5531988306039?text=${encodeURIComponent(texto)}`;

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
          marginTop: '100px',
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

                border: '2px solid',
                borderColor: '#162E93',
                borderRadius: '12px',
                height: '50px',
                width: '50px',
              }}
            >
              <ButtonHead
                icon={<MarkunreadIcon />}
                fontSize='14px'
                onClick={() =>
                  handleRedirect('mailto:arthur.resende758@gmail.com')
                }
                showBar={false}
              />
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

                border: '2px solid',
                borderColor: '#162E93',
                borderRadius: '12px',
                height: '50px',
                width: '50px',
              }}
            >
              <ButtonHead
                icon={<WhatsApp />}
                fontSize='14px'
                onClick={() => handleRedirect('https://wa.me/5531988306039')}
                showBar={false}
              />
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

                border: '2px solid',
                borderColor: '#162E93',
                borderRadius: '12px',
                height: '50px',
                width: '50px',
              }}
            >
              <ButtonHead
                icon={<LinkedInIcon />}
                fontSize='14px'
                onClick={() =>
                  handleRedirect(
                    'https://www.linkedin.com/in/pedroarthurresende/',
                  )
                }
                showBar={false}
              />
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
                border: '2px solid',
                borderColor: '#162E93',
                borderRadius: '12px',
                height: '50px',
                width: '50px',
              }}
            >
              <ButtonHead
                icon={<GitHubIcon />}
                fontSize='14px'
                onClick={() => handleRedirect('https://github.com/Pedro-2004')}
                showBar={false}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
              }}
            >
              <InformationalText
                title='GitHub'
                fontFamily='system-ui'
                fontSize='15px'
                colorText='white'
                fontWeight='600'
              />
              <InformationalText
                title='https://github.com/Pedro-2004'
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
                label='Digite seu nome'
                variant='outlined'
                fullWidth
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                sx={{
                  marginTop: '20px',
                  input: { color: 'white', fontFamily: 'system-ui' },
                  '& .MuiInputLabel-root': {
                    color: '#8892b0',
                    fontFamily: 'system-ui',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#2563EB',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    '& fieldset': {
                      borderColor: '#162E93',
                      borderWidth: '2px',
                    },
                    '&:hover fieldset': {
                      borderColor: '#2563EB',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#2563EB',
                    },
                  },
                }}
              />
            </Box>

            <Box
              sx={{
                display: 'flex',
              }}
            >
              <TextField
                label='Digite o seu Email'
                variant='outlined'
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  marginTop: '20px',
                  input: { color: 'white', fontFamily: 'system-ui' },
                  '& .MuiInputLabel-root': {
                    color: '#8892b0',
                    fontFamily: 'system-ui',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#2563EB',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    '& fieldset': {
                      borderColor: '#162E93',
                      borderWidth: '2px',
                    },
                    '&:hover fieldset': {
                      borderColor: '#2563EB',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#2563EB',
                    },
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <TextField
                label='Digite a sua dúvida'
                variant='outlined'
                fullWidth
                multiline
                rows={4}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                sx={{
                  marginTop: '20px',
                  marginY: '20px',
                  input: { color: 'white', fontFamily: 'system-ui' },
                  textarea: { color: 'white', fontFamily: 'system-ui' },
                  '& .MuiInputLabel-root': {
                    color: '#8892b0',
                    fontFamily: 'system-ui',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#2563EB',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    '& fieldset': {
                      borderColor: '#162E93',
                      borderWidth: '2px',
                    },
                    '&:hover fieldset': {
                      borderColor: '#2563EB',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#2563EB',
                    },
                  },
                }}
              />
            </Box>
            <ButtonHead
              title='💬 Enviar mensagem '
              border='1px solid'
              borderColor='#2563EB'
              borderRadius='8px'
              marginTop='30px'
              onClick={enviarWhatsapp}
            ></ButtonHead>
          </Box>
          <Box sx={{ display: 'flex' }}></Box>
        </Box>
      </Box>
    </>
  );
};
export default Contacts;
