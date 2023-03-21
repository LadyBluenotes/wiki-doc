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

export default function MaterialUI() {
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
          Material UI
          <IconButton
            onClick={() => {
              router.push("https://github.com/mui");
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
              router.push("https://mui.com/");
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
        Material UI is popular open source JavaScript library used in building
        user interfaces. It provides a set of pre-built React components that
        implement Google&apos;s Material Design guidelines, making it easier for
        developers to create visually consistent and aesthetically pleasing UIs.
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
            Contributor
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
        As a contributor to Material UI, I played a role in enhancing the
        project&apos;s documentation. My responsibilities included:
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
          Enhancing the documentation by revising and updating it to align with
          the project&apos;s style guide and templates, to ensure consistency in
          grammar, style, tone, and formatting.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight
              sx={{
                color: "neutral.plainColor",
              }}
            />
          </ListItemDecorator>
          Working closely with the project maintainers to guarantee coherence
          and adherence to their standards.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <ArrowRight
              sx={{
                color: "neutral.plainColor",
              }}
            />
          </ListItemDecorator>
          Providing clear and concise demo code examples, utilizing React
          framework, to supplement the articles.
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
          MarkDown
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
          React
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
