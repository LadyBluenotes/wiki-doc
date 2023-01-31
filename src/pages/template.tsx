import { Card, Divider, Typography, List, ListSubheader , ListItemButton, ListItem, ListItemIcon, ListItemText, Stack, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';


export default function Template() {

    return (
        <>
            <Typography variant="h2" component="h1" sx={{ fontWeight:500 }}>Template</Typography>
                <Typography variant="body1">This is a template for creating new project pages.</Typography>
            <Divider sx={{margin: '2rem 0'}} />
            <Card sx={{ padding:'20px', margin:'20px' }}>
                <Typography variant="h2" component="h1" sx={{ fontWeight:500 }}>Project Name</Typography>
                        <Stack direction="row" spacing={2} sx={{margin: '1rem 0'}}>
                            <Link href="#"><GitHubIcon /></Link>
                            <Link href="#"><LanguageIcon /></Link>
                        </Stack>
                                <Typography variant="body1">Project description.</Typography>
                            <Divider sx={{marginTop: '2rem', marginBottom:'1rem' }} />
                                <List
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
                                        <List component="div" disablePadding>
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
                                        <List component="div" disablePadding>
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
                                    <List component="div" disablePadding>
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
                                        Where I will talk about a general overview of the project.
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
                                                    <ListItemText primary="Prereq 1" />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <ArrowRightIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Prereq 2" />
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
                                                        git clone www.github.com/username/repo
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
                                                        npm start
                                                    </code>
                                                </li>
                                            </ol>
                                        </Typography>
                            <Divider sx={{margin: '2rem 0'}} />
                                <Typography variant="h3" component="h2" id="about">III. About</Typography>
                                    <Typography variant="body1">
                                        A section about the project and its purpose.
                                        <br/>
                                        <br/>
                                    </Typography>
                                    <Typography variant="h3" id="builtwith" className="styling-h3" >Built with</Typography>
                                        <List>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Tech 1" />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Tech 2" />
                                            </ListItem> 
                                        </List>
                            <Divider sx={{marginTop: '1rem', marginBottom:'2rem' }} />
                                <Typography variant="h3" component="h2" id="motivation">IV. Motivation</Typography>
                                    <Typography variant="body1">
                                        The reason I wanted to create this application.
                                    </Typography>
                            <Divider sx={{margin: '2rem 0'}} />
                                <Typography variant="h3" component="h2" id="learned">V. What I learned</Typography>
                                    <Typography variant="body1">
                                    Where I can talk about what I learned from the project.
                                    </Typography>
                            <Divider sx={{margin: '2rem 0'}} />
                                <Typography variant="h3" component="h2" id="acknowledge">VI. Acknowledgements</Typography>
                                    <Typography variant="body1">
                                        Where I can acknowledge the people who helped me with the project or inspired me to create it.
                                    </Typography>
                            <Divider sx={{margin: '2rem 0'}} />
                                <Typography variant="h3" component="h2" id="addInfo">VII. Additional Information</Typography>
                                    <Typography variant="body1">
                                        This is where you may add any additional information about the project.
                                        <br />
                                        <br />
                                    </Typography>
                                    <Typography variant="h4" component="h3" id="issues" className="styling-h3" >Known issues</Typography>
                                        <List>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CheckBoxOutlineBlankIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Issue 1" />
                                            </ListItem>
                                        </List>
                                    <Typography variant="h4" component="h3" id="future" className="styling-h3" >Future improvements</Typography>
                                        <List>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CheckBoxOutlineBlankIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Improvement 1" />
                                            </ListItem>
                                        </List>
            </Card>
        </>
    )
}