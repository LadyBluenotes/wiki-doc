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
  Done,
  Twitter,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import TableOfContents from "@/components/TableOfContents";

export default function Tutor() {
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
          Tutor 2.0
          <IconButton
            onClick={() => {
              router.push("https://github.com/Tutor2-0");
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
          {/* <IconButton
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
          </IconButton> */}
        </Typography>
      </div>
      <Typography
        level="body1"
        sx={{
          ml: 1,
        }}
      >
        Tutor 2.0 will be a web application that utilizes the power of AI to build unique learning experiences for the users.
      </Typography>
      <Divider
        sx={{
          my: 2,
        }}
      />
      {/* <TableOfContents /> 
      <Divider
        sx={{
          mt: 3,
          mb: 2,
        }}
      /> */}
      <Typography
        id="overview"
        level="h1"
        component="h2"
        sx={{
          mb: 2,
          '@media (max-width: 600px)': {
            fontSize: '2rem',
          }
        }}
      >
        Overview
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        Tutor 2.0 will be an application that utilizes the power of AI to tailor
        a learning experience to the individual. It is currently in progress and
        is not yet available for demo or use. This project is being built
        alongside some great individuals, their names and links to their GitHub
        profiles are listed below.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        While this project is in development, features will be kept private
        until an MVP is reached. Once the MVP is reached, more will be
        elaborated on in the documentation.
      </Typography>
      <Divider
        sx={{
          my: 2,
        }}
      />
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        The following individuals are working on this project with me:
      </Typography>
      <List
        size="sm"
        sx={{
          ml: 2,
        }}
      >
        <ListItem sx={{
          '@media (max-width: 600px)': {
            px: 0,
          }
        }}>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          <Typography
            level="body1"
            sx={{
              ml: 0,
              p:0
            }}
          >
            Aaron Tandem
          </Typography>
          <IconButton
            onClick={() => {
              router.push("https://github.com/abiever");
            }}
            variant="outlined"
            sx={{
              mx: 2,
              bgcolor: "neutral.100",
              "&:hover": {
                bgcolor: "neutral.300",
              },
              '@media (max-width: 600px)': {
                ml: 0,
                mr: 1,
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
              router.push("https://twitter.com/AaronTandem");
            }}
            variant="outlined"
            sx={{
              bgcolor: "primary.700",
              "&:hover": {
                bgcolor: "primary.800",
              },
            }}
          >
            <Twitter
              sx={{
                color: "primary.300",
              }}
            />
          </IconButton>
        </ListItem>
        <ListItem sx={{
          '@media (max-width: 600px)': {
            px: 0,
          }
        }}>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          <Typography
            level="body1"
            sx={{
              ml: 0,
            }}
          >
            Christopher Miller
          </Typography>
          <IconButton
            onClick={() => {
              router.push("https://github.com/ccmiller2018");
            }}
            variant="outlined"
            sx={{
              mx: 2,
              bgcolor: "neutral.100",
              "&:hover": {
                bgcolor: "neutral.300",
              },
              '@media (max-width: 600px)': {
                ml: 1,
                mr: 1,
              }
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
              router.push("https://twitter.com/ccmiller2018");
            }}
            variant="outlined"
            sx={{
              bgcolor: "primary.700",
              "&:hover": {
                bgcolor: "primary.800",
              },
              '@media (max-width: 600px)': {
                ml: 0,
                p: 0
              }
            }}
          >
            <Twitter
              sx={{
                color: "primary.300",
              }}
            />
          </IconButton>
        </ListItem>
        <ListItem sx={{
          '@media (max-width: 600px)': {
            px: 0,
          }
        }}>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          <Typography
            level="body1"
            sx={{
              ml: 0,
            }}
          >
            Lucas Winkler
          </Typography>
          <IconButton
            onClick={() => {
              router.push("https://github.com/LucasMERN");
            }}
            variant="outlined"
            sx={{
              mx: 2,
              bgcolor: "neutral.100",
              "&:hover": {
                bgcolor: "neutral.300",
              },
              '@media (max-width: 600px)': {
                ml: 1,
              }
            }}
          >
            <GitHub
              sx={{
                color: "neutral.900",
                '@media (max-width: 600px)': {
                  p:0
                }
              }}
            />
          </IconButton>
          <IconButton
            onClick={() => {
              router.push("https://twitter.com/MERN_Man_Luke");
            }}
            variant="outlined"
            sx={{
              bgcolor: "primary.700",
              "&:hover": {
                bgcolor: "primary.800",
              },
            }}
          >
            <Twitter
              sx={{
                color: "primary.300",
              }}
            />
          </IconButton>
        </ListItem>
        <ListItem sx={{
          '@media (max-width: 600px)': {
            px: 0,
          }
        }}>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          <Typography
            level="body1"
            sx={{
              ml: 0,
            }}
          >
            Trevor Johnson
          </Typography>
          <IconButton
            onClick={() => {
              router.push("https://github.com/tJohnsonAce");
            }}
            variant="outlined"
            sx={{
              mx: 2,
              bgcolor: "neutral.100",
              "&:hover": {
                bgcolor: "neutral.300",
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
              router.push("https://twitter.com/whizzkee");
            }}
            variant="outlined"
            sx={{
              bgcolor: "primary.700",
              "&:hover": {
                bgcolor: "primary.800",
              },
            }}
          >
            <Twitter
              sx={{
                color: "primary.300",
              }}
            />
          </IconButton>
        </ListItem>
      </List>
      {/* <Typography
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
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          MongoDB Account
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          Google Account for Next-Auth
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          Discord Account for Next-Auth
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
        This will be where I will explain how to install the application.
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
        This part will give a brief overview of the technologies used to build the application. In addition, you will find some of the technologies that are currently in-use listed below.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
       
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        
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
          Next-Auth
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          Next.js
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          Tailwind CSS
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
          TypeScript
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
        Here will talk about why I decided to build the project and what I anticipate getting out of it.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
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
        Anything I learned during the development of Track My Funds will be talked about here.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
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
        Anything that inspired me throughout the development of the application will be listed here.
      </Typography>
      <List size="sm">
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
        </ListItem>
      </List>
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
        While this project is in production, this section will be utilized to provide information on what features are currently in development and which features have been implemented.
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
        Features to be implemented
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
          In dashboard, based on month display total income and expenses and what is left over.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Update selected incomes and expenses.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Remove selected incomes and expenses.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Assign user identification to incomes and expenses.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Sort through incomes and expenses.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Creating an account using email (credentials in Next-Auth).
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
        Features that have been added
      </Typography>
      <List
        size="sm"
        sx={{
          ml: 2,
        }}
      >
        <ListItem>
          <ListItemDecorator>
            <Done />
          </ListItemDecorator>
          Authentication using Next-Auth.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <Done />
          </ListItemDecorator>
          Connection to MongoDB database.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <Done />
          </ListItemDecorator>
            Ability to add incomes and expenses.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <Done />
          </ListItemDecorator>
            Designing the application using Tailwind CSS.
        </ListItem>
      </List> */}
    </Sheet>
  );
}
