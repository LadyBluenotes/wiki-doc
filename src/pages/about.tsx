import { Container, Typography, Divider, Link, List, ListItem, ListItemIcon, ListItemText, Grid } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function About() {

    let skills = [ 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Material UI', 'Tailwind', 'TypeScript' ];


    return (
        <Container maxWidth='lg' >
            <Typography variant='h6' component='h1' align='center'>
                About me
            </Typography>
            <Typography variant="h3" component="h2" align='center'>
                Hi, I'm <span style={{ color: '#4ECDC4' }}>Sarah</span>
            </Typography>
            <Typography variant="h5" component="h2" align='center'>
                I am a <span style={{ color: '#FF6B6B' }}>full stack developer</span> based in <span style={{ color: '#FF6B6B' }}>Canada</span>
            </Typography>
            <Divider sx={{ my:2 }} />
            <Grid container spacing={2}>
                <Grid item>
                    <Container sx={{ padding:'20px' }}>
                        <Typography variant='h6' component='h3' align='center'>
                            About me
                        </Typography>
                        <Typography variant='body1' component='p'>
                            With over a decade of experience in the healthcare industry, I made the decision to transition to a career in software development over a year ago.
                            My passion for technology and experience with computers made the transition an easy and natural choice. 
                            During this time, I have honed my skills in programming languages, software design, and development methodologies while working on a variety of projects.
                            <br />
                            <br />
                            This website is a showcase of my work and a place I can share my knowledge, learned experiences, and projects with others.
                        </Typography>
                    </Container>
                </Grid>
                <Grid item >
                    <Container sx={{padding:'20px' }}>
                        <Typography variant='h6' component='h3' align='center' sx={{ paddingBottom:'10px' }}>
                            Tech Skills
                        </Typography>
                        <Typography variant='body1' component='p'>
                            I have experience with the following technologies:
                        </Typography>
                        <List dense sx={{
                            columnCount: [1, 2],
                            columnGap: '20px',
                            columnRule: '1px solid #ccc',
                            columnFill: 'auto',
                        }}>
                            {skills.map((skill, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={skill} />
                                </ListItem>
                            ))}
                        </List>
                    </Container>
                </Grid>
            </Grid>
        </ Container>
    )
};