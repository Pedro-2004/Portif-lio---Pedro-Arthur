import { AppBar, Toolbar, Box } from '@mui/material';
import Logo from '@/components/Logo/index.jsx';
import ButtonHead from '@/components/ButtonHead/index.jsx';
import { Divider } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const Head = () => {
  return (
    <>
      <AppBar sx={{ background: 'black', height: 85 }}>
        <Toolbar
          sx={{
            gap: 2,
            display: 'flex',
            alignItems: 'center',
            marginTop: 4.0,
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Logo />
          </Box>
          <Box
            sx={{
              display: 'flex',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <ButtonHead title='Projetos' fontSize='14px' />

            <ButtonHead title='contatos' fontSize='14px' />

            <ButtonHead title='Experiencias' fontSize='14px' />
            <ButtonHead title='Habilidades' fontSize='14px' />
          </Box>
          <ButtonHead
            title='Curriculo'
            icon={<DownloadIcon />}
            border='2px solid'
            borderColor='#2563EB'
            borderRadius='100px'
            fontSize='14px'
            href='/Curriculo_Pedro_Arthur_Desenvolvedor.pdf'
          />
        </Toolbar>
        <Divider sx={{ backgroundColor: 'white' }} />
      </AppBar>
    </>
  );
};
export default Head;
