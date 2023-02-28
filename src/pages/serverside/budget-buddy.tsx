import * as React from 'react';
import Link from 'next/link';
import { Container, Typography, Divider, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, ListItem, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import TableOfContents from '@/components/TableOfContents';

export default function TaskIt() {

    return (
        <>
            <Container maxWidth="lg">
                <Typography variant="h2" component="h1" sx={{ fontWeight:500 }}>Budget Buddy API</Typography>
                        <Stack direction="row" spacing={2} sx={{margin: '1rem 0'}}>
                            <Link href="https://github.com/LadyBluenotes/budget-buddy"><GitHubIcon /></Link>
                        </Stack>
                                <Typography variant="body1">
                                    Budget Buddy is a simple budgeting API that allows users to track their expenses and income.
                                </Typography>
                            <Divider sx={{marginTop: '2rem', marginBottom:'1rem' }} />
                                <TableOfContents />
                            <Divider sx={{margin: '2rem 0'}} />
                                <Typography variant="h3" component="h2" id="overview">I. Overview</Typography>
                                    <Typography variant="body1">
                                        Budget Buddy is a RESTful API that allows users to track their expenses and income. 
                                        Users can create an account, login, and create, read, update, and delete transactions. 
                                        <br />
                                        <br />
                                        The API is built with Node.js, Express, and MongoDB. 
                                        In order to protect end points, the API uses JSON Web Tokens (JWT) for authentication.
                                        If a user is logged in, they can create, read, update, and delete transactions, however, if they try and access an end point that requires authentication, they will be denied access.
                                        To protect user data, the API uses bcryptjs to hash passwords and salt them.
                                    </Typography>
                            <Divider sx={{margin: '2rem 0'}} />
                                <Typography variant="h3" component="h2" id="gettingStarted">II. Getting started</Typography>
                                    <Typography variant="h4" component="h3" id="prereq" >Prerequisites</Typography>
                                        <Typography variant="body1">
                                            <br />
                                            What is needed to install and run the application.
                                            <List disablePadding>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <ArrowRightIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Node.js" />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <ArrowRightIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="MongoDB account" />
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
                                                        git clone https://github.com/LadyBluenotes/budget-buddy
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
                                                    Copy the contents of the .env.example file into a new file called .env and add the appropriate values.
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
                                        Building on the knowledge gained from <Link href="/serverside/task-it" style={{
                                            textDecoration: "none",
                                            color: "blue"
                                        }}>Task It</Link>, I created this API to assist in learning how to add user authentication to an API. 
                                        Rather than creating a to-do list application, I decided to create an API that allows users to track their expenses and income.
                                        While to-do list applications are useful, I wanted to create an application that would be more useful in the real world, especially something that I could use myself.
                                        Keeping this API relatively simple allowed me to focus on the main goal of adding user authentication, but to add some complexity to the API, I decided to also protect end points that require authentication.
                                        <br/>
                                        <br/>
                                        Similar to Task It, this API is built with Node.js, Express, and MongoDB.
                                        To get an in-depth run down of the technologies used, check out Task It's <Link href="/serverside/task-it/#about" style={{
                                            textDecoration: "none",
                                            color: "blue"
                                        }}>About Section</Link>.
                                        <br />
                                        <br />
                                        In addition to these technologies, I used JSON Web Tokens (JWT) to protect end points.
                                        JWT is a standard for creating access tokens for an application, which is used to authenticate users.
                                        The use of JWT is considered best practice when it comes to user authentication, since it is stateless and does not require cookies in addition to creating a token that expires after a certain amount of time.
                                        The benefits to using JWT is that it is easy to implement, it is scalable, and it is secure.
                                        In order to protect user data, I used bcryptjs to hash passwords and salt them.
                                        Bcrypt is a password hashing function that protects hackers from gaining access to user data.
                                        Bcrypt, like JWT, is considered best practice when it comes to protecting user data and it is easy to implement, scalable, and secure.
                                        <br />
                                        <br />
                                    </Typography>
                                    <Typography variant="h3" id="builtwith" className="styling-h3" >Built with</Typography>
                                        <List disablePadding>
                                        <ListItem>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Bcrypt.js" />
                                            </ListItem> 
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Body-parser" />
                                            </ListItem> 
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Express.js" />
                                            </ListItem> 
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="JSON Web Token" />
                                            </ListItem> 
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="MongoDB" />
                                            </ListItem> 
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Mongoose" />
                                            </ListItem> 
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Node.js" />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Nodemon" />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Validator" />
                                            </ListItem>
                                        </List>
                            <Divider sx={{marginBottom: '2rem', marginTop:'1rem' }} />
                                <Typography variant="h3" component="h2" id="motivation">IV. Motivation</Typography>
                                    <Typography variant="body1">
                                        The motivation behind this project was to learn how to add user authentication to an API.
                                        When I had worked on Task It, I had learned how to create an API and how to use HTTP methods to perform CRUD operations.
                                        Where I could've added user authentication to Task It, I wanted to create a new project that would also be of use to me.
                                        Where I had previously used Google Sheets to track my expenses and income, I wanted to create an API that would allow me to do the same thing in addition to being consumed by a front-end application down the road.
                                        <br />
                                        <br />
                                        As someone who best learns by doing, I believe that the best way to do this is to build something. 
                                        While I know there are tools that can assist in user authentication, I aimed to learn the authentication process on its own.
                                        Seeing how things work under the hood is a valuable skill to have and I believe that it is important to understand how things work before using them.
                                        This API provided me the ability to practice these skills and to further enhance my understanding of how to build an API.
                                    </Typography>
                            <Divider sx={{margin: '2rem 0'}} />
                                <Typography variant="h3" component="h2" id="learned">V. What I learned</Typography>
                                    <Typography variant="body1">
                                        While the majority of this project was a review of the technologies I had previously used, I did still learn a few valuable lessons.
                                        <br />
                                        <br />
                                        For one, understanding more about how to pass user data to the API in a secure manner was a valuable lesson. 
                                        Security is a major concern when it comes to building an API and I wanted to make sure that I was doing everything I could to protect user data.
                                        In addition to protecting user data, I utilized JWT to protect end points that required authentication.
                                        JWT was interesting to work with, especially because it is stateless and does not require cookies.
                                        With that being said, I look forward to learning more about how JWT works with front end architectures.
                                        <br />
                                        <br />
                                        Postman continued to be a valuable tool in testing APIs. 
                                        It provided many ways for me to assess the API and to test different scenarios.
                                        The ability to test the authentication was especially useful, because I did not want to require front end development to test the API.
                                        <br />
                                        <br />
                                        All in all, this project was a great way to review the technologies I had previously used and to learn more about how to protect user data.
                                    </Typography>
                            <Divider sx={{margin: '2rem 0'}} />
                                <Typography variant="h3" component="h2" id="acknowledge">VI. Acknowledgements</Typography>
                                    <Typography variant="body1">
                                        This project was not possible without the documentation written by the creators of the technologies used.
                                        I believe that without their clear and concise examples and explanations, I would not have been able to complete this project as efficiently as I did. 
                                    </Typography>
                            <Divider sx={{margin: '2rem 0'}} />
                                <Typography variant="h3" component="h2" id="addInfo">VII. Additional Information</Typography>
                                    <Typography variant="body1">
                                        This project had aimed to be a review of the technologies I had previously used, in addition to adding user authentication and endpoint protection.
                                        <br />
                                        <br />
                                    </Typography>
                                    <Typography variant="h4" component="h3" id="issues" className="styling-h3" >Known issues</Typography>
                                        <List>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CheckBoxOutlineBlankIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="None at this time" />
                                            </ListItem>
                                        </List>
                                    <Typography variant="h4" component="h3" id="future" className="styling-h3" >Future improvements</Typography>
                                        <List>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CheckBoxOutlineBlankIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Convert from JavaScript to TypeScript to determine how the two languages differ in this circumstance." />
                                            </ListItem>
                                        </List>
            </Container>
        </>
    )
}