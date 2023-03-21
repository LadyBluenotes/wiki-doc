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
              router.push("https://github.com/LadyBluenotes/NASA");
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
              router.push("https://space.sarahgerrard.me/");
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
        This is a web application built using the NASA Astronomy Picture of the
        Day API. By default, it will show the media selected for that day or it
        can render information the user has selected from a date in the past.
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
        Using the NASA Astronomy Picture of the Day API, this web application
        aims to provide a simple way to view the media that was posted on a
        given day. The user can select a date starting from today going into the
        past. The application will then render the media that was posted on that
        day, along with a description, and copyright information.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        Using HTML, CSS, and JavaScript, this project was built from scratch
        using no frameworks or libraries. The design of this website was
        inspired partly by the NASA website, and partly by exercising my own
        creativity.
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
        Outside of an IDE and a web browser, you do not need any other software
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
            <code>git clone https://github.com/LadyBluenotes/NASA</code>
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
            Run the app
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
        NASA, or the National Aeronautics and Space Administration, is a
        government agency responsible for the civilian space program, as well as
        aeronautics and space reserach. One of their many initiatives is the
        Astronomy Picture of the Day (APOD) API. This API allows users to access
        the media that NASA has selected for that day or any day in the past.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        This web application, which was built using the APOD API, allowing users
        easily access and view these daily images and explanations. With the
        application, users can browse through an archive of media with their
        associated titles, descriptions, and copyright information.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        The media featured on the APOD can be anything from photographs of
        distant galaxies and nebulae, to images captured by NASA&apos;s own
        spacecraft and telescopes. The media can also be videos, such as the
        video of the Perseverance rover landing on Mars. This web application
        was built to provide a way to easily access and view this media, and to
        provide a simple way to browse through the archive.
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
          Poke API
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          JavaScript
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          NASA APOD API
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
        When I originally started this project, I was aiming to create a web
        application using the basics of web development coupled with an
        entertaining API. After finding out about NASA APIs, and the APOD in
        particular, I had been inspired to create a site that would display this
        information in an attractive and easy to use way.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        The original motivation was to use no frameworks, libraries, or other
        tools to build the site, other then the basics of HTML, CSS, and
        JavaScript. Additionally, I wanted to introduce a bit more complexity
        through using JavaScript to make the site more interactive.
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
        In using no outside frameworks or libraries, I was able to exercise my
        HTML and CSS skills to create an attractive site and see how elements
        interact with each other to display the design I wanted. Additionally,
        vanilla JavaScript had challenged me to think about how to use it to
        make the site more interactive, and how to use it to make the site more
        user friendly. I had a goal to hide information and display information
        based what was interacted with which, at the time, was a challenge for
        me.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        Another challenge for me was to create this site in a way that would
        display all different forms of media, such as images, videos, and text.
        While I had an idea of how to do this with images, I was challenged to
        find a way to display videos so that they would be displayed as well as
        the option to play them on the site.
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
        This project was mostly inspired by the NASA website and the APOD API.
        The design of the site was inspired by the NASA website, but no
        tutorials or other resources were used to create the site.
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
        In creating this site, I originally had a goal of just display the media
        and information that was provided by the API. Looking back, there are
        things that I should&apos;ve added to make the site more accessible. These
        things will be added in the future.
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
