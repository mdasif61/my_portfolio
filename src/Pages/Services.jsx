import { Box, Typography } from "@mui/material";
import HeaderTitle from "../components/HeaderTitle";
import {styled} from "@mui/system";

const Services = () => {

    const servicesData=[
        {
            service:'HTML & CSS Responsive Web Design',
            desc:"Enterprise-class websites need consistent colors, fonts, and design to match the organization's branding guidelines. Toptal’s front-end developers are experts at designing responsive websites, with CSS at the core of front end development alongside JavaScript and HTML."
        },
        {
            service:'React JS Development',
            desc:"ReactJS is renowned for its extensibility, adjustability, and convenience. Toptal ReactJS developers create complex software for your business, including web browsers and mobile application user interfaces."
        },
        {
            service:'Node.js Development',
            desc:"Node.js enables fast and scalable server-side and networking applications. Toptal Node.js developers produce dynamic web page content before the page is sent to the end user's web browser, using event-driven programming to communicate with web servers through speedy JavaScript interpreters."
        },
        {
            service:'Javascript Development',
            desc:"JavaScript frameworks sit at the heart of any modern website. Toptal JavaScript developers use their extensive experience with core JavaScript development and the newest frameworks and libraries to build dynamic and responsive websites."
        },
        {
            service:'PSD to Bootstrap Services',
            desc:"Toptal front-end developers convert PSD, Sketch, Ai, and Adobe XD files into pixel-perfect standards that are compliant with HTML5/CSS3/Bootstrap3/4 templates."
        },
        {
            service:'CMS Theming Services',
            desc:"Toptal front-end developers deliver prompt and professional theming services for popular CMS platforms such as WordPress, Drupal, and Joomla."
        }
    ]

    const ServiceLayout = styled(Box)(({ theme }) => ({
        backgroundColor: '#121212',
        padding: '100px 50px',
        [theme.breakpoints.down('md')]: {
            padding: '50px 10px'
        }
    }))

    const CardBody=styled(Box)(({theme})=>({
        color:'white',
        backgroundColor:'black',
        padding:'50px',
        position:'relative',
        '&:hover':{
            backgroundColor:'white',
            color:'black',
            borderBottom:'5px solid orangered'
        }
    }))

    const CardParent=styled(Box)(({theme})=>({
        display:'grid',
        gridTemplateColumns:'repeat(3,1fr)',
        gap:'20px',
        [theme.breakpoints.down('md')]:{
            gridTemplateColumns:'1fr'
        }
    }))

    return (
        <ServiceLayout id='services'>
            <HeaderTitle title={'Services'} />
                <CardParent>
                    {
                        servicesData.map(({service,desc})=>(
                            <CardBody key={service}>
                                <Typography sx={{margin:'20px 0', color:'orangered'}} variant="h6">{service}</Typography>
                                <Typography sx={{lineHeight:'25px'}} paragraph>{desc}</Typography>
                            </CardBody>
                        ))
                    }
                </CardParent>
        </ServiceLayout>
    );
};

export default Services;