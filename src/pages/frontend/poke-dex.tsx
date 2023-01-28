import * as React from 'react';
import { Card, Typography, Divider, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

export default function PokeDex() {

    return (
        <>
            <Card sx={{ padding: '20px' }}>
                <Typography variant="h1">The Poke-Dex</Typography>
                        <Link href="https://github.com/LadyBluenotes/the-poke-dex"><GitHubIcon /></Link>
                        <Link href="https://pokedex.sarahgerrard.me/"><LanguageIcon /></Link>
                            <Typography variant="body1">The Poke-Dex is a web application used to display information about all known Pokemon from the popular franchise. The application utilizes the Poke API, a publicly available API, that provides information on Pokemon such as their names, abilities, and statistics.</Typography>
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
                            <Typography variant="h2" component="h3" id="template-overview">I. Overview</Typography>
                                <Typography variant="body1">
                                    As a fan of Pokemon, I wanted to use my developer skills to create a web application that would display information about the pokemon in the franchise. I decided to use the Poke API, a publicly available and reliable source for Pokemon data, to gather relevant information such as names, abilities, and statistics. Using my skills in React, React Router, and Material UI, I was able to create this visually appealing web application that displays information about all known Pokemon.
                                </Typography>
                        <Divider sx={{margin: '2rem 0'}} />
                            <Typography variant="h2" component="h3" id="template-gettingStarted">II. Getting started</Typography>
                                <Typography variant="h3" component="h4" id="template-prereq" className="styling-h3" >Prerequisites</Typography>
                                    <Typography variant="body1">
                                        The following must be installed on your machine:
                                            <ul>
                                                <li>Node.js</li>
                                                <li>npm</li>
                                            </ul>
                                    </Typography>
                                <Typography variant="h3" component="h4" id="template-install" className="styling-h3" >Installation</Typography>
                                    <Typography variant="body1">
                                        <ol>
                                            <li>Clone the repo</li>
                                                <ul>
                                                    <li>
                                                        <code>
                                                            git clone https://github.com/LadyBluenotes/the-poke-dex
                                                        </code>
                                                    </li>
                                                </ul>
                                            <li>Install NPM packages</li>
                                                <ul>
                                                    <li>
                                                        <code>
                                                            npm install
                                                        </code>
                                                    </li>
                                                </ul>
                                            <li>Run the app</li>
                                            <ul>
                                                <li>
                                                    <code>
                                                        npm start
                                                    </code>
                                                </li>
                                            </ul>
                                        </ol>
                                    </Typography>
                        <Divider sx={{margin: '2rem 0'}} />
                            <Typography variant="h2" component="h3" id="template-about">III. About</Typography>
                                <Typography variant="body1">
                                    This Poke-Dex web application was built using the JavaScript library, React. React enabled me to create a smooth and responsive user experience by using components to create a modular and reusable codebase. Additionally, React allowed me to create a single-page application that would dynamically update the page without having to refresh the page.
                                    <br />
                                    <br />
                                    To handle all the routing, I used React Router. This library provided a way to map different URLs to specific components. Based on the URL the user had navigated to, the appropriate component would be rendered and displayed on the page. In addition to handling routing, React Router allowed props to be passed to the components, which allowed me to pass the Pokemon data to the components as needed.
                                    <br />
                                    <br />
                                    For the visual component, I wanted to create a clean and simple design that would be easy to navigate. To achieve this, I used Material UI, a React component library that provides pre-built components that can be easily customized. Material UI provided the base for the design of the web application, and I was able to customize the components to fit my needs.
                                    <br />
                                    <br />
                                    To gather the Pokemon data, I used the Poke API and Axios. The Poke API is a publicly available and reliable source for Pokemon data. Axios is a JavaScript library that allows me to make HTTP requests to the Poke API. Using Axios, I was able to make requests to the Poke API and retrieve the data I needed to display on the web application. These requests were made asynchronously, which allowed the web application to load the data as it was retrieved. This allowed the web application to load quickly and efficiently.
                                    <br/>
                                    <br/>
                                </Typography>
                                <Typography variant="h3" component="h4" id="template-builtwith" className="styling-h3" >Built with</Typography>
                                    <Typography variant="body1">
                                        <ul>
                                            <li>
                                                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a>
                                            </li>
                                            <li>
                                                <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">React Router</a>
                                            </li>
                                            <li>
                                                <a href="https://mui.com/" target="_blank" rel="noreferrer">Material UI</a>
                                            </li>
                                            <li>
                                                <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">Poke API</a>
                                            </li>
                                            <li>
                                                <a href="https://axios-http.com/docs/intro" target="_blank" rel="noreferrer">Axios</a>
                                            </li>
                                        </ul>
                                    </Typography>
                        <Divider sx={{margin: '2rem 0'}} />
                            <Typography variant="h2" component="h3" id="template-motivation">IV. Motivation</Typography>
                                <Typography variant="body1">
                                    This project was an exciting opportunity for me to delve deeper into the world of React. As one of my more involved front-end projects, it provided hands-on learning that allowed me to gain a better understanding of the library's capabilities and best practices.
                                    <br />
                                    <br />
                                    In addition to practicing React, I also wanted to explore the Material UI library. I had used Material UI in the past, but I wanted to explore the library further and see how it could be used to streamline the creation of components and improve the user experience.
                                    <br />
                                    <br />
                                    This project was also an opportunity for me to practice my design skills. I wanted to create a clean and simple design that would be easy to navigate. I also wanted to create a design that would be responsive and work well on both desktop and mobile devices. I believe I was able to achieve this goal, and I am happy with the final product.
                                </Typography>
                        <Divider sx={{margin: '2rem 0'}} />
                            <Typography variant="h2" component="h3" id="template-learned">V. What I learned</Typography>
                                <Typography variant="body1">
                                    What I learned while building this project.
                                </Typography>
                        <Divider sx={{margin: '2rem 0'}} />
                            <Typography variant="h2" component="h3" id="template-acknowledge">VI. Acknowledgements</Typography>
                                <Typography variant="body1">
                                    List of people, articles or videos that helped with the building of this project.
                                </Typography>
                        <Divider sx={{margin: '2rem 0'}} />
                            <Typography variant="h2" component="h3" id="template-addInfo">VII. Additional Information</Typography>
                                <Typography variant="body1">
                                    Additional information about the project.
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="h3" component="h4" id="template-issues" className="styling-h3" >Known issues</Typography>
                                    <Typography variant="body1">
                                        List of known issues with the project.
                                        <br />
                                        <br />
                                    </Typography>
                                <Typography variant="h3" component="h4" id="template-future" className="styling-h3" >Future improvements</Typography>
                                    <Typography variant="body1">
                                        List of future improvements to the project.
                                        <br />
                                        <br />
                                    </Typography>
                                <Typography variant="h3" component="h4" id="template-ref" className="styling-h3" >References</Typography>
                                    <Typography variant="body1">
                                        List of references used to build the project.
                                    </Typography>
            </Card>
        </>
    )
}