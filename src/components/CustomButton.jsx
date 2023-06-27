import { Box, Button } from "@mui/material";

const CustomButton = ({btnText, variant}) => {

    return (
        <Box sx={{marginTop:'20px'}}>
            <Button size="large" sx={{
                backgroundColor:variant=='contained'?'orangered':'none',
                color:variant=='outlined' && 'orangered',
                border:variant=='outlined' && '1px solid orangered',
                outline:'none',
                marginRight:'15px',
                "&:hover":{
                    backgroundColor:variant=='contained'?'white':'white',
                    color:variant=='contained' && 'orangered',
                    border:variant=='outlined' && '1px solid white',
                }
            }} variant={variant}>{btnText}</Button>
        </Box>
    );
};

export default CustomButton;