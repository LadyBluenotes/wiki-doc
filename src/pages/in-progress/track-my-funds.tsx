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
} from "@mui/icons-material";
import { useRouter } from "next/router";
import TableOfContents from "@/components/TableOfContents";

export default function TrackMyFunds() {
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
          Track My Funds
          <IconButton
            onClick={() => {
              router.push("https://github.com/LadyBluenotes/track-my-funds");
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
              router.push("https://trackmyfunds.app/");
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
        Track My Funds is a new personal finance app built with Next.js, TypeScript, MongoDB, Tailwind CSS, and Next-Auth that enables users to track their expenses, income, and investments. Although still in early development, new features are on the way to enhance the user experience.
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
          mb:2,
        }}
      >
        Track My Funds is an innovative personal finance application that empowers users to take full control of their financial picture. It's a cutting-edge full-stack application built with the latest technologies, including Next.js, TypeScript, MongoDB, Tailwind CSS, and Next-Auth.
        </Typography>
        <Typography
        level="body1"
        sx={{
          ml: 1,
        }}
      >
        Although Track My Funds is still in its early development stages, it already offers a set of features that help users track their expenses and income, with investments and savings being added in the future. This app is constantly evolving and improving to provide users with the best financial tracking experience possible.
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
          mb: 1,
        }}
      >
        Track My Funds is a user-friendly personal finance application that is readily accessible to the public through its online link. While users are encouraged to use the app through this link, those who want to customize the app for their specific needs will need to set up the required environment variables to enable the application to run smoothly.
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
        If you wish to run Track My Funds on your local machine, there are a few steps you'll need to follow to ensure proper installation and functionality. These steps include:
      </Typography>
      <List sx={{
        overflow: "auto",
      }}>
        <ListItem>
          <ListItemDecorator>1.</ListItemDecorator>
          <Typography
            level="body1"
          >
            Clone the repository from GitHub.
            <br />
            <code>git clone https://github.com/LadyBluenotes/track-my-funds</code>
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemDecorator>2.</ListItemDecorator>
          <Typography
            level="body1"
          >
            Install NPM packages
            <br />
            <code>npm install</code>
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
          <ListItemDecorator>4.</ListItemDecorator>
          <Typography
            level="body1"
          >
            Run the app
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
        Track My Funds is a modern personal finance application built with a range of cutting-edge technologies to offer users a seamless and intuitive experience. Next.js is a powerful React-based web framework that offers server-side rendering, static site generation, and other advanced features. Next.js enables efficient code writing and error handling, ensuring scalability and high performance. Paired with TypeScript, a language that adds static type checking and other features to JavaScript, it offered an easier way to write scalable and maaintanable code. In addition, TypeScript offered a more efficient development environment that would ensure fewer errors and better type safety.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
       MongoDB is a flexible and scalable NoSQL database that provides high availability and reliable storage. With MongoDB, Track My Funds can store user data securely and manage it efficiently.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        Tailwind CSS is a utility-first CSS framework that allows for rapid styling and responsive design. It provides pre-built, customizable classes that can be easily applied to HTML elements. It made a great choice for building user interfaces quickly and efficiently, in addition to ensuring consistency among the entire application.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        Next-Auth is a flexible authentication and authorization library for Next.js applications. It provides a simple and secure way to handle user authentication, with support for various authentication providers like Google, Facebook, and GitHub. Next-Auth was chosen for this project as it can handle user authentication and authorizaation efficiently and securely. By leveraging this technology, it allowed me to focus more on building the application to do what I wanted it to in a secure environment.
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
        Track My Funds was an exciting project for me, as it provided a challenging opportunity to build a full-stack application that I could use myself. As someone who looks to track my finances through a spreadsheet and could never find an application that was able to provide the same features I used, I wanted to create an application that would empower users to take control of their finances but didn't overwhelm them with complicated features. I also wanted to challenge myself as a developer by leveraging the technologies I've been using in smaller capacities, including Next.js, TypeScript, MongoDB, Tailwind CSS, and Next-Auth.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        In building Track My Funds, I aimed to create a single-page application that would dynamically update based on user interactions. I also wanted to ensure that the application was responsive and could be easily used on both desktop and mobile devices. I chose to use MongoDB to store and manage user data securely, and Next-Auth to handle user authentication and authorization. As they appeared to be the best pair to do the job. They introduced ease of use as well as security.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        Furthermore, I wanted to use my design skills to create a visually appealing and easy-to-use application that had a clear theme. By incorporating Tailwind CSS, I was able to create a clean and simple design that was both functional and aesthetically pleasing. Ultimately, Track My Funds is a personal finance application that I am proud to have created, and I hope it can be useful for others, as well.
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
        Track My Funds was a valuable learning experience for me, allowing me to hone my skills in more advanced React concepts. Specifically, I was able to simplify more complex problems by breaking them down into smaller, more manageable pieces. I leveraged technologies such as Next Auth and TailwindCSS to keep things more consitent throughout the complication and take out some of the more heavy lifting.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        This application also furthered my understanding of APIs and reaffirmed the importance and value that they provide to a developer.  By using APIs, I can gain access to a wealth of data that can be used to create engaging and dynamic applications. Through this experience, I was able to refine my skills in handling data from APIs and make asynchronous requests and get more familiar with managing multiple calls in larger applications.
      </Typography>
      <Typography
        level="body1"
        sx={{
          ml: 1,
          mb: 2,
        }}
      >
        Overall, working on Track My Funds allowed me to gain valuable experience with a range of technologies and refine my skills in developing full-stack applications.
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
        This application was largely an inspired by the spreadsheets I use in my personal accounting. Outside of that, there was some help from the community I have on Twitter, in getting opinions on how to handle certain problems I was facing, such as authentication and styling. I appreciate those within my network that were available to answer the questions I had.
      </Typography>
      {/* <List size="sm">
        <ListItem>
          <ListItemDecorator>
            <ArrowRight />
          </ListItemDecorator>
        </ListItem>
      </List> */}
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
        This section will be utilized to be used to provide insight into the projects progres, such as things that have been accomplished, features that are to be implemented, and ways optimizations will be integrated.
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
        Upcoming features
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
          User editing - change email, username, name, picture.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Export data to CSV.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Let user sort and filter based on month, year, category, etc.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Creating an account using email / username (credentials in Next-Auth).
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Integrate other Next-Auth providers.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Graphs to show income and expense trends, averages, etc.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Track savings - savings goals, savings progress, etc.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <CheckBoxOutlineBlank />
          </ListItemDecorator>
          Paginate data.
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
          In dashboard, based on month display total income and expenses and
          what is left over.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
          <Done />
          </ListItemDecorator>
          Update selected incomes and expenses.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
          <Done />
          </ListItemDecorator>
          Remove selected incomes and expenses.
        </ListItem>
        <ListItem>
          <ListItemDecorator>
          <Done />
          </ListItemDecorator>
          Assign user identification to incomes and expenses.
        </ListItem>
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
      </List>
    </Sheet>
  );
}
