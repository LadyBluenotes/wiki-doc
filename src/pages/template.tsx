import { Divider, Typography, List, ListSubheader , ListItemButton, ListItemIcon , ListItemText } from '@mui/material';

export default function Template() {

    return (
        <>
            <Typography variant="h1">Template</Typography>
                <Typography variant="body1">This is a template for creating new project pages.</Typography>
            <Divider sx={{margin: '2rem 0'}} />
                <Typography variant="h2">Project name</Typography>
                <Typography variant="body1">Project description</Typography>
            <Divider sx={{margin: '2rem 0'}} />
                <List
                    sx={{ 
                        width: '100%', 
                        maxWidth: '100%', 
                        bgcolor: 'background.paper',
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: 320,

                    }}
                    component="nav"
                    aria-labelledby="table of contents"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                        Table of contents
                        </ListSubheader>
                    }
                    >
                    <ListItemButton>
                        <ListItemIcon>
                            I.
                        </ListItemIcon>
                        <ListItemText primary="Overview" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            II.
                        </ListItemIcon>
                        <ListItemText primary="Getting started" />
                    </ListItemButton>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 14 }}>
                                <ListItemText primary="Prerequisites" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 14 }}>
                                <ListItemText primary="Installation" />
                            </ListItemButton>
                        </List>
                    <ListItemButton>
                        <ListItemIcon>
                            III.
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItemButton>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 14 }}>
                                <ListItemText primary="Built with" />
                            </ListItemButton>
                        </List>
                    <ListItemButton>
                        <ListItemIcon>
                            IV.
                        </ListItemIcon>
                        <ListItemText primary="Motivation" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            V.
                        </ListItemIcon>
                        <ListItemText primary="What I learned" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            VI.
                        </ListItemIcon>
                        <ListItemText primary="Acknowledgements" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            VII.
                        </ListItemIcon>
                        <ListItemText primary="Additional Information" />
                    </ListItemButton>
                    <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 14 }}>
                                <ListItemText primary="Known issues" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 14 }}>
                                <ListItemText primary="Future improvements" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 14 }}>
                                <ListItemText primary="References" />
                            </ListItemButton>
                        </List>
                </List>
            <Divider sx={{margin: '2rem 0'}} />
                <Typography variant="h3">I. Overview</Typography>
                    <Typography variant="body1">Overview of the project.
                    </Typography>
            <Divider sx={{margin: '2rem 0'}} />
                <Typography variant="h3">II. Getting started</Typography>
                    <Typography variant="h5">Prerequisites</Typography>
                        <Typography variant="body1">What you need to install the software and how to install them.
                        </Typography>
                    <Typography variant="h5">Installation</Typography>
                        <Typography variant="body1">A step by step series of examples that tell you how to get a development env running.</Typography>
            <Divider sx={{margin: '2rem 0'}} />
                <Typography variant="h3">III. About</Typography>
                    <Typography variant="body1">About the project.</Typography>
                    <Typography variant="h5">Built with</Typography>
                        <Typography variant="body1">List of frameworks, libraries, and other tools used to build the project.</Typography>
            <Divider sx={{margin: '2rem 0'}} />
                <Typography variant="h3">IV. Motivation</Typography>
                    <Typography variant="body1">Why I built this project and what I hoped to accomplish.</Typography>
            <Divider sx={{margin: '2rem 0'}} />
                <Typography variant="h3">V. What I learned</Typography>
                    <Typography variant="body1">What I learned while building this project.</Typography>
            <Divider sx={{margin: '2rem 0'}} />
                <Typography variant="h3">VI. Acknowledgements</Typography>
                    <Typography variant="body1">List of people, articles or videos that helped with the building of this project.</Typography>
            <Divider sx={{margin: '2rem 0'}} />
                <Typography variant="h3">VII. Additional Information</Typography>
                    <Typography variant="body1">Additional information about the project.</Typography>
                    <Typography variant="h5">Known issues</Typography>
                        <Typography variant="body1">List of known issues with the project.</Typography>
                    <Typography variant="h5">Future improvements</Typography>
                        <Typography variant="body1">List of future improvements to the project.</Typography>
                    <Typography variant="h5">References</Typography>
                        <Typography variant="body1">List of references used to build the project.</Typography>
        </>
    )
}