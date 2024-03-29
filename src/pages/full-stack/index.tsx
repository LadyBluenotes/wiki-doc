import {
    Card,
    Divider,
    Sheet,
    Typography,
    AspectRatio,
    Grid,
  } from "@mui/joy";
import Image from "next/image";
  import { useRouter } from "next/router";
  
  export default function FullStack() {
    const router = useRouter();
  
    return (
      <Sheet
        sx={{
          py: 4,
          px: 6,
          m: 3,
        }}
      >
        <Typography
          level="display1"
          component="h1"
          sx={{
            mr: 2,
            mb: 2,
          }}
        >
          Full Stack Projects
        </Typography>
        <Typography
          level="body1"
          component="p"
          sx={{
            mb: 2,
          }}
        >
          Included here will be projects that I&apos;ve worked on that are full stack. The intention with this page is to show off my ability to work on a project from start to finish, including the front end, back end, and database.
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
                minWidth: 280,
                maxwidth: 280,
                minheight: 360,
                maxheight: 360,
                bgcolor: "background.level1",
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => router.push("#")}
            >
              <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                Coming soon!
              </Typography>
              <Typography level="body2">
              I&apos;m currently working on a new project, so check back soon!
              </Typography>
              <AspectRatio minHeight="200px" maxHeight="420px" sx={{ mt: 2 }}>
                <Image
                  src="/under-construction.jpg"
                  loading="lazy"
                width={200}
                height={420}
                alt="small figurines of a construction workers"
                />
              </AspectRatio>
            </Card>
          </Grid>
        </Grid>
      </Sheet>
    );
  }
  