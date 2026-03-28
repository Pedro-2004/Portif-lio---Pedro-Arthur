import './style.css';
import { AppBar, Toolbar, Button } from '@mui/material';

import { BorderLeft } from '@mui/icons-material';
const Home = () => {
  return (
    <div className='home_container'>
      <AppBar
        position='fixed'
        sx={{ background: '#00FA9A', borderRadius: 5, height: 100 }}
      >
        <Toolbar sx={{ gap: 2 }}>
          <Button
            variant='contained'
            sx={{
              marginLeft: 'auto',
              marginTop: 7.7,
              borderRadius: 5,
              background: '#000000ff',
            }}
          >
            Pojetos
          </Button>
          <Button
            variant='contained'
            sx={{ marginTop: 7.7, borderRadius: 5, background: '#000000ff' }}
          >
            Carreira Profissional
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Home;
