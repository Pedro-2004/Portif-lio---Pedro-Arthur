import { Typography } from '@mui/material';
const InformationalText = ({
  title,
  colorText,
  fontSize,
  fontFamily,
  fontWeight,
}) => {
  return (
    <>
      <Typography
        sx={{
          fontFamily: fontFamily,
          color: colorText,
          fontSize: fontSize,
          fontWeight: fontWeight,
        }}
      >
        {title}
      </Typography>
    </>
  );
};
export default InformationalText;
