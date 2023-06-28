import { styled } from "@mui/system";
import {Box} from "@mui/material";
import CircleSkill from "./CircleSkill";

const Skills = () => {

    const allSkills = [
        {
            name: 'React.js',
            range: 95
        },
        {
            name: 'Next.js',
            range: 90
        },
        {
            name: 'Express.js',
            range: 85
        },
        {
            name: 'MongoDB',
            range: 80
        },
        {
            name: 'Node.js',
            range: 65
        }
    ]

    const ProgressBody = styled(Box)(({ theme }) => ({
        display: 'flex',
        [theme.breakpoints.down('md')]:{
            flexDirection:'column'
        }
    }))

    const Progress = styled(Box)(({ theme }) => ({
        width: '50%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    }))

    const SkillSet = styled(Box)(({ theme }) => ({
        width: '50%',
        padding: '50px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            padding:'10px',
            marginTop:'100px'
        }
    }))

    return (
        <ProgressBody>
            <Progress>
                {
                    allSkills.map(({ name, range }) => (
                        <Box sx={{width:'100%'}} key={name}>
                            <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="">{name}</label>
                            <Box sx={{ width: "100%", height: '10px', backgroundColor: '#969696', position: 'relative', borderRadius: '50px', marginBottom: '18px', marginTop: '10px' }}>
                                <Box sx={{
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                    backgroundColor: 'orangered',
                                    height: '10px',
                                    borderRadius: '50px',
                                    width: range + "%",
                                    zIndex: '2',
                                    display:'flex',
                                    alignItems:'center'
                                }}>
                                    <Box sx={{
                                        position:'absolute',
                                        backgroundColor:'white',
                                        border:'1px solid orangered',
                                        height:'30px',
                                        width:'30px',
                                        borderRadius:'50px',
                                        display:'flex',
                                        alignItems:'center',
                                        justifyContent:'center',
                                        padding:'10px',
                                        right:'0',
                                        color:'orangered'
                                    }}>
                                        {range}%
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    ))
                }
            </Progress>

            <SkillSet>
                <CircleSkill></CircleSkill>
            </SkillSet>
        </ProgressBody>
    );
};

export default Skills;