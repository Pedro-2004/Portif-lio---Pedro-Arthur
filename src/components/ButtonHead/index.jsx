import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ButtonHead = ({ title }) => {
  return (
    <>
      <Button
        variant='text'
        sx={{ color: 'white' }}
        endIcon={<ArrowForwardIosIcon />}
      >
        {title}
      </Button>
    </>
  );
};
export default ButtonHead;
