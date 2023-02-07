import { Container, Typography, Divider, List, ListItem, ListItemIcon, ListItemText, Grid } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function About() {

    let techSkills = [ 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Material UI', 'Tailwind', 'TypeScript' ];
    let softSkills = [ 'Strong communication skills, both written and verbal.', 'Ability to analyze complex problems and make iterative improvements.', 'Team-oriented with focus on accurate documentation.', 'Flexibility and adaptability in a fast-paced work environment.', 'Experience in designing and implementing accessibility-focused solutions.'];


    return (
        <Container maxWidth='lg' >
            <Typography variant='h6' component='h1' align='center'>
                About me
            </Typography>
            <Container maxWidth='sm' >
                <Typography variant='h4' component='h2' align='center'>
                    My name is <span style={{ color: '#3f51b5', fontWeight: 'bold' }}>Sarah Gerrard</span> and I'm a software developer based in <span style={{ color: '#E82042', fontWeight: 'bold' }} >Canada</span>.
                </Typography>
            </Container>
            <Divider sx={{ my:2 }} />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Container sx={{ p:2 }}>
                        <Typography variant='body1' component='p'>
                            With over a decade of experience in the healthcare industry, I made the decision to transition to a career in software development over a year ago.
                            My passion for technology and experience with computers made the transition an easy and natural choice. 
                            <br />
                            <br />
                            Since starting this transition, I have completed several online courses as well as participated in a bootcamp, 100Devs, to help me develop my skills.
                            In addition to my learning endeavors, I have worked on several personal projects and done freelance work to further build my skills and portfolio.
                            Taking the leap to change careers has been one of the best decisions I have ever made. 
                            <br />
                            <br />
                            I look to continue to grow my skills and knowledge as a developer, including learning new technologies and languages.
                            With my interest in creating products that make the lives of others easier, I am excited to see where my career takes me.
                        </Typography>
                    </Container>
                </Grid>
                <Grid item xs={12} lg={6} >
                    <Container sx={{ p:2 }}>
                        <Typography variant='h6' component='h3' align='center' sx={{ pb:1 }}>
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
                            {techSkills.map((skill, index) => (
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
                <Grid item xs={12} lg={6}>
                    <Container sx={{ p:2 }}>
                        <Typography variant='h6' component='h3' align='center' sx={{ pb:1 }}>
                            Soft Skills
                        </Typography>
                        <Typography variant='body1' component='p'>
                            My work in healthcare has helped me develop the following skills:
                        </Typography>
                        <List dense >
                            {softSkills.map((skill, index) => (
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