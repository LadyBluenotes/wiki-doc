import { Container, Divider, Typography, List, ListSubheader, Link, ListItemButton, ListItemIcon, ListItemText, ListItem, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

export default function HappyHour() {

    return(
        <Container>
            <Typography variant="h2" component="h1" sx={{ fontWeight:500 }}>The Happy Hour Guide</Typography>
                        <Stack direction="row" spacing={2} sx={{margin: '1rem 0'}}>
                            <Link href="https://github.com/LadyBluenotes/TheHappyHourGuide"><GitHubIcon /></Link>
                            <Link href="https://happyhour.sarahgerrard.me/"><LanguageIcon /></Link>
                        </Stack>
                                <Typography variant="body1">
                                    The Happy Hour Guide is a web application that lets users search for their favorite cocktails or find a new favorite.
                                </Typography>
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
                            <Divider sx={{marginTop: '1rem', marginBottom:'2rem' }} />
                                <Typography variant="h3" component="h2" id="overview">I. Overview</Typography>
                                    <Typography variant="body1">
                                        As a project using my first API, I wanted to create a cocktail guide for individuals who are looking to change things up with their drinks at home. 
                                        This project was intended to be a fun way to learn about APIs and how to use them in a project, as well as learn more about design and styling.
                                        HTML, CSS, and vanilla JavaScript were what was used to create this project, providing another opportunity to learn about web development.
                                    </Typography>
                            <Divider sx={{margin: '2rem 0'}} />
                                <Typography variant="h3" component="h2" id="gettingStarted">II. Getting started</Typography>
                                    <Typography variant="h4" component="h3" id="prereq" >Prerequisites</Typography>
                                        <Typography variant="body1">
                                            <br />
                                            Other than an internet browser and IDE, there is no other requirements to run this application.
                                            <br />
                                            <br />
                                        </Typography>
                                    <Typography variant="h4" component="h3" id="install" className="styling-h3" >Installation</Typography>
                                        <Typography variant="body1">
                                            <br />
                                            How to install and run the application.
                                            <br />
                                            <ol>
                                                <li>
                                                    Clone the repository
                                                    <br />
                                                    <code>
                                                        git clone https://github.com/LadyBluenotes/TheHappyHourGuide
                                                    </code>
                                                </li>
                                                <br />
                                                <li>
                                                    Start the application
                                                    <br />
                                                    <code>
                                                        open index.html
                                                    </code>
                                                </li>
                                                <br />
                                            </ol>
                                        </Typography>
                            <Divider sx={{margin: '2rem 0'}} />
                                <Typography variant="h3" component="h2" id="about">III. About</Typography>
                                    <Typography variant="body1">
                                        The Happy Hour Guide was built on web development fundamentals.
                                        The main languages used were HTML, CSS, and vanilla JavaScript.
                                        Rather than introduce frameworks and libraries with this project, I wanted to focus on styling and structure that was built from the ground up.
                                        <br/>
                                        <br/>
                                        TheCocktailDB API was used to pull in the data for the application.
                                        With this API being free and easy to use, it was an ideal introduction to APIs compared to some of the more complex APIs that are available.
                                        <br/>
                                        <br/>
                                    </Typography>
                                    <Typography variant="h3" id="builtwith" className="styling-h3" >Built with</Typography>
                                        <List dense disablePadding>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="TheCocktailDB API" />
                                            </ListItem>
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
                                        </List>
                            <Divider sx={{marginTop: '1rem', marginBottom:'2rem' }} />
                                <Typography variant="h3" component="h2" id="motivation">IV. Motivation</Typography>
                                    <Typography variant="body1">
                                        With a few months of practice building web based projects with HTML and CSS, I decided it was time to introduce JavaScript into the mix. 
                                        Rather than just create a more interactive project, I wanted it to also be a chance to learn about APIs and how to use them in a project.
                                        <br/>
                                        <br/>
                                        While there were more complex APIs I had been exposed to in the past, I decided to start with a more simple one and that is how I came across TheCocktailDB API.
                                        In addition to the API having well-structured data and being easy to use, it was also free to use.
                                        I wanted to style this project in a way that there would be a pop up, or modal, that would appear when a user searched for a drink or chose a random one.
                                        In the end, my intention was to challenge myself using CSS and JavaScript to create a project that was both visually appealing and functional. 
                                    </Typography>
                            <Divider sx={{margin: '2rem 0'}} />
                                <Typography variant="h3" component="h2" id="learned">V. What I learned</Typography>
                                    <Typography variant="body1">
                                    Using this API had challenged me due to object that was returned from the API call.
                                    In how the data was structured, I was forced to also learn how to utilize loops and conditionals to pull out the data I needed.
                                    I also had to figure out a way to handle returns that did not have a value for a specific key.
                                    <br />
                                    <br />
                                    I had a lot of fun learning about JavaScript in this project.
                                    This project introduced event listeners and how to use them to create a more interactive experience, in addition to using the native fetch API to make all the API calls.
                                    I was taught to utilize the console to determine what information was being returned and to figure out how to access the data I needed.
                                    Once the information I wanted to find had been retrieved, the next step was to figure out how to render it into the DOM.
                                    <br />
                                    <br />
                                    The design aspect of this project was also a challenge.
                                    I wanted a project that I had designed from the ground up, so I created a written mock up of the project and then started to build it.
                                    I wanted to make use of a modal, because I had never used one before, and I wanted to make sure that the modal was responsive.
                                    This part of the project, while I thought it would be easy, was actually the most challenging part of the project.
                                    </Typography>
                            <Divider sx={{margin: '2rem 0'}} />
                                <Typography variant="h3" component="h2" id="acknowledge">VI. Acknowledgements</Typography>
                                    <Typography variant="body1">
                                        With this being my first modal attempt, I followed a tutorial from Brad Traversy of the Traversy Media Youtube channel to help me get started.
                                    </Typography>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                 <a href="https://www.youtube.com/watch?v=6ophW7Ask_0&ab_channel=TraversyMedia" target="_blank" rel="noreferrer">Modal Video</a>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                            <Divider sx={{margin: '2rem 0'}} />
                                <Typography variant="h3" component="h2" id="addInfo">VII. Additional Information</Typography>
                                    <Typography variant="body1">
                                        This is where you may add any additional information about the project.
                                        <br />
                                        <br />
                                    </Typography>
                                    <Typography variant="h4" component="h3" id="issues" className="styling-h3" >Known issues</Typography>
                                        <List disablePadding>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CheckBoxOutlineBlankIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Fix text overflow that shows up with some drinks." />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CheckBoxOutlineBlankIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Stop text from showing up in one block." />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CheckBoxOutlineBlankIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Button on main page needs needs to remain on same line as input." />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CheckBoxOutlineBlankIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Responsiveness needs to be investigated for mobile devices." />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CheckBoxOutlineBlankIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Assess accessibility." />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CheckBoxOutlineBlankIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Adjust modal." />
                                            </ListItem>
                                        </List>
                                    <Typography variant="h4" component="h3" id="future" className="styling-h3" >Future improvements</Typography>
                                        <List disablePadding>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CheckBoxOutlineBlankIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Save your favorite drinks." />
                                            </ListItem>
                                        </List>
        </Container>
    )
}