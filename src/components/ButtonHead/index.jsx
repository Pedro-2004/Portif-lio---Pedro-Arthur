import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ButtonHead = ({
  title,
  icon,
  border,
  borderColor,
  borderRadius,
  fontSize,
  onClick,
  href,
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
        onClick={onClick}
        component={'a'}
        href={href}
        download={href}
      >
        {title}
      </Button>
    </>
  );
};
export default ButtonHead;
