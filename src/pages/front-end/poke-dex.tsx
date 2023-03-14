import React from "react";
import {
  Typography,
  Sheet,
  List,
  ListItem,
  ListItemDecorator,
  Chip,
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

export default function PokeDex() {
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
          The Poke-Dex
          <IconButton
            onClick={() => {
              router.push("https://github.com/LadyBluenotes/the-poke-dex");
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
          <IconButton
            onClick={() => {
              router.push("https://pokedex.sarahgerrard.me/");
            }}
            sx={{
              top: -6,
              bgcolor: "primary.200",
              "&:hover": {
                bgcolor: "primary.300",
              },
            }}
          >
            <Language
              sx={{
                color: "primary.700",
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
        The Poke-Dex is a React web application used to display information
        about all known Pokemon from the popular franchise. This application
        uses the Poke API, a publically available and reliable source for
        Pokemon data, React, React Router, and Material UI.
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
        }}
      >
        As a fan of Pokemon, I wanted to use my developer skills to create a web
        application that would display information about the pokemon in the
        franchise. I chose to use the Poke API as it is a reliable source of
        information about Pokemon and is free to use. I also chose to use React
        as it is a popular and powerful JavaScript library that is easy to use
        and learn. This application is a single page application that uses React
        Router to display different components based on the URL. Design was done
        using Material UI, a popular React UI framework, with inspiration from
        what a Poke Dex would look like in the Pokemon universe.
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
          mb: 1,
        }}
      >
        The following must be installed on your machine:
      </Typography>
      <List
        size="sm"
        sx={{
          ml: 2,
        }}
      >
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          Node.js
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
            <code>git clone https://github.com/LadyBluenotes/the-poke-dex</code>
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
            Install NPM packages
            <br />
            <code>npm install</code>
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
            Run the app
            <br />
            <code>npm start</code>
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
        This Poke-Dex web application was built using the JavaScript library,
        React. React enabled me to create a smooth and responsive user
        experience by using components to create a modular and reusable
        codebase. Additionally, React allowed me to create a single-page
        application that would dynamically update the page without having to
        refresh the page.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        To handle all the routing, I used React Router. This library provided a
        way to map different URLs to specific components. Based on the URL the
        user had navigated to, the appropriate component would be rendered and
        displayed on the page. In addition to handling routing, React Router
        allowed props to be passed to the components, which allowed me to pass
        the Pokemon data to the components as needed.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        For the visual component, I wanted to create a clean and simple design
        that would be easy to navigate. To achieve this, I used Material UI, a
        React component library that provides pre-built components that can be
        easily customized. Material UI provided the base for the design of the
        web application, and I was able to customize the components to fit my
        needs.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        To gather the Pokemon data, I used the Poke API and Axios. The Poke API
        is a publicly available and reliable source for Pokemon data. Axios is a
        JavaScript library that allows me to make HTTP requests to the Poke API.
        Using Axios, I was able to make requests to the Poke API and retrieve
        the data I needed to display on the web application. These requests were
        made asynchronously, which allowed the web application to load the data
        as it was retrieved. This allowed the web application to load quickly
        and efficiently.
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
          Axios
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          Material UI
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          Poke API
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          React
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          React Router
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
        This project was an exciting opportunity for me to delve deeper into the
        world of React. As one of my more involved front-end projects, it
        provided hands-on learning that allowed me to gain a better
        understanding of the library&apos;s capabilities and best practices.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        I had wanted to create a single-page application that would dynamically
        update as the user interacted by it. I also wanted to require the user
        to navigate to different pages to view the data they engaged with.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        Additionally, I wanted to use an API that provided more complex data,
        hence the use of the Poke API. Based on the information I was able to
        retrieve, I wanted to build a robust application that would present the
        data in a visually and functionally appealing way.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        Furthermore, I aimed to practice my design skills. I wanted to create a
        clean and simple design that had a clear theme. I also wanted to create
        a design that would be responsive and work well on both desktop and
        mobile devices.
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
        This project was a valuable learning experience in practicing more
        advanced React concepts. Specifically, I refined my skills using React
        Hooks to create functional components and manage states. This approach
        resulted in a more modular and reusable codebase, while also adhering to
        the KISS principle.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        One of my goals for this project was to create a single page
        application. To achieve this, I broke down pages into smaller components
        to avoid having a singular large component, something that goes against
        React best practices. This encouraged me to think about the application
        in a modular way and resulted in a more organized and efficient
        codebase.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        Another advanced concept I used in this project was React Router to
        handle application routing. By mapping different URLs to different
        components, I could control which components were rendered when the user
        navigated to the URL. I started with v5 with plans to migrate to v6 in
        the future as a learning experience.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        In addition to React concepts, I also had to handle data from an API.
        The Poke API had a large amount of data that I wanted to display, so I
        used Axios over the native Fetch API to make asynchronous requests. I
        was also challenged with the idea of pagination, but was able to
        successfully implement it into the application.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        Finally, I chose to use Material UI as the component library for the
        design of the web application. The library&apos;s popularity, ease of use,
        and stellar documentation made it a great choice, and I was able to
        quickly customize the components to fit my needs. Overall, I am proud of
        the progress I made in this project and the skills I was able to further
        develop.
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
        This project was inspired by a tutorial done by Anthony Sistilli on
        Youtube, with design inspired by the Pokemon color palette.
      </Typography>
      <List size="sm">
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          Anthony Sistilli&apos;s Tutorial -
          <a
            href="https://www.youtube.com/watch?v=gGcLQ2sZFeg"
            target="_blank"
            rel="noreferrer"
          >
            Part one
          </a>
          &
          <a
            href="https://www.youtube.com/watch?v=XmTCeWbVjpM"
            target="_blank"
            rel="noreferrer"
          >
            part two
          </a>
        </ListItem>
      </List>
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
        While this project is mostly complete, there are still some known issues
        that I am working to resolve. I am also planning to add additional
        features in the future to further enhance the user experience.
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
          PokeDex title does not return user to home page.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Can not search when on a pokemon page.
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
          Migrate React Router from v5 to v6.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Render Pokemon on card components.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Display page number.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Edit the size of the search button in the upper right corner.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Link user to Pokemon website.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Add a favorites feature.
        </ListItem>
      </List>
    </Sheet>
  );
}
