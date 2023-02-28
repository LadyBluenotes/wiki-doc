import { Container, Divider, Link, Stack } from '@mui/material';
import { List, ListSubheader, ListItemContent, ListItemDecorator, ListItemButton, ListItem, Typography } from '@mui/joy';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import TableOfContents from '@/components/TableOfContents';

export default function HappyHour() {

    return(
        <Container>
            <Typography level="display1" sx={{ fontWeight:500 }}>The Happy Hour Guide</Typography>
                        <Stack direction="row" spacing={2} sx={{margin: '1rem 0'}}>
                            <Link href="https://github.com/LadyBluenotes/TheHappyHourGuide"><GitHubIcon /></Link>
                            <Link href="https://happyhour.sarahgerrard.me/"><LanguageIcon /></Link>
                        </Stack>
                                <Typography level="body1">
                                    The Happy Hour Guide is a web application that lets users search for their favorite cocktails or find a new favorite.
                                </Typography>
                            <Divider sx={{ my:2 }} />
                                <TableOfContents />
                            <Divider sx={{ my:2 }} />
                                <Typography level="h2" id="overview">I. Overview</Typography>
                                    <Typography level="body1">
                                        As a project using my first API, I wanted to create a cocktail guide for individuals who are looking to change things up with their drinks at home. 
                                        This project was intended to be a fun way to learn about APIs and how to use them in a project, as well as learn more about design and styling.
                                        HTML, CSS, and vanilla JavaScript were what was used to create this project, providing another opportunity to learn about web development.
                                    </Typography>
                            <Divider sx={{ my:2 }} />
                                <Typography level="h3" component="h2" id="gettingStarted">II. Getting started</Typography>
                                    <Typography level="h4" component="h3" id="prereq" >Prerequisites</Typography>
                                        <Typography level="body1">
                                            <br />
                                            Other than an internet browser and IDE, there is no other requirements to run this application.
                                            <br />
                                            <br />
                                        </Typography>
                                    <Typography level="h4" component="h3" id="install" className="styling-h3" >Installation</Typography>
                                        <Typography level="body1">
                                            <br />
                                            How to install and run the application.
                                        </Typography>
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
                            <Divider sx={{ my:2 }} />
                                <Typography level="h3" component="h2" id="about">III. About</Typography>
                                    <Typography level="body1">
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
                                    <Typography level="h3" id="builtwith" className="styling-h3" >Built with</Typography>
                                        <List>
                                            <ListItem>
                                                <ListItemDecorator>
                                                    <ArrowRightIcon />
                                                </ListItemDecorator>
                                                <ListItemContent>
                                                    TheCocktailDB API
                                                </ListItemContent>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemDecorator>
                                                    <ArrowRightIcon />
                                                </ListItemDecorator>
                                                <ListItemContent>
                                                    CSS
                                                </ListItemContent>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemDecorator>
                                                    <ArrowRightIcon />
                                                </ListItemDecorator>
                                                <ListItemContent>
                                                    HTML
                                                </ListItemContent>
                                            </ListItem> 
                                            <ListItem>
                                                <ListItemDecorator>
                                                    <ArrowRightIcon />
                                                </ListItemDecorator>
                                                <ListItemContent>
                                                    JavaScript
                                                </ListItemContent>
                                            </ListItem> 
                                        </List>
                            <Divider sx={{ my:2 }} />
                                <Typography level="h3" component="h2" id="motivation">IV. Motivation</Typography>
                                    <Typography level="body1">
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
                                <Typography level="h3" component="h2" id="learned">V. What I learned</Typography>
                                    <Typography level="body1">
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
                                <Typography level="h3" component="h2" id="acknowledge">VI. Acknowledgements</Typography>
                                    <Typography level="body1">
                                        With this being my first modal attempt, I followed a tutorial from Brad Traversy of the Traversy Media Youtube channel to help me get started.
                                    </Typography>
                                    <List>
                                        <ListItem>
                                            <ListItemDecorator>
                                                <ArrowRightIcon />
                                            </ListItemDecorator>
                                            <ListItemContent>
                                                 <a href="https://www.youtube.com/watch?v=6ophW7Ask_0&ab_channel=TraversyMedia" target="_blank" rel="noreferrer">Modal Video</a>
                                            </ListItemContent>
                                        </ListItem>
                                    </List>
                            <Divider sx={{margin: '2rem 0'}} />
                                <Typography level="h3" component="h2" id="addInfo">VII. Additional Information</Typography>
                                    <Typography level="body1">
                                        This is where you may add any additional information about the project.
                                        <br />
                                        <br />
                                    </Typography>
                                    <Typography level="h4" component="h3" id="issues" className="styling-h3" >Known issues</Typography>
                                        <List>
                                            <ListItem>
                                                <ListItemDecorator>
                                                    <CheckBoxOutlineBlankIcon />
                                                </ListItemDecorator>
                                                <ListItemContent>
                                                    Fix text overflow that shows up with some drinks.
                                                </ListItemContent>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemDecorator>
                                                    <CheckBoxOutlineBlankIcon />
                                                </ListItemDecorator>
                                                <ListItemContent>
                                                    Stop text from showing up in one block.
                                                </ListItemContent>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemDecorator>
                                                    <CheckBoxOutlineBlankIcon />
                                                </ListItemDecorator>
                                                <ListItemContent>
                                                    Button on main page needs needs to remain on same line as input.
                                                </ListItemContent>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemDecorator>
                                                    <CheckBoxOutlineBlankIcon />
                                                </ListItemDecorator>
                                                <ListItemContent>
                                                    Responsiveness needs to be investigated for mobile devices.
                                                </ListItemContent>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemDecorator>
                                                    <CheckBoxOutlineBlankIcon />
                                                </ListItemDecorator>
                                                <ListItemContent>
                                                    Assess accessibility.
                                                </ListItemContent>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemDecorator>
                                                    <CheckBoxOutlineBlankIcon />
                                                </ListItemDecorator>
                                                <ListItemContent>
                                                    Adjust modal.
                                                </ListItemContent>
                                            </ListItem>
                                        </List>
                                    <Typography level="h4" component="h3" id="future" className="styling-h3" >Future improvements</Typography>
                                        <List>
                                            <ListItem>
                                                <ListItemDecorator>
                                                    <CheckBoxOutlineBlankIcon />
                                                </ListItemDecorator>
                                                <ListItemContent>
                                                    Save your favorite drinks.
                                                </ListItemContent>
                                            </ListItem>
                                        </List>
        </Container>
    )
}