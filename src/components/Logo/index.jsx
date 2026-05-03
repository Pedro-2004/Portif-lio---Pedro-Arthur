import { Typography, Box } from "@mui/material";
import BoyIcon from '@mui/icons-material/Boy';


const Logo = () =>{
    return (
        <>
        
        <Box sx={{display: 'flex', alignItems: 'center', }}>

        <BoyIcon sx={{fontSize: 40, color: 'white'}}/>
        <Typography sx={{ color: 'white',
            fontSize:28 ,
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 'bold',
            
        }}>
            Pedro Arthur 
        </Typography>
            </Box>

        </>
    )
}
export default Logo;