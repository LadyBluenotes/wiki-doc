import { Container, Typography, Divider, Link, Stack, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function OpenSource() {
  return (
        <Container maxWidth="lg">
            <Typography variant="h2" component="h1" sx={{ fontWeight:500 }}>Accessible for All</Typography>
            <Divider sx={{ my: 2 }} />
                <Typography variant="h3" component="h2">Project details</Typography>
                    <Typography variant="body1">
                        Accessible for All is a community dedicated to making the web more accessible for everyone.
                        The aim of this project is to be the stepping stone to get started where official documentation is often difficult to interpret for new web developers.
                        <br />
                        <br />
                    </Typography>
                    <Stack spacing={2} direction={"row"}>
                        <Link href="https://accessiblewebdev.netlify.app/"><LanguageIcon /></Link>
                        <Link href="https://github.com/AccessibleForAll/"><GitHubIcon /></Link>
                    </Stack>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h3" component="h2">Contribution summary</Typography>
                <Stack spacing={2}>
                    <Stack spacing={2} direction={"row"} alignItems={"baseline"} >
                        <Typography variant="h4" component="h3">Role:</Typography>
                        <Typography variant="body1">Contributor</Typography>
                    </Stack>
                    <Stack spacing={2} direction={"row"} alignItems={"baseline"}>
                        <Typography variant="h4" component="h3">Duration:</Typography>
                        <Typography variant="body1">December 2022 - Present</Typography>
                    </Stack>
                </Stack>   
                <Typography variant="h4" component="h3" sx={{
                    paddingTop: 2,
                    paddingBottom: 2
                }}>Responsibilities:</Typography>
                    <Typography variant="body1">
                        As a contributor to Accessible for All, I play a role in producing content for the project's website. My responsibilities include:
                    </Typography>
                        <List dense>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRightIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Creating articles that provide guidance on how to produce more accessible projects. 
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRightIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Collaborating with other contributors to ensure the articles are clear, concise, and provide appropriate information to the reader.
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRightIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Keeping up to date with the latest web accessibility standards and best practices.
                                </ListItemText>
                            </ListItem>
                        </List>
                    <Typography variant="h3" component="h2">Technologies</Typography>
                    <Typography variant="body1">The following technologies were used while contributing:</Typography>
                    <List dense>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText>
                                CSS
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Git
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText>
                                GitHub
                            </ListItemText>
                        </ListItem>
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
                    </List>
        </Container>
    );
}
      