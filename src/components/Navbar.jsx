import { styled } from "@mui/system";
import { Cancel, Menu } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { createContext, useState } from "react";

export const NavContext = createContext(null)

const Navbar = ({ children }) => {
    const [open, setOpen] = useState(false)

    const NavLoyout = styled(Box)(({ theme }) => ({
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: "flex",
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '30px 20px',
            backgroundColor: 'black',
            color: 'white',
            position: 'sticky',
            top: '0',
            zIndex: '10'
        }
    }))

    const info = {
        open,
        setOpen
    }

    return (
        <NavContext.Provider value={info}>
            <NavLoyout>
                <Typography variant="h5">MD ASIF</Typography>
                <Box>
                    {
                        !open ? <><Menu sx={{
                            cursor: 'pointer', '&:hover': {
                                color: 'orangered'
                            }
                        }} onClick={() => setOpen(!open)} /></> : <> <Cancel sx={{ color: 'orangered', cursor: 'pointer' }} onClick={() => setOpen(!open)} /></>
                    }

                </Box>
            </NavLoyout>
            {children}
        </NavContext.Provider>
    );
};

export default Navbar;