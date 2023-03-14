import { Sheet, Typography, Button } from "@mui/joy";
import { Container } from "@mui/material";

export default function Home() {
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
          Sarah Gerrard's
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
        <Button variant="outlined" href="/about" sx={{
          mr: 2,
          mt: 3,
        }}>
          <Typography level="body1">My Current Projects</Typography>
        </Button>
        <Button color="primary" href="/about" sx={{
          mt: 3,
        }}>
          <Typography level="body1">Learn About Me</Typography>
        </Button>
        </Sheet>
      </Container>
    </>
  );
}
