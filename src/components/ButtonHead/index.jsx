import { Button } from '@mui/material';

const ButtonHead = ({ title }) => {
  return (
    <>
      <Button
        variant='text'
        sx={{
          color: 'black',
        }}
      >
        {title}
      </Button>
    </>
  );
};
export default ButtonHead;
