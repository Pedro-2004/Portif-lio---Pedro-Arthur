import {Typography} from "@mui/material"
const InformationalText = ({ title, colorText, fontSize, fontFamily }) => {
  return (
    <>
    <Typography sx={{
      fontFamily: fontFamily,
      color: colorText,
      fontSize: fontSize
    }}>{title}</Typography>
    </>
  );
};
export default InformationalText;
