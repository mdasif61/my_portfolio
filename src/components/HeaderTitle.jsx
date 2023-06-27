import { Box, Typography } from "@mui/material";

const HeaderTitle = ({title}) => {
    return (
        <Box>
            <Typography color='white' variant="h3">{title}</Typography>
            <Box sx={{height:'2px', width:'80px', backgroundColor:'orangered',margin:'5px 0'}}></Box>
            <Typography sx={{textTransform:'uppercase', color:'#646464', marginTop:'10px'}} paragraph>User Friendly? Yes, It's my like</Typography>
        </Box>
    );
};

export default HeaderTitle;