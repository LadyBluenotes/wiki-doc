import { Container, Typography, Divider, Link, Stack, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function OpenSource() {
  return (
        <Container maxWidth="lg">
            <Typography variant="h2" component="h1" sx={{ fontWeight:500 }}>Material UI</Typography>
            <Divider sx={{ my: 2 }} />
                <Typography variant="h3" component="h2">Project details</Typography>
                    <Typography variant="body1">
                        Material UI is popular open source JavaScript library used in building user interfaces. It provides a set of pre-built React components that implement Google's Material Design guidelines, making it easier for developers to create visually consistent and aesthetically pleasing UIs.
                        <br />
                        <br />
                    </Typography>
                    <Stack spacing={2} direction={"row"}>
                        <Link href="https://mui.com/"><LanguageIcon /></Link>
                        <Link href="https://github.com/mui"><GitHubIcon /></Link>
                    </Stack>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h3" component="h2">Contribution summary</Typography>
                <Stack spacing={2} direction={"row"} alignItems={"baseline"}>
                <Typography variant="h4" component="h3">Role:</Typography>
                    <Typography variant="body1">Contributor</Typography>
                </Stack>
                <br />
                <Stack spacing={2} direction={"row"} alignItems={"baseline"}>
                <Typography variant="h4" component="h3">Duration:</Typography>
                    <Typography variant="body1">January 2023 - Present</Typography>
                </Stack>
                <br />
                <Typography variant="h4" component="h3">Responsibilities:</Typography>
                    <Typography variant="body1">
                        <br />
                        As a contributor to Material UI, I played a role in enhancing the project's documentation. My responsibilities included:
                    </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRightIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Enhancing the documentation by revising and updating it to align with the project's style guide and templates, to ensure consistency in grammar, style, tone, and formatting.
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRightIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Working closely with the project maintainers to guarantee coherence and adherence to their standards.
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRightIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Providing clear and concise demo code examples, utilizing React framework, to supplement the articles.
                                </ListItemText>
                            </ListItem>
                        </List>
                    <Typography variant="h3" component="h2">Technologies</Typography>
                    <Typography variant="body1">The following technologies were used while contributing:</Typography>
                    <List>
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
                                JavaScript
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Markdown
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText>
                                React
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
      