import { Card, Divider, Sheet, Typography, AspectRatio, Grid } from "@mui/joy";
import { useRouter } from "next/router";

export default function FrontEnd() {
  const router = useRouter();

  return (
    <Sheet
      sx={{
        py: 4,
        px: 10,
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
        Front End Projects
      </Typography>
      <Typography
        level="body1"
        component="p"
        sx={{
          mb: 2,
        }}
      >
        If you're looking for my front end projects, you've come to the right
        place. Below you'll find a list of all the projects I've worked on.
        These projects were created at different points in my learning journey,
        and will display varying levels of skill.
      </Typography>
      <Typography
        level="body1"
        component="p"
        sx={{
          mb: 2,
        }}
      >
        When you click on a project, you'll be taken to a page with more
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
            onClick={() => router.push("/front-end/documentation-site")}
          >
            <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
              Documentation Site
            </Typography>
            <Typography level="body2">
              A React web application used to display information about all
              known Pokemon from the popular franchise.
            </Typography>
            <AspectRatio minHeight="200px" maxHeight="420px" sx={{ mt: 2 }}>
              <img
                src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
          </Card>
        </Grid>
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
            onClick={() => router.push("/front-end/happy-hour")}
          >
            <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
              Happy Hour Guide
            </Typography>
            <Typography level="body2">
              A web application that lets users search for their favorite
              cocktails or find a new favorite.
            </Typography>
            <AspectRatio minHeight="200px" maxHeight="420px" sx={{ mt: 2 }}>
              <img src="/happy-hour.jpg" loading="lazy" alt="" />
            </AspectRatio>
          </Card>
        </Grid>
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
            onClick={() => router.push("/front-end/poke-dex")}
          >
            <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
              Poke-Dex
            </Typography>
            <Typography level="body2">
              A React web application used to display information about all
              known Pokemon from the popular franchise.
            </Typography>
            <AspectRatio minHeight="200px" maxHeight="420px" sx={{ mt: 2 }}>
              <img src="/pokedex.jpg" loading="lazy" alt="" />
            </AspectRatio>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Card
            variant="outlined"
            sx={{
              minWidth: 280,
              maxwidth: 280,
              minheight: 330,
              maxheight: 330,
              bgcolor: "background.level1",
              "&:hover": { cursor: "pointer" },
            }}
            onClick={() => router.push("/front-end/personal-portfolio")}
          >
            <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
              Personal Portfolio
            </Typography>
            <Typography level="body2">
              My personal site, aimed to be a hub for people to learn more about
              me, connect, or direct them to seeing my work.
            </Typography>
            <AspectRatio minHeight="200px" maxHeight="420px" sx={{ mt: 2 }}>
              <img src="/portfolio.jpg" loading="lazy" alt="" />
            </AspectRatio>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Card
            variant="outlined"
            sx={{
              minWidth: 240,
              maxwidth: 240,
              minheight: 350,
              maxheight: 400,
              bgcolor: "background.level1",
              "&:hover": { cursor: "pointer" },
            }}
            onClick={() => router.push("/front-end/welcome-to-space")}
          >
            <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
              Welcome to Space
            </Typography>
            <Typography level="body2">
              A web application built using the NASA Astronomy Picture of the
              Day API allowing users to images from NASA.
            </Typography>
            <AspectRatio minHeight="200px" maxHeight="420px" sx={{ mt: 2 }}>
              <img src="/space.jpg" loading="lazy" alt="" />
            </AspectRatio>
          </Card>
        </Grid>
      </Grid>
    </Sheet>
  );
}
