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
        }}
      >
        <Sheet
        sx={{
          p: 5,
          width: "fit-content",
          bgcolor: "background.default",
          borderRadius: "10px",
        }}
        >
        <Typography level="h2" component="h1">
          Welcome to
        </Typography>
        <Typography
          level="display2"
          component="h1"
          sx={{
            fontSize: "5rem",
          }}
        >
          Sarah Gerrard&apos;s
        </Typography>
        <Typography
          level="display1"
          component="h1"
          sx={{
            fontSize: "3rem",
          }}
        >
          Documentation Site
        </Typography>
        <Button variant="outlined"  sx={{
          mr: 2,
          mt: 3,
        }}
        onClick={() =>{
          router.push('/in-progress')
        }}
        >
          <Typography level="body1">My Current Projects</Typography>
        </Button>
        <Button color="primary" sx={{
          mt: 3,
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
