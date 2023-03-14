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

export default function PortfolioSite() {
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
              router.push("https://github.com/LadyBluenotes/portfolio-2.0");
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
              router.push("https://sarahgerrard.me/");
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
        This is my personal site, which I built using Next.js, JavaScript, and
        some CSS. This was built to be a hub for people to find out a but more
        about me, connect with me, or direct them to seeing my work.
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
        While I had built a portfolio site previously, I had used a template and
        personalized it from there. With this site, I intended to build it from
        scratch while using Next.js to help with the routing and learn more
        about the framework.
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
          <ListItemDecorator>1.</ListItemDecorator>
          <Typography
            level="body1"
            sx={{
              ml: 2,
            }}
          >
            Node.js
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
            <code>
              git clone https://github.com/LadyBluenotes/portfolio-2.0/
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
        This project was primarily built using Next.js with styling done through
        use of style sheets (CSS). I primarily wanted to use this as a teaching
        tool for myself to learn more about Next and how it differed from React.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        The routing was what I was hoping to gain more insight to as well as the
        way that Next handles their styling. I didn&apos;t want to introduce any
        other factors while learning this project, so I kept it simple with some
        basic CSS. I did use one other library for some motion effects, but that
        was it.
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
        Next.js was a framework I had been hearing a lot about during my time
        with learning React. Going into this project, I had an understanding
        that Next.js was a framework that included routing, where previously to
        accomplish this in React, you would need to use a library such as React
        Router. I also knew that Next.js was a framework that was built on top
        of React, so I wanted to see where it different from React and how it
        was similar.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        In building this site, I didn&apos;t want to make it more confusing with
        adding in other libraries or frameworks, so I kept it simple with just
        Next.js and CSS. Once I had the basics of the site built, I wanted to
        add some motion effects to the site, so I added in the Framer Motion
        library.
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
        I learned a lot about Next.js and it quickly became one of my favorite
        frameworks to work with. The routing system that was built in was very
        easy to use and I was able to get the site up and running quickly. In
        addition to just adding a file to the pages folder, I learned that you
        can also add a folder to the pages folder and it will create a nested
        route. For example, if I wanted to create a route for a page called
        &quot;about&quot;, I could create a folder called &quot;about&quot; and add an index.js file
        to that folder. While I didn&apos;t use this feature in this project, I can
        see how it would be useful in a larger project.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        I also learned that Next.js has a built in CSS file that you can use to
        style your components. Previously, CSS was linked globally to the entire
        application, but with Next.js, you can import the CSS file into the
        component that you want to style. This was a great feature to learn as
        it allowed me to keep my styling separate from my components. I learned
        that you can use the Framer Motion library to add motion effects to any
        component that you want. I used this library to add some motion effects
        to some of the components on the site, such as the headers and when
        switching pages.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        Next has some built in features that I found very useful, such as the
        Image component. This component allows you to import images into your
        components and it will automatically optimize the images for you.
        Additionally, the Head component allows you to add meta tags to your
        pages, which is very useful for SEO as well as accessibility.
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
        While I didn&apos;t have any help with this project, I did use a lot of
        resources to help me learn Next.js. I used the Next.js documentation to
        learn about the framework and how to use it. I also used the Framer
        Motion documentation to learn how to use the library. The background
        animation was created from another developer, and I used it as a
        reference to create my own animation. While I can&apos;t remember the exact
        source at this time, I will update this section with the link once I
        find it.
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
          Mobile nav needs to be improved.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Improve lighthouse score - specifically performance and accessibility.
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
          Change from JavaScript to TypeScript.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Migrate projects from this website to their own and replace project
          cards with a referral to new site.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Replace blog link with project portfolio link.
        </ListItem>
      </List>
    </Sheet>
  );
}
