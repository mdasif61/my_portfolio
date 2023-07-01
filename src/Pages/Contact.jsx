import { Box, Button, useTheme } from "@mui/material";
import HeaderTitle from "../components/HeaderTitle";
import { styled } from "@mui/system";
import emailBg from '../../public/images/emailBG.png'


const Contact = () => {

    const theme = useTheme()

    const ContactLayout = styled(Box)(({ theme }) => ({
        backgroundColor: 'white',
        padding: '100px 50px',
        [theme.breakpoints.down('md')]: {
            padding: '50px 10px'
        }
    }))

    const ContactBody = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column-reverse'
        }
    }))

    const InputStyle = {
        outline: 'none',
        height: '30px',
        width: '100%',
        padding: '7px 10px',
        fontSize: '16px',
        margin: '10px 0',
        border: 'none',
        borderBottom: '1px solid orangered'
    }

    const FormStyle = {
        width: '50%',
        [theme.breakpoints.down('md')]:{
            width:'100%'
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <ContactLayout id="contact">
            <HeaderTitle title={'Get In Touch'} titleColor={'black'} />
            <ContactBody>
                <Box sx={FormStyle}>
                    <form style={{width:'100%'}}>
                        <div style={{ width: '100%' }}>
                            <Box sx={{ width: '100%' }}>
                                <input style={InputStyle} type="text" name="name" id="" placeholder="Name*" />
                            </Box>
                            <Box sx={{ width: '100%' }}>
                                <input style={InputStyle} type="email" name="email" id="" placeholder="Email*" />
                            </Box>
                            <Box sx={{ width: '100%' }}>
                                <input style={InputStyle} type="text" name="subject" id="" placeholder="Subject*" />
                            </Box>
                            <Box sx={{ width: '100%' }}>
                                <input style={InputStyle} type="text" name="message" id="" placeholder="Your Message*" />
                            </Box>
                        </div>
                        <Button sx={{
                            marginTop: '20px', backgroundColor: 'orangered', '&:hover': {
                                backgroundColor: 'orange'
                            }
                        }} size="large" type="submit" variant="contained">SEND MESSAGE</Button>
                    </form>
                </Box>
                <Box sx={{
                    width: '50%',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    padding: '30px',
                    [theme.breakpoints.down('md')]: {
                        width: '100%'
                    }
                }}>
                    <img style={{ width: '70%' }} src={emailBg} alt="" />
                </Box>
            </ContactBody>
        </ContactLayout>
    );
};

export default Contact;