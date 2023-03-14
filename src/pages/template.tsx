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

export default function Template() {
  const router = useRouter();

  return (
    <Sheet
      sx={{
        py: 4,
        px: 6,
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
          Template
          <IconButton
            onClick={() => {
              router.push("#");
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
              router.push("#");
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
        This is a template for the project pages.
      </Typography>
      <Divider
        sx={{
          my: 2,
        }}
      />
      <TableOfContents />
      <Divider sx={{ mt: 3, mb: 1 }} />
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
        This is a template for the project pages that will be used to display
        the projects that I have worked on. The template will be used to give a
        detailed overview of the project, including the technologies used, the
        process, and the challenges that were faced.
      </Typography>
      <Divider sx={{ mt: 2, mb: 1 }} />
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
        Here is where I will list what is needed to run the application.
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
        These are steps to explain how to get the development environment
        running.
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
            <code>git clone https://github.com/LadyBluenotes</code>
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
            <code>npm run dev</code>
          </Typography>
        </ListItem>
      </List>
      <Divider sx={{ mt: 2, mb: 1 }} />
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
        Here you will find information about the technologies used in the
        project and why.
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
          Tech 1
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          Tech 1
        </ListItem>
      </List>
      <Divider sx={{ mt: 2, mb: 1 }} />
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
        Here I will talk about why I decided to build this project and what I
        was hoping to accomplish.
      </Typography>

      <Divider sx={{ mt: 2, mb: 1 }} />
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
        This will include information about what I learned while working on this
        project. It will include things like the challenges I faced, what I
        learned from those challenges, and what I would do differently if I were
        to build this project again. In addition, I will also discuss what I
        enjoyed about this project and what I would like to do in the future.
      </Typography>
      <Divider sx={{ mt: 2, mb: 1 }} />
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
        Since ideas can be inspired by many different sources, I will include a
        list of resources that I used to help me build this project, including
        individuals who helped me along the way, any resources I found useful
        while working on this project, and where I got inspiration for this
        project.
      </Typography>
      <Divider sx={{ mt: 2, mb: 1 }} />
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
        Any known issues about the project will be listed here, in addition to
        features I plan to add in the future.
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
          Issue 1
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Issue 2
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
          Feature 1
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Feature 2
        </ListItem>
      </List>
    </Sheet>
  );
}
