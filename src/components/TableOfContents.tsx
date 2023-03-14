import * as React from 'react';
import { List, ListSubheader, ListItemButton, ListItemDecorator, ListItemContent, Sheet } from '@mui/joy';

export default function TableOfContents() {

    return (
        <Sheet sx={{
            maxHeight: 300,
            overflow: 'auto',
        }}>
            <List
                component="nav"
                aria-labelledby="table of contents"
                size="sm"
                >
                <ListSubheader component="div" id="nested-list-subheader">
                    Table of contents
                </ListSubheader>
                <ListItemButton onClick={() =>{
                    window.location.href = '#overview';
                }}>
                    <ListItemDecorator>
                        I.
                    </ListItemDecorator>
                    <ListItemContent>Overview</ListItemContent>
                </ListItemButton>
                <ListItemButton onClick={() =>{
                    window.location.href = '#gettingStarted';
                }}>
                    <ListItemDecorator>
                        II.
                    </ListItemDecorator>
                    <ListItemContent>Getting started</ListItemContent>
                </ListItemButton>
                    <List size="sm">
                        <ListItemButton sx={{ pl: 14 }} onClick={() =>{
                    window.location.href = '#preq';
                }}>
                            <ListItemContent>Prerequisites</ListItemContent>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 14 }} onClick={() =>{
                    window.location.href = '#install';
                }}>
                            <ListItemContent>Installation</ListItemContent>
                        </ListItemButton>
                    </List>
                <ListItemButton onClick={() =>{
                    window.location.href = '#about';
                }}>
                    <ListItemDecorator>
                        III.
                    </ListItemDecorator>
                    <ListItemContent>About</ListItemContent>
                </ListItemButton>
                    <List size="sm">
                        <ListItemButton sx={{ pl: 14 }} onClick={() =>{
                    window.location.href = '#about';
                }}>
                            <ListItemContent>Built with</ListItemContent>
                        </ListItemButton>
                    </List>
                <ListItemButton onClick={() =>{
                    window.location.href = '#motivation';
                }}>
                    <ListItemDecorator>
                        IV.
                    </ListItemDecorator>
                    <ListItemContent>Motivation</ListItemContent>
                </ListItemButton>
                <ListItemButton onClick={() =>{
                    window.location.href = '#learned';
                }}>
                    <ListItemDecorator>
                        V.
                    </ListItemDecorator>
                    <ListItemContent>What I learned</ListItemContent>
                </ListItemButton>
                <ListItemButton onClick={() =>{
                    window.location.href = '#acknowledge';
                }}>
                    <ListItemDecorator>
                        VI.
                    </ListItemDecorator>
                    <ListItemContent>Acknowledgements</ListItemContent>
                </ListItemButton>
                <ListItemButton onClick={() =>{
                    window.location.href = '#addInfo';
                }}>
                    <ListItemDecorator>
                        VII.
                    </ListItemDecorator>
                    <ListItemContent>Additional Information</ListItemContent>
                </ListItemButton>
                <List size="sm">
                        <ListItemButton sx={{ pl: 14 }} onClick={() =>{
                    window.location.href = '#issues';
                }}>
                            <ListItemContent>Known issues</ListItemContent>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 14 }} onClick={() =>{
                    window.location.href = '#future';
                }}>
                            <ListItemContent>Future improvements</ListItemContent>
                        </ListItemButton>
                    </List>
            </List>
        </Sheet>
    )
}