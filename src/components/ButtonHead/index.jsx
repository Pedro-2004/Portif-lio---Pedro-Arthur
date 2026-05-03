import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ButtonHead = ({
  title,
  icon,
  border,
  borderColor,
  borderRadius,
  fontSize,
}) => {
  return (
    <>
      <Button
        variant='text'
        sx={{
          color: 'white',
          fontFamily: 'system-ui',
          fontSize: fontSize,
          borderRadius: borderRadius,
          border: border,
          borderColor: borderColor,
        }}
        startIcon={icon}
      >
        {title}
      </Button>
    </>
  );
};
export default ButtonHead;
