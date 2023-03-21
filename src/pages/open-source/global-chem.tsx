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

export default function GlobalChem() {
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
          Global Chem
          <IconButton
            onClick={() => {
              router.push("https://github.com/Sulstice/global-chem");
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
              router.push("https://www.globalchemistry.org/");
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
        Global Chemistry serves as an open source platform where writing the
        molecules directly allows for the name to not be ambiguous to what a
        chemical is is anymore and allows for full transparency. The hopes of
        this project is to be a base for the population to govern how the
        chemicals in use for things like Food, Clothing, Environment, Materials,
        Drugs, War and a lot more are beneficial for all of us.
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
          <Chip
            sx={{
              ml: 2,
              bgcolor: "primary.200",
              color: "neutral.900",
              top: -8,
              mt: 2,
            }}
          >
            Maintainer
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
            Jan 2023 - present
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
        As a maintainer of the Global Chem project, I have been responsible for
        the following:
      </Typography>
      <List sx={{ ml: 5 }} size="sm">
        <ListItem>
          <ListItemDecorator>
            <ArrowRight
              sx={{
                color: "neutral.plainColor",
              }}
            />
          </ListItemDecorator>
          Contributed to the development of the website&apos;s front-end
          infrastructure.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight
              sx={{
                color: "neutral.plainColor",
              }}
            />
          </ListItemDecorator>
          Developing user interfaces to allow users to browse and analyze data.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight
              sx={{
                color: "neutral.plainColor",
              }}
            />
          </ListItemDecorator>
          Collaborate with other project maintainers and contributors to design
          and implement new features and improve existing ones.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight
              sx={{
                color: "neutral.plainColor",
              }}
            />
          </ListItemDecorator>
          Assist in development of open source cheminformatic software and
          knowledge graphs of common chemical names and their SMILES.
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
      <List sx={{ ml: 5 }} size="sm">
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
          Glances
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight
              sx={{
                color: "neutral.plainColor",
              }}
            />
          </ListItemDecorator>
          JavaScript
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
          Python
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
