import * as React from 'react';
import { Container, Typography, Divider, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Link, ListItem, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function TaskIt() {

    return (
        <>
            <Container maxWidth="lg">
                <Typography variant="h2" component="h1" sx={{ fontWeight:500 }}>Task-It API</Typography>
                        <Stack direction="row" spacing={2} sx={{margin: '1rem 0'}}>
                            <Link href="https://github.com/LadyBluenotes/task-it"><GitHubIcon /></Link>
                        </Stack>
                                <Typography variant="body1">
                                    Task-It is a simple task management API that allows users to create, read, update, and delete tasks. It is built with Node.js, Express, and MongoDB.
                                </Typography>
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
                            <Divider sx={{margin: '2rem 0'}} />
                                <Typography variant="h3" component="h2" id="overview">I. Overview</Typography>
                                    <Typography variant="body1">
                                        Task-It is an API that was built to help users manage their tasks. With each task created, users can input a title, description, dictate whether the task is complete or not, and set a due date. In addition, users can also assign a task to another user. There are some defaults set in place to ensure the data is valid. For example, the due date is set to when the task is created, if no due date is provided, the status is set to false, and it is assigned to the user who created it, if no user is provided. 
                                        <br />
                                        <br />
                                        The API is built using Node.js, Express, and MongoDB with Mongoose to model the data. Mongoose is used to validate the data and ensure it is valid. During testing of the API, I had used Postman to test the API endpoints. Additionally, I introduced Nodemon to help with development because it automatically restarts the server when changes are made.
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
                                                        git clone https://github.com/LadyBluenotes/task-it
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
                                        The aim of this project was to build an API with the basic CRUD operations. 
                                        In addition to the basic CRUD operations, I also wanted to add some additional features to the API, such as assigning a task to another user and setting a due date. 
                                        Using Node.js, Express, and MongoDB, I was able to build the API and add the additional features.
                                        <br/>
                                        <br/>
                                        Node is a JavaScript runtime built on Chrome's V8 JavaScript engine which allows developers to write server-side code using JavaScript. 
                                        Express is a web application framework for Node.js that is designed for building web applications and APIs. These two technologies work together well to build an efficient and effective REST API. 
                                        Nodemon was also used to help with development because it automatically restarts the server when changes are made. 
                                        This allowed me to focus on building the API and not have to worry about restarting the server every time I made a change.
                                        In addition to Express, Body Parser was used to parse incoming request bodies in a middleware before the handlers, which is needed to access the data in the request body.
                                        <br/>
                                        <br/>
                                        MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need. 
                                        Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. 
                                        It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB. 
                                        Between these two technologies, the data was able to be stored and retrieved from the database.
                                        <br />
                                        <br />
                                        I chose these technologies to get a better understanding of how they work together. 
                                        With Postman to test the API endpoints, I was able to build the API and test it to ensure it was working as expected.
                                        <br />
                                        <br />
                                    </Typography>
                                    <Typography variant="h3" id="builtwith" className="styling-h3" >Built with</Typography>
                                        <List disablePadding>
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
                                        </List>
                            <Divider sx={{marginBottom: '2rem', marginTop:'1rem' }} />
                                <Typography variant="h3" component="h2" id="motivation">IV. Motivation</Typography>
                                    <Typography variant="body1">
                                        After using many different APIs, I wanted to build my own.
                                        Knowing the basics of how APIs work, I wanted to build one from scratch to get an idea of the development process.
                                        Being familiar with Node.js, it was an easy choice to incorporate it into the project alongside Express and MongoDB. 
                                        <br />
                                        <br />
                                        REST APIs require the use of HTTP methods to perform CRUD operations.
                                        In developing my own API, I wanted to make sure I understood how to use each of the HTTP methods and how they are used to perform the create, read, update, and delete operations.
                                        While making an API call to the endpoints seemed simple enough, I wanted to challenge myself to put the data sent in the request body into a database and retrieve it when needed.
                                    </Typography>
                            <Divider sx={{margin: '2rem 0'}} />
                                <Typography variant="h3" component="h2" id="learned">V. What I learned</Typography>
                                    <Typography variant="body1">
                                        This project really challenged me to think outside the box and to think about how I would solve a problem.
                                        I learned how to not only use HTTP methods to perform CRUD operations, but how to handle errors that may occur.
                                        I became more familiar with the developer tools in the browser and how using them can be beneficial in debugging.
                                        Understanding that sometimes you have to start smaller and work your way up to the bigger picture was a valuable lesson.
                                        For example, rather than trying to build a function right out of the gate, I would send a simple response to the client to make sure the endpoint was working as expected.
                                        <br />
                                        <br />
                                        Postman was also a valuable tool I learned more about. 
                                        It allowed me to test the API endpoints and see the responses from the server to make sure the data was being sent and received as expected.
                                        <br />
                                        <br />
                                        Creating schemas was also a new concept for me.
                                        Schemas introduced a way to validate the data being sent to the server in a structured way that was easy to understand.
                                        Seeing how these were created helped me to understand how they make data more manageable which is important when working with large amounts of data.
                                        With going back and forth between MongoDB and Mongoose, I was able to see how the data was being stored and retrieved from the database.
                                        This was a great way to see how NoSql databases work and how they are different from relational databases.
                                        Additionally, I learned ways I needed to improve my schemas to make them more efficient based on what I was seeing on the MongoDB side of things.
                                        <br />
                                        <br />
                                        Express introduced a way to create routes and handle requests.
                                        I learned how to use the different HTTP methods to perform CRUD operations and how to handle errors that may occur.
                                        Middlewares were also introduced which allowed me to add functionality to the routes.
                                        I learned how to use middlewares to validate the data being sent to the server and to handle errors that may occur.
                                        With this part, I also had to learn how to develop a server that was well structured and easy to navigate.
                                        I separated the routes, controllers, and models into different files to make it easier to find what I was looking for.
                                        I can see how this would be beneficial when working with larger projects where there are many different routes and models required.
                                        <br />
                                        <br />
                                        This project was a great introduction to server side development and how to build an API from scratch. I appreciated the challenge and the opportunity to learn more about the development process.
                                    </Typography>
                            <Divider sx={{margin: '2rem 0'}} />
                                <Typography variant="h3" component="h2" id="acknowledge">VI. Acknowledgements</Typography>
                                    <Typography variant="body1">
                                        While I didn't use any tutorials or guides to build this project, I did go back and forth between the documentation for the different technologies used.
                                    </Typography>
                            <Divider sx={{margin: '2rem 0'}} />
                                <Typography variant="h3" component="h2" id="addInfo">VII. Additional Information</Typography>
                                    <Typography variant="body1">
                                        This project was intended to be a simple API that would allow users to create, read, update, and delete data. 
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
                                                <ListItemText primary="Protect endpoints using auth" />
                                            </ListItem>
                                        </List>
            </Container>
        </>
    )
}