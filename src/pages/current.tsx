import { Container, Typography, Divider, Card, Link, Stack, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Grid } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function Current() {
  return (
        <Container maxWidth="lg">
            <Typography variant="h2" component="h1" sx={{ fontWeight:500 }}>My Current Projects</Typography>
            <Divider sx={{ my: 2 }} />
            <Stack 
                sx={{ width: '100%' }}
                direction="column"
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
                spacing={2}
            >
                <Card sx={{ p: 3, width: '70%' }} >
                    <Typography variant="h4" component="h2" sx={{ fontWeight:500, mb: 1 }}>
                        This Documentation Site
                        <Link 
                            href="https://github.com/LadyBluenotes/wiki-doc"
                            sx={{ ml: 2 }}
                            >
                                <GitHubIcon />
                            </Link>
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ pb: 2, pt: 1 }}>
                        I'm building this documentation site as a way to showcase my portfolio projects in a more organized and detailed way.
                    </Typography>
                    <Grid 
                        container 
                        height="fit-content"
                        >
                        <Grid item xs={12} md={6}
                            sx={{
                                borderRight: { md: '1px solid #e0e0e0' },
                            }}
                        >
                            <List dense disablePadding>
                                <ListSubheader>Features to add:</ListSubheader>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Create an API to store the project data.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Migrate the project data to the API and fetch it for the site.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Add a search bar to search for projects.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Add a way to filter projects (eg. technologies used, front end vs back end, etc).
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Style the site to be more visually appealing.
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <List dense disablePadding>
                                <ListSubheader>Tech used:</ListSubheader>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Next.js
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        TypeScript
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Material-UI
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Node.js
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Express
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        MongoDB
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Card>
                <Card sx={{ p: 3, width: '70%' }} >
                    <Typography variant="h4" component="h2" sx={{ fontWeight:500, mb: 1 }}>
                        Track My Funds
                        <Link 
                            href="https://github.com/LadyBluenotes/track-my-funds"
                            sx={{ ml: 2 }}
                            >
                                <GitHubIcon />
                            </Link>
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ pb:2, pt: 1 }}>
                        This is a personal project I'm working on to help me keep track of my finances.
                    </Typography>
                    <Grid 
                        container 
                        height="fit-content"
                        >
                        <Grid item xs={12} md={6}
                            sx={{
                                borderRight: { md: '1px solid #e0e0e0' },
                            }}
                        >
                            <List dense disablePadding>
                                <ListSubheader>Features to add:</ListSubheader>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Link API to the site.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Introduce a way for users to add expenses and income.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Show if user's expenses for the month are funded based on their income.
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <List dense disablePadding>
                                <ListSubheader>Tech used:</ListSubheader>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Next.js
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        TypeScript
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Mantine
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Node.js
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Express
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        MongoDB
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Card>
            </Stack>
        </Container>
    );
}
      