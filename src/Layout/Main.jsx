import { Box } from "@mui/material";
import AsideNav from "./Shared/AsideNav";
import { styled } from "@mui/system";
import Home from "../Home/Home";
import About from "../Pages/About";
import Myskills from "../Pages/Myskills";
import Services from "../Pages/Services";
import Navbar, { NavContext } from "../components/Navbar";
import { useContext } from "react";

const Main = () => {

    const {open}=useContext(NavContext)

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
        borderRight: '2px solid white',
        [theme.breakpoints.down('md')]: {
            left: open?'0px':'-200px',
            position:'fixed',
            zIndex:'50',
            width:'auto'
        }
    }))

    const MainBody = styled(Box)(({ theme }) => ({
        width: '93%',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            position: 'relative'
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
                    <Myskills></Myskills>
                    <Services></Services>
                </Box>
            </MainBody>
        </FullBody>
    );
};

export default Main;