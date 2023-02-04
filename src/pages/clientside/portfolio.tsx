import { Container, Divider, Typography, List, ListSubheader, Link, ListItemButton, ListItemIcon, ListItemText, ListItem, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

export default function Portfolio() {


    return(
        <Container maxWidth="lg">
            <Typography variant="h2" component="h1" sx={{ fontWeight:500 }}>My Personal Site</Typography>
                    <Stack direction="row" spacing={2} sx={{margin: '1rem 0'}}>
                        <Link href="https://github.com/LadyBluenotes/portfolio-2.0"><GitHubIcon /></Link>
                        <Link href="https://sarahgerrard.me/"><LanguageIcon /></Link>
                    </Stack>
                            <Typography variant="body1">
                                This is my personal site, which I built using Next.js, JavaScript, and some CSS. This was built to be a hub for people to find out a but more about me, connect with me, or direct them to seeing my work. 
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
                                    While I had built a portfolio site previously, I had used a template and personalized it from there. 
                                    With this site, I intended to build it from scratch while using Next.js to help with the routing and learn more about the framework.
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
                                                    git clone https://github.com/LadyBluenotes/portfolio-2.0/
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
                                                    npm run start
                                                </code>
                                            </li>
                                        </ol>
                                    </Typography>
                        <Divider sx={{margin: '2rem 0'}} />
                            <Typography variant="h3" component="h2" id="about">III. About</Typography>
                                <Typography variant="body1">
                                    This project was primarily built using Next.js with styling done through use of style sheets (CSS).
                                    I primarily wanted to use this as a teaching tool for myself to learn more about Next and how it differed from React.
                                    <br/>
                                    <br/>
                                    The routing was what I was hoping to gain more insight to as well as the way that Next handles their styling. 
                                    I didn't want to introduce any other factors while learning this project, so I kept it simple with some basic CSS. 
                                    I did use one other library for some motion effects, but that was it.
                                </Typography>
                                <Typography variant="h3" id="builtwith" className="styling-h3" sx={{
                                    marginTop: '1rem'
                                }} >Built with</Typography>
                                    <List dense disablePadding>
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
                                            <ListItemText primary="Next.js" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Node.js" />
                                        </ListItem> 
                                    </List>
                        <Divider sx={{marginTop: '1rem', marginBottom:'2rem' }} />
                            <Typography variant="h3" component="h2" id="motivation">IV. Motivation</Typography>
                                <Typography variant="body1">
                                    Next.js was a framework I had been hearing a lot about during my time with learning React.
                                    Going into this project, I had an understanding that Next.js was a framework that included routing, where previously to accomplish this in React, you would need to use a library such as React Router.
                                    I also knew that Next.js was a framework that was built on top of React, so I wanted to see where it different from React and how it was similar.
                                    <br />
                                    <br />
                                    In building this site, I didn't want to make it more confusing with adding in other libraries or frameworks, so I kept it simple with just Next.js and CSS.
                                    Once I had the basics of the site built, I wanted to add some motion effects to the site, so I added in the Framer Motion library.
                                </Typography>
                        <Divider sx={{margin: '2rem 0'}} />
                            <Typography variant="h3" component="h2" id="learned">V. What I learned</Typography>
                                <Typography variant="body1">
                                I learned a lot about Next.js and it quickly became one of my favorite frameworks to work with. 
                                The routing system that was built in was very easy to use and I was able to get the site up and running quickly.
                                In addition to just adding a file to the pages folder, I learned that you can also add a folder to the pages folder and it will create a nested route. 
                                For example, if I wanted to create a route for a page called "about", I could create a folder called "about" and add an index.js file to that folder.
                                While I didn't use this feature in this project, I can see how it would be useful in a larger project.
                                <br />
                                <br />
                                I also learned that Next.js has a built in CSS file that you can use to style your components.
                                Previously, CSS was linked globally to the entire application, but with Next.js, you can import the CSS file into the component that you want to style.
                                This was a great feature to learn as it allowed me to keep my styling separate from my components.
                                I learned that you can use the Framer Motion library to add motion effects to any component that you want.
                                I used this library to add some motion effects to some of the components on the site, such as the headers and when switching pages.
                                <br />
                                <br />
                                Next has some built in features that I found very useful, such as the Image component.
                                This component allows you to import images into your components and it will automatically optimize the images for you.
                                Additionally, the Head component allows you to add meta tags to your pages, which is very useful for SEO as well as accessibility.
                                </Typography>
                        <Divider sx={{margin: '2rem 0'}} />
                            <Typography variant="h3" component="h2" id="acknowledge">VI. Acknowledgements</Typography>
                                <Typography variant="body1">
                                    While I didn't have any help with this project, I did use a lot of resources to help me learn Next.js.
                                    I used the Next.js documentation to learn about the framework and how to use it.
                                    I also used the Framer Motion documentation to learn how to use the library.
                                    The background animation was created from another developer, and I used it as a reference to create my own animation. While I can't remember the exact source at this time, I will update this section with the link once I find it.
                                </Typography>
                        <Divider sx={{margin: '2rem 0'}} />
                            <Typography variant="h3" component="h2" id="addInfo">VII. Additional Information</Typography>
                                <Typography variant="body1" sx={{
                                    marginBottom: '1rem'
                                }}>
                                    This project is still a work in progress - while I am quite happy with how it has come out there are optimizations that I would like to make.
                                </Typography>
                                <Typography variant="h4" component="h3" id="issues" className="styling-h3" >Known issues</Typography>
                                    <List dense>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckBoxOutlineBlankIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Mobile nav needs to be improved." />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckBoxOutlineBlankIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Improve lighthouse score - specifically performance and accessibility." />
                                        </ListItem>
                                    </List>
                                <Typography variant="h4" component="h3" id="future" className="styling-h3" >Future improvements</Typography>
                                    <List dense>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckBoxOutlineBlankIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Change from JavaScript to TypeScript." />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckBoxOutlineBlankIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Migrate projects from this website to their own and replace project cards with a referral to new site." />
                                        </ListItem>
                                    </List>
        </Container>
    )
}