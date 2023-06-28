import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { ContactPage, Home, InfoOutlined, MiscellaneousServices, PostAdd, WebStories } from "@mui/icons-material";
import { useState } from "react";

const AsideNav = () => {
    const [nav,setNav]=useState('#home')
    const location = useLocation();
    const from = location.hash;

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
        // border:'2px solid #1E1E1E',
        borderRadius: '10px',
        // '&:hover':{

        // }
        backgroundColor:nav===`${from}` ? '#3C3C3C':'transparent',
        border:nav===`${from}`?'2px solid #4D4E4E':'none'

    }))

    return (
        <Box>
            <Box>
                <Typography sx={{ fontSize: '25px', color: 'white', margin: '10px 0' }}>MD Asif</Typography>
                {
                    asideLink.map(({ path, title, icon }) => (
                        <a href={`/#${path}`} style={{ textDecoration: 'none' }} key={path}><NavLinksAll onClick={()=>setNav("#"+path)}>{icon}{title}</NavLinksAll></a>
                    ))
                }
            </Box>
        </Box>
    );
};

export default AsideNav;