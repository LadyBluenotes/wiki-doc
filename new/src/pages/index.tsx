import { Stack, Typography, Button } from '@mui/joy';
import { Container } from '@mui/material';

export default function Home() {

  return (
    <>
      <Container maxWidth="lg">
        
        <Stack 
          direction='column'
          alignItems='center'
          justifyContent='center'
          spacing={2}>
            <Typography level="display1" component="h1">
              Hi, I'm Sarah!
            </Typography>
            <Typography level="h2">
              Welcome to my project documentation site.
            </Typography>
            <Typography level="body1">
              This site is still a work in progress, but feel free to look around.
            </Typography>
            <Button color="primary" href="/about">
              <Typography level="body1">
                Learn more about me
              </Typography>
            </Button>
          </Stack>
      </Container>
    </>
  )
}
