import React from 'react'
import { Paper, IconButton, Container, Grid, Stack, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';

export default function Connect() {


  return (
    <Container maxWidth="lg">
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Container sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
                    <Typography variant="h4" component="h2" sx={{
                        fontWeight: "bold",
                        textAlign: "center",
                    }}>
                        Let's Connect!
                    </Typography>
                    <Typography variant="body1" sx={{
                        textAlign: "center",
                        marginTop: "20px"
                    }}>
                        I'm always looking to connect with other developers and learn from them. If you want to chat, feel free to reach out to me on any of the platforms below or send me an email at <a href="mailto:gerrardsarah@gmail.com">gerrardsarah@gmail.com</a>!
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{
                        marginTop: "20px",
                        justifyContent: "center",
                    }}>
                        <Button 
                            size="large" 
                            href="https://www.linkedin.com/in/andrew-lee-0b0b2b1b3/" 
                            target="_blank">
                                <Paper sx={{
                                    padding: "20px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>
                                    <TwitterIcon sx={{
                                        color: "#1DA1F2",
                                        fontSize: "80px"
                                        }} />
                                </Paper>
                        </Button>
                        <Button size="large" href="https://www.github.com/ladybluenotes" target="_blank">
                            <Paper sx={{
                                padding: "20px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                }}>
                                <GitHubIcon sx={{
                                    color: "#000000",
                                    fontSize: "80px"
                                    }}/>
                            </Paper>
                        </Button>
                        <Button size="large" href="https://www.twitter.com/ladybluenotes" target="_blank">
                            <Paper sx={{
                                    padding: "20px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>
                                <LinkedInIcon sx={{
                                    color: "#0A66C2",
                                    fontSize: "80px"
                                }} />
                            </Paper>
                        </Button>
                    </Stack>
                </Container>
            </Grid>
        </Grid>
    </Container>
  )
}