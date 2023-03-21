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
import { GitHub, Language, ArrowRight } from "@mui/icons-material";
import { useRouter } from "next/router";

export default function Accessible() {
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
            mb: 2,
            "@media (max-width: 600px)": {
              fontSize: "3rem",
              textAlign: "center",
            },
          }}
        >
          Accessible for All
          <IconButton
            onClick={() => {
              router.push(
                "https://github.com/AccessibleForAll/AccessibleWebDev"
              );
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
              router.push("https://accessiblewebdev.netlify.app/");
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
      <Divider
        sx={{
          mb: 2,
        }}
      />
      <Typography
        level="h2"
        sx={{
          fontWeight: 700,
          mb: 1,
          "@media (max-width: 600px)": {
            fontSize: "1.7rem",
          },
        }}
      >
        Project details
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
        }}
      >
        Accessible for All is a community dedicated to making the web more
        accessible for everyone. The aim of this project is to be the stepping
        stone to get started where official documentation is often difficult to
        interpret for new web developers.
      </Typography>
      <Divider
        sx={{
          my: 2,
        }}
      />
      <Typography
        level="h2"
        sx={{
          fontWeight: 700,
          mb: 1,
          "@media (max-width: 600px)": {
            fontSize: "1.7rem",
          },
        }}
      >
        Contribution Summary
      </Typography>
      <Typography
        level="h3"
        sx={{
          fontWeight: 700,
          ml: 1,
          "@media (max-width: 600px)": {
            fontSize: "1.2rem",
          },
        }}
      >
        Role:
        <Typography>
          <Chip
            sx={{
              ml: 2,
              bgcolor: "primary.200",
              color: "neutral.900",
              top: -8,
              mt: 2,
            }}
          >
            Front-End Developer
          </Chip>
        </Typography>
      </Typography>
      <Typography
        level="h3"
        sx={{
          fontWeight: 700,
          ml: 1,
          "@media (max-width: 600px)": {
            fontSize: "1.2rem",
          },
        }}
      >
        Duration:
        <Typography>
          <Chip
            sx={{
              ml: 2,
              bgcolor: "primary.200",
              color: "neutral.900",
              top: -2,
              my: 2,
            }}
          >
            Dec 2022 - present
          </Chip>
        </Typography>
      </Typography>
      <Typography
        level="h3"
        sx={{
          fontWeight: 700,
          mb: 1,
          ml: 1,
          "@media (max-width: 600px)": {
            fontSize: "1.2rem",
          },
        }}
      >
        Responsibilities:
      </Typography>
      <Typography level="body1" sx={{ ml: 2 }}>
        As a contributor to Accessible for All, I play a role in producing
        content for the project&apos;s website. My responsibilities include:
      </Typography>
      <List sx={{ ml: 5 }}>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight
              sx={{
                color: "neutral.plainColor",
              }}
            />
          </ListItemDecorator>
          Creating articles that provide guidance on how to produce more
          accessible projects.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight
              sx={{
                color: "neutral.plainColor",
              }}
            />
          </ListItemDecorator>
          Collaborating with other contributors to ensure the articles are
          clear, concise, and provide appropriate information to the reader.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight
              sx={{
                color: "neutral.plainColor",
              }}
            />
          </ListItemDecorator>
          Keeping up to date with the latest web accessibility standards and
          best practices.
        </ListItem>
      </List>
      <Typography
        level="h3"
        sx={{
          fontWeight: 700,
          mb: 1,
          ml: 1,
          "@media (max-width: 600px)": {
            fontSize: "1.2rem",
          },
        }}
      >
        Technologies:
      </Typography>
      <Typography level="body1" sx={{ ml: 2 }}>
        The following technologies during the contribution period:
      </Typography>
      <List sx={{ ml: 5 }}>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight
              sx={{
                color: "neutral.plainColor",
              }}
            />
          </ListItemDecorator>
          CSS
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight
              sx={{
                color: "neutral.plainColor",
              }}
            />
          </ListItemDecorator>
          Git
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight
              sx={{
                color: "neutral.plainColor",
              }}
            />
          </ListItemDecorator>
          GitHub
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight
              sx={{
                color: "neutral.plainColor",
              }}
            />
          </ListItemDecorator>
          Next.js
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight
              sx={{
                color: "neutral.plainColor",
              }}
            />
          </ListItemDecorator>
          TypeScript
        </ListItem>
      </List>
    </Sheet>
  );
}
