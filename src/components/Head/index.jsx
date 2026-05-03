import { AppBar, Toolbar, Box } from '@mui/material';
import Logo from '@/components/Logo/index.jsx';
import ButtonHead from '@/components/ButtonHead/index.jsx';
import {Divider} from '@mui/material';

const Head = () => {
  return (
    <>
      <AppBar sx={{ background: 'transparent', height: 85 }}>
        <Toolbar
          sx={{
            gap: 2,
            display: 'flex',
            alignItems: 'center',
            marginTop: 4.0,
          }}
          > 
        <Box sx={{ flexGrow: 1}}>
          <Logo/>          
        </Box>
        <Box sx={{display: 'flex',position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>
        <ButtonHead title='Projetos' />
        <ButtonHead title='contatos' />
        <ButtonHead title='Curriculo' />
        </Box>
        </Toolbar>
        <Divider sx={{backgroundColor: 'white'}}/>
      </AppBar>
    </>
  );
};
export default Head;
