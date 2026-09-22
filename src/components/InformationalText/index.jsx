import { Box, Typography } from '@mui/material';
const InformationalText = ({
  title,
  colorText,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  maxWidth,
  marginLeft,
  icon,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: icon ? '8px' : '0px',
      }}
    >
      {icon}
      <Typography
        sx={{
          fontFamily: fontFamily,
          color: colorText,
          fontSize: fontSize,
          fontWeight: fontWeight,
          lineHeight: lineHeight,
          maxWidth: maxWidth,
          marginLeft: marginLeft,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};
export default InformationalText;
