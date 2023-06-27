import { Box } from "@mui/material";
import AsideNav from "./Shared/AsideNav";
import { styled } from "@mui/system";
import Home from "../Home/Home";
import About from "../Pages/About";

const Main = () => {

    const FullBody = styled(Box)(() => ({
        display: 'flex',
        minHeight: '100vh',
        margin: '0',
        padding: '0',
        justifyContent: 'space-between',
    }))

    const AsideLinks = styled(Box)(({ theme }) => ({
        width: '7%',
        height: '100vh',
        position: 'sticky',
        backgroundColor: '#1E1E1E',
        top: '0',
        padding: '20px',
        zIndex: '1',
        [theme.breakpoints.down('md')]: {
            position: 'absolute',
            left: '-100px'
        }
    }))

    const MainBody=styled(Box)(({theme})=>({
        width:'93%',
        [theme.breakpoints.down('md')]:{
            width:'100%'
        }
    }))

    return (
        <FullBody>
            <AsideLinks>
                <AsideNav></AsideNav>
            </AsideLinks>
            <MainBody>
                <Box>
                    <Home></Home>
                    <About></About>
                </Box>
            </MainBody>
        </FullBody>
    );
};

export default Main;