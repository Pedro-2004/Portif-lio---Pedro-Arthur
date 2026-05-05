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
          textTransform: 'uppercase',
          transition: 'color 0.4s ease',
          '&:hover': {
            color: '#2563EB',
            '&:after': {
              width: '100%',
            },
          },
          '&:after': {
            content: '""',
            position: 'absolute',
            bottom: 5,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '0%',
            height: '2px',
            backgroundColor: '#2563EB',
            transition: 'width 0.4s ease',
          },
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
