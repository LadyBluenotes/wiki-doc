import { Container, Divider, Typography, List, ListSubheader, Link, ListItemButton, ListItemIcon, ListItemText, ListItem, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

export default function Projects() {

    return(
        <Container maxWidth="lg">
            <Typography variant="h2" component="h1" sx={{ fontWeight:500 }}>Project Documentation Site</Typography>
            <Stack direction="row" spacing={2} sx={{margin: '1rem 0'}}>
                <Link href="https://github.com/LadyBluenotes/wiki-doc"><GitHubIcon /></Link>
                <Link href="https://docs.sarahgerrard.me/"><LanguageIcon /></Link>
            </Stack>
                    <Typography variant="body1">
                        This is site is intended to be used as a documentation site for my projects. It will also double as a portfolio site for my projects. Material UI, Next.js, and TypeScript were used to build this site.
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
                            This is a documentation site for my projects.
                            I wanted to branch out from JavaScript to TypeScript while using other technologies I was more familiar with like Material UI and Next.js.
                            While this project is very much still a work in progress, I am enjoying the process of learning and building. 
                        </Typography>
                <Divider sx={{margin: '2rem 0'}} />
                    <Typography variant="h3" component="h2" id="gettingStarted">II. Getting started</Typography>
                        <Typography variant="h4" component="h3" id="prereq" >Prerequisites</Typography>
                            <Typography variant="body1">
                                <br />
                                The following must be installed on your machine:
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Node.js" />
                                    </ListItem>
                                </List>
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
                                            git clone https://github.com/LadyBluenotes/wiki-doc
                                        </code>
                                    </li>
                                    <br />
                                    <li>
                                        Install NPM packages
                                        <br />
                                        <code>
                                            npm install
                                        </code>
                                    </li>
                                    <br />
                                    <li>
                                        Run the application
                                        <br />
                                        <code>
                                            npm run dev
                                        </code>
                                    </li>
                                </ol>
                            </Typography>
                <Divider sx={{margin: '2rem 0'}} />
                    <Typography variant="h3" component="h2" id="about">III. About</Typography>
                        <Typography variant="body1">
                            This is my first larger site created using TypeScript and Next.js.
                            Like my process with other projects, I wanted to start with the basics and build from there.
                            Rather than introduce many new things at once, I wanted to focus on learning one thing at a time, hence only introducing TypeScript in this project and using Material UI and Next.js which I was already familiar with.
                            <br/>
                            <br/>
                            This site aims to be a place to house in-depth analysis of my projects, as well as a place to document my learning process.
                            I hope to use this site as a way to share my knowledge and experience with others, doubling as a portfolio of sorts.
                            <br />
                            <br />
                        </Typography>
                        <Typography variant="h3" id="builtwith" className="styling-h3" >Built with</Typography>
                            <List dense disablePadding>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Material UI" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Next.js" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="TypeScript" />
                                </ListItem> 
                            </List>
                <Divider sx={{marginTop: '1rem', marginBottom:'2rem' }} />
                    <Typography variant="h3" component="h2" id="motivation">IV. Motivation</Typography>
                        <Typography variant="body1">
                            I wanted this site to remain simple and easy to navigate, while also being visually appealing. 
                            Material UI was a great choice for this, as it is a library of pre-built components that are easy to use and customize.
                            Using Next.js was also an easy choice because of it's built-in support for TypeScript as well as its routing and server-side rendering capabilities.
                            <br/>
                            <br/>
                            While I'm not done with this project, I am happy with the progress I've made so far.
                            I intend to eventually make this a full-stack application through the use of a database and API.
                            Additionally, I have plans to improve the styling and add more functionality to the site.
                            I don't want this site to get too complex, but I feel like making it full stack will improve the performance and follow the KISS principles better.
                            <br />
                            <br />
                            At the moment, I am just working on adding more projects to the site. 
                        </Typography>
                <Divider sx={{margin: '2rem 0'}} />
                    <Typography variant="h3" component="h2" id="learned">V. What I learned</Typography>
                        <Typography variant="body1">
                        So far this project has introduced some of the similarities and differences between JavaScript and TypeScript.
                        I have learned more about how TypeScript is compiled into JavaScript and how it is used to make code more readable and easier to maintain.
                        TypeScript has a lot of similarities to JavaScript, but it also has some differences that can be confusing at first.
                        Seeing the errors at compile time is a huge benefit, as it allows me to fix the errors before the code is even run.
                        </Typography>
                <Divider sx={{margin: '2rem 0'}} />
                    <Typography variant="h3" component="h2" id="acknowledge">VI. Acknowledgements</Typography>
                        <Typography variant="body1">
                        At the moment, this site has had no outside influence other than some inspiration from how documentation has been written for other projects.
                        </Typography>
                <Divider sx={{margin: '2rem 0'}} />
                    <Typography variant="h3" component="h2" id="addInfo">VII. Additional Information</Typography>
                        <Typography variant="body1">
                            This site is a work in progress, but there are plans for future improvements and known issues to be addressed.
                            <br />
                            <br />
                        </Typography>
                        <Typography variant="h4" component="h3" id="issues" className="styling-h3" >Known issues</Typography>
                            <List dense>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckBoxOutlineBlankIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="With deployment, have CSS files compile. Currently, they are not." />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckBoxOutlineBlankIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Reduce code repitition through creating more components." />
                                </ListItem>
                            </List>
                        <Typography variant="h4" component="h3" id="future" className="styling-h3" >Future improvements</Typography>
                            <List dense>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckBoxOutlineBlankIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Add tags to each project." />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckBoxOutlineBlankIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Introduce search bar to see allow user to browse projects based on technology used." />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckBoxOutlineBlankIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Create an API for documentation." />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckBoxOutlineBlankIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Once API is created, store details in a database to be rendered on this site." />
                                </ListItem>
                            </List>
        </Container>
    )
}