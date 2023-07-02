import { Box, Button, useTheme } from "@mui/material";

const CustomButton = ({ btnText, variant, resume, path}) => {

    const theme=useTheme()

    return (
        <Box sx={{ marginTop: '20px' }}>
            <Button href={path && path} download={resume && resume} size="large" sx={{
                backgroundColor: variant == 'contained' ? 'orangered' : 'none',
                color: variant == 'outlined' && 'orangered',
                border: variant == 'outlined' && '1px solid orangered',
                outline: 'none',
                marginRight: '15px',
                "&:hover": {
                    backgroundColor: variant == 'contained' ? 'white' : 'white',
                    color: variant == 'contained' && 'orangered',
                    border: variant == 'outlined' && '1px solid white',
                }
            }} variant={variant}>{btnText}</Button>
        </Box>
    );
};

export default CustomButton;