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

export default function BudgetBuddy() {
  const router = useRouter();

  return (
    <Sheet
      sx={{
        py: 4,
        px: 10,
        m: 3,
        "@media (max-width: 600px)": {
          m: 0,
          p: 2,
        },
        "@media (min-width: 600px) and (max-width: 960px)": {
          m: 2,
          py: 2,
          px: 4,
        },
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
            "@media (max-width: 600px)": {
              fontSize: "3rem",
              textAlign: "center",
            },
          }}
        >
          Budget Buddy
          <IconButton
            onClick={() => {
              router.push("https://github.com/LadyBluenotes/budget-buddy");
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
        Budget Buddy is a simple budgeting API that allows users to track their
        expenses and income.
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
          "@media (max-width: 600px)": {
            fontSize: "1.7rem",
          },
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
        Budget Buddy is a RESTful API that allows users to track their expenses
        and income. Users can create an account, login, and create, read,
        update, and delete transactions.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
        }}
      >
        The API is built with Node.js, Express, and MongoDB. In order to protect
        end points, the API uses JSON Web Tokens (JWT) for authentication. If a
        user is logged in, they can create, read, update, and delete
        transactions, however, if they try and access an end point that requires
        authentication, they will be denied access. To protect user data, the
        API uses bcryptjs to hash passwords and salt them.
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
          "@media (max-width: 600px)": {
            fontSize: "1.7rem",
          },
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
          "@media (max-width: 600px)": {
            fontSize: "1.2rem",
          },
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
              ml: 0,
            }}
          >
            Node.js
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          <Typography level="body1">MongoDB Account</Typography>
        </ListItem>
      </List>
      <Typography
        id="install"
        level="h3"
        sx={{
          mb: 1,
          ml: 1,
          "@media (max-width: 600px)": {
            fontSize: "1.2rem",
          },
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
      <List
        sx={{
          overflow: "auto",
        }}
      >
        <ListItem>
          <ListItemDecorator>1.</ListItemDecorator>
          <Typography level="body1">
            Clone the repository from GitHub.
            <br />
            <code>git clone https://github.com/LadyBluenotes/budget-buddy</code>
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemDecorator>2.</ListItemDecorator>
          <Typography level="body1">
            Install the dependencies.
            <br />
            <code>npm run install</code>
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemDecorator>3.</ListItemDecorator>
          <Typography level="body1">
            Copy the contents of the .env.example file into a new file called
            .env and add the appropriate values.
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemDecorator>3.</ListItemDecorator>
          <Typography level="body1">
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
          "@media (max-width: 600px)": {
            fontSize: "1.7rem",
          },
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
        Building on the knowledge gained from{" "}
        <Link
          href="/back-end/task-it"
          style={{
            textDecoration: "none",
          }}
        >
          Task It
        </Link>
        , I created this API to assist in learning how to add user
        authentication to an API. Rather than creating a to-do list application,
        I decided to create an API that allows users to track their expenses and
        income. While to-do list applications are useful, I wanted to create an
        application that would be more useful in the real world, especially
        something that I could use myself. Keeping this API relatively simple
        allowed me to focus on the main goal of adding user authentication, but
        to add some complexity to the API, I decided to also protect end points
        that require authentication.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        Similar to Task It, this API is built with Node.js, Express, and
        MongoDB. To get an in-depth run down of the technologies used, check out
        Task It&apos;s{" "}
        <Link
          href="/back-end/task-it/#about"
          style={{
            textDecoration: "none",
          }}
        >
          About Section
        </Link>
        .
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        In addition to these technologies, I used JSON Web Tokens (JWT) to
        protect end points. JWT is a standard for creating access tokens for an
        application, which is used to authenticate users. The use of JWT is
        considered best practice when it comes to user authentication, since it
        is stateless and does not require cookies in addition to creating a
        token that expires after a certain amount of time. The benefits to using
        JWT is that it is easy to implement, it is scalable, and it is secure.
        In order to protect user data, I used bcryptjs to hash passwords and
        salt them. Bcrypt is a password hashing function that protects hackers
        from gaining access to user data. Bcrypt, like JWT, is considered best
        practice when it comes to protecting user data and it is easy to
        implement, scalable, and secure.
      </Typography>
      <Typography
        id="builtWith"
        level="h3"
        sx={{
          mb: 1,
          ml: 1,
          "@media (max-width: 600px)": {
            fontSize: "1.2rem",
          },
        }}
      >
        Built With
      </Typography>
      <List size="sm">
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          Bcrypt.js
        </ListItem>
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
          JSON Web Token
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
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          Validator
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />
      <Typography
        id="motivation"
        level="h1"
        component="h2"
        sx={{
          mb: 1,
          "@media (max-width: 600px)": {
            fontSize: "1.7rem",
          },
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
        The motivation behind this project was to learn how to add user
        authentication to an API. When I had worked on Task It, I had learned
        how to create an API and how to use HTTP methods to perform CRUD
        operations. Where I could&apos;ve added user authentication to Task It,
        I wanted to create a new project that would also be of use to me. Where
        I had previously used Google Sheets to track my expenses and income, I
        wanted to create an API that would allow me to do the same thing in
        addition to being consumed by a front-end application down the road.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        As someone who best learns by doing, I believe that the best way to do
        this is to build something. While I know there are tools that can assist
        in user authentication, I aimed to learn the authentication process on
        its own. Seeing how things work under the hood is a valuable skill to
        have and I believe that it is important to understand how things work
        before using them. This API provided me the ability to practice these
        skills and to further enhance my understanding of how to build an API.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography
        id="learned"
        level="h1"
        component="h2"
        sx={{
          mb: 1,
          "@media (max-width: 600px)": {
            fontSize: "1.7rem",
          },
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
        While the majority of this project was a review of the technologies I
        had previously used, I did still learn a few valuable lessons.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        For one, understanding more about how to pass user data to the API in a
        secure manner was a valuable lesson. Security is a major concern when it
        comes to building an API and I wanted to make sure that I was doing
        everything I could to protect user data. In addition to protecting user
        data, I utilized JWT to protect end points that required authentication.
        JWT was interesting to work with, especially because it is stateless and
        does not require cookies. With that being said, I look forward to
        learning more about how JWT works with front end architectures.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        Postman continued to be a valuable tool in testing APIs. It provided
        many ways for me to assess the API and to test different scenarios. The
        ability to test the authentication was especially useful, because I did
        not want to require front end development to test the API.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        All in all, this project was a great way to review the technologies I
        had previously used and to learn more about how to protect user data.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography
        id="acknowledge"
        level="h1"
        component="h2"
        sx={{
          mb: 1,
          "@media (max-width: 600px)": {
            fontSize: "1.7rem",
          },
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
        This project was not possible without the documentation written by the
        creators of the technologies used. I believe that without their clear
        and concise examples and explanations, I would not have been able to
        complete this project as efficiently as I did.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography
        id="addInfo"
        level="h1"
        component="h2"
        sx={{
          mb: 1,
          "@media (max-width: 600px)": {
            fontSize: "1.7rem",
          },
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
        This project had aimed to be a review of the technologies I had
        previously used, in addition to adding user authentication and endpoint
        protection.
      </Typography>
      <Typography
        level="h4"
        component="h3"
        id="issues"
        sx={{
          ml: 1,
          "@media (max-width: 600px)": {
            fontSize: "1.2rem",
          },
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
        sx={{
          ml: 1,
          "@media (max-width: 600px)": {
            fontSize: "1.2rem",
          },
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
        <ListItem
          sx={{
            "@media (max-width: 600px)": {
              ml: 0,
            },
          }}
        >
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Convert from JavaScript to TypeScript to determine how the two
          languages differ in this circumstance.
        </ListItem>
      </List>
    </Sheet>
  );
}
