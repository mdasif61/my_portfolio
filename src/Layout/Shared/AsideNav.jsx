import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import { ContactPage, Home, InfoOutlined, MiscellaneousServices, PostAdd, WebStories } from "@mui/icons-material";
import { useContext } from "react";
import { NavContext } from "../../components/Navbar";

const AsideNav = () => {

    const {setOpen,open}=useContext(NavContext)

    const asideLink = [
        {
            path: 'home',
            title: 'Home',
            icon: <Home />
        },
        {
            path: 'about',
            title: 'About Me',
            icon: <InfoOutlined />
        },
        {
            path: 'services',
            title: 'Services',
            icon: <MiscellaneousServices />
        },
        {
            path: 'portfolio',
            title: 'Portfolio',
            icon: <WebStories />
        },
        {
            path: 'blog',
            title: 'Blog',
            icon: <PostAdd />
        },
        {
            path: 'contact',
            title: 'Contact',
            icon: <ContactPage />
        }

    ]

    const NavLinksAll = styled(Typography)(() => ({
        color: 'white',
        margin: '10px 0',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px 0',
        borderRadius: '10px',
        backgroundColor: '#3C3C3C',
        border: '2px solid #4D4E4E',

    }))

    return (
        <Box>
            <Box>
                <Typography sx={{ fontSize: '25px', color: 'white', margin: '10px 0' }}>MD Asif</Typography>
                {
                    asideLink.map(({ path, title, icon }) => (
                        <a href={`/#${path}`} style={{ textDecoration: 'none' }} key={path}><NavLinksAll onClick={() => setOpen(!open)}>{icon}{title}</NavLinksAll></a>
                    ))
                }
            </Box>
        </Box>
    );
};

export default AsideNav;