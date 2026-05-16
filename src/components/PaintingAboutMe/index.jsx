import { Grid, Box, Divider, Button } from '@mui/material';

import InformationalText from '@/components/InformationalText/index.jsx';

const PaintingAboutMe = ({
  FirstIcon,
  firstTitle,
  firstDescription,
  SecondIcon,
  secondTitle,
  secondDescription,
  ThirdIcon,
  thirdTitle,
  thirdDescription,
  showButton,
  buttonText,
  onButtonClick,
  carWidth = '480px',
  carHeight = '320px',
  firstLink,
  secondLink,
  thirdLink,
}) => {
  return (
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
          height: carHeight,
          width: carWidth,
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
          <FirstIcon
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
            title={firstTitle}
            fontSize='28px'
            colorText='white'
            fontFamily='montserrat, sans-serif'
            fontWeight='700'
          />
        </Box>

        <InformationalText
          title={firstDescription}
          fontFamily='system-ui'
          colorText='white'
          fontSize='15px'
        />
        {firstLink && (
          <Button
            sx={{
              color: '#2563EB',
              fontWeight: 'bold',
              marginTop: 'auto',
              alignSelf: 'flex-start',
            }}
            onClick={() => window.open(firstLink, '_blank')}
          >
            Ver Repositório
          </Button>
        )}
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
          height: carHeight,
          width: carWidth,
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
          <SecondIcon
            sx={{
              color: 'white',
              fontSize: '40px',
              border: '2px solid',
              borderRadius: '50%',
              borderColor: '#162E93',
            }}
          />
          <InformationalText
            title={secondTitle}
            fontSize='28px'
            colorText='white'
            fontFamily='montserrat, sans-serif'
            fontWeight='700'
          />
        </Box>
        <InformationalText
          title={secondDescription}
          fontSize='15px'
          fontFamily='system-ui'
          colorText='white'
        />
        {secondLink && (
          <Button
            sx={{
              color: '#2563EB',
              fontWeight: 'bold',
              marginTop: 'auto',
              alignSelf: 'flex-start',
            }}
            onClick={() => window.open(secondLink, '_blank')}
          >
            Ver Repositório
          </Button>
        )}
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
          height: carHeight,
          width: carWidth,
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
          <ThirdIcon
            sx={{
              color: 'white',
              fontSize: '40px',
              border: '2px solid',
              borderRadius: '50%',
              borderColor: '#162E93',
            }}
          />
          <InformationalText
            title={thirdTitle}
            fontSize='28px'
            colorText='white'
            fontFamily='montserrat, sans-serif'
            fontWeight='700'
          />
        </Box>
        <InformationalText
          title={thirdDescription}
          fontSize='15px'
          fontFamily='system-ui'
          colorText='white'
        />
        {thirdLink && (
          <Button
            sx={{
              color: '#2563EB',
              fontWeight: 'bold',
              marginTop: 'auto',
              alignSelf: 'flex-start',
            }}
            onClick={() => window.open(thirdLink, '_blank')}
          >
            Ver Repositório
          </Button>
        )}
      </Box>
    </Grid>
  );
};
export default PaintingAboutMe;
