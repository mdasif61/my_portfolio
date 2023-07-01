import { styled } from "@mui/system";
import { Box, Typography, useTheme } from "@mui/material";
import HeaderTitle from "../components/HeaderTitle";
import one from '../../public/images/one.jpg'
import two from '../../public/images/two.jpg'
import three from '../../public/images/three.jpg'

const Blog = () => {
    const theme=useTheme()

    const blogData = [
        {
            id: 1,
            name: 'Frontend Development',
            description: "CSS-Tricks is a widely recognized blog that caters to frontend developers. It covers a wide range of topics, including CSS, JavaScript, and frontend frameworks like React.js. The blog offers tutorials, articles, and code snippets that help frontend developers stay updated with the latest techniques, best practices, and emerging trends in the frontend development landscape",
            img:one
        },
        {
            id: 2,
            name: 'React.js Development',
            description: "React Rocks is a blog specifically focused on React.js development. It provides comprehensive resources, tutorials, and examples to help React.js developers expand their knowledge and expertise. The blog covers topics such as state management, component libraries, performance optimization, and advanced React.js concepts, serving as a valuable reference for React.js developers at all skill levels.",
            img:two
        },
        {
            id: 3,
            name: 'JavaScript Development',
            description: "JavaScript Weekly is a newsletter-style blog that curates and delivers a roundup of JavaScript-related articles, tutorials, and news every week. It covers various aspects of JavaScript development, including frameworks, libraries, tooling, and best practices. JavaScript developers can stay informed about the latest JavaScript updates and developments by subscribing to this blog, making it an essential resource for staying current in the JavaScript ecosystem.",
            img:three
        }
    ]

    const BlogLayout = styled(Box)(({ theme }) => ({
        backgroundColor: 'white',
        padding: '100px 50px',
        [theme.breakpoints.down('md')]: {
            padding: '50px 10px'
        }
    }))

    return (
        <BlogLayout id='blog'>
            <HeaderTitle title={'Latest Blogs'} titleColor='black' />
            <Box>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3,1fr)',
                    gap: '25px',
                    [theme.breakpoints.down('md')]:{
                        gridTemplateColumns:'repeat(1,1fr)'
                    }
                }}>
                    {
                        blogData.map(({ id, name, description,img }) => (
                            <Box sx={{
                                backgroundColor: 'white',
                                color: 'black',
                                padding: '20px',
                                border: '0.5px solid gray',
                            }} key={id}>
                                <Box>
                                    <img style={{width:'100%'}} src={img} alt="" />
                                </Box>
                                <Box>
                                    <Typography marginBottom={2} marginTop={2} variant="h5">{name}</Typography>
                                    <Typography paragraph>{description.slice(0, 150)}...</Typography>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </BlogLayout>
    );
};

export default Blog;