import React from "react";
import {
  Typography,
  Sheet,
  List,
  ListItem,
  ListItemDecorator,
  Divider,
  IconButton,
} from "@mui/joy";
import {
  GitHub,
  Language,
  ArrowRight,
  CheckBoxOutlineBlank,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";

export default function TaskIt() {
  const router = useRouter();

  return (
    <Sheet
      sx={{
        py: 4,
        px: 10,
        m: 3,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Typography
          level="display1"
          component="h1"
          sx={{
            mr: 2,
            mb: 1,
          }}
        >
          Budget Buddy
          <IconButton
            onClick={() => {
              router.push("https://github.com/LadyBluenotes/task-it");
            }}
            variant="outlined"
            sx={{
              mx: 2,
              top: -6,
              bgcolor: "primary.200",
              "&:hover": {
                bgcolor: "primary.300",
              },
            }}
          >
            <GitHub
              sx={{
                color: "neutral.900",
              }}
            />
          </IconButton>
        </Typography>
      </div>
      <Typography
        level="body1"
        sx={{
          ml: 1,
        }}
      >
        Task-It is a simple task management API that allows users to create,
        read, update, and delete tasks. It is built with Node.js, Express, and
        MongoDB.
      </Typography>
      <Divider
        sx={{
          my: 2,
        }}
      />
      <TableOfContents />
      <Divider
        sx={{
          mt: 3,
          mb: 2,
        }}
      />
      <Typography
        id="overview"
        level="h1"
        component="h2"
        sx={{
          mb: 2,
        }}
      >
        I. Overview
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        Task-It is an API that was built to help users manage their tasks. With
        each task created, users can input a title, description, dictate whether
        the task is complete or not, and set a due date. In addition, users can
        also assign a task to another user. There are some defaults set in place
        to ensure the data is valid. For example, the due date is set to when
        the task is created, if no due date is provided, the status is set to
        false, and it is assigned to the user who created it, if no user is
        provided.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
        }}
      >
        The API is built using Node.js, Express, and MongoDB with Mongoose to
        model the data. Mongoose is used to validate the data and ensure it is
        valid. During testing of the API, I had used Postman to test the API
        endpoints. Additionally, I introduced Nodemon to help with development
        because it automatically restarts the server when changes are made.
      </Typography>
      <Divider
        sx={{
          my: 2,
        }}
      />
      <Typography
        id="gettingStrated"
        level="h1"
        component="h2"
        sx={{
          mb: 1,
        }}
      >
        II. Getting Started
      </Typography>
      <Typography
        id="prereq"
        level="h3"
        sx={{
          mb: 1,
          ml: 1,
        }}
      >
        Prerequisites
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 2,
          mb: 2,
        }}
      >
        The following must be installed on your machine:
      </Typography>
      <List>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          <Typography
            level="body1"
            sx={{
              ml: 2,
            }}
          >
            Node.js
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          <Typography
            level="body1"
            sx={{
              ml: 2,
            }}
          >
            MongoDB Account
          </Typography>
        </ListItem>
      </List>
      <Typography
        id="install"
        level="h3"
        sx={{
          mb: 1,
          ml: 1,
        }}
      >
        Installation
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 2,
        }}
      >
        How to install and run the application.
      </Typography>
      <List>
        <ListItem>
          <ListItemDecorator>1.</ListItemDecorator>
          <Typography
            level="body1"
            sx={{
              ml: 2,
            }}
          >
            Clone the repository from GitHub.
            <br />
            <code>git clone https://github.com/LadyBluenotes/budget-buddy</code>
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemDecorator>2.</ListItemDecorator>
          <Typography
            level="body1"
            sx={{
              ml: 2,
            }}
          >
            Install the dependencies.
            <br />
            <code>npm run install</code>
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemDecorator>3.</ListItemDecorator>
          <Typography
            level="body1"
            sx={{
              ml: 2,
            }}
          >
            Copy the contents of the .env.example file into a new file called
            .env and add the appropriate values.
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemDecorator>3.</ListItemDecorator>
          <Typography
            level="body1"
            sx={{
              ml: 2,
            }}
          >
            Run the application.
            <br />
            <code>npm run start</code>
          </Typography>
        </ListItem>
      </List>
      <Divider
        sx={{
          my: 2,
        }}
      />
      <Typography
        id="about"
        level="h1"
        component="h2"
        sx={{
          mb: 1,
        }}
      >
        III. About
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        The aim of this project was to build an API with the basic CRUD
        operations. In addition to the basic CRUD operations, I also wanted to
        add some additional features to the API, such as assigning a task to
        another user and setting a due date. Using Node.js, Express, and
        MongoDB, I was able to build the API and add the additional features.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        Node is a JavaScript runtime built on Chrome&apos;s V8 JavaScript engine
        which allows developers to write server-side code using JavaScript.
        Express is a web application framework for Node.js that is designed for
        building web applications and APIs. These two technologies work together
        well to build an efficient and effective REST API. Nodemon was also used
        to help with development because it automatically restarts the server
        when changes are made. This allowed me to focus on building the API and
        not have to worry about restarting the server every time I made a
        change. In addition to Express, Body Parser was used to parse incoming
        request bodies in a middleware before the handlers, which is needed to
        access the data in the request body.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        MongoDB is a document database with the scalability and flexibility that
        you want with the querying and indexing that you need. Mongoose is an
        Object Data Modeling (ODM) library for MongoDB and Node.js. It manages
        relationships between data, provides schema validation, and is used to
        translate between objects in code and the representation of those
        objects in MongoDB. Between these two technologies, the data was able to
        be stored and retrieved from the database.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        I chose these technologies to get a better understanding of how they
        work together. With Postman to test the API endpoints, I was able to
        build the API and test it to ensure it was working as expected.
      </Typography>
      <Typography
        id="builtWith"
        level="h3"
        sx={{
          mb: 1,
          ml: 1,
        }}
      >
        Built With
      </Typography>
      <List size="sm">
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          Body Parser
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          Express.js
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          MongoDB
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          Mongoose
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          Node.js
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          Nodemon
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />
      <Typography
        id="motivation"
        level="h1"
        component="h2"
        sx={{
          mb: 1,
        }}
      >
        IV. Motivation
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        After using many different APIs, I wanted to build my own. Knowing the
        basics of how APIs work, I wanted to build one from scratch to get an
        idea of the development process. Being familiar with Node.js, it was an
        easy choice to incorporate it into the project alongside Express and
        MongoDB.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        REST APIs require the use of HTTP methods to perform CRUD operations. In
        developing my own API, I wanted to make sure I understood how to use
        each of the HTTP methods and how they are used to perform the create,
        read, update, and delete operations. While making an API call to the
        endpoints seemed simple enough, I wanted to challenge myself to put the
        data sent in the request body into a database and retrieve it when
        needed.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography
        id="learned"
        level="h1"
        component="h2"
        sx={{
          mb: 1,
        }}
      >
        V. What I Learned
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        This project really challenged me to think outside the box and to think
        about how I would solve a problem. I learned how to not only use HTTP
        methods to perform CRUD operations, but how to handle errors that may
        occur. I became more familiar with the developer tools in the browser
        and how using them can be beneficial in debugging. Understanding that
        sometimes you have to start smaller and work your way up to the bigger
        picture was a valuable lesson. For example, rather than trying to build
        a function right out of the gate, I would send a simple response to the
        client to make sure the endpoint was working as expected.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        Postman was also a valuable tool I learned more about. It allowed me to
        test the API endpoints and see the responses from the server to make
        sure the data was being sent and received as expected.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        Creating schemas was also a new concept for me. Schemas introduced a way
        to validate the data being sent to the server in a structured way that
        was easy to understand. Seeing how these were created helped me to
        understand how they make data more manageable which is important when
        working with large amounts of data. With going back and forth between
        MongoDB and Mongoose, I was able to see how the data was being stored
        and retrieved from the database. This was a great way to see how NoSql
        databases work and how they are different from relational databases.
        Additionally, I learned ways I needed to improve my schemas to make them
        more efficient based on what I was seeing on the MongoDB side of things.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        Express introduced a way to create routes and handle requests. I learned
        how to use the different HTTP methods to perform CRUD operations and how
        to handle errors that may occur. Middlewares were also introduced which
        allowed me to add functionality to the routes. I learned how to use
        middlewares to validate the data being sent to the server and to handle
        errors that may occur. With this part, I also had to learn how to
        develop a server that was well structured and easy to navigate. I
        separated the routes, controllers, and models into different files to
        make it easier to find what I was looking for. I can see how this would
        be beneficial when working with larger projects where there are many
        different routes and models required.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        This project was a great introduction to server side development and how
        to build an API from scratch. I appreciated the challenge and the
        opportunity to learn more about the development process.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography
        id="acknowledge"
        level="h1"
        component="h2"
        sx={{
          mb: 1,
        }}
      >
        VI. Acknowledgements
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        While I didn&apos;t use any tutorials or guides to build this project, I did
        go back and forth between the documentation for the different
        technologies used.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography
        id="addInfo"
        level="h1"
        component="h2"
        sx={{
          mb: 1,
        }}
      >
        VII. Additional Information
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        This project was intended to be a simple API that would allow users to
        create, read, update, and delete data.
      </Typography>
      <Typography
        level="h4"
        component="h3"
        id="issues"
        className="styling-h3"
        sx={{
          ml: 1,
        }}
      >
        Known issues
      </Typography>
      <List
        size="sm"
        sx={{
          ml: 2,
        }}
      >
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          None at this time
        </ListItem>
      </List>
      <Typography
        level="h4"
        component="h3"
        id="future"
        className="styling-h3"
        sx={{
          ml: 1,
        }}
      >
        Future improvements
      </Typography>
      <List
        size="sm"
        sx={{
          ml: 2,
        }}
      >
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Protect endpoints using auth.
        </ListItem>
      </List>
    </Sheet>
  );
}
