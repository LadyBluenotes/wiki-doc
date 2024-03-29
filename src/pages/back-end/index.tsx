import { Card, Divider, Sheet, Typography, AspectRatio, Grid } from "@mui/joy";
import Image from "next/image";
import { useRouter } from "next/router";

export default function BackEnd() {
  const router = useRouter();

  return (
    <Sheet
      sx={{
        py: 4,
        px: 10,
        m: 3,
         "@media (max-width: 600px)": {
          m: 1,
          p: 2,
        },
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
        Back End Projects
      </Typography>
      <Typography
        level="body1"
        component="p"
        sx={{
          mb: 2,
        }}
      >
        This is where you&apos;ll be able to find all of my back end projects.
        These projects include anything from simple API&apos;s to more complex
        applications, all intended to showcase back end development skills.
      </Typography>
      <Typography
        level="body1"
        component="p"
        sx={{
          mb: 2,
        }}
      >
        When you click on a project, you&apos;ll be taken to a page with more
        information about it, as well as a link to the source code.
      </Typography>
      <Divider
        sx={{
          mb: 2,
        }}
      />
      <Grid container spacing={1}>
        <Grid xs={12} sm={6} md={4}>
          <Card
            variant="outlined"
            sx={{
              maxwidth: 280,
              minheight: 360,
              maxheight: 360,
              bgcolor: "background.level1",
              "&:hover": { cursor: "pointer" },
            }}
            onClick={() => router.push("/back-end/budget-buddy")}
          >
            <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
              Budget Buddy
            </Typography>
            <Typography level="body2">
              A simple budgeting API that allows users to track their expenses
              and income.
            </Typography>
            <AspectRatio minHeight="200px" maxHeight="420px" sx={{ mt: 2 }}>
              <Image
                src="/change.jpg"
                loading="lazy"
                width={200}
                height={420}
                alt="jar of coins spilled onto tabletop"
              />
            </AspectRatio>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Card
            variant="outlined"
            sx={{
              maxwidth: 280,
              minheight: 360,
              maxheight: 360,
              bgcolor: "background.level1",
              "&:hover": { cursor: "pointer" },
            }}
            onClick={() => router.push("/back-end/task-it")}
          >
            <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
              Task It
            </Typography>
            <Typography level="body2">
              A simple task management API that allows users to create, read,
              update, and delete tasks.
            </Typography>
            <AspectRatio minHeight="200px" maxHeight="420px" sx={{ mt: 2 }}>
              <Image
                src="/to-do.jpg"
                loading="lazy"
                width={200}
                height={420}
                alt="notepad and pen with a list of things that need to be done"
              />
            </AspectRatio>
          </Card>
        </Grid>
      </Grid>
    </Sheet>
  );
}
