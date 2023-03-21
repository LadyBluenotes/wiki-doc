import { Card, Divider, Sheet, Typography, AspectRatio, Grid } from "@mui/joy";
import Image from "next/image";
import { useRouter } from "next/router";

export default function InProgress() {
  const router = useRouter();

  return (
    <Sheet
      sx={{
        py: 4,
        px: 6,
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
        In Progress
      </Typography>
      <Typography
        level="body1"
        component="p"
        sx={{
          mb: 2,
        }}
      >
        If you&apos;re interested in seeing what I&apos;m currently working on,
        you&apos;re in the right place. This page is where I&apos;ll be posting
        about my current projects, as well as any updates I make to them.
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
            onClick={() => router.push("/in-progress/track-my-funds")}
          >
            <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
              Track My Funds
            </Typography>
            <Typography level="body2">
              An app to helps track spending, income, and how much is remaining
              after all bills are paid.
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
            onClick={() => router.push("/in-progress/tutor-2-0")}
          >
            <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
              Tutor 2.0
            </Typography>
            <Typography level="body2">
              A web application that enables students to learn through the power
              of AI.
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
