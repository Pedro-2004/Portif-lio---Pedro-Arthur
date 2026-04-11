import { AppBar, Toolbar } from '@mui/material';

const Head = ({ children }) => {
  return (
    <>
      <AppBar sx={{ background: 'black', height: 85 }}>
        <Toolbar
          sx={{
            gap: 2,
            display: 'flex',
            justifyContent: 'center',
            marginTop: 4.0,
          }}
        >
          {children}
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Head;
