import { useState } from 'react';
import { Box, Collapse, Drawer, AppBar, CssBaseline, Toolbar, List, Typography, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Link } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ConnectWithoutContact from '@mui/icons-material/ConnectWithoutContact';
import TopicIcon from '@mui/icons-material/Topic';
import StyleIcon from '@mui/icons-material/Style';
import ArticleIcon from '@mui/icons-material/Article';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerWidth = 240;
export default function NavBar({ content }: any) {

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const handleClick3 = () => {
    setOpen3(!open3);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" className='navBar-title'>
            Sarah Gerrard's Personal Wiki
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem disablePadding onClick={() => {
              window.location.href = '/';
            }}>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText>
                      Home
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <TopicIcon />
                </ListItemIcon>
                <ListItemText>
                  Projects
                </ListItemText>
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List>
                    <ListItemButton onClick={handleClick1}>
                      <ListItemText sx={{ pl: 3 }} primary="Front-end" />
                      {open1 ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                      <Collapse in={open1} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <ListItemButton sx={{ pl: 7 }}>
                            <ListItemText primary="Demo 1" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 7 }}>
                            <ListItemText primary="Demo 2" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 7 }}>
                            <ListItemText primary="Demo 3" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 7 }}>
                            <ListItemText primary="Demo 4" />
                          </ListItemButton>
                      </List>
                    </Collapse>
                    <ListItemButton onClick={handleClick2}>
                      <ListItemText sx={{ pl: 3 }} primary="Server-side" />
                        {open2 ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                      <Collapse in={open2} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <ListItemButton sx={{ pl: 7 }}>
                            <ListItemText primary="Demo 1" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 7 }}>
                            <ListItemText primary="Demo 2" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 7 }}>
                            <ListItemText primary="Demo 3" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 7 }}>
                            <ListItemText primary="Demo 4" />
                          </ListItemButton>
                      </List>
                    </Collapse>
                    <ListItemButton onClick={handleClick3}>
                      <ListItemText sx={{ pl: 3 }} primary="Full-stack" />
                        {open3 ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                      <Collapse in={open3} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <ListItemButton sx={{ pl: 7 }}>
                            <ListItemText primary="Demo 1" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 7 }}>
                            <ListItemText primary="Demo 2" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 7 }}>
                            <ListItemText primary="Demo 3" />
                          </ListItemButton>
                          <ListItemButton sx={{ pl: 7 }}>
                            <ListItemText primary="Demo 4" />
                          </ListItemButton>
                      </List>
                    </Collapse>
                  </List>
                </Collapse>
              <ListItem disablePadding onClick={() => {
                window.location.href = '/styleguide';
              }}>
                <ListItemButton>
                  <ListItemIcon>
                    <StyleIcon />
                  </ListItemIcon>
                  <ListItemText>
                      Style Guide
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={() => {
                window.location.href = '/template';
              }}>
                <ListItemButton>
                  <ListItemIcon>
                    <ArticleIcon />
                  </ListItemIcon>
                  <ListItemText>
                      Template
                  </ListItemText>
                </ListItemButton>
              </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() =>{
                window.location.href = '/about';
              }}>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText>
                  About
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ConnectWithoutContact />
                </ListItemIcon>
                <ListItemText>
                    Connect
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
          {content}
        </Box>
    </Box>
  );
}