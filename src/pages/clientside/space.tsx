import { Container, Divider, Typography, List, ListSubheader, Link, ListItemButton, ListItemIcon, ListItemText, ListItem, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

export default function Nasa() {
    return (
        <Container maxWidth="lg">
             <Typography variant="h2" component="h1" sx={{ fontWeight:500 }}>Welcome to Space.</Typography>
                        <Stack direction="row" spacing={2} sx={{margin: '1rem 0'}}>
                            <Link href="https://github.com/LadyBluenotes/NASA"><GitHubIcon /></Link>
                            <Link href="https://space.sarahgerrard.me/"><LanguageIcon /></Link>
                        </Stack>
                                <Typography variant="body1">This is a web application built using the NASA Astronomy Picture of the Day API. By default, it will show the media selected for that day or it can render information the user has selected from a date in the past.</Typography>
                            <Divider sx={{marginTop: '2rem', marginBottom:'1rem' }} />
                            <List dense
                                sx={{ 
                                    width: '100%', 
                                    maxWidth: '100%', 
                                    bgcolor: 'background.paper',
                                    position: 'relative',
                                    overflow: 'auto',
                                    maxHeight: 320,

                                }}
                                component="nav"
                                aria-labelledby="table of contents"
                                subheader={
                                    <ListSubheader component="div" id="nested-list-subheader">
                                    Table of contents
                                    </ListSubheader>
                                }
                                >
                                <ListItemButton onClick={() =>{
                                    window.location.href = '#overview';
                                }}>
                                    <ListItemIcon>
                                        I.
                                    </ListItemIcon>
                                    <ListItemText primary="Overview" />
                                </ListItemButton>
                                <ListItemButton onClick={() =>{
                                    window.location.href = '#gettingStarted';
                                }}>
                                    <ListItemIcon>
                                        II.
                                    </ListItemIcon>
                                    <ListItemText primary="Getting started" />
                                </ListItemButton>
                                    <List dense component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 14 }} onClick={() =>{
                                    window.location.href = '#preq';
                                }}>
                                            <ListItemText primary="Prerequisites" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 14 }} onClick={() =>{
                                    window.location.href = '#install';
                                }}>
                                            <ListItemText primary="Installation" />
                                        </ListItemButton>
                                    </List>
                                <ListItemButton onClick={() =>{
                                    window.location.href = '#about';
                                }}>
                                    <ListItemIcon>
                                        III.
                                    </ListItemIcon>
                                    <ListItemText primary="About" />
                                </ListItemButton>
                                    <List dense component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 14 }} onClick={() =>{
                                    window.location.href = '#about';
                                }}>
                                            <ListItemText primary="Built with" />
                                        </ListItemButton>
                                    </List>
                                <ListItemButton onClick={() =>{
                                    window.location.href = '#motivation';
                                }}>
                                    <ListItemIcon>
                                        IV.
                                    </ListItemIcon>
                                    <ListItemText primary="Motivation" />
                                </ListItemButton>
                                <ListItemButton onClick={() =>{
                                    window.location.href = '#learned';
                                }}>
                                    <ListItemIcon>
                                        V.
                                    </ListItemIcon>
                                    <ListItemText primary="What I learned" />
                                </ListItemButton>
                                <ListItemButton onClick={() =>{
                                    window.location.href = '#acknowledge';
                                }}>
                                    <ListItemIcon>
                                        VI.
                                    </ListItemIcon>
                                    <ListItemText primary="Acknowledgements" />
                                </ListItemButton>
                                <ListItemButton onClick={() =>{
                                    window.location.href = '#addInfo';
                                }}>
                                    <ListItemIcon>
                                        VII.
                                    </ListItemIcon>
                                    <ListItemText primary="Additional Information" />
                                </ListItemButton>
                                <List dense component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 14 }} onClick={() =>{
                                    window.location.href = '#issues';
                                }}>
                                            <ListItemText primary="Known issues" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 14 }} onClick={() =>{
                                    window.location.href = '#future';
                                }}>
                                            <ListItemText primary="Future improvements" />
                                        </ListItemButton>
                                    </List>
                            </List>
                            <Divider sx={{margin: '2rem 0'}} />
                                <Typography variant="h3" component="h2" id="overview">I. Overview</Typography>
                                    <Typography variant="body1">
                                        Using the NASA Astronomy Picture of the Day API, this web application aims to provide a simple way to view the media that was posted on a given day. 
                                        The user can select a date starting from today going into the past. 
                                        The application will then render the media that was posted on that day, along with a description, and copyright information. 
                                        <br />
                                        <br />
                                        Using HTML, CSS, and JavaScript, this project was built from scratch using no frameworks or libraries.
                                        The design of this website was inspired partly by the NASA website, and partly by exercising my own creativity.
                                    </Typography>
                            <Divider sx={{margin: '2rem 0'}} />
                                <Typography variant="h3" component="h2" id="gettingStarted">II. Getting started</Typography>
                                    <Typography variant="h4" component="h3" id="prereq" >Prerequisites</Typography>
                                        <Typography variant="body1">
                                            <br />
                                            Outside of an IDE and a web browser, there are no prerequisites to run this project.
                                            <br />
                                            <br />
                                        </Typography>
                                    <Typography variant="h4" component="h3" id="install" className="styling-h3" >Installation</Typography>
                                        <Typography variant="body1">
                                            <br />
                                            If you're looking to run this project locally, follow these steps:
                                            <br />
                                            <ol>
                                                <li>
                                                    Clone the repository
                                                    <br />
                                                    <code>
                                                        git clone https://github.com/LadyBluenotes/NASA
                                                    </code>
                                                </li>
                                                <br />
                                                <li>
                                                    Open index.html
                                                    <br />
                                                    <code>
                                                        open index.html
                                                    </code>
                                                </li>
                                            </ol>
                                        </Typography>
                            <Divider sx={{margin: '2rem 0'}} />
                                <Typography variant="h3" component="h2" id="about">III. About</Typography>
                                    <Typography variant="body1">
                                    NASA, or the National Aeronautics and Space Administration, is a government agency responsible for the civilian space program, as well as aeronautics and space reserach. 
                                    One of their many initiatives is the Astronomy Picture of the Day (APOD) API. 
                                    This API allows users to access the media that NASA has selected for that day or any day in the past. 
                                    <br/>
                                    <br/>
                                    This web application, which was built using the APOD API, allowing users easily access and view these daily images and explanations. 
                                    With the application, users can browse through an archive of media with their associated titles, descriptions, and copyright information.
                                    <br/>
                                    <br/>
                                    The media featured on the APOD can be anything from photographs of distant galaxies and nebulae, to images captured by NASA's own spacecraft and telescopes. 
                                    The media can also be videos, such as the video of the Perseverance rover landing on Mars.
                                    This web application was built to provide a way to easily access and view this media, and to provide a simple way to browse through the archive.
                                    <br/>
                                    <br/>
                                    </Typography>
                                    <Typography variant="h3" id="builtwith" className="styling-h3" >Built with</Typography>
                                        <List disablePadding>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="CSS" />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="HTML" />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="JavaScript" />
                                            </ListItem> 
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="NASA APOD API" />
                                            </ListItem>
                                        </List>
                            <Divider sx={{marginTop: '1rem', marginBottom:'2rem' }} />
                                <Typography variant="h3" component="h2" id="motivation">IV. Motivation</Typography>
                                    <Typography variant="body1">
                                        When I originally started this project, I was aiming to create a web application using the basics of web development coupled with an entertaining API.
                                        After finding out about NASA APIs, and the APOD in particular, I had been inspired to create a site that would display this information in an attractive and easy to use way.
                                        <br />
                                        <br />
                                        The original motivation was to use no frameworks, libraries, or other tools to build the site, other then the basics of HTML, CSS, and JavaScript.
                                        Additionally, I wanted to introduce a bit more complexity through using JavaScript to make the site more interactive.
                                    </Typography>
                            <Divider sx={{margin: '2rem 0'}} />
                                <Typography variant="h3" component="h2" id="learned">V. What I learned</Typography>
                                    <Typography variant="body1">
                                    In using no outside frameworks or libraries, I was able to exercise my HTML and CSS skills to create an attractive site and see how elements interact with each other to display the design I wanted.
                                    Additionally, vanilla JavaScript had challenged me to think about how to use it to make the site more interactive, and how to use it to make the site more user friendly.
                                    I had a goal to hide information and display information based what was interacted with which, at the time, was a challenge for me.
                                    <br />
                                    <br />
                                    Another challenge for me was to create this site in a way that would display all different forms of media, such as images, videos, and text.
                                    While I had an idea of how to do this with images, I was challenged to find a way to display videos so that they would be displayed as well as the option to play them on the site.
                                    </Typography>
                            <Divider sx={{margin: '2rem 0'}} />
                                <Typography variant="h3" component="h2" id="acknowledge">VI. Acknowledgements</Typography>
                                    <Typography variant="body1">
                                        This project was mostly inspired by the NASA website and the APOD API.
                                        The design of the site was inspired by the NASA website, but no tutorials or other resources were used to create the site.
                                    </Typography>
                            <Divider sx={{margin: '2rem 0'}} />
                                <Typography variant="h3" component="h2" id="addInfo">VII. Additional Information</Typography>
                                    <Typography variant="body1">
                                        In creating this site, I originally had a goal of just display the media and information that was provided by the API. Looking back, there are things that I should've added to make the site more accessible. These things will be added in the future.
                                        <br />
                                        <br />
                                    </Typography>
                                    <Typography variant="h4" component="h3" id="issues" className="styling-h3" >Known issues</Typography>
                                        <List>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CheckBoxOutlineBlankIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Responsiveness needs to be improved." />
                                            </ListItem>
                                        </List>
                                    <Typography variant="h4" component="h3" id="future" className="styling-h3" >Future improvements</Typography>
                                        <List>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CheckBoxOutlineBlankIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Improve design with media display." />
                                            </ListItem>
                                        </List>
        </Container>
    )
}