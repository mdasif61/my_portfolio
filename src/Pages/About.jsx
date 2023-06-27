import { Box, Typography, useTheme } from "@mui/material";
import HeaderTitle from "../components/HeaderTitle";
import { styled } from "@mui/system";
import myImg from '../../public/images/my-image.png'
import CustomButton from "../components/CustomButton";

const About = () => {

    const theme=useTheme()

    const AboutBody = styled(Box)(({ theme }) => ({
        backgroundColor: '#121212',
        padding: '50px',
        [theme.breakpoints.down('md')]:{
            padding:'10px'
        }
    }))

    const SectionImg = styled(Box)(({ theme }) => ({
        width: '40%',
        padding: '50px',
        display: 'flex',
        backgroundColor: 'white',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            alignItems: 'center',
            padding: '0px'
        }
    }))

    const RawImg = styled('img')(({ theme }) => ({
        width: '100%'
    }))

    const AboutText = styled(Box)(({ theme }) => ({
        width: '60%',
        padding: '50px',
        color: 'white',
        [theme.breakpoints.down('md')]:{
            width:'100%',
            padding:'0px'
        }
    }))

    const MyInfo = styled(Box)(({ theme }) => ({
        margin: '25px 0',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px',
        [theme.breakpoints.down('md')]:{
            flexDirection:'column'
        }
    }))

    const AboutLayout=styled(Box)(({theme})=>({
        display:'flex',
        [theme.breakpoints.down('md')]:{
            flexDirection:'column'
        }
    }))

    return (
        <AboutBody id="about">
            <HeaderTitle title={'About Me'} />
            <AboutLayout>
                <SectionImg>
                    <RawImg src={myImg} alt="" />
                </SectionImg>

                <AboutText>
                    <Typography variant="h4">I'M Ikbal Hossain Asif</Typography>

                    <Typography sx={{ textTransform: 'uppercase', color: '#969696', marginTop: '10px' }} paragraph>User Friendly? <span style={{ color: 'orangered' }}>Yes, It's my like</span></Typography>

                    <Typography>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions. Check out my Portfolio</Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        <MyInfo>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '50%', [theme.breakpoints.down('md')]:{
                                width:'100%',
                                justifyContent:'space-around'
                            }}}>
                                <Box>
                                    <Typography sx={{ fontWeight: 'bold', borderLeft: '2px solid orangered', paddingLeft: '10px',margin:'7px 0' }}>Birthday</Typography>
                                    <Typography sx={{ fontWeight: 'bold', borderLeft: '2px solid orangered', paddingLeft: '10px',margin:'7px 0' }}>Age </Typography>
                                    <Typography sx={{ fontWeight: 'bold', borderLeft: '2px solid orangered', paddingLeft: '10px',margin:'7px 0' }}>Residence </Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: 'normal', color: '#969696', margin:'7px 0' }}>1th February 2003</Typography>
                                    <Typography sx={{ fontWeight: 'normal', color: '#969696',margin:'7px 0' }}>20 Yr</Typography>
                                    <Typography sx={{ fontWeight: 'normal', color: '#969696',margin:'7px 0' }}>Chittagong</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '50%', [theme.breakpoints.down('md')]:{
                                width:'100%',
                                justifyContent:'space-around'
                            } }}>
                                <Box>
                                    <Typography sx={{ fontWeight: 'bold', borderLeft: '2px solid orangered', paddingLeft: '10px',margin:'7px 0' }}>E-mail </Typography>
                                    <Typography sx={{ fontWeight: 'bold', borderLeft: '2px solid orangered', paddingLeft: '10px',margin:'7px 0' }}>Phone </Typography>
                                    <Typography sx={{ fontWeight: 'bold', borderLeft: '2px solid orangered', paddingLeft: '10px',margin:'7px 0' }}>Address </Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: 'normal', color: '#969696',margin:'7px 0' }}>asifikbal1361@gmail.com</Typography>
                                    <Typography sx={{ fontWeight: 'normal', color: '#969696',margin:'7px 0' }}>+880 1894131361</Typography>
                                    <Typography sx={{ fontWeight: 'normal', color: '#969696',margin:'7px 0' }}>Chittagong, Bangladesh</Typography>
                                </Box>
                            </Box>
                        </MyInfo>
                        <CustomButton variant={'contained'} btnText={'Download CV'} />
                    </Box>

                </AboutText>
            </AboutLayout>
        </AboutBody>
    );
};

export default About;