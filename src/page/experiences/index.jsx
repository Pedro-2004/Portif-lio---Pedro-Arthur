import Head from '@/components/Head';
import { Box, Divider } from '@mui/material';
import InformationalText from '@/components/InformationalText';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import WorkIcon from '@mui/icons-material/Work';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

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
            width: '100%',
            maxWidth: '400px',
            marginLeft: '50px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <BusinessCenterIcon sx={{ color: '#2563EB', fontSize: '30px' }} />
          <InformationalText
            title='EXPERIÊNCIAS PROFISSIONAIS'
            colorText='white'
            fontFamily='montserrat, sans-serif'
            fontSize='15px'
            fontWeight='700'
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '1200px',
            gap: '30px',
            marginLeft: '150px',
            position: 'relative',
            paddingRight: '40px',
          }}
        >
          {/* Timeline Line */}
          <Box
            sx={{
              position: 'absolute',
              left: '-40px',
              top: '50px',
              bottom: '50px',
              width: '2px',
              backgroundColor: '#1E3A8A',
              zIndex: 0,
            }}
          />

          {/* EXPERIÊNCIA 1 — Seteloc */}
          <Box
            sx={{
              display: 'flex',
              gap: '15px',
              position: 'relative',
              alignItems: 'center',
              border: '1px solid rgba(37, 99, 235, 0.2)',
              borderRadius: '12px',
              padding: '20px 30px',
            }}
          >
            {/* Bolinha da timeline */}
            <Box
              sx={{
                position: 'absolute',
                left: '-71px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                border: '3px solid #2563EB',
                backgroundColor: '#0B0F19',
                zIndex: 1,
              }}
            />
            {/* Ícone */}
            <Box
              sx={{
                flexShrink: 0,
                padding: '5px',
                border: '2px solid #2563EB',
                borderRadius: '8px',
                height: '50px',
                width: '50px',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <DirectionsCarIcon sx={{ color: '#FF7F50', fontSize: '40px' }} />
            </Box>
            {/* Info da empresa */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                minWidth: '280px',
              }}
            >
              <InformationalText
                title='Seteloc Serviço de Locação'
                fontFamily='montserrat, sans-serif'
                fontSize='20px'
                colorText='#FFFFFF'
              />
              <InformationalText
                title='Desenvolvedor Full Stack Júnior'
                fontFamily='montserrat, sans-serif'
                fontSize='17px'
                colorText='#2563EB'
              />
              <InformationalText
                icon={
                  <LocationOnIcon sx={{ color: '#FFFFFF', fontSize: '20px' }} />
                }
                title='Belo Horizonte, MG'
                fontFamily='montserrat, sans-serif'
                fontSize='15px'
                colorText='#FFFFFF'
              />
            </Box>
            {/* Divider vertical */}
            <Divider
              orientation='vertical'
              flexItem
              sx={{ borderColor: 'rgba(255,255,255,0.2)', marginY: '8px' }}
            />
            {/* Bullets */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                flex: 1,
              }}
            >
              <InformationalText
                title='• Desenvolvimento e manutenção de sistemas internos utilizando Node.js, React e outras tecnologias modernas.'
                fontFamily='montserrat, sans-serif'
                fontSize='13px'
                colorText='#FFFFFF'
              />
              <InformationalText
                title='• Arquitetura e desenvolvimento de APIs RESTful robustas e integração com múltiplos serviços de terceiros.'
                fontFamily='montserrat, sans-serif'
                fontSize='13px'
                colorText='#FFFFFF'
              />
              <InformationalText
                title='• Atuação de ponta a ponta em todas as etapas do ciclo de vida de desenvolvimento de software.'
                fontFamily='montserrat, sans-serif'
                fontSize='13px'
                colorText='#FFFFFF'
              />
            </Box>
            {/* Data */}
            <Box
              sx={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid rgba(37, 99, 235, 0.4)',
                borderRadius: '8px',
                padding: '8px 16px',
              }}
            >
              <CalendarMonthIcon sx={{ color: '#2563EB', fontSize: '18px' }} />
              <InformationalText
                title='Mar 2025 - Atual'
                fontFamily='montserrat, sans-serif'
                fontSize='13px'
                colorText='#2563EB'
              />
            </Box>
          </Box>

          {/* EXPERIÊNCIA 2 — Deposito Jovem */}
          <Box
            sx={{
              display: 'flex',
              gap: '15px',
              position: 'relative',
              alignItems: 'center',
              border: '1px solid rgba(37, 99, 235, 0.2)',
              borderRadius: '12px',
              padding: '20px 30px',
            }}
          >
            {/* Bolinha da timeline */}
            <Box
              sx={{
                position: 'absolute',
                left: '-71px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                border: '3px solid #2563EB',
                backgroundColor: '#0B0F19',
                zIndex: 1,
              }}
            />
            {/* Ícone */}
            <Box
              sx={{
                flexShrink: 0,
                padding: '5px',
                border: '2px solid #2563EB',
                borderRadius: '8px',
                height: '50px',
                width: '50px',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <WorkIcon sx={{ color: '#d10000e2', fontSize: '40px' }} />
            </Box>
            {/* Info da empresa */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                minWidth: '280px',
              }}
            >
              <InformationalText
                title='Deposito Jovem'
                fontFamily='montserrat, sans-serif'
                fontSize='20px'
                colorText='#FFFFFF'
              />
              <InformationalText
                title='Suporte de TI'
                fontFamily='montserrat, sans-serif'
                fontSize='17px'
                colorText='#2563EB'
              />
              <InformationalText
                icon={
                  <LocationOnIcon sx={{ color: '#FFFFFF', fontSize: '20px' }} />
                }
                title='Sabará, MG'
                fontFamily='montserrat, sans-serif'
                fontSize='15px'
                colorText='#FFFFFF'
              />
            </Box>
            {/* Divider vertical */}
            <Divider
              orientation='vertical'
              flexItem
              sx={{ borderColor: 'rgba(255,255,255,0.2)', marginY: '8px' }}
            />
            {/* Bullets */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                flex: 1,
              }}
            >
              <InformationalText
                title='• Suporte técnico especializado para computadores, notebooks, impressoras e outros equipamentos de TI.'
                fontFamily='montserrat, sans-serif'
                fontSize='13px'
                colorText='#FFFFFF'
              />
              <InformationalText
                title='• Administração e suporte em serviços e softwares do ecossistema Microsoft.'
                fontFamily='montserrat, sans-serif'
                fontSize='13px'
                colorText='#FFFFFF'
              />
              <InformationalText
                title='• Atendimento ao usuário, manutenção preventiva e configuração de rede.'
                fontFamily='montserrat, sans-serif'
                fontSize='13px'
                colorText='#FFFFFF'
              />
            </Box>
            {/* Data */}
            <Box
              sx={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid rgba(37, 99, 235, 0.4)',
                borderRadius: '8px',
                padding: '8px 16px',
              }}
            >
              <CalendarMonthIcon sx={{ color: '#2563EB', fontSize: '18px' }} />
              <InformationalText
                title='Mai 2020 - Mai 2025'
                fontFamily='montserrat, sans-serif'
                fontSize='13px'
                colorText='#2563EB'
              />
            </Box>
          </Box>

          {/* EXPERIÊNCIA 3 — PBH */}
          <Box
            sx={{
              display: 'flex',
              gap: '15px',
              position: 'relative',
              alignItems: 'center',
              border: '1px solid rgba(37, 99, 235, 0.2)',
              borderRadius: '12px',
              padding: '20px 30px',
            }}
          >
            {/* Bolinha da timeline */}
            <Box
              sx={{
                position: 'absolute',
                left: '-71px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                border: '3px solid #2563EB',
                backgroundColor: '#0B0F19',
                zIndex: 1,
              }}
            />
            {/* Ícone */}
            <Box
              sx={{
                flexShrink: 0,
                padding: '5px',
                border: '2px solid #2563EB',
                borderRadius: '8px',
                height: '50px',
                width: '50px',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <AccountBalanceIcon sx={{ color: '#2563EB', fontSize: '40px' }} />
            </Box>
            {/* Info da empresa */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                minWidth: '280px',
              }}
            >
              <InformationalText
                title='Prefeitura de Belo Horizonte'
                fontFamily='montserrat, sans-serif'
                fontSize='20px'
                colorText='#FFFFFF'
              />
              <InformationalText
                title='Auxiliar Administrativo'
                fontFamily='montserrat, sans-serif'
                fontSize='17px'
                colorText='#2563EB'
              />
              <InformationalText
                icon={
                  <LocationOnIcon sx={{ color: '#FFFFFF', fontSize: '20px' }} />
                }
                title='Belo Horizonte, MG'
                fontFamily='montserrat, sans-serif'
                fontSize='15px'
                colorText='#FFFFFF'
              />
            </Box>
            {/* Divider vertical */}
            <Divider
              orientation='vertical'
              flexItem
              sx={{ borderColor: 'rgba(255,255,255,0.2)', marginY: '8px' }}
            />
            {/* Bullets */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                flex: 1,
              }}
            >
              <InformationalText
                title='• Triagem, organização e arquivamento de documentos.'
                fontFamily='montserrat, sans-serif'
                fontSize='13px'
                colorText='#FFFFFF'
              />
              <InformationalText
                title='• Suporte geral e apoio nas rotinas administrativas e operacionais do setor.'
                fontFamily='montserrat, sans-serif'
                fontSize='13px'
                colorText='#FFFFFF'
              />
              <InformationalText
                title='• Atendimento ao público, controle de planilhas e alimentação de sistemas internos.'
                fontFamily='montserrat, sans-serif'
                fontSize='13px'
                colorText='#FFFFFF'
              />
            </Box>
            {/* Data */}
            <Box
              sx={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid rgba(37, 99, 235, 0.4)',
                borderRadius: '8px',
                padding: '8px 16px',
              }}
            >
              <CalendarMonthIcon sx={{ color: '#2563EB', fontSize: '18px' }} />
              <InformationalText
                title='Jan 2018 - Jan 2020'
                fontFamily='montserrat, sans-serif'
                fontSize='13px'
                colorText='#2563EB'
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Experiences;
