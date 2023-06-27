import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import myImg from '../../public/images/my-image.png'
import CustomButton from "../components/CustomButton";

const Home = () => {

    const HomeLayout = styled(Box)(({ theme }) => ({
        minHeight: '100vh',
        padding: '50px',
        display: 'flex',
        backgroundColor:'black',
        [theme.breakpoints.down('md')]:{
            flexDirection:'column-reverse',
        }
    }))

    const HomeText=styled(Box)(({theme})=>({
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        padding:'30px',
        width:'50%',
        [theme.breakpoints.down('md')]:{
            width:'100%',
            textAlign:'center',
            alignItems:'center',
            padding:'10px'
        }
    }))

    const ImgBody=styled(Box)(({theme})=>({
        width:'50%',
        padding:'50px',
        display:'flex',
        justifyContent:'center',
        [theme.breakpoints.down('md')]:{
            width:'100%',
            alignItems:'center',
            padding:'0px'
        }
    }))

    const Image=styled('img')(({theme})=>({
        width:'100%'
    }))

    return (
        <HomeLayout id='home'>

            <HomeText>
                <Typography variant="h6" color='white'>Hello there...</Typography>
                <Typography sx={{margin:'15px 0'}} variant="h2" color='white'>Ikbal Hossain Asif</Typography>
                <Typography variant="h5" color='#4D4E4E'>I am propesonal <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                        500,
                        'Web Developer',
                        1000,
                        'React.js Developer',
                        1000,
                        'MERN STACK Developer'
                    ]}
                    speed={50}
                    style={{ fontSize: '20px', textTransform:'uppercase', color:'orangered', borderBottom:'1px solid orangered' }}
                    repeat={Infinity}
                /></Typography>

                <Box sx={{display:'flex'}}>
                    <CustomButton btnText={'My Work'} variant='contained'/>
                    <CustomButton btnText={'Hire Me'} variant='outlined'/>
                </Box>

            </HomeText>
            <ImgBody>
                <Image src={myImg} alt="" />
            </ImgBody>

        </HomeLayout>
    );
};

export default Home;