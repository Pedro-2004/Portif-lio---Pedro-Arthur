import { Typography } from '@mui/material';
const InformationalText = ({
  title,
  colorText,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  maxWidth,
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
        }}
      >
        {title}
      </Typography>
    </>
  );
};
export default InformationalText;
