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
          width: '480px',
          height: '320px',
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
          width: '480px',
          height: '320px',
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
          width: '480px',
          height: '320px',
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
        {showButton ? (
          <Button onClick={onButtonClick}>{buttonText}</Button>
        ) : null}
      </Box>
    </Grid>
  );
};
export default PaintingAboutMe;
