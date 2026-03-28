import { Button } from '@mui/material';

const ButtonHead = ({ title }) => {
  return (
    <>
      <Button
        variant='contained'
        sx={{
          marginLeft: 'auto',
          marginTop: 7.7,
          borderRadius: 5,
          background: ' #000000ff',
        }}
      >
        {title}
      </Button>
    </>
  );
};
export default ButtonHead;
