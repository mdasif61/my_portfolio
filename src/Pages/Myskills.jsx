import {styled} from "@mui/system";
import { Box } from "@mui/material";
import HeaderTitle from "../components/HeaderTitle";
import Skills from "../components/Skills";

const Myskills = () => {

    const SkillBody = styled(Box)(({ theme }) => ({
        backgroundColor: 'white',
        padding: '100px 50px',
        [theme.breakpoints.down('md')]: {
            padding: '50px 10px'
        }
    }))

    return (
        <SkillBody id='about'>
            <HeaderTitle titleColor='black' title={'My Skills'}></HeaderTitle>

            <Box>
                <Box>
                    <Skills/>
                </Box>
            </Box>

        </SkillBody>
    );
};

export default Myskills;