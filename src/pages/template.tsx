import { Divider, Card, Stack, Link } from '@mui/material';
import { Typography, List, ListItem, ListItemDecorator, ListItemContent, ListSubheader } from '@mui/joy'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import TableOfContents from '@/components/TableOfContents';

export default function Template() {

    return (
        <>
            <Typography level="display1" component="h1" fontSize="xl" fontWeight="lg">Template</Typography>
                <Typography level="body1">This is a template for creating new project pages.</Typography>
            <Divider sx={{ my:2 }} />
            <Card sx={{ padding:'20px', margin:'20px' }}>
                <Typography level="display1" component="h1" fontSize="xl" fontWeight="lg">Project Name</Typography>
                        <Stack direction="row" spacing={2} sx={{margin: '1rem 0'}}>
                            <Link href="#"><GitHubIcon /></Link>
                            <Link href="#"><LanguageIcon /></Link>
                        </Stack>
                                <Typography level="body1">Project description.</Typography>
                            <Divider sx={{ my:2 }} />
                            <TableOfContents />
                            <Divider sx={{ my:2 }} />
                                <Typography level="h3" component="h2" fontSize="lg" fontWeight="lg" id="overview">I. Overview</Typography>
                                    <Typography level="body1">
                                        Where I will talk about a general overview of the project.
                                    </Typography>
                                    <Divider sx={{ my:2 }} />
                                <Typography level="h3" component="h2" fontSize="lg" fontWeight="lg" id="gettingStarted" sx={{ mb:1 }}>II. Getting started</Typography>
                                    <Typography level="h4" component="h3" fontSize="md" fontWeight="md" id="prereq" sx={{ mb:1 }}>Prerequisites</Typography>
                                        <Typography level="body1">
                                            The following must be installed on your machine:
                                        </Typography>
                                            <List>
                                                <ListItem>
                                                    <ListItemDecorator>
                                                        <ArrowRightIcon />
                                                    </ListItemDecorator>
                                                    <ListItemContent>
                                                    <Typography level="body1">
                                                        Prereq 1
                                                    </Typography>
                                                </ListItemContent>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemDecorator>
                                                        <ArrowRightIcon />
                                                    </ListItemDecorator>
                                                    <ListItemContent>
                                                    <Typography level="body1">
                                                        Prereq 2
                                                    </Typography>
                                                </ListItemContent>
                                                </ListItem> 
                                            </List>
                                        <Typography level="h4" component="h3" fontSize="lg" fontWeight="md" id="prereq" sx={{ mb:1 }}>
                                            Installation
                                        </Typography>
                                        <Typography level="body1">
                                            The following must be installed on your machine:
                                        </Typography>
                                        <List component="ol">
                                            <ListItem>
                                                <ListItemDecorator>
                                                    1.
                                                </ListItemDecorator>
                                                <ListItemContent sx={{ display:'block'}}>
                                                    <Typography level="body1">
                                                        Clone the repository
                                                        <br />
                                                    </Typography>
                                                    <Typography level="body1" sx={{ fontStyle:'italic' }}>
                                                            git clone www.github.com/username/repo
                                                    </Typography>
                                                </ListItemContent>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemDecorator>
                                                    2.
                                                </ListItemDecorator>
                                                <ListItemContent sx={{ display:'block'}}>
                                                    <Typography level="body1">
                                                        Install NPM packages
                                                        <br />
                                                    </Typography>
                                                    <Typography level="body1" sx={{ fontStyle:'italic' }}>
                                                            npm install
                                                    </Typography>
                                                </ListItemContent>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemDecorator>
                                                    3.
                                                </ListItemDecorator>
                                                <ListItemContent sx={{ display:'block'}}>
                                                    <Typography level="body1">
                                                        Run the application
                                                        <br />
                                                    </Typography>
                                                    <Typography level="body1" sx={{ fontStyle:'italic' }}>
                                                        npm start
                                                    </Typography>
                                                </ListItemContent>
                                            </ListItem>
                                        </List>
                                <Divider sx={{ my:2 }} />
                                <Typography level="h3" component="h2" fontSize="lg" fontWeight="lg" id="about">III. About</Typography>
                                    <Typography level="body1">
                                        A section about the project and its purpose.
                                    </Typography>
                                        <List sx={{ mt:1 }}>
                                            <ListSubheader>
                                                <Typography level="body1">
                                                    Built with
                                                </Typography>
                                            </ListSubheader>
                                            <ListItem>
                                                <ListItemDecorator>
                                                    <ArrowRightIcon />
                                                </ListItemDecorator>
                                                <ListItemContent>
                                                    <Typography level="body1">
                                                        Tech 1
                                                    </Typography>
                                                </ListItemContent>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemDecorator>
                                                    <ArrowRightIcon />
                                                </ListItemDecorator>
                                                <ListItemContent>
                                                    <Typography level="body1">
                                                        Tech 2
                                                    </Typography>
                                                </ListItemContent>
                                            </ListItem> 
                                        </List>
                            <Divider sx={{ my:2 }} />
                                <Typography level="h3" component="h2" fontSize="lg" fontWeight="lg" id="motivation">IV. Motivation</Typography>
                                    <Typography level="body1">
                                        The reason I wanted to create this application.
                                    </Typography>
                            <Divider sx={{ my:2 }} />
                                <Typography level="h3" component="h2" fontSize="lg" fontWeight="lg" id="learned">V. What I learned</Typography>
                                    <Typography level="body1">
                                    Where I can talk about what I learned from the project.
                                    </Typography>
                            <Divider sx={{ my:2 }} />
                                <Typography level="h3" component="h2" fontSize="lg" fontWeight="lg" id="acknowledge">VI. Acknowledgements</Typography>
                                    <Typography level="body1">
                                        Where I can acknowledge the people who helped me with the project or inspired me to create it.
                                    </Typography>
                            <Divider sx={{ my:2 }} />
                                <Typography level="h3" component="h2" fontSize="lg" fontWeight="lg" id="addInfo">VII. Additional Information</Typography>
                                    <Typography level="body1" sx={{ mb: 2 }}>
                                        This is where you may add any additional information about the project.
                                    </Typography>
                                        <List>
                                            <ListSubheader>
                                                <Typography level="body1">
                                                   Known issues
                                                </Typography>
                                            </ListSubheader>
                                            <ListItem>
                                                <ListItemDecorator>
                                                    <CheckBoxOutlineBlankIcon />
                                                </ListItemDecorator>
                                                <ListItemContent>
                                                    <Typography level="body1">
                                                        Known issue 1
                                                    </Typography>
                                                </ListItemContent>
                                            </ListItem>
                                        </List>
                                        <List>
                                            <ListSubheader>
                                                <Typography level="body1">
                                                    Future improvements
                                                </Typography>
                                            </ListSubheader>
                                            <ListItem>
                                                <ListItemDecorator>
                                                    <CheckBoxOutlineBlankIcon />
                                                </ListItemDecorator>
                                                <ListItemContent>
                                                    <Typography level="body1">
                                                        Future improvement 1
                                                    </Typography>
                                                </ListItemContent>
                                            </ListItem>
                                        </List>
            </Card>
        </>
    )
}