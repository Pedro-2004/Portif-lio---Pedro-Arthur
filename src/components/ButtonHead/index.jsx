import { Button } from '@mui/material';

const ButtonHead = ({
  children,
  title,
  icon,
  border,
  borderColor,
  borderRadius,
  fontSize,
  onClick,
  href,
  showBar = true,
  component,
  to,
  marginLeft,
}) => {
  return (
    <Button
      variant='text'
      sx={{
        color: 'white',
        marginLeft: marginLeft,
        fontFamily: 'system-ui',
        fontSize: fontSize,
        borderRadius: borderRadius,
        border: border,
        borderColor: borderColor,
        textTransform: 'uppercase',
        transition: '0.3s ease',
        '&:hover': {
          color: '#2563EB',
          transform: 'translateY(-2px)',
          '&:after': {
            width: showBar ? '100%' : '0%',
          },
        },
        '&:after': {
          content: showBar ? '""' : 'none',
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
      href={href}
      download={href}
      component={component}
      to={to}
    >
      {children}
      {title}
    </Button>
  );
};
export default ButtonHead;
