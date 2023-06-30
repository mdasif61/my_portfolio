import { Box, Link, Typography } from "@mui/material";
import HeaderTitle from "../components/HeaderTitle";
import { styled } from "@mui/system";
import brandFood from '../../public/images/brand-food.png';
import sport from '../../public/images/sports-special.png';
import photoawesome from '../../public/images/photo-awesome.png'
import { useState } from "react";

const Portfoilo = () => {
    const [show, setShow] = useState(false)
    const [ids,setIds]=useState(null)

    const projects = [
        {
            id:1,
            name: 'Photo Awesome',
            img: photoawesome,
            live: "https://photo-awesome-b8515.web.app/",
            code_client: "https://github.com/mdasif61/photo_awesome_client",
            code_server: "https://github.com/mdasif61/photo_awesome_server"
        },
        {
            id:2,
            name: 'Sport&Special',
            img: sport,
            live: "https://sports-special-ca4dd.web.app/",
            code_client: "https://github.com/mdasif61/toy_client",
            code_server: "https://github.com/mdasif61/toy_server"
        },
        {
            id:3,
            name: 'BrandFood.C',
            img: brandFood,
            live: "https://brand-food-b1948.web.app/",
            code_client: "https://github.com/mdasif61/brandFood_client",
            code_server: "https://github.com/mdasif61/brandF_server"
        }
    ]

    const ProjectLayout = styled(Box)(({ theme }) => ({
        backgroundColor: '#121212',
        padding: '100px 50px',
        [theme.breakpoints.down('md')]: {
            padding: '50px 10px'
        }
    }))

    const ShowCase = styled(Box)(({ theme }) => ({
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '15px',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(1,1fr)'
        }
    }))

    const ImageLayout = styled(Box)(({ theme }) => ({
        height: '300px',
        position: 'relative'
    }))

    const InnerText = styled(Box)(({ theme }) => ({
        position: 'absolute',
        width: '100%',
        height: '20%',
        bottom: '0',
        color: "white",
        opacity: show?"1":"0",
        transition: 'all 1s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        backgroundColor: "rgba(255, 68, 0, 0.8)"
    }))

    return (
        <ProjectLayout id='portfolio'>
            <HeaderTitle title={'Latest Projects'} />
            <ShowCase>
                {
                    projects.map(({ name, img, live, code_client, code_server,id }) => (
                        <Link href={live} target="_blank" key={name}>
                            <Box>
                                <ImageLayout
                                    onMouseEnter={() => {
                                        setShow(true),
                                        setIds(id)
                                    }}
                                    onMouseLeave={() => {
                                        setShow(false),
                                        setIds(null)
                                    }}
                                    sx={{
                                        backgroundImage: `url(${img})`,
                                        backgroundPosition: 'top',
                                        backgroundSize: 'cover',
                                        transition: 'all 7s',
                                        '&:hover': {
                                            backgroundPosition: 'bottom'
                                        }
                                    }}>
                                    <InnerText>
                                        <Typography variant="h5">{name}</Typography>
                                    </InnerText>
                                </ImageLayout>

                            </Box>
                        </Link>
                    ))
                }
            </ShowCase>
        </ProjectLayout>
    );
};

export default Portfoilo;