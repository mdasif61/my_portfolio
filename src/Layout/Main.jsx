import { Box, Typography, useTheme } from "@mui/material";
import AsideNav from "./Shared/AsideNav";
import { styled } from "@mui/system";
import Home from "../Home/Home";
import About from "../Pages/About";
import Myskills from "../Pages/Myskills";
import Services from "../Pages/Services";
import Navbar, { NavContext } from "../components/Navbar";
import { useContext } from "react";
import Portfoilo from "../Pages/Portfoilo";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import { Facebook, LinkedIn, Mail } from "@mui/icons-material";

const Main = () => {

    const theme = useTheme()

    const { open } = useContext(NavContext)

    const FullBody = styled(Box)(() => ({
        display: 'flex',
        minHeight: '100vh',
        margin: '0',
        padding: '0',
        justifyContent: 'space-between',
    }))

    const AsideLinks = styled(Box)(({ theme }) => ({
        width: '10%',
        height: '100vh',
        position: 'sticky',
        backgroundColor: '#1E1E1E',
        top: '0',
        padding: '20px',
        zIndex: '1',
        borderRight: '2px solid white',
        [theme.breakpoints.down('md')]: {
            left: open ? '0px' : '-200px',
            position: 'fixed',
            zIndex: '50',
            width: 'auto'
        }
    }))

    const MainBody = styled(Box)(({ theme }) => ({
        width: '90%',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            position: 'relative'
        }
    }))

    const FooterLayout = styled(Box)(({ theme }) => ({
        width: '100%',
        backgroundColor: '#121212',
        padding: '50px',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-evenly',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        }
    }))

    const FooterLink = [
        {
            path: 'home',
            title: 'Home',
        },
        {
            path: 'about',
            title: 'About Me',
        },
        {
            path: 'services',
            title: 'Services',
        },
        {
            path: 'portfolio',
            title: 'Portfolio',
        },
        {
            path: 'blog',
            title: 'Blog',
        },
        {
            path: 'contact',
            title: 'Contact',
        }
    ]


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
                    <Portfoilo></Portfoilo>
                    <Blog></Blog>
                    <Contact></Contact>
                    <FooterLayout>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Typography sx={{
                                padding: '10px',
                                borderRight: '1px solid white'
                            }} variant="h5">MD ASIF</Typography>
                            <Box sx={{
                                padding: '10px'
                            }}>
                                <a href="https://www.linkedin.com/in/asif-ikbal-699709270/" target="blank"><LinkedIn sx={{ marginRight: '10px', color:'white' }} /></a>
                                <a href="https://web.facebook.com/asifikbal61" target="blank"><Facebook sx={{ marginRight: '10px', color:'white' }} /></a>
                                <a href="mailto:asifikbal1361@gmail.com" target="blank"><Mail sx={{ marginRight: '10px', color:'white' }} /></a>
                            </Box>
                        </Box>
                        <Box>
                            <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {
                                    FooterLink.map(({ path, title }) => (
                                        <li style={{ listStyle: 'none', margin: '10px 10px' }} key={path} id={path}><a onMouseOver={e => e.target.style.color = "orangered"} onMouseOut={e => e.target.style.color = "#969696"} style={{ textDecoration: 'none', color: '#969696' }} href={`/#${path}`}>{title}</a></li>
                                    ))
                                }
                            </ul>
                        </Box>
                    </FooterLayout>
                    <Typography paragraph sx={{
                        backgroundColor: '#121212',
                        color: '#969696',
                        padding: '20px',
                        textAlign: 'center'
                    }}>2023 Chittagong, Bangladesh. All rights reserved</Typography>
                </Box>
            </MainBody>
        </FullBody>
    );
};

export default Main;