import {styled} from "@mui/system";
import { Box } from "@mui/material";
import HeaderTitle from "../components/HeaderTitle";
import Skills from "../components/Skills";

const Services = () => {

    const ServiceBody = styled(Box)(({ theme }) => ({
        backgroundColor: 'white',
        padding: '100px 50px',
        [theme.breakpoints.down('md')]: {
            padding: '50px 10px'
        }
    }))

    return (
        <ServiceBody id='about'>
            <HeaderTitle titleColor='black' title={'My Skills'}></HeaderTitle>

            <Box>
                <Box>
                    <Skills/>
                </Box>
                <Box>

                </Box>
            </Box>

        </ServiceBody>
    );
};

export default Services;