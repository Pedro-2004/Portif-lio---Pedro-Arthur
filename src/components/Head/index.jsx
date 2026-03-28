import { AppBar, Toolbar } from '@mui/material';

const Head = ({ children }) => {
  return (
    <>
      <AppBar
        position='fixed'
        sx={{ background: '#00FA9A', borderRadius: 5, height: 100 }}
      >
        <Toolbar sx={{ gap: 2 }}>{children}</Toolbar>
      </AppBar>
    </>
  );
};
export default Head;
