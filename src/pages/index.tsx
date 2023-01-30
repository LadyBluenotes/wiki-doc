import { Typography, Container, Divider } from '@mui/material';

export default function Home() {
  return (
      <Container maxWidth="lg">
        <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Typography variant="h2" component="h1" sx={{ fontWeight:500 }}>My Project Portfolio</Typography>
          <Typography variant="h3" component="h2">A comprehensive guide to my work.</Typography>
        </Container>
        <Divider sx={{ my: 2 }} />
          <Typography variant="h4" component="h5">
            
          </Typography>
          <Typography variant="body1">
            <br />
            <br />
            This is a project portfolio website that I built to showcase my work. It is a work in progress, and I will be adding more projects to it as I complete them.

          </Typography>
      </Container>
  )
}
