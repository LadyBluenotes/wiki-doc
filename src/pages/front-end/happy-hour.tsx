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

export default function HappyHour() {
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
          Happy Hour Guide
          <IconButton
            onClick={() => {
              router.push("https://github.com/LadyBluenotes/TheHappyHourGuide");
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
              router.push("https://happyhour.sarahgerrard.me/");
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
        The Happy Hour Guide is a web application that lets users search for
        their favorite cocktails or find a new favorite.
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
        As a project using my first API, I wanted to create a cocktail guide for
        individuals who are looking to change things up with their drinks at
        home. This project was intended to be a fun way to learn about APIs and
        how to use them in a project, as well as learn more about design and
        styling. HTML, CSS, and vanilla JavaScript were what was used to create
        this project, providing another opportunity to learn about web
        development.
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
        Other than an internet browser and IDE, there is no other requirements
        to run this application.
      </Typography>
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
            <code>
              git clone https://github.com/LadyBluenotes/TheHappyHourGuide
            </code>
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
            Start the application
            <br />
            <code>open index.html</code>
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
        The Happy Hour Guide was built on web development fundamentals. The main
        languages used were HTML, CSS, and vanilla JavaScript. Rather than
        introduce frameworks and libraries with this project, I wanted to focus
        on styling and structure that was built from the ground up.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        TheCocktailDB API was used to pull in the data for the application. With
        this API being free and easy to use, it was an ideal introduction to
        APIs compared to some of the more complex APIs that are available.
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
          TheCocktailDB API
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          CSS
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          HTML
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          JavaScript
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
        With a few months of practice building web based projects with HTML and
        CSS, I decided it was time to introduce JavaScript into the mix. Rather
        than just create a more interactive project, I wanted it to also be a
        chance to learn about APIs and how to use them in a project.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        While there were more complex APIs I had been exposed to in the past, I
        decided to start with a more simple one and that is how I came across
        TheCocktailDB API. In addition to the API having well-structured data
        and being easy to use, it was also free to use. I wanted to style this
        project in a way that there would be a pop up, or modal, that would
        appear when a user searched for a drink or chose a random one. In the
        end, my intention was to challenge myself using CSS and JavaScript to
        create a project that was both visually appealing and functional.
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
        Using this API had challenged me due to object that was returned from
        the API call. In how the data was structured, I was forced to also learn
        how to utilize loops and conditionals to pull out the data I needed. I
        also had to figure out a way to handle returns that did not have a value
        for a specific key.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        I had a lot of fun learning about JavaScript in this project. This
        project introduced event listeners and how to use them to create a more
        interactive experience, in addition to using the native fetch API to
        make all the API calls. I was taught to utilize the console to determine
        what information was being returned and to figure out how to access the
        data I needed. Once the information I wanted to find had been retrieved,
        the next step was to figure out how to render it into the DOM.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        The design aspect of this project was also a challenge. I wanted a
        project that I had designed from the ground up, so I created a written
        mock up of the project and then started to build it. I wanted to make
        use of a modal, because I had never used one before, and I wanted to
        make sure that the modal was responsive. This part of the project, while
        I thought it would be easy, was actually the most challenging part of
        the project.
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
        With this being my first modal attempt, I followed a tutorial from Brad
        Traversy of the Traversy Media Youtube channel to help me get started.
      </Typography>
      <List size="sm">
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          <a
            href="https://www.youtube.com/watch?v=6ophW7Ask_0&ab_channel=TraversyMedia"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            Modal Video
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
        level="h4"
        component="h3"
        id="issues"
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
          Fix text overflow that shows up with some drinks.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Stop text from showing up in one block.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Button on main page needs needs to remain on same line as input.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Responsiveness needs to be investigated for mobile devices.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Assess accessibility.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Adjust modal.
        </ListItem>
      </List>
      <Typography
        level="h4"
        component="h3"
        id="future"
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
          Save your favorite drinks.
        </ListItem>
      </List>
    </Sheet>
  );
}
