import { Sheet, Typography, Button } from "@mui/joy";
import { Container } from "@mui/material";
import { useRouter } from "next/router";

export default function Home() {

  const router = useRouter();

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          mt: 9,
          '@media (max-width: 600px)': {
            mt: 3,
            ml: 'auto',
            mr: 'auto',
            px:0
          },
        }}
      >
        <Sheet
        sx={{
          p: 5,
          width: "fit-content",
          bgcolor: "background.default",
          borderRadius: "10px",
          '@media (max-width: 600px)': {
            py: 3,
            px: 1,
          },
        }}
        >
        <Typography level="h2" component="h1" sx={{
          '@media (max-width: 600px)': {
            fontSize: "1rem",
            textAlign: "center",
          },
        }}>
          Welcome to
        </Typography>
        <Typography
          level="display2"
          component="h1"
          sx={{
            fontSize: "5rem",
            '@media (max-width: 600px)': {
              fontSize: "3rem",
              textAlign: "center",
            },
          }}
        >
          Sarah Gerrard&apos;s
        </Typography>
        <Typography
          level="display1"
          component="h1"
          sx={{
            fontSize: "3rem",
            '@media (max-width: 600px)': {
              fontSize: "2rem",
              textAlign: "center",
            },
          }}
        >
          Documentation Site
        </Typography>
        <Button variant="outlined"  sx={{
          mr: 2,
          mt: 3,
          '@media (max-width: 600px)': {
            fontSize: "0.5rem",
            p: 1,
            display: "flex",
            ml:'auto',
            mr: 'auto',
            mt: 1.5
          },
        }}
        onClick={() =>{
          router.push('/in-progress')
        }}
        >
          <Typography level="body1">Current Projects</Typography>
        </Button>
        <Button color="primary" sx={{
          mt: 3,
          '@media (max-width: 600px)': {
            fontSize: "0.5rem",
            p: 1,
            display: "flex",
            ml:'auto',
            mr: 'auto',
            mt: 1.5
          },
        }}
        onClick={() =>{
          router.push('/about')
        }}
        >
          <Typography level="body1">Learn About Me</Typography>
        </Button>
        </Sheet>
      </Container>
    </>
  );
}
