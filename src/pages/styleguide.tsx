import { Divider, Typography, ListSubheader, ListItemButton, ListItemIcon, ListItemText, List } from "@mui/material";

export default function StyleGuide(){

    return (
        <>
            <Typography variant="h1">Style Guide</Typography>
            <Divider sx={{ my: 2 }} />
            <List
                        sx={{ 
                            width: '100%', 
                            maxWidth: '100%', 
                            bgcolor: 'background.paper',
                            position: 'relative',
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
                            <ListItemText primary="Introduction" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                II.
                            </ListItemIcon>
                            <ListItemText primary="Writing" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                III.
                            </ListItemIcon>
                            <ListItemText primary="Formatting" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                IV.
                            </ListItemIcon>
                            <ListItemText primary="Design" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                V.
                            </ListItemIcon>
                            <ListItemText primary="References" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                VI.
                            </ListItemIcon>
                            <ListItemText primary="Appendices" />
                        </ListItemButton>
                    </List>
                <Divider sx={{ my: 2 }} />
                    <Typography variant="h2">I. Introduction</Typography>
                        <Typography variant="body1">
                        Purpose of style guide.
                        Audience of style guide.
                        How to use style guide.
                        </Typography>
                <Divider sx={{ my: 2, opacity:0 }} />
                    <Typography variant="h2">II. Writing guidelines</Typography>
                        <Typography variant="body1">
                        Grammar and punctuation.
                        Word usage and style conventions.
                        Tone of voice (eg. formal, informal, etc.).
                        Personal-specific terms.
                        </Typography>
                <Divider sx={{ my: 2, opacity:0 }} />
                    <Typography variant="h2">III. Formatting guidelines</Typography>
                        <Typography variant="body1">
                        Headings and subheadings.
                        Lists.
                        Tables and charts.
                        Images and other multimedia.
                        Code blocks.
                        Links.
                        </Typography>
                <Divider sx={{ my: 2, opacity:0 }} />
                    <Typography variant="h2">IV. Design guidelines</Typography>
                        <Typography variant="body1">
                        Color palette.
                        Typography.
                        Layout.
                        Icons.
                        </Typography>
                <Divider sx={{ my: 2, opacity:0 }} />
                    <Typography variant="h2">V. References</Typography>
                        <Typography variant="body1">
                        Links to other style guides.
                        Guidelines for references sources (if any).
                        How to format citations in text and in references.
                        </Typography>
                <Divider sx={{ my: 2, opacity:0 }} />
                    <Typography variant="h2">VI. Appendices</Typography>
                        <Typography variant="body1">
                        Glossary of terms.
                        Contact information for style guide owner or feedback.
                        </Typography>
        </>
    )
}