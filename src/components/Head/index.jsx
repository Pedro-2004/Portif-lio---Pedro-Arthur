import { AppBar, Toolbar, Box } from '@mui/material';
import Logo from '@/components/Logo/index.jsx';

const Head = ({ children }) => {
  return (
    <>
      <AppBar sx={{ background: '#00FA9A', height: 85 }}>
        <Toolbar
          sx={{
            gap: 2,
            display: 'flex',
            justifyContent: 'center',
            marginTop: 4.0,
          }}
          > 
        <Box sx={{ flexGrow: 1}}>
          <Logo/>          
        </Box>
          {children}
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Head;
