import { useState } from 'react';
import { Box, Collapse, Drawer, AppBar, CssBaseline, Toolbar, Typography, Divider, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ConnectWithoutContact from '@mui/icons-material/ConnectWithoutContact';
import TopicIcon from '@mui/icons-material/Topic';
import StyleIcon from '@mui/icons-material/Style';
import ArticleIcon from '@mui/icons-material/Article';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuIcon from '@mui/icons-material/Menu';
import CreateIcon from '@mui/icons-material/Create';
import ComputerIcon from '@mui/icons-material/Computer';
import { useRouter } from 'next/router'
import { List, ListItemButton, ListItemDecorator, ListItemContent, ListItem } from '@mui/joy';

const drawerWidth = 240;
export default function NavBar({ content }: any) {

  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

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
  const handleClick4 = () => {
    setOpen4(!open4);
  };

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        mb: 3
         }}>
        <Toolbar>
            <Stack direction={'row'} spacing={0}>
                <Typography 
                    variant="h6" 
                    noWrap 
                    component="div" 
                    onClick={()=>{
                        router.push('/')
                    }}
                    sx={{
                        flexGrow: 1,
                        cursor: 'pointer'
                    }}>
                    Sarah's Documentation Site
                </Typography>
                <Box sx={{
                    position: 'absolute',
                    right: 0,
                    marginRight: 2,
                    marginTop: 0.5,
                }}
                    >
                    <MenuIcon onClick={handleDrawer} sx={{
                        cursor: 'pointer',
                    }}/>
                </Box>
            </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='temporary'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        open={openDrawer}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem>
              <ListItemButton onClick={()=>{
                router.push('/')
              }}>
                <ListItemDecorator>
                  <HomeIcon />
                </ListItemDecorator>
                <ListItemContent>
                  Home
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={()=>{
                router.push('https://blog.sarahgerrard.me')
              }}>
                <ListItemDecorator>
                  <ArticleIcon />
                </ListItemDecorator>
                <ListItemContent>
                  Blog
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={()=>{
                router.push('/current')
              }}>
                <ListItemDecorator>
                  <GroupsIcon />
                </ListItemDecorator>
                <ListItemContent>
                  Current Projects
                </ListItemContent>
              </ListItemButton>
            </ListItem>
              <ListItemButton onClick={handleClick}>
                <ListItemDecorator>
                  <ComputerIcon />
                </ListItemDecorator>
                <ListItemContent>
                  Open Source
                </ListItemContent>
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
                {open && (<List sx={{ ml: 2 }}>
                  <ListItem>
                    <ListItemButton onClick={()=>{
                      router.push('/opensource/accessibleforall')
                    }}>
                      <ListItemContent>
                        Accessible For All
                      </ListItemContent>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton onClick={()=>{
                      router.push('/opensource/globalchem')
                    }}>
                      <ListItemContent>
                        Global Chem
                      </ListItemContent>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton onClick={()=>{
                      router.push('/opensource/mui')
                    }}>
                      <ListItemContent>
                        Material UI
                      </ListItemContent>
                    </ListItemButton>
                  </ListItem>
                </List>)}
            <ListItem>
              <ListItemButton onClick={handleClick1}>
                <ListItemDecorator>
                  <CreateIcon />
                </ListItemDecorator>
                <ListItemContent>
                  Projects
                </ListItemContent>
                {open1 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              </ListItem>
                {open1 && (<List sx={{ ml: 4 }}>
                    <ListItem>
                      <ListItemButton onClick={handleClick2}>
                        <ListItemContent>
                          Client Side
                        </ListItemContent>
                        {open2 ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                    </ListItem>
                      {open2 && (<List sx={{ ml: 2 }}>
                        <ListItem>
                            <ListItemButton onClick={()=>{
                              router.push('/clientside/projects')}}>
                              <ListItemContent>
                                Project Documentation
                              </ListItemContent>
                            </ListItemButton>
                          </ListItem>
                          <ListItem>
                            <ListItemButton onClick={()=>{
                              router.push('/clientside/happy-hour')
                            }}>
                              <ListItemContent>
                                Happy Hour
                              </ListItemContent>
                            </ListItemButton>
                          </ListItem>
                          <ListItem>
                            <ListItemButton onClick={()=>{
                              router.push('/clientside/poke-dex')}}>
                              <ListItemContent>
                                PokeDex
                              </ListItemContent>
                            </ListItemButton>
                          </ListItem>
                          <ListItem>
                            <ListItemButton onClick={()=>{
                              router.push('/clientside/portfolio')}}>
                              <ListItemContent>
                                Portfolio Site
                              </ListItemContent>
                            </ListItemButton>
                          </ListItem>
                          <ListItem onClick={()=>{
                            router.push('/clientside/space')}}>
                            <ListItemButton>
                              <ListItemContent>
                                Space
                              </ListItemContent>
                            </ListItemButton>
                          </ListItem>
                        </List>)}
                    <ListItem>
                      <ListItemButton onClick={handleClick3}>
                        <ListItemContent>
                          Full Stack
                        </ListItemContent>
                        {open3 ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                    </ListItem>
                      {open3 && (<List sx={{ ml: 2 }}>
                          <ListItem>
                            <ListItemButton onClick={()=>{
                              router.push('#')}}>
                              <ListItemContent>
                                Coming Soon
                              </ListItemContent>
                            </ListItemButton>
                          </ListItem>
                        </List>)}
                    <ListItem>
                      <ListItemButton onClick={handleClick4}>
                        <ListItemContent>
                          Server Side
                        </ListItemContent>
                        {open4 ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                    </ListItem>
                      {open4 && (<List sx={{ ml: 2 }}>
                          <ListItem>
                            <ListItemButton onClick={()=>{
                              router.push('/serverside/budget-buddy')}}>
                              <ListItemContent>
                                Budget Buddy API
                              </ListItemContent>
                            </ListItemButton>
                          </ListItem>
                          <ListItem>
                            <ListItemButton onClick={()=>{
                              router.push('/serverside/task-it')}}>
                              <ListItemContent>
                                Task It API
                              </ListItemContent>
                            </ListItemButton>
                          </ListItem>
                        </List>)}
                  </List>)}
                <ListItem>
                  <ListItemButton onClick={()=>{
                    router.push('/styleguide')}}>
                    <ListItemDecorator>
                      <StyleIcon />
                    </ListItemDecorator>
                    <ListItemContent>
                      Style Guide
                    </ListItemContent>
                  </ListItemButton>
                  </ListItem>
                <ListItem>
                  <ListItemButton onClick={()=>{
                    router.push('/template')}}>
                    <ListItemDecorator>
                      <TopicIcon />
                    </ListItemDecorator>
                    <ListItemContent>
                      Template
                    </ListItemContent>
                </ListItemButton>
              </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem>
              <ListItemButton onClick={()=>{
                router.push('/about')
              }}>
                <ListItemDecorator>
                  <InfoIcon />
                </ListItemDecorator>
                <ListItemContent>
                  About
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={()=>{
                router.push('/contact')
              }}>
                <ListItemDecorator>
                  <ConnectWithoutContact />
                </ListItemDecorator>
                <ListItemContent>
                  Contact
                </ListItemContent>
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