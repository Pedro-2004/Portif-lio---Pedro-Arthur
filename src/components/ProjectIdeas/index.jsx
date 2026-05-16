import { Box } from '@mui/material';
import InformationalText from '../InformationalText';
import RocketIcon from '@mui/icons-material/Rocket';
import ButtonHead from '../ButtonHead';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const ProjectsIdeias = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'left',
        borderRadius: '15px',
        border: '1px solid #2563EB',
        padding: '60px 10px',
        marginTop: '50px',
        marginBottom: '100px',
        width: '90%',
        maxWidth: '1000px',
        marginLeft: '20px',
        gap: '2px',
      }}
    >
      ic
      <RocketIcon sx={{ color: 'white', fontSize: '50px' }} />
      <Box sx={{ marginLeft: '5px' }}>
        <InformationalText
          colorText='white'
          title='Tem um projeto em mente ?'
          fontSize='20px'
          fontFamily='montserrat, sans-serif'
          fontWeight='700px'
        />
        <InformationalText
          title='Estou sempre abertos a novos desafios e oportunidades incríveis.'
          colorText='white'
          fontSize='15px'
        />
      </Box>
      <ButtonHead
        title='Vamos conversar'
        showBar={false}
        border='2px solid'
        borderColor='#2563EB'
        marginLeft='300px'
      >
        <ArrowForwardIcon sx={{ color: 'white' }} />
      </ButtonHead>
    </Box>
  );
};
export default ProjectsIdeias;
