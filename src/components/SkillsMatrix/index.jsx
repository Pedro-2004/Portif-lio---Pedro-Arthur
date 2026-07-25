import InformationalText from '@/components/InformationalText';
import { Box } from '@mui/material';
import { LinearProgress } from '@mui/material';
import { Code } from '@mui/icons-material';

const SkillsMatrix = (props) => {
  return (
    <>
      <Box
        sx={{
          marginTop: '20px',
          border: '2px solid #2563EB',
          display: 'flex',
          flexDirection: 'column',
          margin: '20px',
          padding: '10px',
          maxWidth: '400px',
          marginLeft: '50px',
          height: 'auto',
          width: 'auto',
          borderRadius: '8px',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              border: '2px solid #2563EB',
              margin: '10px',
              padding: '10px',
              marginLeft: '5px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Code sx={{ color: '#2563EB', fontSize: '20px' }} />
          </Box>
          <InformationalText
            title={props.title}
            fontFamily='montserrat, sans-serif'
            fontSize='15px'
            colorText='#FFFFFF'
            fontWeight='700'
          />
        </Box>

        <Box
          sx={{
            paddingLeft: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <InformationalText
            title='React'
            fontFamily='montserrat, sans-serif'
            colorText='#FFFFFF'
            fontSize='13px'
          />

          <LinearProgress
            variant='determinate'
            value={60}
            sx={{
              flex: 1,
              height: '8px',
              borderRadius: '4px',
              backgroundColor: '#1a1a2e',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#2563EB',
                borderRadius: '4px',
              },
            }}
          />
        </Box>
        <Box
          sx={{
            paddingLeft: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <InformationalText
            title='TypeScript'
            fontFamily='montserrat, sans-serif'
            colorText='#FFFFFF'
            fontSize='13px'
          />

          <LinearProgress
            variant='determinate'
            value={40}
            sx={{
              flex: 1,
              height: '8px',
              borderRadius: '4px',
              backgroundColor: '#1a1a2e',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#2563EB',
                borderRadius: '4px',
              },
            }}
          />
        </Box>
        <Box
          sx={{
            paddingLeft: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <InformationalText
            title='JavaScript'
            fontFamily='montserrat, sans-serif'
            colorText='#FFFFFF'
            fontSize='13px'
          />

          <LinearProgress
            variant='determinate'
            value={80}
            sx={{
              flex: 1,
              height: '8px',
              borderRadius: '4px',
              backgroundColor: '#1a1a2e',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#2563EB',
                borderRadius: '4px',
              },
            }}
          />
        </Box>
        <Box
          sx={{
            paddingLeft: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <InformationalText
            title='HTML5'
            fontFamily='montserrat, sans-serif'
            colorText='#FFFFFF'
            fontSize='13px'
          />

          <LinearProgress
            variant='determinate'
            value={60}
            sx={{
              flex: 1,
              height: '8px',
              borderRadius: '4px',
              backgroundColor: '#1a1a2e',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#2563EB',
                borderRadius: '4px',
              },
            }}
          />
        </Box>
        <Box
          sx={{
            paddingLeft: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <InformationalText
            title='CSS'
            fontFamily='montserrat, sans-serif'
            colorText='#FFFFFF'
            fontSize='13px'
          />

          <LinearProgress
            variant='determinate'
            value={50}
            sx={{
              flex: 1,
              height: '8px',
              borderRadius: '4px',
              backgroundColor: '#1a1a2e',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#2563EB',
                borderRadius: '4px',
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
};
export default SkillsMatrix;
