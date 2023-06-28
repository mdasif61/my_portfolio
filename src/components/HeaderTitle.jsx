import { Box, Typography, useTheme } from "@mui/material";

const HeaderTitle = ({title, titleColor}) => {
    const theme=useTheme()
    return (
        <Box sx={{marginBottom:'50px'}}>
            <Typography sx={{
                [theme.breakpoints.down('md')]:{
                    fontSize:'30px'
                }
            }} color={`${titleColor?titleColor:'white'}`} variant="h3">{title}</Typography>
            <Box sx={{height:'2px', width:'80px', backgroundColor:'orangered',margin:'5px 0'}}></Box>
            <Typography sx={{textTransform:'uppercase', color:'#646464', marginTop:'10px', [theme.breakpoints.down('md')]:{
                fontSize:'14px'
            }}} paragraph>User Friendly? Yes, It's my like</Typography>
        </Box>
    );
};

export default HeaderTitle;