import { Typography, Container, Link, Divider, Stack, Button } from '@mui/material';

export default function Home() {
  return (
      <Container maxWidth="lg">
        <Stack
          sx={{
            width:'50vw',
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
          }}
        >
          <Typography variant="h1" component="h1" gutterBottom>
            Hi, I'm Sarah!
          </Typography>

          <Typography variant="h2" component="h2" gutterBottom align='center'>
            Welcome to my project documentation site.
          </Typography>
          <Button 
            onClick={() => {
              window.location.href = '/about'
            }}
            variant="contained"
            size="large"
            >
            Learn about me
          </Button>
        </Stack>
      </Container>
  )
}
