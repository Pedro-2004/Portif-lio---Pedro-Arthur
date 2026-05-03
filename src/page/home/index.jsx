import './style.css';
import InformationalText from '@/components/InformationalText/index';
import Head from '@/components/Head/index';
import {Box} from '@mui/material';

const Home = () => {
  return (
    <>
      <Head />
      <Box sx={{display: 'flex', marginTop: '230px', marginLeft: '90px', flexDirection: "column" }}>

     <InformationalText title='Desenvolvedor' colorText='white' fontSize='40px' fontFamily='system-ui'/>
     <InformationalText title='Web' colorText='#162E93' fontSize='40px' fontFamily='system-ui'/>
      </Box>
    </>
  );
};
export default Home;
