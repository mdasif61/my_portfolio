import { Box } from "@mui/material";
import AsideNav from "./Shared/AsideNav";
import {styled} from "@mui/system";
import { Outlet } from "react-router-dom";

const Main = () => {


    const FullBody=styled(Box)(({theme})=>({
        display:'flex',
        minHeight:'100vh',
        margin:'0',
        padding:'0'
    }))

    const AsideLinks=styled(Box)(({theme})=>({
        width:'7%',
        height:'100vh',
        position:'fixed',
        backgroundColor:'#1E1E1E',
        top:'0',
        padding:'20px',
        [theme.breakpoints.down('md')]:{
            
        }
    }))

    return (
        <FullBody>
            <AsideLinks>
                <AsideNav></AsideNav>
            </AsideLinks>
            <Box sx={{
                width:'100vw',
                backgroundColor:'black'
                }}>
                <Outlet></Outlet>
            </Box>
        </FullBody>
    );
};

export default Main;