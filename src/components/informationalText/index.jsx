import { Typography } from '@mui/material';
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
    <>
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
        startIcon={icon}
      >
        {title}
      </Typography>
    </>
  );
};
export default InformationalText;
