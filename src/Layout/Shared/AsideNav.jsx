import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ContactPage, Home, InfoOutlined, MiscellaneousServices, PostAdd, WebStories } from "@mui/icons-material";

const AsideNav = () => {
    const asideLink=[
        {
            path:'/',
            title:'Home',
            icon:<Home/>
        },
        {
            path:'/about',
            title:'About Me',
            icon:<InfoOutlined/>
        },
        {
            path:'/services',
            title:'Services',
            icon:<MiscellaneousServices/>
        },
        {
            path:'/portfolio',
            title:'Portfolio',
            icon:<WebStories/>
        },
        {
            path:'/blog',
            title:'Blog',
            icon:<PostAdd/>
        },
        {
            path:'/contact',
            title:'Contact',
            icon:<ContactPage/>
        }

    ]

    const NavLinksAll=styled(Typography)(()=>({
        color:'white',
        margin:'10px 0',
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        padding:'10px 0',
        border:'2px solid #1E1E1E',
        borderRadius:'10px',
        '&:hover':{
            backgroundColor:'#3C3C3C',
            border:'2px solid #4D4E4E'
        }
    }))

    return (
        <Box>
            <Box>
                <Typography sx={{fontSize:'25px', color:'white', margin:'10px 0'}}>MD Asif</Typography>
                {
                    asideLink.map(({path,title,icon})=>(
                        <Link style={{textDecoration:'none'}} key={path} to={path}><NavLinksAll>{icon}{title}</NavLinksAll></Link>
                    ))
                }
            </Box>
        </Box>
    );
};

export default AsideNav;