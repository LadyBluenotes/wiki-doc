import { Card, Divider, Typography, List, ListSubheader , ListItemButton, ListItemIcon , ListItemText } from '@mui/material';

export default function Template() {

    return (
        <>
            <Typography variant="h1">Template</Typography>
                <Typography variant="body1">This is a template for creating new project pages.</Typography>
            <Divider sx={{margin: '2rem 0'}} />
            <Card sx={{ padding:'20px', margin:'20px' }}>
                    <Typography variant="h1" component="h2">Project name</Typography>
                    <Typography variant="body1">Project description</Typography>
                <Divider sx={{margin: '2rem 0'}} />
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
                                <ListItemButton sx={{ pl: 14 }} onClick={() =>{
                            window.location.href = '#ref';
                        }}>
                                    <ListItemText primary="References" />
                                </ListItemButton>
                            </List>
                    </List>
                <Divider sx={{margin: '2rem 0'}} />
                    <Typography variant="h2" component="h3" id="overview">I. Overview</Typography>
                        <Typography variant="body1">
                            Overview of the project.
                        </Typography>
                <Divider sx={{margin: '2rem 0'}} />
                    <Typography variant="h2" component="h3" id="gettingStarted">II. Getting started</Typography>
                        <Typography variant="h3" component="h4" id="prereq" className="styling-h3" >Prerequisites</Typography>
                            <Typography variant="body1">
                                What you need to install the software and how to install them.
                                <br />
                                <br />
                            </Typography>
                        <Typography variant="h3" component="h4" id="install" className="styling-h3" >Installation</Typography>
                            <Typography variant="body1">
                                A step by step series of examples that tell you how to get a development env running.
                            </Typography>
                <Divider sx={{margin: '2rem 0'}} />
                    <Typography variant="h2" component="h3" id="about">III. About</Typography>
                        <Typography variant="body1">
                            About the project.
                            <br />
                            <br />
                        </Typography>
                        <Typography variant="h3" component="h4" id="builtwith" className="styling-h3" >Built with</Typography>
                            <Typography variant="body1">
                                List of frameworks, libraries, and other tools used to build the project.
                            </Typography>
                <Divider sx={{margin: '2rem 0'}} />
                    <Typography variant="h2" component="h3" id="motivation">IV. Motivation</Typography>
                        <Typography variant="body1">
                            Why I built this project and what I hoped to accomplish.
                        </Typography>
                <Divider sx={{margin: '2rem 0'}} />
                    <Typography variant="h2" component="h3" id="learned">V. What I learned</Typography>
                        <Typography variant="body1">
                            What I learned while building this project.
                        </Typography>
                <Divider sx={{margin: '2rem 0'}} />
                    <Typography variant="h2" component="h3" id="acknowledge">VI. Acknowledgements</Typography>
                        <Typography variant="body1">
                            List of people, articles or videos that helped with the building of this project.
                        </Typography>
                <Divider sx={{margin: '2rem 0'}} />
                    <Typography variant="h2" component="h3" id="addInfo">VII. Additional Information</Typography>
                        <Typography variant="body1">
                            Additional information about the project.
                            <br />
                            <br />
                        </Typography>
                        <Typography variant="h3" component="h4" id="issues" className="styling-h3" >Known issues</Typography>
                            <Typography variant="body1">
                                List of known issues with the project.
                                <br />
                                <br />
                            </Typography>
                        <Typography variant="h3" component="h4" id="future" className="styling-h3" >Future improvements</Typography>
                            <Typography variant="body1">
                                List of future improvements to the project.
                                <br />
                                <br />
                            </Typography>
                        <Typography variant="h3" component="h4" id="ref" className="styling-h3" >References</Typography>
                            <Typography variant="body1">
                                List of references used to build the project.
                            </Typography>
            </Card>
        </>
    )
}