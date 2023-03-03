import * as React from 'react';
import { Container, Typography, Divider, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Link, ListItem, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import TableOfContents from '@/components/TableOfContents';

export default function PokeDex() {

    return (
        <Container maxWidth="lg">
            <Typography variant="h2" component="h1" sx={{ fontWeight:500 }}>The Poke-Dex</Typography>
                <Stack direction="row" spacing={2} sx={{margin: '1rem 0'}}>
                    <Link href="https://github.com/LadyBluenotes/the-poke-dex"><GitHubIcon /></Link>
                    <Link href="https://pokedex.sarahgerrard.me/"><LanguageIcon /></Link>
                </Stack>
                        <Typography variant="body1">
                            The Poke-Dex is a React web application used to display information about all known Pokemon from the popular franchise. This application uses the Poke API, a publically available and reliable source for Pokemon data, React, React Router, and Material UI.
                        </Typography>
                    <Divider sx={{marginTop: '2rem', marginBottom:'1rem' }} />
                        <TableOfContents />
                    <Divider sx={{margin: '2rem 0'}} />
                        <Typography variant="h3" component="h2" id="overview">I. Overview</Typography>
                            <Typography variant="body1">
                                As a fan of Pokemon, I wanted to use my developer skills to create a web application that would display information about the pokemon in the franchise. I chose to use the Poke API as it is a reliable source of information about Pokemon and is free to use. I also chose to use React as it is a popular and powerful JavaScript library that is easy to use and learn. This application is a single page application that uses React Router to display different components based on the URL. Design was done using Material UI, a popular React UI framework, with inspiration from what a Poke Dex would look like in the Pokemon universe.
                            </Typography>
                    <Divider sx={{margin: '2rem 0'}} />
                        <Typography variant="h3" component="h2" id="gettingStarted">II. Getting started</Typography>
                            <Typography variant="h4" component="h3" id="prereq" sx={{ paddingBottom:'1rem'}}>Prerequisites</Typography>
                                <Typography variant="body1">
                                    The following must be installed on your machine:
                                    <List disablePadding>
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
                        <Typography variant="h3" component="h2" id="about">III. About</Typography>
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
                            <Typography variant="h4" component="h3">Built with</Typography>
                                <List dense>
                                    <ListItem>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="React" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="React Router" />
                                    </ListItem> 
                                    <ListItem>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Axios" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Poke API" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Material UI" />
                                    </ListItem>
                                </List>
                    <Divider sx={{marginTop: '1rem', marginBottom:'2rem' }} />
                        <Typography variant="h3" component="h2" id="motivation">IV. Motivation</Typography>
                            <Typography variant="body1">
                                This project was an exciting opportunity for me to delve deeper into the world of React. As one of my more involved front-end projects, it provided hands-on learning that allowed me to gain a better understanding of the library's capabilities and best practices.
                                <br />
                                <br />
                                I had wanted to create a single-page application that would dynamically update as the user interacted by it. I also wanted to require the user to navigate to different pages to view the data they engaged with.
                                <br />
                                <br />
                                Additionally, I wanted to use an API that provided more complex data, hence the use of the Poke API. Based on the information I was able to retrieve, I wanted to build a robust application that would present the data in a visually and functionally appealing way.
                                <br />
                                <br />
                                Furthermore, I aimed to practice my design skills. I wanted to create a clean and simple design that had a clear theme. I also wanted to create a design that would be responsive and work well on both desktop and mobile devices.
                            </Typography>
                    <Divider sx={{margin: '2rem 0'}} />
                        <Typography variant="h3" component="h2" id="learned">V. What I learned</Typography>
                            <Typography variant="body1">
                                This project was a valuable learning experience in practicing more advanced React concepts. Specifically, I refined my skills using React Hooks to create functional components and manage states. This approach resulted in a more modular and reusable codebase, while also adhering to the KISS principle.
                                <br />
                                <br />
                                One of my goals for this project was to create a single page application. To achieve this, I broke down pages into smaller components to avoid having a singular large component, something that goes against React best practices. This encouraged me to think about the application in a modular way and resulted in a more organized and efficient codebase.
                                <br />
                                <br />
                                Another advanced concept I used in this project was React Router to handle application routing. By mapping different URLs to different components, I could control which components were rendered when the user navigated to the URL. I started with v5 with plans to migrate to v6 in the future as a learning experience.
                                <br />
                                <br />
                                In addition to React concepts, I also had to handle data from an API. The Poke API had a large amount of data that I wanted to display, so I used Axios over the native Fetch API to make asynchronous requests. I was also challenged with the idea of pagination, but was able to successfully implement it into the application.
                                <br />
                                <br />
                                Finally, I chose to use Material UI as the component library for the design of the web application. The library's popularity, ease of use, and stellar documentation made it a great choice, and I was able to quickly customize the components to fit my needs. Overall, I am proud of the progress I made in this project and the skills I was able to further develop.
                            </Typography>
                    <Divider sx={{margin: '2rem 0'}} />
                        <Typography variant="h3" component="h2" id="acknowledge">VI. Acknowledgements</Typography>
                            <Typography variant="body1">
                                This project was inspired by a tutorial done by Anthony Sistilli on Youtube, with design inspired by the Pokemon color palette.
                            </Typography>
                                <List disablePadding>
                                    <ListItem>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            Anthony Sistilli's Tutorial - <a href="https://www.youtube.com/watch?v=gGcLQ2sZFeg" target="_blank" rel="noreferrer">Part one</a> & <a href="https://www.youtube.com/watch?v=XmTCeWbVjpM" target="_blank" rel="noreferrer">part two</a>
                                        </ListItemText>
                                    </ListItem>
                                </List>
                    <Divider sx={{marginBottom: '2rem', marginTop: '1rem'}} />
                        <Typography variant="h3" component="h2" id="addInfo">VII. Additional Information</Typography>
                            <Typography variant="body1">
                                While this project is mostly complete, there are still some known issues that I am working to resolve. I am also planning to add additional features in the future to further enhance the user experience.
                                <br />
                                <br />
                            </Typography>
                            <Typography variant="h4" component="h3" id="issues">Known issues</Typography>
                                <List dense>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckBoxOutlineBlankIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="PokeDex title does not return user to home page." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckBoxOutlineBlankIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Can not search when on a pokemon page." />
                                    </ListItem>
                                </List>
                            <Typography variant="h4" component="h3" id="future" className="styling-h3" >Future improvements</Typography>
                                <List dense>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckBoxOutlineBlankIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Migrate React Router from v5 to v6." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckBoxOutlineBlankIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Render Pokemon on card components." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckBoxOutlineBlankIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Display page number." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckBoxOutlineBlankIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Edit the size of the search button in the upper right corner." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckBoxOutlineBlankIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Link user to Pokemon website." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckBoxOutlineBlankIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Add a favorites feature." />
                                    </ListItem>
                                </List>
        </Container>
    )
}