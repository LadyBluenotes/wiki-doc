import {
  Sheet,
  Typography,
  Tabs,
  TabList,
  TabPanel,
  Tab,
  Divider,
  Card,
  CardContent,
  CardOverflow,
  AspectRatio,
  Grid,
  Container,
} from "@mui/joy";
import Image from "next/image";
import { useRouter } from "next/router";
import Timeline from "@/components/Timeline.jsx";

export default function About() {
  const router = useRouter();

  const skills = [
    {
      name: "CSS",
      image: "/css.jpg",
      nameColor: "neutral.plainColor",
    },
    {
      name: "Express.js",
      image: "/express.jpg",
      nameColor: "neutral.plainColor",
    },
    {
      name: "Git",
      image: "/git.jpg",
      nameColor: "neutral.plainColor",
    },
    {
      name: "GitHub",
      image: "/github.jpg",
      nameColor: "neutral.plainColor",
    },
    {
      name: "HTML",
      image: "/html.jpg",
      nameColor: "neutral.plainColor",
    },
    {
      name: "JavaScript",
      image: "/javascript.jpg",
      nameColor: "neutral.plainColor",
    },
    {
      name: "Markdown",
      image: "/markdown.jpg",
      nameColor: "neutral.plainColor",
    },
    {
      name: "Material UI",
      image: "/mui.jpg",
      nameColor: "neutral.plainColor",
    },
    {
      name: "MongoDB",
      image: "/mongodb.jpg",
      nameColor: "neutral.plainColor",
    },
    {
      name: "Mongoose",
      image: "/mongoose.jpg",
      nameColor: "neutral.plainColor",
    },
    {
      name: "Next.js",
      image: "/nextjs.jpg",
      nameColor: "neutral.plainColor",
    },
    {
      name: "Node.js",
      image: "/nodejs.jpg",
      nameColor: "neutral.plainColor",
    },
    {
      name: "React",
      image: "/react.jpg",
      nameColor: "neutral.plainColor",
    },
    {
      name: "Tailwind CSS",
      image: "/tailwind.jpg",
      nameColor: "neutral.plainColor",
    },
    {
      name: "TypeScript",
      image: "/typescript.jpg",
      nameColor: "neutral.plainColor",
    },
  ];

  const tabNames = [
    "Background",
    "Skills",
    "Hobbies and Interests",
    "Contact me",
  ];

  const hobbiesInterests = [
    {
      name: "Camping & Hiking",
      image: "/camping.jpg",
      nameColor: "neutral.plainColor",
    },
    {
      name: "Destiny 2",
      image: "/destiny2.jpg",
      nameColor: "neutral.plainColor",
    },
    {
      name: "Powerlifting",
      image: "/powerlifting.jpg",
      nameColor: "neutral.plainColor",
    },
    {
      name: "Puzzles",
      image: "/puzzles.jpg",
      nameColor: "neutral.plainColor",
    },
    {
      name: "Reading",
      image: "/reading.jpg",
      nameColor: "neutral.plainColor",
    },
    {
      name: "Reddit",
      image: "/reddit.jpg",
      nameColor: "neutral.plainColor",
    },
    {
      name: "Sports",
      image: "/turf.jpg",
      nameColor: "neutral.plainColor",
    },
    {
      name: "Writing",
      image: "/writer.jpg",
      nameColor: "neutral.plainColor",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/sarahgerrard/",
      image: "/linkedin.jpg",
      nameColor: "primary.500",
    },
    {
      name: "GitHub",
      link: "https://www.github.com/ladybluenotes",
      image: "/github.jpg",
      nameColor: "neutral.softHoverColor",
    },
    {
      name: "My Blog",
      link: "https://blog.sarahgerrard.me/",
      image: "/hashnode.jpg",
      nameColor: "primary.plainColor",
    },
    {
      name: "Email",
      link: "mailto:gerrardsarah@gmail.com",
      image: "/email.jpg",
      nameColor: "danger.400",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/ladybluenotes",
      image: "/twitter.jpg",
      nameColor: "primary.300",
    },
  ];

  return (
    <Sheet
      sx={{
        py: 4,
        px: 4,
        m: 3,
      }}
    >
      <Typography
        level="display1"
        sx={{
          textAlign: "center",
          mb: 3,
        }}
      >
        Hi, I&apos;m Sarah!
      </Typography>
      <Typography
        level="body1"
        sx={{
          textAlign: "center",
          mb: 3,
          maxWidth: "80%",
          mx: "auto",
        }}
      >
        I&apos;m a software developer based out of Canada! I&apos;m currently working as a
        freelancer and am currently on the lookout for a full-time position. I&apos;m
        passionate about learning new things and am always looking for new
        opportunities to grow and improve. Here, you&apos;ll find a little bit about
        me, my skills, my hobbies and interests, and how to get in touch with
        me!
      </Typography>
      <Tabs
        aria-label="Basic tabs"
        defaultValue={0}
        sx={{ borderRadius: "lg" }}
      >
        <TabList
          sx={{
            width: "70%",
            mx: "auto",
          }}
        >
          {tabNames.map((tabName, index) => (
            <Tab key={index}>{tabName}</Tab>
          ))}
        </TabList>
        <TabPanel value={0} sx={{ p: 2 }}>
          <Sheet
            sx={{
              p: 3,
              borderRadius: "lg",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
              bgcolor: "background.backdrop",
            }}
          >
            <Typography
              level="display2"
              sx={{
                textAlign: "center",
                mb: 3,
              }}
            >
              A little about me
            </Typography>
            <Typography
              level="body1"
              sx={{
                textAlign: "center",
                px: 4,
                mb: 3,
                maxWidth: "70%",
                mx: "auto",
              }}
            >
              My journey to becoming a developer was not a conventional one. Below you&apos;ll find a timeline of my life and how I got to where I am today.
            </Typography>
            <Divider
              sx={{
                my: 2,
              }}
            />
            <Timeline />
          </Sheet>
        </TabPanel>
        <TabPanel value={1} sx={{ p: 2 }}>
          <Sheet
            sx={{
              p: 3,
              borderRadius: "lg",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
              bgcolor: "background.backdrop",
            }}
          >
            <Typography
              level="display2"
              sx={{
                textAlign: "center",
                mb: 3,
              }}
            >
              What I know
            </Typography>
            <Typography
              level="body1"
              sx={{
                textAlign: "center",
                px: 4,
                mb: 3,
                maxWidth: "70%",
                mx: "auto",
              }}
            >
              Throughout my time as a developer, I&apos;ve had the opportunity to
              work with a variety of technologies. Below, you&apos;ll find some of
              the ones I&apos;m most familiar with.
            </Typography>
            <Divider
              sx={{
                my: 2,
              }}
            />
            <Grid
              container
              spacing={3}
              mt={3}
              mx={3}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {skills.map((skill, index) => (
                <Grid key={index}>
                  <Card
                    orientation="horizontal"
                    variant="outlined"
                    sx={{
                      width: 280,
                      bgcolor: "background.body",
                    }}
                  >
                    <CardOverflow>
                      <AspectRatio ratio="1" sx={{ width: 90 }}>
                        <Image
                          src={skill.image}
                          loading="lazy"
                          alt={skill.name + " logo"}
                        />
                      </AspectRatio>
                    </CardOverflow>
                    <CardContent sx={{ pl: 3 }}>
                      <Typography
                        fontWeight="md"
                        textColor={skill.nameColor}
                        fontSize="1.5rem"
                        mb={0.5}
                      >
                        {skill.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Sheet>
        </TabPanel>
        <TabPanel value={2} sx={{ p: 2 }}>
          <Sheet
            sx={{
              p: 3,
              borderRadius: "lg",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
              bgcolor: "background.backdrop",
            }}
          >
            <Typography
              level="display2"
              sx={{
                textAlign: "center",
                mb: 3,
              }}
            >
              How I spend my free time
            </Typography>
            <Typography
              level="body1"
              sx={{
                textAlign: "center",
                px: 4,
                mb: 3,
                maxWidth: "70%",
                mx: "auto",
              }}
            >
              As much as I enjoy coding, I&apos;m more than just a developer. Below,
              you&apos;ll find some of the things I enjoy doing in my free time.
            </Typography>
            <Divider
              sx={{
                my: 2,
              }}
            />
            <Grid
              container
              spacing={3}
              mt={3}
              mx={3}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {hobbiesInterests.map((item, index) => (
                <Grid key={index}>
                  <Card
                    orientation="horizontal"
                    variant="outlined"
                    sx={{
                      width: 280,
                      bgcolor: "background.body",
                    }}
                  >
                    <CardOverflow>
                      <AspectRatio ratio="1" sx={{ width: 90 }}>
                        <Image src={item.image} loading="lazy" alt={item.name} />
                      </AspectRatio>
                    </CardOverflow>
                    <CardContent sx={{ pl: 3 }}>
                      <Typography
                        fontWeight="md"
                        textColor={item.nameColor}
                        fontSize="1.5rem"
                        mb={0.5}
                      >
                        {item.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Sheet>
        </TabPanel>
        <TabPanel value={3} sx={{ p: 2 }}>
          <Sheet
            sx={{
              p: 3,
              borderRadius: "lg",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
              bgcolor: "background.backdrop",
            }}
          >
            <Typography
              level="display2"
              sx={{
                textAlign: "center",
                mb: 3,
              }}
            >
              Get in touch!
            </Typography>
            <Typography
              level="body1"
              sx={{
                textAlign: "center",
                px: 4,
                mb: 3,
                maxWidth: "70%",
                mx: "auto",
              }}
            >
              If you&apos;re interested in connecting with me, I&apos;m always on the
              lookout for new avenues to learn and progress. Please feel free to
              reach out to me through clicking on the cards below.
            </Typography>
            <Divider
              sx={{
                my: 2,
              }}
            />
            <Grid
              container
              spacing={3}
              mt={3}
              mx={3}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {socialLinks.map((socialLink, index) => (
                <Grid key={index}>
                  <Card
                    onClick={() => {
                      router.push(socialLink.link);
                    }}
                    orientation="horizontal"
                    variant="outlined"
                    sx={{
                      width: 280,
                      bgcolor: "background.body",
                      "&:hover": { cursor: "pointer" },
                    }}
                  >
                    <CardOverflow>
                      <AspectRatio ratio="1" sx={{ width: 90 }}>
                        <Image
                          src={socialLink.image}
                          loading="lazy"
                          alt={socialLink.name + " logo"}
                        />
                      </AspectRatio>
                    </CardOverflow>
                    <CardContent sx={{ pl: 3 }}>
                      <Typography
                        fontWeight="md"
                        textColor={socialLink.nameColor}
                        fontSize="1.5rem"
                        mb={0.5}
                      >
                        {socialLink.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Sheet>
        </TabPanel>
      </Tabs>
    </Sheet>
  );
}
