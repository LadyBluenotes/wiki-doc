import { Container, Typography, Divider, Link, Stack, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function OpenSource() {
  return (
        <Container maxWidth="lg">
            <Typography variant="h2" component="h1" sx={{ fontWeight:500 }}>Global Chemistry</Typography>
            <Divider sx={{ my: 2 }} />
                <Typography variant="h3" component="h2">Project details</Typography>
                    <Typography variant="body1">
                        Global Chemistry serves as an open source platform where writing the molecules directly allows for the name to not be ambiguous to what a chemical is is anymore and allows for full transparency. 
                        The hopes of this project is to be a base for the population to govern how the chemicals in use for things like Food, Clothing, Environment, Materials, Drugs, War and a lot more are beneficial for all of us.
                        <br />
                        <br />
                    </Typography>
                    <Stack spacing={2} direction={"row"}>
                        <Link href="https://www.globalchemistry.org/"><LanguageIcon /></Link>
                        <Link href="https://github.com/Sulstice/global-chem"><GitHubIcon /></Link>
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
                        <Typography variant="body1">January 2023 - Present</Typography>
                    </Stack>
                </Stack>   
                <Typography variant="h4" component="h3" sx={{
                    paddingTop: 2,
                    paddingBottom: 2
                }}>Responsibilities:</Typography>
                    <Typography variant="body1">
                        As a contributor to the Global Chem project, I mostly play a role in the front end development. My responsibilities include:
                    </Typography>
                        <List dense>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRightIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Assist with presenting the chemical data of interest in a user friendly manner.
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRightIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Working closely with the other contributors to ensure everything is moving in the right direction and is being developed in the most efficient manner.
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
                                Glances
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText>
                                JavaScript
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Python
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
      