import { Box, Button } from "@mui/material";
import HeaderTitle from "../components/HeaderTitle";
import { styled } from "@mui/system";
import wave from '../../public/images/contact.png';


const Contact = () => {
    const ContactLayout = styled(Box)(({ theme }) => ({
        backgroundColor: 'white',
        padding: '100px 50px',
        [theme.breakpoints.down('md')]: {
            padding: '50px 10px'
        }
    }))

    const ContactBody = styled(Box)(({ theme }) => ({
        display: 'flex',
    }))

    const InputStyle={
        outline:'none',
        height:'30px',
        padding:'10px 15px',
        width:'100%',
        margin:'10px 0',
        border:'none',
        borderBottom:'1px solid orangered'
    }


    return (
        <ContactLayout id="contact">
            <HeaderTitle title={'Get In Touch'} titleColor={'black'} />
            <ContactBody>
                <Box sx={{
                    width: '60%',
                    height:'300px',
                    display: 'flex',
                    alignItems:'center',
                    justifyContent:'center',
                }}>
                    <form style={{width:'100%'}}>
                        <Box sx={{width:'100%'}}>
                            <Box sx={{width:'100%'}}>
                                <input style={InputStyle} type="text" name="name" id="" placeholder="Name*" />
                            </Box>
                            <Box sx={{width:'100%'}}>
                                <input style={InputStyle} type="email" name="email" id="" placeholder="Email*" />
                            </Box>
                            <Box sx={{width:'100%'}}>
                                <input style={InputStyle} type="text" name="subject" id="" placeholder="Subject*" />
                            </Box>
                            <Box sx={{width:'100%'}}>
                                <input style={InputStyle} type="text" name="message" id="" placeholder="Your Message*" />
                            </Box>
                        </Box>
                        <Button sx={{marginTop:'20px', backgroundColor:'orangered', '&:hover':{
                            backgroundColor:'orange'
                        }}} size="large" type="submit" variant="contained">SEND MESSAGE</Button>
                    </form>
                </Box>
                <Box sx={{
                    width: '40%'
                }}>
                    fdfdf
                </Box>
            </ContactBody>
        </ContactLayout>
    );
};

export default Contact;