import { Container, Divider, Typography, List, ListSubheader , ListItemButton, ListItemIcon , ListItemText } from '@mui/material';

export default function Nasa() {
    return (
        <> 
            <Container sx={{ padding: '10px' }}>
                <Typography variant="h1">Welcome to Space</Typography>
                    <Typography variant="body1">This is a web application built using the NASA Astronomy Picture of the Day API. By default, it will show the media selected for that day or it can render the media that the user has selected from a date in the past.</Typography>
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
                            window.location.href = '#template-overview';
                        }}>
                            <ListItemIcon>
                                I.
                            </ListItemIcon>
                            <ListItemText primary="Overview" />
                        </ListItemButton>
                        <ListItemButton onClick={() =>{
                            window.location.href = '#template-gettingStarted';
                        }}>
                            <ListItemIcon>
                                II.
                            </ListItemIcon>
                            <ListItemText primary="Getting started" />
                        </ListItemButton>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 14 }} onClick={() =>{
                            window.location.href = '#template-preq';
                        }}>
                                    <ListItemText primary="Prerequisites" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 14 }} onClick={() =>{
                            window.location.href = '#template-install';
                        }}>
                                    <ListItemText primary="Installation" />
                                </ListItemButton>
                            </List>
                        <ListItemButton onClick={() =>{
                            window.location.href = '#template-about';
                        }}>
                            <ListItemIcon>
                                III.
                            </ListItemIcon>
                            <ListItemText primary="About" />
                        </ListItemButton>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 14 }} onClick={() =>{
                            window.location.href = '#template-about';
                        }}>
                                    <ListItemText primary="Built with" />
                                </ListItemButton>
                            </List>
                        <ListItemButton onClick={() =>{
                            window.location.href = '#template-motivation';
                        }}>
                            <ListItemIcon>
                                IV.
                            </ListItemIcon>
                            <ListItemText primary="Motivation" />
                        </ListItemButton>
                        <ListItemButton onClick={() =>{
                            window.location.href = '#template-learned';
                        }}>
                            <ListItemIcon>
                                V.
                            </ListItemIcon>
                            <ListItemText primary="What I learned" />
                        </ListItemButton>
                        <ListItemButton onClick={() =>{
                            window.location.href = '#template-acknowledge';
                        }}>
                            <ListItemIcon>
                                VI.
                            </ListItemIcon>
                            <ListItemText primary="Acknowledgements" />
                        </ListItemButton>
                        <ListItemButton onClick={() =>{
                            window.location.href = '#template-addInfo';
                        }}>
                            <ListItemIcon>
                                VII.
                            </ListItemIcon>
                            <ListItemText primary="Additional Information" />
                        </ListItemButton>
                        <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 14 }} onClick={() =>{
                            window.location.href = '#template-issues';
                        }}>
                                    <ListItemText primary="Known issues" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 14 }} onClick={() =>{
                            window.location.href = '#template-future';
                        }}>
                                    <ListItemText primary="Future improvements" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 14 }} onClick={() =>{
                            window.location.href = '#template-ref';
                        }}>
                                    <ListItemText primary="References" />
                                </ListItemButton>
                            </List>
                    </List>
                <Divider sx={{margin: '2rem 0'}} />
                    <Typography variant="h2" id="template-overview">I. Overview</Typography>
                        <Typography variant="body1">
                            NASA, or the National Aeronautics and Space Administration, is a government agency responsible for the civilian space program, as well as aeronautics and space reserach. One of their many initiatives is the Astronomy Picture of the Day (APOD) API. This API allows users to access the media that NASA has selected for that day or any day in the past. The API is free to use and does not require an API key.
                            <br />
                            <br />
                            This web application, which was built using the APOD API, allows users easily acess and view these daily images and explanations. With the application, users can browse through the archive of media and explanations. The application allows users to get the title of the image, a brief description, and the copyright information, if available.
                            <br />
                            <br />
                            The media featured on the APOD can be anything from photographs of distant galaxies and nebulae, to images captured by NASA's own spacecraft and telescopes. The media can also be videos, such as the video of the Perseverance rover landing on Mars.
                        </Typography>
                <Divider sx={{margin: '2rem 0'}} />
                    <Typography variant="h2" id="template-gettingStarted">II. Getting started</Typography>
                        <Typography variant="h3" id="template-prereq" className="styling-h3" >Prerequisites</Typography>
                            <Typography variant="body1">
                                Outside of an IDE and a web browser, there are no prerequisites to run this project.
                                <br />
                                <br />
                            </Typography>
                        <Typography variant="h3" id="template-install" className="styling-h3" >Installation</Typography>
                            <Typography variant="body1">
                                If you wish to run this project locally, you can clone the repository and [something something].
                            </Typography>
                <Divider sx={{margin: '2rem 0'}} />
                    <Typography variant="h2" id="template-about">III. About</Typography>
                        <Typography variant="body1">
                            About the project.
                            <br />
                            <br />
                        </Typography>
                        <Typography variant="h3" id="template-builtwith" className="styling-h3" >Built with</Typography>
                            <Typography variant="body1">
                                List of frameworks, libraries, and other tools used to build the project.
                            </Typography>
                <Divider sx={{margin: '2rem 0'}} />
                    <Typography variant="h2" id="template-motivation">IV. Motivation</Typography>
                        <Typography variant="body1">
                            Why I built this project and what I hoped to accomplish.
                        </Typography>
                <Divider sx={{margin: '2rem 0'}} />
                    <Typography variant="h2" id="template-learned">V. What I learned</Typography>
                        <Typography variant="body1">
                            What I learned while building this project.
                        </Typography>
                <Divider sx={{margin: '2rem 0'}} />
                    <Typography variant="h2" id="template-acknowledge">VI. Acknowledgements</Typography>
                        <Typography variant="body1">
                            List of people, articles or videos that helped with the building of this project.
                        </Typography>
                <Divider sx={{margin: '2rem 0'}} />
                    <Typography variant="h2" id="template-addInfo">VII. Additional Information</Typography>
                        <Typography variant="body1">
                            Additional information about the project.
                            <br />
                            <br />
                        </Typography>
                        <Typography variant="h3"id="template-issues" className="styling-h3" >Known issues</Typography>
                            <Typography variant="body1">
                                List of known issues with the project.
                                <br />
                                <br />
                            </Typography>
                        <Typography variant="h3" id="template-future" className="styling-h3" >Future improvements</Typography>
                            <Typography variant="body1">
                                List of future improvements to the project.
                                <br />
                                <br />
                            </Typography>
                        <Typography variant="h3" id="template-ref" className="styling-h3" >References</Typography>
                            <Typography variant="body1">
                                List of references used to build the project.
                            </Typography>
            </Container>
        </>
    )
}