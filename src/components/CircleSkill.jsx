import reactIcon from '../../public/images/React-icon.svg.png';
import expressIcon from '../../public/images//express.png';
import mongodbIcon from '../../public/images//mongoDb.png';
import nodeIcon from '../../public/images//node.png'
import '../Css/circleSkill.css'
import { Typography } from '@mui/material';
const CircleSkill = () => {
    return (
        <div>
            <div className="circle">
                <Typography variant='h1' color='#646464'>{'</>'}</Typography>
                <div className='react'>
                   <img src={reactIcon} alt="" />
                </div>
                <div className='express'>
                    <img src={expressIcon} alt="" />
                </div>
                <div className='mongodb'>
                    <img src={mongodbIcon} alt="" />
                </div>
                <div className='node'>
                    <img src={nodeIcon} alt="" />
                </div>

            </div>
        </div>
    );
};

export default CircleSkill;